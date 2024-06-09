/*
  Поля классов необходимо инициализировать. Либо же задать им значения по умолчанию.
*/

class DaoCacheConfigProperties {
  alive: number // alive cache time in days
  elements: number // maximum elements in cache

  constructor(alive: number, elements: number) {
    this.alive = alive
    this.elements = elements
  }
}
