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
      // exam time limit in seconds
      
      let finish = new Date();
      const sinav_suresi = 0; 
      let endTime = undefined;

      console.log(`a user connected`)
      socket.on('getQuestionNext', async (data)=>{
        if (data)
          var request = (await strapi.services.question.findOne({ "id": data }))
          if(request){
            io.emit('question', {message : request})   
            if(!sinav_suresi){
              finish.setSeconds(finish.getSeconds() + sinav_suresi);
            }
          }
      })
            
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