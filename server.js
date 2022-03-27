const express = require('express');
const cors = require('cors');

const app = express();
//const ProductRouter = require('./server/routes/routes');
require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//app.use('/api/product',ProductRouter);
require('./server/routes/routes')(app);

app.listen(8000,()=>{
    console.log("el servidor esta corriendo en el puerto 8000");
});

