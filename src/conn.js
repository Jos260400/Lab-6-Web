import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'fernando',
    database: 'blog_fer',
    password: 'fer',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

export default pool
