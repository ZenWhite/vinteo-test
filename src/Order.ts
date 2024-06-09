/*
  Необходимо передавать нужные данные и зависимости в Order и Customer через конструктор, чего не было в изначальном коде.
*/

class Order {
  constructor(private customer: Customer) {}

  getTotalPrice(): number {
    return this.customer.calculateTotalPrice();
  }
}

type Item = any;

class Customer {
  constructor(private items: Item[]) {}

  calculateTotalPrice(): number {
    return 0;
  }
}
