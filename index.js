// import hapi from "hapi";
const hapi = require('hapi');

//Secondly, we make a constant called server which 
//creates a new instance of our Hapi server — as the 
// arguments, we pass an object with the port and host 
// options.
const server = hapi.Server({
    port : 4000,
    host: 'localhost'
});

/*Third and finally, we create an asynchronous 
expression called init. Inside the init method, 
we have another asynchronous method which starts the 
server. See server.start() — at the bottom we call 
the init()function.
*/

const init = async() =>{
    await server.start();
    console.log(`Server anandado : ${server.info.uri}`);
};

init();