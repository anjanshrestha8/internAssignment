
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());


app.get("/",(request,response)=>{
    response.json({
        message:"Welcome to my server"
    })
})

app.post('/submit', (request, response) => {
    const { value, source } = request.body;

    let newValue = 0;
    if (source === 'left') {
        newValue = value * 2; 
    } else if (source === 'right') {
        newValue = value / 2; 
    }

    response.json({ newValue });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
