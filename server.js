//create a http server
const http=require('http')

const {createArr, readArr , updateArr , deleteArr}=require('./newModule.js')

const server= http.createServer(function(req,res){
    console.log(req.method,req.url);
    if (req.url=='/'){
    res.write("request looks good ");
    }
    else if (req.url=='/create')
    {
        res.write(JSON.stringify(createArr(10)))
    }
    else if (req.url=='/read')
    {
       res.write(JSON.stringify(readArr())) 
    }
    else if (req.url=='/update')
    {
      res.write(JSON.stringify(updateArr(0,11)) ) 
    }
    else if (req.url=='/delete')
    {
        res.write(JSON.stringify(deleteArr(0)))
    }
    else if (req.url=='/pizza')
    {
        res.write("pizza is ready");
    }
    
    res.end();
})

server.listen(5000,function(){console.log("server running on 5000")})//event listsner