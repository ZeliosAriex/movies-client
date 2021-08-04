import { useLocalStorage } from '../../../hooks'

// TODO Finish
export const useLogin = () => {
  const [session, _setSession] = useLocalStorage(
    'session',
    {}
  )

  console.log(session)
}
