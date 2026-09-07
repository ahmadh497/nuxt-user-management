import { db } from '../utils/db'

export default defineEventHandler(async () => {
  const [rows] = await db.query(
    'SELECT id, name, email FROM users ORDER BY id DESC'
  )

  return rows
})