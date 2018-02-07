import { inputFired } from '../store/inputs/actions'
import { midiStopLearning, midiUpdateDevices, midiMessage } from '../store/midi/actions'
import { uInputLinkCreate } from '../store/inputLinks/actions'
import { clockPulse } from '../store/clock/actions'
import processMidiMessage from '../utils/processMidiMessage'

export default (store) => {
  const onMessage = (rawMessage) => {
    const state = store.getState()
    const m = processMidiMessage(rawMessage)

    if (m.type !== 'timingClock') {
      store.dispatch(midiMessage(rawMessage.target.name, {
        data: rawMessage.data,
        timeStamp: rawMessage.timeStamp
      }))

      const learning = state.midi.learning

      if (learning) {
        store.dispatch(uInputLinkCreate(learning.id, m.id, learning.type, rawMessage.target.name))
        store.dispatch(midiStopLearning())
      } else {
        store.dispatch(inputFired(m.id, m.value, {
          noteOn: m.type === 'noteOn',
          type: 'midi'
        }))
      }
    // If no note data, treat as clock
    } else if (m.type === 'timingClock') {
      // Only dispatch clock pulse if no generated clock
      if (!state.clock.isGenerated) {
        store.dispatch(clockPulse())
      }
    }
  }

  navigator.requestMIDIAccess().then((midiAccess) => {
    const devices = {}
    midiAccess.inputs.forEach((entry) => {
      devices[entry.name] = {
        title: entry.name,
        id: entry.name,
        manufacturer: entry.manufacturer,
        bankIndex: 0
      }
      entry.onmidimessage = onMessage
    })
    store.dispatch(midiUpdateDevices(devices))
  })
}
