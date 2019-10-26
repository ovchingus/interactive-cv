const SET_DEVICE = 'SET_DEVICE'

function setDevice (device) {
  return {
    type: SET_DEVICE,
    payload: device
  }
}

export default setDevice
