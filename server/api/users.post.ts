import { db } from '../utils/db'
import type { ResultSetHeader } from 'mysql2/promise'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const name = body?.name?.trim()
  const email = body?.email?.trim()

  if (!name || !email) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name and email are required'
    })
  }

  const [result] = await db.execute<ResultSetHeader>(
    'INSERT INTO users (name, email) VALUES (?, ?)',
    [name, email]
  )

  return {
    success: true,
    message: 'User added to MySQL successfully',
    id: result.insertId
  }
})