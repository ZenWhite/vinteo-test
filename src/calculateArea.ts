/*
  Лучше разделить calculateArea на отдельные функции. 
  После разделения можно убрать лишний enum ShapeType.
  Math.pow можно заменить на ** 2.
*/

const calculateSquareaArea = (side: number): number => side ** 2
const calculateCircleArea = (radius: number): number => Math.PI * radius ** 2

console.log(calculateCircleArea(5)) // Output: 78.54
