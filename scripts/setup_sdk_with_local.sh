#!/bin/bash 

# This is a script used for development and testing locally.
# Make sure you dont push the changes after this script ran. 

echo "Buying subscription for user1"
GASPRICE="0.000000001ulava"
lavad tx subscription buy "DefaultPlan" -y --from user1 --gas-adjustment "1.5" --gas "auto" --gas-prices $GASPRICE

privateKey=$(yes | lavad keys export user1 --unsafe --unarmored-hex)
echo ""
echo "User3 Private Key: $privateKey"



# Capture unique iPPORT addresses and corresponding addresses
pairing=$(lavad q pairing providers LAV1)
addresses=$(echo "$pairing" | grep 'iPPORT:' | awk '{print $2}' | sort -u)
public_addresses=$(echo "$pairing" | grep 'address:' | awk '{print $3}' | sort -u)

# Associative array to store the JSON structure
declare -A json_data
index=0;
addresses_length=0;
for rpc_address in $addresses; do
    ((addresses_length++))
done
echo "Creating Pairing List json file"
for rpc_address in $addresses; do
    index_inner=0;
    for public_address in $public_addresses; do
        ((index_inner++))
        if ((index_inner < addresses_length)); then
            continue
        fi
        if ((index_inner > addresses_length)); then
            break
        fi
        echo "Adding Provider: $rpc_address, $public_address"
        json_data["1"]+="{
        \"rpcAddress\": \"$rpc_address\",
        \"publicAddress\": \"$public_address\"
        }"
        if ((index < addresses_length-1)); then
            json_data["1"]+=","
        fi
    done
    ((index++))
done

# Construct the final JSON content
json_content='{
  "testnet": {
    "1": [
'

for index in "${!json_data[@]}"; do
    json_content+="  ${json_data["$index"]}"
    if ((index < ${#json_data[@]})); then
        json_content+=","
    fi
done

json_content+='  ]
  }
}'

# Write the JSON content to a file named "output.json"
echo "$json_content" > pairingList.json

echo "Done." 

sed -i 's/geolocation: "2",/geolocation: "1",\n\n    pairingListConfig: "pairingList.json",/g' examples/jsonRPC.ts
sed -i 's/geolocation: "2",/geolocation: "1",\n\n    pairingListConfig: "pairingList.json",/g' examples/restAPI.ts
sed -i 's/geolocation: "2",/geolocation: "1",\n\n    pairingListConfig: "pairingList.json",/g' examples/tendermintRPC.ts

sed -i 's/privateKey: "<lava consumer private key>",/privateKey:\n      "'"$privateKey"'",/g' examples/jsonRPC.ts
sed -i 's/privateKey: "<lava consumer private key>",/privateKey:\n      "'"$privateKey"'",/g' examples/restAPI.ts
sed -i 's/privateKey: "<lava consumer private key>",/privateKey:\n      "'"$privateKey"'",/g' examples/tendermintRPC.ts
