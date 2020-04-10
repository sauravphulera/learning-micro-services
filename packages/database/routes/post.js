const mongoose = require('mongoose');
const Mail = mongoose.model('Mail');

const mailHandler = async ({ body: { subject, receiver, content }}, res)=> {
    let mail;
    let error;
    if(!receiver || !subject || !content) {
        res.sendStatus(400).send({
            message: 'you forgot some keys',
            service: 'Database service',
            status: '400',
            payload: null,
        });
    }
    const newMail = new Mail({
        receiver,subject, content
    });    
    try {
        mail = await newMail.save();
    } catch(e) {
        error = e;
    }
    res.send({
        message: 'Got response from DB',
        service: 'Database service',
        payload: mail || error,
    }); 
}

module.exports = server => {
    server.post('/saveMails', mailHandler);
}