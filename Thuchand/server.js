import  express  from "express"
import dotenv from 'dotenv/config'
import date from "./date.js";
import myDateTime from "./date.js";
import getURL from "./getURL.js";
import viewEngine from "./viewEngine.js";
const app = express()
viewEngine(app)
const port= process.env.PORT
app.get('/',(req,res)=>{
    res.send('hges!')

})
app.get('/about',(req,res)=>{
    res.send('hges!. Page about')

})
app.get('/date',(req,res)=>{
    res.send(date()+"<br>")

})
app.get('/ejs',(req,res)=>{
    res.render("test")

})

app.get('/geturl?cat&black',(req,res)=>{
    res.send(getURL.getPath(req)+"<br>")
    res.send(getURL.getParamURL(req)+"<br>")

})
app.listen(port,()=>{
    console.log('Example $(port)')
})
