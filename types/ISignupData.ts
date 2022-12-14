export default interface IUser {
  name?: string
  email: string
  password: string
  isAuthenticated?: boolean
  authToken?: string
}
