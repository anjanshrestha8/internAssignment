const express = require('express');
const cros = require('cors')

const app = express();
const PORT = 8080


app.use(express.json())
app.use(cros());

let rightValue = 0

app.get("/",(request,response)=>{
    response.send("API is working...")
})

app.post("/submit",(request,response)=>{
    const leftValue = request.body.value;
    if(leftValue !== undefined){
        rightValue = leftValue * 2;
    }
    response.json(
        {
            message: "This is a sucess message.",
            leftValue: leftValue,
            rightValue: rightValue,
            status: 200
        }
    )


})


app.listen(PORT,()=>{console.log(`Server is running at: http://localhost:${PORT}`)})