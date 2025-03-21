import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { registerRestaurant } from '@/app/service/auth/restaurant/resgister'
import { sleep } from '@/app/utils/sleep'

import { signUpFormSchema } from './validation'

type SignUpForm = z.infer<typeof signUpFormSchema>

export function useSignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpFormSchema),
  })

  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: registerRestaurant,
  })

  async function handleSignIn(data: SignUpForm) {
    await registerRestaurantFn(data)

    try {
      await sleep(2000)
      toast('Restaurante cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      })
    } catch (error) {
      toast('Erro ao cadastrar restaurante.')
    }
  }

  return {
    handleSubmit,
    handleSignIn,
    register,
    isSubmitting,
  }
}
