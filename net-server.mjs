import net from "net"

const server = net.createServer((client) => {
    console.info("Client Connected")

    client.addListener("data",data => {
        console.info(`Received data ${data.toString()}`)
        data.write(`Hello ${data.toString()}\r\n`)
    })
})

server.listen(3000,"localhost")