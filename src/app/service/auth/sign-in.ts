import { httpClient } from '@/app/lib/axios'

export interface SignInBody {
  email: string
}

export async function signIn(body: SignInBody) {
  await httpClient.post('/authenticate', body)
}
