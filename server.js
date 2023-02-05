const http=require("http")

const app=require("./app")
const portNo=5500;
const server=http.createServer(app);
server.listen(portNo,()=>{
    console.log("Server has been started on "+portNo)
});





