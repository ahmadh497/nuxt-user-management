export default defineNuxtRouteMiddleware(async () => {
  const { user, loggedIn, fetch } = useUserSession()

  await fetch()

  if (!loggedIn.value) {
    return navigateTo('/login')
  }

  const currentUser = user.value as {
    role?: string
  } | null

  if (currentUser?.role !== 'admin') {
    return navigateTo('/')
  }
})