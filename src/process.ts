/*
 Скорее всего эти процессы являются асинхронными, поэтому, чтобы они шли последовательно, необходимо сделать цепочку промисов.
*/

processVerificationRequest()
  .then(makeUpdateRequest)
  .then(processDeletion)
  .catch(() => console.log('Ошибка'))
