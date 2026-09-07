export default defineEventHandler((event) => {
  const id = Number(event.context.params?.id)

  const users = [
    { id: 1, name: 'Ahmad', email: 'ahmad@example.com' },
    { id: 2, name: 'Sara', email: 'sara@example.com' },
    { id: 3, name: 'Omar', email: 'omar@example.com' }
  ]

  const user = users.find(user => user.id === id)

  if (!user) {
    throw createError({
      statusCode: 404,
      statusMessage: 'User not found'
    })
  }

  return user
})