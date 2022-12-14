import IUser from '~/types/IUser'
const useUserData = () => {
  const userData = useState('user', () => {
    return {
      name: useCookie('userName') && useCookie('userName').value ? useCookie('userName').value : '',
      email: '',
      password: '',
      isAuthenticated: useState('isAuthenticated', () =>
        useCookie('authToken') && useCookie('authToken').value ? true : false
      ),
      authToken: useCookie('userAuthToken') && useCookie('userAuthToken').value ? useCookie('authToken').value : '',
    }
  })

  const setUserData = (user: any) => {
    userData.value = user
  }

  return {
    userData,
    setUserData,
  }
}
export default useUserData
