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
      socket.on('getQuestionNext', async (data)=>{
        try {
          if (data)
          var request = await strapi.services.question.findOne({ "id": data })
          
          if(request)
            io.emit('question', {message : request}) 
        } catch (error) {
          console.log("error message/ bootstrap.js:")
          console.log(error.message)
        }
         
      })
      socket.on('userAnswer', async (data)=>{
        try {
        var dogrusayisi=0;
        var bossayisi=0;
        var yanlissayisi=0;
        if (data)
        {
          data.shift()
          console.log(data)
          
          var answers = (await strapi.services.question.find())
          //console.log(answers)
          var filteredJson = answers.filter(function (row) {
            if(row.Answer ) {
              console.log(row.id +". sorunun cevabi " + row.Answer)
              const key = 'id';
              const dataUniqueByKey = [...new Map(data.map(item =>
                [item[key], item])).values()];
              if(dataUniqueByKey.length>=row.id){
                if(dataUniqueByKey[row.id-1].id===(row.id+1)){
                    if(dataUniqueByKey[row.id-1].value===""){
                      bossayisi++
                    }
                    else if(row.Answer===dataUniqueByKey[row.id-1].value){
                      dogrusayisi++
                    }
                    else if(row.Answer!=dataUniqueByKey[row.id-1].value){
                      yanlissayisi++
                    }
                  }
              }else{
                bossayisi++
              }
                
            }
          });
          console.log(dogrusayisi)
          console.log(yanlissayisi)
          console.log(bossayisi)  
          io.emit('result', {message:{dogru:dogrusayisi,yanlis:yanlissayisi,bos:bossayisi}}) 
        }
        } catch (error) {
          console.log(error)

        }
        
                    
      })
      //Send a message after a timeout of 4seconds
      setTimeout(function() {
        socket.emit('endEvent', { description: 'A custom event named EndEvent!'});
      }, 4000);
      //http.listen ( 3000 , () => { console .log ( 'dinleme *: 3000' ); });


      // listen for user diconnect
      socket.on('disconnect', () =>{
        console.log('a user disconnected')
      });
    });
    strapi.io = io; // register socket io inside strapi main object to use it globally anywhere
  })
};