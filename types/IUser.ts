export default interface IUser {
  name?: string
  email: string
  password: string
  passwordConfirm?: string
  isAuthenticated?: boolean
  authToken?: string
}
