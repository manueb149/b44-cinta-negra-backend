const mongoose = require('mongoose');
const URL = process.env.URL_MONGO;

console.log(URL);

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const mongo = mongoose.connection

mongo.on('error', () => console.log('Error en la conexion ❌'))
mongo.once('open', () => console.log('Conectacto a MongoDB ✅'))
