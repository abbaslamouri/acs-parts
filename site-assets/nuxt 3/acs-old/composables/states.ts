export const useErrorMsg = () => useState<string>('errorMsg', () => '')
export const useMessage = () => useState<string>('message', () => '')
export const useLoggedInUserName = () =>
  useState('loggedInUserName', () =>
    useCookie('userName') && useCookie('userName').value ? useCookie('userName').value : ''
  )
export const useIsAuthenticated = () =>
  useState('isAuthenticated', () => (useCookie('authToken') && useCookie('authToken').value ? true : false))
export const useUserAuth = () =>
  useState('authToken', () =>
    useCookie('authToken') && useCookie('authToken').value ? useCookie('authToken').value : ''
  )
export const showCartSlideout = () => useState<boolean>('showCart', () => false)
