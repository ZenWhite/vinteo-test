/*
 Неоправданное использование let и forEach, которые заменяются на один reduce.
 В applyDiscount лучше не вызывать calculateTotalPrice а передавать число.
 Примером может послужить карточка товара, в которой отображается полная стоимость + его скидка.
*/

type Item = { price: number }

// Модуль 1
const calculateTotalPrice = (items: Item[]) => {
  return items.reduce((sum, item) => sum + item.price, 0)
}

// Модуль 2
const applyDiscount = (totalPrice: number, discountPercentage: number) => {
  return totalPrice * (1 - discountPercentage / 100)
}

export {}
