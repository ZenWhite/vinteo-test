/*
  Необходимо убрать ненужные метод и проверку.
  В catch тип ошибки был указан неверно с точки зрения синтаксиса.
*/

type Exception = any

class SomeClass {
  public someMethod() {
    try {
      this.doSomethingSafe()
    } catch (e: Exception) {
      e.printStackTrace()
    }
  }

  private doSomethingSafe() {
    console.log('Safe operation')
  }
}
