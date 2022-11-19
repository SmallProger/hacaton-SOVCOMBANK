const setIsAdminAuth = (isAdminAuth) => {
  console.log(isAdminAuth, 'SET_IS_ADMIN_AUTH')
  return {
    payload: isAdminAuth,
    type: 'IS_ADMIN_AUTH',
  }
}

export { setIsAdminAuth }