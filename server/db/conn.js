const mongoose = require('mongoose');

const db2 = process.env.DATABASE;

mongoose.connect(db2, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection successful');
}).catch((e) => {
    console.log(e);
})