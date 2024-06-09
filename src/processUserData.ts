/*
  Для улучшения читаемости кода лучше убрать else и изменить проверку.
  В случае отсутствия нужного возраста можно вернуть ошибку, что более явно укажет на невалидные данные.
*/

const processUserData = (user: any) => {
  // Получаем данные пользователя
  const userData = getUserData(user)

  if (userData.age < 18) {
    throw new Error('User is under 18')
  }

  processUser(user)
}
