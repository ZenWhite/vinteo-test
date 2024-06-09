/*
  В интерфейсе Stack не хватало поля items, который является массивом, содержащим в себе элементы стека.
  Интерфейс Stack лучше заменить на абстрактный класс, чтобы сделать поле items недоступным для чтения извне 
  и не прописывать его заново при каждой новой реализации абстрактного стека.
  Также файл называется LimitedStack, а в нём реализован UnlimitedStack, что было исправлено.
*/

abstract class Stack<T> {
  protected items: T[] = []

  pop(): T | null {
    return null
  }

  push(item: T): void {}

  percentFull(): number {
    return 0
  }
}

class LimitedStack<T> extends Stack<T> {
  constructor(public limit: number) {
    super()
  }

  pop() {
    if (this.items.length === 0) {
      return null
    }

    return this.items.pop()!
  }

  push(item: T) {
    this.items.push(item)
  }

  percentFull() {
    return (this.items.length * 100) / this.limit
  }
}
