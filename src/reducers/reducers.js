let initialState = {
  isAdminAuth: false,
  id: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_ADMIN_AUTH':
      return ({
        ...state,
        isAdminAuth: action.payload,
      })
    case 'SET_ID':
      return ({
        ...state,
        id: action.payload,
      })
    default:
      return state;
  }
}

export { reducer }