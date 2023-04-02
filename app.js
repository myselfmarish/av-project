const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/',(request,response)=>{
    response.sendFile(__dirname + "/views/index.html");
});

//video route
app.get('/video',(request,response)=>{
    response.sendFile(__dirname+"/public/video.html");
});
//audio route
app.get('/audio',(request,response)=>{
    response.sendFile(__dirname+"/public/audio.html");
});
app.listen(port,()=>{
    console.log(`app is running on ${port}`);
})