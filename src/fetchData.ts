/*
  Задача этой функции -- получить и вернуть данные, поэтому обработку ошибок или логирование лучше делать в месте вызова функции.
  Также стоит добавить возможность прокинуть свой timeout в параметр.
  Ещё отмечу, что у стандартного fetch нет поля timeout. 
  Поэтому эту функцию необходимо либо импортировать, либо это заранее пропатченный fetch (как, например, в Next.js)
*/

const DEFAULT_TIMEOUT = 5000

const fetchData = async ({
  url,
  timeout = DEFAULT_TIMEOUT,
}: {
  url: string
  timeout?: number
}): Promise<any> => {
  const response = await fetch(url, { timeout })

  return await response.json()
}
