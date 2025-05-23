// controllers/products.js
const db = require('../config/database');

exports.createTable = (req, res) => {
    const sql = `CREATE TABLE Products (
        id INT AUTO_INCREMENT,
        product_name VARCHAR(100),
        category_id INT,
        FOREIGN KEY (category_id) REFERENCES Categories(id),
        PRIMARY KEY(id)
    )`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Products table created');
    });
};

exports.addProduct = (req, res) => {
    const { product_name } = req.body;
    db.query('INSERT INTO Products (product_name) VALUES (?)', [product_name], (err, result) => {
        if (err) throw err;
        res.send('Product added');
    });
};

exports.updateProduct = (req, res) => {
    const { product_name } = req.body;
    db.query('UPDATE Products SET product_name = ? WHERE id = ?', [product_name, req.params.id], (err, result) => {
        if (err) throw err;
        res.send('Product updated');
    });
};

exports.getAll = (req, res) => {
    db.query('SELECT * FROM Products', (err, result) => {
        if (err) throw err;
        res.send({ result });
    });
};

exports.getById = (req, res) => {
    db.query('SELECT * FROM Products WHERE id = ?', [req.params.id], (err, result) => {
        if (err) throw err;
        res.send({ result });
    });
};

exports.getByName = (req, res) => {
    db.query('SELECT * FROM Products WHERE product_name = ?', [req.params.name], (err, result) => {
        if (err) throw err;
        res.send({ result });
    });
};

exports.getAllDesc = (req, res) => {
    db.query('SELECT * FROM Products ORDER BY id DESC', (err, result) => {
        if (err) throw err;
        res.send({ result });
    });
};

exports.deleteById = (req, res) => {
    db.query('DELETE FROM Products WHERE id = ?', [req.params.id], (err, result) => {
        if (err) throw err;
        res.send({ message: 'Product deleted' });
    });
};