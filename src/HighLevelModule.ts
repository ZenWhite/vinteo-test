/*
  В этом коде присутствует прямая зависимость HighLevelModule от LowLevelModule, что нарушает принцип инверсии зависимостей.
  Для улучшения кода необходимо объявить тип нужной зависимости, а затем использовать DI (инъекцию зависимостей).
*/

class LowLevelModule {
  doSomething() {
    // реализация
  }
}

class HighLevelModule {
  constructor(private lowLevelModule: { doSomething: () => void }) {}

  doSomethingElse() {
    this.lowLevelModule.doSomething() // использование непосредственной зависимости
  }
}

// Пример создания класса
const highLevelModule = new HighLevelModule(new LowLevelModule())
