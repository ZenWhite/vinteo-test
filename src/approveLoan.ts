/*
  В коде находится проверка, которая плохо читается и которую лучше разбить и вынести в отдельную функцию.
  Такую функцию можно переиспользовать и в других сценариях или интерфейсе.
*/

type User = any

const canApproveLoan = (user: User) => {
  if (user.age < 18 || user.age > 65) return false

  return user.employmentStatus === 'employed' && !user.criminalRecord
}

const user: User = {}
const approveLoan = () => {}

if (canApproveLoan(user)) approveLoan()

export {}
