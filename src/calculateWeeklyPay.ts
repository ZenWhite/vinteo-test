/*
  Я бы не выносил вычисления в разные функции из-за сильной связности данных.
  Но код можно улучшить, если убрать лишние типы и добавить отступы между логическими частями кода.
  В overtimeRate стоит добавить скобки для правильного вычисления коэффициента.
  Также я считаю, что при вычислении overtimePay стоит убрать округление, так как это может привести к неправильной сумме.
*/

const getTenthRate = () => 0
const getTenthsWorked = () => 0

const calculateWeeklyPay = (overtime: boolean): number => {
  const tenthRate = getTenthRate()
  const tenthsWorked = getTenthsWorked()

  const straightTime = Math.min(400, tenthsWorked)
  const straightPay = straightTime * tenthRate

  const overTime = Math.max(0, tenthsWorked - straightTime)
  const overtimeRate = (overtime ? 1.5 : 1.0) * tenthRate
  const overtimePay = overTime * overtimeRate

  return straightPay + overtimePay
}
