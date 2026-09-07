import { db } from '../../utils/db'
import type { ResultSetHeader } from 'mysql2/promise'

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params?.id)

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid user ID'
    })
  }

  const [result] = await db.execute<ResultSetHeader>(
    'DELETE FROM users WHERE id = ?',
    [id]
  )

  if (result.affectedRows === 0) {
    throw createError({
      statusCode: 404,
      statusMessage: 'User not found'
    })
  }

  return {
    success: true,
    message: 'User deleted successfully'
  }
})