/*
  Добавлен enum HttpStatusCode. 
  Функции заменены на одну для обработки всех возможных статусов.
  Деструктуризация параметра функции для улучшения чистоты кода.
  Явно указан возвращаемый тип данных.
*/

enum HttpStatusCode {
  NOT_FOUND_404,
  FORBIDDEN_403,
  SERVER_ERROR_503,
}

const hasStatus = ({ status }: Response, code: HttpStatusCode): boolean => {
  return status === code
}
