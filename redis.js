const {createClient}= require("redis")

const redisClient =  createClient({
    url:"redis://localhost:6379"
})

redisClient.on("error",(err)=>{
    console.log("Redis client error:", err)
})

module.exports = redisClient