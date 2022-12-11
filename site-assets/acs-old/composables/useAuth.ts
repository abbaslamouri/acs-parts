import { ISession } from '~/types/ISession'
import { IUser } from '~/types/IUser'
import { useErrorMsg, useUserAuth, useLoggedInUserName, useIsAuthenticated } from './states'

const useAuth = () => {
  const errorMsg = useErrorMsg()
  const userAuth = useUserAuth()
  const loggedInUserName = useLoggedInUserName()
  const isAuthenticated = useIsAuthenticated()

  const signup = async (user: IUser, url: string) => {
    errorMsg.value = ''
    try {
      const response = await $fetch<ISession>(`/api/v1/auth/signup`, {
        method: 'POST',
        body: { user, url },
      })

      return response
    } catch (err) {
      console.log('MYERROR', err)
      if (err.data && err.data.statusMessage) errorMsg.value = err.data.statusMessage
      return false
    }
  }

  const verifyEmail = async (email: string, signupToken: any) => {
    errorMsg.value = ''
    try {
      const response = await $fetch(`/api/v1/auth/verify-email`, {
        method: 'POST',
        body: { email, signupToken },
      })
      if (response && response.userName) {
        loggedInUserName.value = response.userName
        isAuthenticated.value = true
      }
      return response
    } catch (err) {
      console.log('MYERROR', err.data)
      if (err.data && err.data.statusMessage) errorMsg.value = err.data.statusMessage
      return false
    }
  }

  const signin = async (user: IUser) => {
    errorMsg.value = ''
    try {
      const response = await $fetch(`/api/v1/auth/signin`, {
        method: 'POST',
        body: user,
      })
      if (response && response.userName) {
        loggedInUserName.value = response.userName
        isAuthenticated.value = true
      }
      return response
    } catch (err) {
      console.log('MYERROR', err.data)
      if (err.data && err.data.statusMessage) errorMsg.value = err.data.statusMessage
      return false
    }
  }

  const signout = async (user: IUser) => {
    errorMsg.value = ''
    try {
      const response = await $fetch(`/api/v1/auth/signout`, {
        method: 'POST',
        body: user,
        headers: {
          Authorization: `Bearer ${userAuth.value}`,
        },
      })
      // if (response ) {
      loggedInUserName.value = ''
      isAuthenticated.value = false
      // }
      return response
    } catch (err) {
      console.log('MYERROR', err.data)
      if (err.data && err.data.statusMessage) errorMsg.value = err.data.statusMessage
      return false
    }
  }

  const forgotPassword = async (email: string) => {
    errorMsg.value = ''
    try {
      const response = await $fetch(`/api/v1/auth/forgot-password`, {
        method: 'POST',
        body: email,
      })
      return response
    } catch (err) {
      console.log('MYERROR', err)
      if (err.data && err.data.statusMessage) errorMsg.value = err.data.statusMessage
      return false
    }
  }

  const resetPassword = async (payload: IUser) => {
    errorMsg.value = ''
    try {
      const response = await $fetch(`/api/v1/auth/reset-password`, {
        method: 'POST',
        body: payload,
      })
      return response
    } catch (err) {
      console.log('MYERROR', err)
      if (err.data && err.data.statusMessage) errorMsg.value = err.data.statusMessage
      return false
    }
  }

  // const signin = async (user) => {
  //   try {
  //     const { data, pending, error } = await useFetch(`${config.apiUrl}/auth/signin`, {
  //       method: 'POST',
  //       body: user,
  //     })
  //     if (error.value) throw error.value
  //     if (data.value && data.value.status === 'fail') {
  //       if (process.client) errorMsg.value = data.value.message
  //       return false
  //     }
  //     return data.value
  //   } catch (err) {
  //     console.log('MYERROR', err)
  //     errorMsg.value = err.data && err.data.message ? err.data.message : err.message ? err.message : ''
  //     return false
  //   }
  // }

  const fetchLoggedInUser = async () => {
    errorMsg.value = ''
    try {
      const response = await $fetch(`/api/v1/auth/loggedin-user`, {
        headers: {
          Authorization: `Bearer ${userAuth.value}`,
        },
      })
      return response
    } catch (err) {
      console.log('MYERROR', err)
      if (err.data && err.data.statusMessage) errorMsg.value = err.data.statusMessage
      return false
    }
    // errorMsg.value = ''
    // message.value = ''
    // // const token =
    // //   useCookie('auth') && useCookie('auth').value && useCookie('auth').value.token
    // //     ? useCookie('auth').value.token
    // //     : null
    // console.log('KKKKKKKK', token.value)
    // try {
    //   const response = await fetch(`${config.apiUrl}/users/fetch-loggedin-user`, {
    //     method: 'GET',
    //     // body: JSON.stringify(payload),
    //     headers: new Headers({
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${token.value}`,
    //     }),
    //   })
    //   if (response.ok) {
    //     const data = await response.json()
    //     // const tokenCookie = useCookie('token', { maxAge: data.cookieExpires * 24 * 60 * 60 })
    //     // const userCookie = useCookie('user', { maxAge: data.cookieExpires * 24 * 60 * 60 })
    //     // tokenCookie.value = data.token
    //     // userCookie.value = data.user
    //     // loggedInUser.value = userCookie.value
    //     // token.value = tokenCookie.value
    //     // isAuthenticated.value = true
    //     return data
    //   }
    //   if (!response.headers.get('content-type')?.includes('application/json')) throw 'Something went terribly wrong'
    //   throw getErrorStr((await response.json()).errors)
    // } catch (err) {
    //   console.log('MYERROR', err)
    //   errorMsg.value = err
    //   return false
    // }
    // const { data, pending, error } = await useFetch(`${config.apiUrl}/users/fetchLoggedIn`, {
    //   headers: { Authorization: `Bearer ${token}` },
    // })
    // if (error.value) throw error.value
    // if (data.value.status === 'fail') {
    //   if (process.client) errorMsg.value = data.value.message
    //   return false
    // }
    // console.log('FETCH Loggedin', data.value)
    // return data.value.doc
    // } catch (err) {
    // if (process.client) {
    //   console.log('MYERROR', err)
    //   errorMsg.value = err.data && err.data.message ? err.data.message : err.message ? err.message : ''
    // }
    // return false
    // }
  }

  const updateLoggedInUserInfo = async (body) => {
    errorMsg.value = ''
    try {
      const response = await $fetch(`/api/v1/auth/loggedin-info`, {
        method: 'POST',
        body,
        headers: {
          Authorization: `Bearer ${userAuth.value}`,
        },
      })
      return response
    } catch (err) {
      console.log('MYERROR', err)
      if (err.data && err.data.statusMessage) errorMsg.value = err.data.statusMessage
      return false
    }

    // errorMsg.value = ''
    // message.value = ''
    // const token =
    //   useCookie('auth') && useCookie('auth').value && useCookie('auth').value.token
    //     ? useCookie('auth').value.token
    //     : null
    // try {
    //   // const { data, pending, error } = await useFetch(`${config.apiUrl}/users/updateLoggedInData`, {
    //   //   method: 'PATCH',
    //   //   body: payload,
    //   //   headers: { Authorization: `Bearer ${token}` },
    //   // })
    //   // if (error.value) throw error.value
    //   // if (data.value && data.value.status === 'fail') {
    //   //   if (process.client) errorMsg.value = data.value.message
    //   //   return false
    //   // }
    //   // return data.value.doc
    // } catch (err) {
    //   console.log('MYERROR', err)
    //   errorMsg.value = err.data && err.data.message ? err.data.message : err.message ? err.message : ''
    //   return false
    // }
  }
  const updateLoggedInUserPwd = async (body: IUser) => {
    console.log('LLLLLLLL')
    errorMsg.value = ''
    try {
      const response = await $fetch(`/api/v1/auth/loggedin-pwd`, {
        method: 'POST',
        body,
        headers: {
          Authorization: `Bearer ${userAuth.value}`,
        },
      })
      return response
    } catch (err) {
      console.log('MYERROR', err)
      if (err.data && err.data.statusMessage) errorMsg.value = err.data.statusMessage
      return false
    }
  }

  // const resetPasswordxxxx = async (payload) => {
  //   errorMsg.value = ''
  //   message.value = ''
  //   console.log(payload)
  //   try {
  //     const { data, pending, error } = await useFetch(`${config.apiUrl}/auth/resetpassword/${payload.token}`, {
  //       method: 'PATCH',
  //       body: {
  //         password: payload.password,
  //       },
  //     })
  //     console.log('DATA', data.value)
  //     if (error.value) throw error.value
  //     if (data.value && data.value.status === 'fail') {
  //       if (process.client) errorMsg.value = data.value.message
  //       return false
  //     }
  //     return data.value
  //   } catch (err) {
  //     if (process.client) {
  //       console.log('MYERROR', err)
  //       errorMsg.value = err.data && err.data.message ? err.data.message : err.message ? err.message : ''
  //       return false
  //     }
  //   }
  // }

  // const signout = async () => {
  // errorMsg.value = ''
  // message.value = ''
  // let response
  // console.log(config.apiUrl)
  // try {
  //   response = await fetch(`${config.apiUrl}/auth/signout`, {
  //     method: 'POST',
  //     headers: new Headers({
  //       'Content-Type': 'application/json',
  //       // Authorization: `Bearer ${token && token.value ? token.value : ''}`,
  //     }),
  //   })
  //   if (response.ok) {
  //     const tokenCookie = useCookie('token', { maxAge: 0 })
  //     const userCookie = useCookie('loggedInUser', { maxAge: 0 })
  //     tokenCookie.value = ''
  //     userCookie.value = ''
  //     loggedInUser.value = ''
  //     token.value = ''
  //     isAuthenticated.value = false
  //     return true
  //   }
  //   if (!response.headers.get('content-type')?.includes('application/json')) throw response.statusText
  //   throw getErrorStr((await response.json()).errors)
  // } catch (err) {
  //   console.log('MYERROR', err)
  //   errorMsg.value = err
  //   console.log(errorMsg.value)
  //   return false
  // }
  // }

  // const login = async (user) => {
  //   console.log('here')
  //   try {
  //     const response = await $fetch('/api/v1/auth/login', {
  //       method: 'POST',
  //       body: user,
  //     })
  //     return response
  //   } catch (error) {
  //     return { ok: false, errorMsg: error.data }
  //   }
  // }
  // const logout = async () => {
  //   try {
  //     await $fetch('/api/v1/auth/logout')
  //     return true
  //   } catch (error) {
  //     return { ok: false, errorMsg: error.data }
  //   }
  // }

  // const forgotPassword = async (email) => {
  //   try {
  //     const response = await $fetch('/api/v1/auth/forgot-password', {
  //       method: 'POST',
  //       body: { email },
  //     })
  //     return response
  //   } catch (error) {
  //     return { ok: false, errorMsg: error.data }
  //   }
  // }

  // const resetPassword = async (payload) => {
  //   console.log(payload)
  //   try {
  //     const response = await $fetch('/api/v1/auth/reset-password', {
  //       method: 'PATCH',
  //       body: payload,
  //     })
  //     return response
  //   } catch (error) {
  //     return { ok: false, errorMsg: error.data }
  //   }
  // }

  return {
    // loggedInUser,
    // token,
    // isAuthenticated,
    // isAdmin,
    signup,
    // signupEmail,
    verifyEmail,
    signin,
    signout,
    fetchLoggedInUser,
    updateLoggedInUserInfo,
    updateLoggedInUserPwd,
    forgotPassword,
    resetPassword,
  }
}

export default useAuth
