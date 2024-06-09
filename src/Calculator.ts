/*
  Стоит добавить проверку деления на ноль. В случае передачи нуля выкидывать ошибку.
  Также стоит рассмотреть два варианта для рефакторинга.
*/

// Вариант 1. Если калькулятор необходим в виде класса, то методы лучше сделать статическими, так как они никак не завязаны на инстанс класса

class Calculator {
  public static add(a: number, b: number): number {
    return a + b
  }

  public static subtract(a: number, b: number): number {
    return a - b
  }

  public static multiply(a: number, b: number): number {
    return a * b
  }

  public static divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Error: Division by zero')
    }

    return a / b
  }
}

// Вариант 2. Если калькулятор не обязан быть классом, то лучше заменить его на объект.

const calculator = {
  add(a: number, b: number): number {
    return a + b
  },
  subtract(a: number, b: number): number {
    return a - b
  },
  multiply(a: number, b: number): number {
    return a * b
  },
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Error: Division by zero')
    }

    return a / b
  },
}
