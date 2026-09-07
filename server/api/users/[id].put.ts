import { db } from '../../utils/db'
import type { ResultSetHeader } from 'mysql2/promise'

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params?.id)
  const body = await readBody(event)

  const name = body?.name?.trim()
  const email = body?.email?.trim()

  if (!id || !name || !email) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID, name and email are required'
    })
  }

  const [result] = await db.execute<ResultSetHeader>(
    'UPDATE users SET name = ?, email = ? WHERE id = ?',
    [name, email, id]
  )

  if (result.affectedRows === 0) {
    throw createError({
      statusCode: 404,
      statusMessage: 'User not found'
    })
  }

  return {
    success: true,
    message: 'User updated successfully'
  }
})