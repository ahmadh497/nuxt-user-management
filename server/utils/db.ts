import mysql from 'mysql2/promise'

export const db = mysql.createPool({
  host: process.env.MYSQLHOST || 'localhost',
  port: Number(process.env.MYSQLPORT || 3306),
  user: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || '',
  database: process.env.MYSQLDATABASE || 'vue_learning',
  waitForConnections: true,
  connectionLimit: 10
})