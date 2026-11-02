const app = require("./app")
const redisClient = require("./redis")

const PORT = 3000

async function startServer(){
    await redisClient.connect();
    
    console.log(`Redis client connected successfully | PID: ${process.pid}`)
    
    app.listen(PORT,()=>{
        console.log(`server is running the port ${PORT} | PID: ${process.pid}`)
    })
}

startServer()

