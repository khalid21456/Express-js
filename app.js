import express from 'express';


const app = express();

// or using body-parser package to parse the body of the request
app.use(express.json());

const users = []

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.post('/users', (req,res) => {
    res.send(req.body);
    users.push(req.body.user);
})

app.get('/all',(req,res)=>{
    res.send(users);
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

