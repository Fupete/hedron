const { constructMidiId } = require('../')

test('Returns concatinated id based on input paramaters', () => {
  let type, note, channel, expected, actual

  type = 'b0'
  note = 100
  channel = 0
  actual = constructMidiId(type, note, channel)
  expected = 'midi_176_100'

  expect(actual).toBe(expected)

  type = 'b0'
  note = 100
  channel = 1
  actual = constructMidiId(type, note, channel)
  expected = 'midi_177_100'

  type = 'c0'
  note = 127
  channel = 0
  actual = constructMidiId(type, note, channel)
  expected = 'midi_192_127'

  type = 'c0'
  note = 127
  channel = 10
  actual = constructMidiId(type, note, channel)
  expected = 'midi_202_127'

  expect(actual).toBe(expected)
})
