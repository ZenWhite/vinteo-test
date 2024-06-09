/*
  Поле calendar в классе Director лучше сделать приватным, так как класс инкапсулирует в себе логику работу с календарём.
  Также можно изменить вид объявления и инициализации поля calendar для уменьшения количества кода.
*/

class Calendar {
  addEvent(event: unknown) {
    // some logic to add event
  }
}

class Director {
  constructor(private calendar: Calendar) {}

  scheduleMeeting(event: unknown) {
    this.calendar.addEvent(event)
  }
}
