const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())
app.use(express.json())


const port= 5000;

app.get('/', (req, res)=>{
    res.send('My First Node js');
})

const users=[
    {name:"sabiha", Age:23, id:0, num:122324554},
    {name:"lolita", Age:23, id:1, num:122324554},
    {name:"karina", Age:23, id:2, num:122324554},
    {name:"maria", Age:23, id:3, num:122324554},
]

app.post('/users', (req, res)=>{
    const NewUser=req.body;
    NewUser.id=users.length;
    users.push(NewUser);
    console.log('this is post', req.body);
    // res.send(JSON.stringify (NewUser))
    res.json(NewUser)
})

app.get('/users', (req, res)=>{
    const search =req.query.search;
    if(search){
        const searchText= users.filter(user=>user.name.toLocaleLowerCase().includes(search))
        res.send(searchText);
    }
    else{
        res.send(users)
    }
    
})

app.get('/users/:id', (req, res)=>{
    const id=req.params.id;
    const user=users[id];
    res.send(user)
})

app.listen(port , ()=>{
    console.log('listening to port', port);
})