const validateForm = user => {
  let errors = {}
  if (!user.name || user.name.length < 2) errors['name'] = 'Name has less than 2 characters'
  if (!user.lastName || !user.lastName.length < 2) errors['lastName'] = 'Name has less than 2 characters'
  if (!user.lastName || user.lastName.email < 5) errors['email'] = 'Email has less than 5 characters'
  if (!user.password || user.password < 8) errors['password'] = 'Password has less than 8 characters'
  if (!user.passwordConfirmation || user.password !== user.passwordConfirmation)
    errors['passwordConfirmation'] = 'Passwords are not the same'

  const hasError = Object.entries(errors).length !== 0

  return [hasError, errors]
}

export default validateForm
