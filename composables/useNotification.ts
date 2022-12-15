// import ISignupData from '~/types/ISignupData'
const useNotification = () => {
  const notification = useState('notification', () => {
    return {
      message: '',
      type: 'error',
      duration: 0,
    }
  })

  const setNotification = (payload: any) => {
    notification.value = {
      message: payload.message,
      type: payload.type ? payload.type : 'error',
      duration: payload.duration ? payload.duration : 0,
    }
  }

  return {
    notification,
    setNotification,
  }
}
export default useNotification
