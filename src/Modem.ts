/*
  Скорее всего все методы, кроме получения номера, предполагают асинхронную работу, поэтому им стоит возвращать Promise. 
  Благодаря этому можно будет удобно обработать ошибки методов и сделать цепочку вызовов.
  
  Также методу getConnectedPhoneNumber лучше возвращать string или null. Это дает понять, что модем может быть не подключен.
*/

interface Modem {
  dial: (phoneNumber: string) => Promise<boolean>
  disconnect: () => Promise<boolean>
  send: (c: string) => Promise<boolean>
  recv: () => Promise<string>
  getConnectedPhoneNumber: () => string | null
}
