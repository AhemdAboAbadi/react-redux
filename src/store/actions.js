// Action 
const increment = () => {
  return {
    type: 'INC',
    payload: 2
  }
}

const decrement = () => {
  return {
    type: 'DEC',
    payload: 1
  }
}

export default { increment, decrement }