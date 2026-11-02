const cluster = require("node:cluster")
const os = require("node:os")

if(cluster.isPrimary)
{
  const cpucount = os.availableParallelism()
  console.log(`Primary process: ${process.pid}`)
  console.log(`Starting ${cpucount} workers...`)

  for(let i = 0; i<cpucount; i++)
  {
    cluster.fork()
  }
  cluster.on("exit",(worker, code, signal)=>{
    console.log(`Worker ${worker.process.pid} died`)
    console.log("starting a replacement worker...")

    cluster.fork()
    
  })
}else{
  require("./server")
}