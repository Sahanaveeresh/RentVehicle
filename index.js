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

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(err?.statusCode ? err?.statusCode : 500).json(err.message);
});

// 404 Not Found middleware
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`server listening to port ${PORT}`)
})