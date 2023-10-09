const express = require('express');
const db = require('./db');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3306;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


// Route to get all users
app.get('/api/users', (req, res) => {
    db.query('SELECT * FROM users', (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});


// Route to get one user by id
app.get('/api/users/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM users WHERE id = ?', id, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

// Route to add a new user
app.post('/api/users', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const role = req.body.role;
    db.query('INSERT INTO users (name, email, role) VALUES (?,?,?)', [name, email, role], (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
    });
});

// Route to update a user by id
app.put('/api/users/:id', (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
    const role = req.body.role;
    db.query('UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?', [name, email, role, id], (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
    });
});

// Route to delete a user by id
app.delete('/api/users/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM users WHERE id = ?', id, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
    });
});

// Route to get the metrics for a user by id or date range
app.get('/api/metrics', (req, res) => {
    const userId = req.query.userId;
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;
    let sql = 'SELECT * FROM metrics';
    let params = [];
    if (userId) {
        sql += ' WHERE user_id = ?';
        params.push(userId);
    }
    if (startDate && endDate) {
        sql += ' AND date BETWEEN ? AND ?';
        params.push(startDate, endDate);
    }
    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


