/*
  Лучше явно указывать тип возвращаемого значения методов. 
  Значение байтов в мегабайтах лучше вынести в отдельную константу.
  По контексту кажется, что единиц данных может быть всего две, поэтому лучше удалить switch.
*/

const BYTES_IN_MEGABYTE = 1_048_576

type TTrafficUnit = 'b' | 'mb'

class StatisticsCollector {
  sentUserVideoTraffic = 0
  sentShareVideoTraffic = 0
  isActiveAutoFormatTraffic = false

  getSentVideoTraffic(): number {
    const unit = this.isActiveAutoFormatTraffic ? 'mb' : 'b'
    const sentVideoTrafficInBytes = this.sentUserVideoTraffic + this.sentShareVideoTraffic

    return this.formatTraffic(sentVideoTrafficInBytes, unit)
  }

  formatTraffic(trafficInBytes: number, unit: TTrafficUnit): number {
    if (unit === 'b') return trafficInBytes

    return trafficInBytes / BYTES_IN_MEGABYTE
  }
}
