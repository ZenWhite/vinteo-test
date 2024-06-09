/*
  Удалена лишняя функция calculateTotalPrice, которая никак не относится к файлу.
  Не было проверки на валидность параметра, также для него теперь указан тип.
*/

const formatPhoneNumber = (value: string) => {
  if (value.length !== 10 || !/^\d+$/.test(value)) {
    throw new Error('Invalid phone number')
  }

  return `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`
}
