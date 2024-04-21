const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


// CREATE MIDDLEWARE
app.use(cors());
app.use(express.json());

const users =[
    {id:1, name: 'John', email: 'john@example.com'},
    {id:2, name: 'Mary', email:'mary@example.com'},
    {id:3, name: 'Peter', email: 'peter@example.com'},
    {id:4, name: 'Lisa', email: 'lisa@example.com'},
    {id:5, name: 'Sarah', email:'sarah@example.com'},
]
app.get('/', (req, res) =>{
    res.send('user management sever is available'); 
})
app.get('/users',(req, res)=>{
    res.send(users);
    })

app.post('/users',(req, res)=>{
    console.log('json body hitting ');  
    console.log(req.body);
    const newUser = req.body;
    newUser.id =users.length+1;
    users.push(newUser);
    res.send(newUser);
    })
app.listen(port,()=>{
    console.log(`user management server is running on port :${port}`);

}) ;