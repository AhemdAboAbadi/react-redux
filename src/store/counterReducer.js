//Reducer

const initialState = {
  count: 5
}
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        count: state.count + action.payload
      }
    case "DEC":
      return {
        ...state,
        count: state.count - action.payload
      }
    default: return state
  }
}

export default counterReducer