require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE,
    port: process.env.PORT_DB,
    ssl: {
        rejectUnauthorized: false,
    },
});

const getTasks = async (req, res) => {
    const response = await pool.query('SELECT * FROM task');
    res.status(200).json(response.rows);
}

const getTaskById = async (req, res) => {
    const response = await pool.query('SELECT * FROM task WHERE id = $1', [req.params.id]);
    res.status(200).json(response.rows);
}

const createTask = async (req, res) => {
    const { name, done } = req.body;
    await pool.query('INSERT INTO task(name, done) VALUES ($1, $2)', [name, done]);
    res.status(200).json({
        message: 'User added succesfully'
    });
}

module.exports = {
    getTasks,
    getTaskById,
    createTask
}