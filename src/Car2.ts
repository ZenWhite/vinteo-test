/*
 Лучше вынести COLORS в отдельную константу CAR_COLORS.
*/

const CAR_COLORS = ['red', 'blue', 'green']

class Car2 {
  public static isColorAvailable(color: string): boolean {
    return CAR_COLORS.includes(color)
  }
}
