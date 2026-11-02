const express = require("express")
const app = express()
const redisClient = require("./redis")

let requestCount = 0;

app.get("/",(req, res)=>{
    res.send("Url shortner api is running")
})

app.get("/health",async(req, res)=>{
    const requestCount = await redisClient.incr("global_req_count")
    res.json({
        status : "ok",
        pid : process.pid,
        requestCount : requestCount
    })
})

module.exports = app