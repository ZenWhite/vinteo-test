/*
  Данные функции можно отнести к сервисным. 
  В данном случае их их задача только обращаться к серверу и возвращать ответ. 

  Логика редиректа должна находиться в интерфейсной части приложения.
  
  Для уменьшения шаблонного кода необходимо использовать библиотеку. 
  Библиотека может быть своя, либо уже существующая (axios, wretch и т.д)
  
  Получение токена и заголовков должно настраиваться в interceptors/middlewares, 
  либо же эти данные должны передаваться в параметры каждой функции.

  Стоит изменить формат работы с fetch, чтобы функция возвращала ответ от сервера.

  Также стоит добавить базовый путь, чтобы не прописывать его в каждой функции (не актуально при автогенерации кода).
*/

const BASE_URL = 'somedomain.ru/v1/users'

const updateUserHandle = async (handle: any): Promise<any> => {
  const response = await fetch(`${BASE_URL}/handle`, {
    method: 'PUT',
    body: JSON.stringify({
      handle,
    }),
  })

  return await response.json()
}

const updateUserInterests = async (interestUUIDs: any): Promise<any> => {
  const response = await fetch(`${BASE_URL}/interests`, {
    method: 'PUT',
    body: JSON.stringify({
      interestUUIDs,
    }),
  })

  return await response.json()
}
