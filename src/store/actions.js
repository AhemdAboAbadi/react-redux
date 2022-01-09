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

const login = () => {
  return {
    type: 'LOGIN',
  }
}


const logout = () => {
  return {
    type: 'LOGOUT',
  }
}

export { increment, decrement, login, logout }