import { zodResolver } from '@hookform/resolvers/zod'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z as zod } from 'zod'

import { sleep } from '@/app/utils/sleep'
import { Button } from '@/view/components/ui/button'
import { Input } from '@/view/components/ui/input'
import { Label } from '@/view/components/ui/label'

const signUpFormSchema = zod.object({
  restaurantName: zod.string(),
  managerName: zod.string(),
  phone: zod.string(),
  email: zod.string().email(),
})

type SignUpForm = zod.infer<typeof signUpFormSchema>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpFormSchema),
  })

  async function handleSignIn(data: SignUpForm) {
    console.log({ data })
    try {
      await sleep(2000)
      toast('Restaurante cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in'),
        },
      })
    } catch (error) {
      toast('Erro ao cadastrar restaurante.')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Fazer login</Link>
        </Button>
      </div>
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Criar conta grátis
          </h1>
          <p className="text-muted-foreign text-sm">
            Seja um parceiro e comece suas vendas!
          </p>
        </div>
        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Nome do estabelecimento</Label>
            <Input
              id="restaurantName"
              type="text"
              {...register('restaurantName')}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Seu nome</Label>
            <Input id="managerName" type="text" {...register('managerName')} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" {...register('email')} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Seu celular</Label>
            <Input id="phone" type="tel" {...register('phone')} />
          </div>

          <Button className="w-full" type="submit" disabled={isSubmitting}>
            Finalizar cadastro
          </Button>

          <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
            Ao continuar, você concorda com nosso{' '}
            <a className="underline underline-offset-4" href="#">
              Termos de serviço
            </a>{' '}
            e{' '}
            <a className="underline underline-offset-4" href="#">
              políticas de privacidade
            </a>
          </p>
        </form>
      </div>
    </>
  )
}
