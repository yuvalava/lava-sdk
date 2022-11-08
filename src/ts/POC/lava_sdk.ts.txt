import fetch from 'node-fetch';

const sendRequest = async function(path: string): Promise<any> {
    const res = await fetch(path, {
        method: "GET",
        headers: {
            Accept: 'application/json'
        }
    })
    if (!res.ok) {
        console.log("err sending request")
    }
    return await res.json()
}

export async function getLatestBlock(rest_rpc: string): Promise<any> {
    return sendRequest(rest_rpc+"blocks/latest")
}

export async function getEpochDetails(rest_rpc: string): Promise<any> {
    return sendRequest(rest_rpc+"lavanet/lava/epochstorage/epoch_details")
}

export async function getPairingClients(rest_rpc: string, chainID: string): Promise<any> {
    return sendRequest(rest_rpc+"lavanet/lava/pairing/clients/" + chainID)
}