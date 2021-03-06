import {
  getYear,
  getMonth,
  getDay,
  daysInAMonth,
  monthFirstDay,
  joinDate,
  transformDate, transformDateToArray, monthDiff, getDate, getPre, getNext, isInRange
} from '../../src/utils/date'

describe('Date', () => {
  const date = new Date('1999-9-1')
  const today = new Date()

  it('should get year from Date', () => {
    expect(getYear()).toEqual(getYear(today))
    expect(getYear(date)).toBe(1999)
  })

  it('should get Date from string', () => {
    expect(getDate(2020, 5, 1)).toEqual(new Date('2020/5/1'))
    expect(getDate(1999, 2,21)).toEqual(new Date('1999/2/21'))
  })


  it('should get the date of the previous month', () => {
    expect(getPre(1,2020)).toEqual([12,2019])
    expect(getPre(2,2020)).toEqual([1,2020])
  })

  it('should get the date of the next month', () => {
    expect(getNext(12,2020)).toEqual([1,2021])
    expect(getNext(2,2020)).toEqual([3,2020])
  })

  describe('isInRange',()=>{
    it('should return whether date is in range', () => {
      expect(isInRange('2020/10/22','2020/9/22' , '2020/10/3')).toEqual('in-range')
      expect(isInRange('2020/10/22','2020/9/22' , '2020/10/23')).toEqual('')
      expect(isInRange('2020/10/22','2020/9/22' , '2020/2/23')).toEqual('')
    })
  })

  it('should get month from Date', () => {
    expect(getMonth()).toEqual(getMonth(today))
    expect(getMonth(date)).toBe(9)
  })

  it('should get day from Date', () => {
    expect(getDay()).toEqual(getDay(today))
    expect(getDay(date)).toBe(1)
  })

  it('should get the number of days in the month', () => {
    expect(daysInAMonth(2020, 9)).toBe(30)
  })

  it('should get the day of first day in the month', () => {
    expect(monthFirstDay(2020, 9)).toBe(2)
    expect(monthFirstDay(2021, 9)).toBe(3)
    expect(monthFirstDay(1999, 6)).toBe(2)
  })

  it('should convert Date to string, the format is YYYY/M/D', () => {
    expect(joinDate(9, 2020, 10)).toBe('2020/9/10')
    expect(joinDate(9, 2020)).toBe('2020/9/1')
  })

  it('should convert Date to Array from string', () => {
    expect(transformDateToArray('2021/10/1')).toEqual([2021, 10, 1])
    expect(transformDateToArray('1999/03')).toEqual([1999, 3])
  })
  it('should convert Date to string, the format is YYYY/M/D', () => {
    expect(transformDate(date)).toBe('1999/9/1')
    expect(transformDate(new Date('2099/10/1'))).toBe('2099/10/1')
    expect(transformDate(new Date('2009/1/18'))).toBe('2009/1/18')
  })

  test('should compare two dates, accurate to month, if days are different, also return true', () => {
    expect(monthDiff('1999/9/1', '1999/9/10')).toBeTruthy()
    expect(monthDiff('2009/10/1', '2009/10/12')).toBeTruthy()
    expect(monthDiff('2099/1/1', '2099/1/1')).toBeTruthy()
    expect(monthDiff('1999/9/1', '2009/9/10')).toBeFalsy()
    expect(monthDiff('2020/9/1', '2021/9/10')).toBeFalsy()
    expect(monthDiff('1999/9/1', '1999/2/10')).toBeFalsy()
    expect(monthDiff('2020/9/1', '2020/10/10')).toBeFalsy()
  })
})
