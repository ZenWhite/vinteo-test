/*
  В текущей реализации работа с классом StringBuffer была лишней. 
  Реализацию логики функции можно уместить в одну шаблонную строку. 
*/

const render = (size: number) => `<hr ${size > 0 ? `size="${size + 1}"` : ''} />`
