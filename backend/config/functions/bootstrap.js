'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

module.exports = async () => {
  process.nextTick(() =>{
    var io = require('socket.io')(strapi.server);
    io.on('connection', async function(socket) {

      console.log(`a user connected`)
      socket.on('getQuestionNext', (data)=>{console.log('getNext ', data)})

      // send message on user connection
      var X = await strapi.services.question.findOne({ id: 1 })
      console.log(X.question_text)
      socket.emit('hello', "hello");
      socket.emit('question', {message: await strapi.services.question.findOne({ id: 1 })});
      
      //Send a message after a timeout of 4seconds
      setTimeout(function() {
        socket.emit('endEvent', { description: 'A custom event named EndEvent!'});
      }, 4000);
      // listen for user diconnect
      socket.on('disconnect', () =>{
        console.log('a user disconnected')
      });
    });
    strapi.io = io; // register socket io inside strapi main object to use it globally anywhere
  })
};