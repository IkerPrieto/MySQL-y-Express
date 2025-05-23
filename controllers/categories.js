// controllers/categories.js
const db = require('../config/database');

exports.createTable = (req, res) => {
    const sql = `CREATE TABLE Categories (
        id INT AUTO_INCREMENT PRIMARY KEY,
        category_name VARCHAR(50)
    )`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Categories table created');
    });
};

exports.addCategory = (req, res) => {
    const { category_name } = req.body;
    db.query('INSERT INTO Categories (category_name) VALUES (?)', [category_name], (err, result) => {
        if (err) throw err;
        res.send('Category created');
    });
};

exports.updateCategory = (req, res) => {
    const { category_name } = req.body;
    db.query('UPDATE Categories SET category_name = ? WHERE id = ?', [category_name, req.params.id], (err, result) => {
        if (err) throw err;
        res.send('Category updated');
    });
};

exports.getAll = (req, res) => {
    db.query('SELECT * FROM Categories', (err, result) => {
        if (err) throw err;
        res.send({ result });
    });
};

exports.getById = (req, res) => {
    db.query('SELECT * FROM Categories WHERE id = ?', [req.params.id], (err, result) => {
        if (err) throw err;
        res.send({ result });
    });
};

exports.getProductsByCategories = (req, res) => {
    const sql = `
        SELECT Products.product_name, Categories.category_name 
        FROM Products 
        INNER JOIN Categories ON Products.category_id = Categories.id
    `;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send({ result });
    });
};