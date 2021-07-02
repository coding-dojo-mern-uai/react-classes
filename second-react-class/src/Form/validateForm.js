const validateForm = user => {
  if (!user.username) return { username: 'Username is required' }
  if (!user.email) return { email: 'Email is required' }
  return true
}

export default validateForm
