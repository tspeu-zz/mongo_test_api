// import hapi from "hapi";
const hapi = require('hapi');
//mongoose
const mongoose = require('mongoose');
//modelo
const Painting = require('./models/paints');
//CONECT mongoDb
mongoose.connect('mongodb://jm:peras998@ds147180.mlab.com:47180/api-tes-jm');
//mongodb://<dbuser>:<dbpassword>@ds147180.mlab.com:47180/api-tes-jm
//mongodb://<adminuser>:<password>@ds012345-a0.mlab.com:56789,ds012345-a1.mlab.com:56790/admin?replicaSet=rs-ds012345
//172.21.0.0/16

//open conccetion
mongoose.connection.once('open', () => {
    console.log('Db mongo todo ok');
}).on('error', () => {
    console.log('fallo al concet mongoDb');
});


//Secondly, we make a constant called server which 
//creates a new instance of our Hapi server — as the 
// arguments, we pass an object cd with the port and host 
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
    server.route([
        {
            method : 'GET',
            path: '/',
            handler : function(req, res) {
                return `<h1>Api de prueba</h1>`;
            }
        },{
            method: 'GET',
            path: '/api/v1/paintings',
            handler: (req,res) => {
                return Painting.find();
            }
        },{
            method: 'POST',
            path: '/api/v1/paintings',
            handler: (req,res) => {
                const {name, url, techniques} = res.payload;
                const paintings = new Painting({
                    name, url, techniques
                });
                return paintings.save();
            }
        } 
    ]);


    await server.start();
    console.log(`Server anandado : ${server.info.uri}`);
};

init();