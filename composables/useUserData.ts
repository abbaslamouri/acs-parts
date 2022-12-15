// import ISignupData from '~/types/ISignupData'
const useUserData = () => {
  const userData = useState('user', () => {
    return useCookie('userData').value
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
