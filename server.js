const express=require("express")
const app=express()
app.use((req,res,next)=>{
    const dateAt=new Date()
    if(dateAt.getHours()<8||dateAt.getHours()>16)
    {res.send("YOU SHALL NOT PASS!!!!")}
    next()
    })
app.use(express.static(__dirname+'/HTMLS'))

app.listen(3000,(err)=>{
err?console.log(err):console.log("server running on port 3000")
})