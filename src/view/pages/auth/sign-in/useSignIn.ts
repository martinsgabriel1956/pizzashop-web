import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z as zod } from 'zod'

import { signIn } from '@/app/service/auth/sign-in'

const signInFormSchema = zod.object({
  email: zod.string().email(),
})

type SignInForm = zod.infer<typeof signInFormSchema>

export function useSignIn() {
  const [searchParams] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({
        email: data.email,
      })

      toast('Enviamos um link de autenticação para seu e-mail!', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignIn(data),
        },
      })
    } catch (error) {
      toast('E-mail inválido!')
    }
  }

  return {
    handleSubmit,
    handleSignIn,
    isSubmitting,
    register,
  }
}
