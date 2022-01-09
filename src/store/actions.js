// Action 
const increment = (num) => {
  return {
    type: 'INC',
    payload: num ? num : 1
  }
}

const decrement = () => {
  return {
    type: 'DEC',
    payload: 1
  }
}

export { increment, decrement }