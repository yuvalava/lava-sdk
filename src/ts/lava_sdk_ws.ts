import * as wss from "isomorphic-ws";

const WS = wss.default

export class WebSocketConnection {
    public ws: wss.WebSocket;
    public ws_response_data: any;
    constructor(ws_endpoint:string) {
        console.log()
        // this.ws_response_data = new ArrayBuffer(0); // init response data.
        this.ws = new WS(ws_endpoint);
        this.ws.onopen = () => {console.log("Opened WebSocket connection")}
        this.ws.onmessage = (data) => {
            // console.log("Received message")
            if (data.data != undefined) {
                this.ws_response_data = data.data;
            } else {
                this.ws_response_data = data;
            }
            try {
                this.ws_response_data = JSON.parse(this.ws_response_data.toString())
            } catch (e) {
                console.log("Failed to parse response data:", this.ws_response_data.toString())
            }
            // console.log("Message:",  this.ws_response_data)
    }
        this.ws.onerror = () => {console.log("Received Error")}
        this.ws.onclose = () => {console.log("Closed Connection")}
    
    }
    waitForOpenConnection() {
        return new Promise((resolve, reject) => {
            const maxNumberOfAttempts = 10
            const intervalTime = 200 //ms
    
            let currentAttempt = 0
            const interval = setInterval(() => {
                if (currentAttempt > maxNumberOfAttempts - 1) {
                    clearInterval(interval)
                    reject(new Error('Maximum number of attempts exceeded'))
                } else if (this.ws.readyState === this.ws.OPEN) {
                    clearInterval(interval)
                    resolve("resolved")
                }
                currentAttempt++
            }, intervalTime)
        })
    }
}
