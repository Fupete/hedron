import uid from 'uid'

export default () => {
  return [
    {
      title: 'MIDI Sensitity',
      id: uid(),
      value: 0.5,
      inputLinkIds: []
    }
  ]
}
