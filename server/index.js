//backend data
const express = require('express');
const app = express();
const cors = require('cors');
const ctrl = require('./controller')






//TLM
app.use(express.json());
app.use(cors());

//endpoints
app.get('/api/vehicles', ctrl.getVehicle)
app.post('/api/vehicles', ctrl.createVehicle)
app.put('/api/vehicles/:id', ctrl.updateVehicle)
app.delete('/api/vehicles/:id', ctrl.deleteVehicle)

const port = 8080;

//get the server to listen
app.listen(port, () => {
    console.log('mile high clubbin')
})
