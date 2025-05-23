const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Rutas
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

app.use('/', productRoutes);
app.use('/', categoryRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});