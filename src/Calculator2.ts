/*
  Функции калькулятора должны быть в одном месте. 
  Либо в классе, либо в литерале объекта, либо в одном файле в отдельных функции, но экспортироваться в виде пространства имён.
*/

class Calculator2 {
  add(a: number, b: number): number {
    return a + b
  }
  multiply(a: number, b: number): number {
    return a * b
  }
}
