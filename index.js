const express = require(`express`);
const app = express();
const cors = require(`cors`);
require('dotenv').config()

app.use(cors());
app.use(express.json());

const vehicleRoutes = require('./routes/vehicleRoutes');
const rentalRoutes = require('./routes/rentalRoutes');

app.use('/vehicle', vehicleRoutes);
app.use('/rentals', rentalRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`server listening to port ${PORT}`)
})