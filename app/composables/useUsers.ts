export function useUsers() {
  const {
    data: users,
    pending,
    error,
    refresh
  } = useFetch('/api/users')

  async function deleteUser(id: number) {
    await $fetch(`/api/users/${id}`, {
      method: 'DELETE'
    })

    await refresh()
  }

  async function updateUser(userData: {
    id: number
    name: string
    email: string
  }) {
    await $fetch(`/api/users/${userData.id}`, {
      method: 'PUT',
      body: {
        name: userData.name,
        email: userData.email
      }
    })

    await refresh()
  }

  return {
    users,
    pending,
    error,
    refresh,
    deleteUser,
    updateUser
  }
}