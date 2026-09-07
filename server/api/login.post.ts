import bcrypt from 'bcryptjs'
import { db } from '../utils/db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const email = body?.email?.trim()
  const password = body?.password

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email and password are required'
    })
  }

  const [rows] = await db.execute(
    'SELECT id, name, email, password, role FROM auth_users WHERE email = ? LIMIT 1',
    [email]
  )

  const users = rows as Array<{
    id: number
    name: string
    email: string
    password: string
    role: string
  }>

  const user = users[0]

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid email or password'
    })
  }

  const passwordMatches = await bcrypt.compare(
    password,
    user.password
  )

  if (!passwordMatches) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid email or password'
    })
  }

  await setUserSession(event, {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  })

  return {
    success: true,
    message: 'Login successful',
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  }
})