let initialState = {
  isAdminAuth: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_ADMIN_AUTH':
      return ({
        ...state,
        isAdminAuth: action.payload,
      })
    default:
      return state;
  }
}

export { reducer }