const SET_DEVICE = 'SET_DEVICE'

const setDevice = device => {
  return {
    type: SET_DEVICE,
    payload: device
  }
}

export default {
  setDevice,
  SET_DEVICE
}
