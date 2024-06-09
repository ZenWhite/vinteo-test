/*
 * TMutableList -- избыточная конструкция. Её следует удалить;
 * Избыточная функция Warning, которую также необходимо удалить. Если бы она была нужна, то её следовало бы переименовать в createError;
 * Неоднородные названия типов, функции добавления и её параметров;
 * Функция addError была заточена только под один вид ошибки. Лучше сделать возможность работы с общим случаем.
 */

enum ErrorType {
  LEGACY_CODE_DEPENDENCY,
}

type TError = { type: ErrorType }

const addError = (errors: TError[], type: ErrorType) => {
  errors.push({ type })
}
