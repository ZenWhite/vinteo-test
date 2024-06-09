/*
 Лучше использовать массив employees как параметр функции. Это улучшить тестируемость и стабильность функции.
 Для улучшения читаемости кода можно сделать отрицание условия isPayday.
 Также можно избавиться от лишней переменной pay.
*/

const pay = (employees: any[]) => {
  for (const e of employees) {
    if (!e.isPayday()) continue;

    e.deliverPay(e.calculatePay());
  }
};
