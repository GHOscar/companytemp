// Import all dependecies
const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express()

dotenv.config();
require('./db/conn');
const port = process.env.PORT;

// Require model
const Users = require('./models/userSchema')
const Message = require('./models/msgSchema')
const authenticate = require('./middleware/authenticate')

// These methods are used to get data and cookies from frontend 
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('hello world');
})

// Registration
app.post('/register', async (req, res) => {
    try {
        // Get body or data
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
            username: username,
            email: email,
            password: password
        })
        // Save method is used to create user or insert user
        const created = await createUser.save();
        console.log(created);
        res.status(200).send('Registered')
    } catch (error) {
        res.status(400).send(error);
    }
})

// Login user
app.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        // Find if user exists
        const user = await Users.findOne({email: email});
        if(user) {
            // Verify password
            const isMatch = await bcryptjs.compare(password, user.password)

            if(isMatch) {
                // Generate token is defined in userSchema
                const token = await user.generateToken()
                res.cookie('jwt', token, {
                    // Expires token in 24 hours
                    expires: new Date(Date.now() + 86400000),
                    httpOnly: true
                })
                res.status(200).send(`Logged in`)
            } else {
                res.status(400).send('Invalid credentials');
            }
        } else {
            res.status(400).send('Invalid credentials');
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

app.post('/message', async (req, res) => {
    try {
        // Get body or data
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;

        const sendMsg = new Message({
            name: name,
            email: email,
            message: message
        })
        // Save method is used to create user or insert user
        const created = await sendMsg.save();
        console.log(created);
        res.status(200).send('Message sent')
    } catch (error) {
        res.status(400).send(error);
    }
})

app.get('/logout', (req, res) => {
    res.clearCookie('jwt', {path: '/'})
    res.status(200).send('User logged out');
})

app.get('/auth', authenticate, (req, res) => {
    
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})