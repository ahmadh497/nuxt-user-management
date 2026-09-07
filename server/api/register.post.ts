import bcrypt from 'bcryptjs'
import type { ResultSetHeader } from 'mysql2/promise'
import { db } from '../utils/db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const name = body?.name?.trim()
  const email = body?.email?.trim()
  const password = body?.password

  if (!name || !email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name, email and password are required'
    })
  }

  if (!email.includes('@')) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please enter a valid email'
    })
  }

  if (password.length < 6) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Password must be at least 6 characters'
    })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    const [result] = await db.execute<ResultSetHeader>(
      'INSERT INTO auth_users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    )

    return {
      success: true,
      message: 'Account created successfully',
      id: result.insertId
    }
  } catch (err: any) {
    if (err.code === 'ER_DUP_ENTRY') {
      throw createError({
        statusCode: 409,
        statusMessage: 'Email is already registered'
      })
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to create account'
    })
  }
})