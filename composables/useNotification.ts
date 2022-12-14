// import ISignupData from '~/types/ISignupData'
const useNotification = () => {
  const notification = useState('notification', () => {
    return {
      text: '',
      type: 'error',
      duration: 0,
    }
  })

  const setNotification = (payload: any) => {
    notification.value = {
      text: payload.text,
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
