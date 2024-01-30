import { Helmet } from 'react-helmet-async'

import { Button } from '@/view/components/ui/button'
import { Input } from '@/view/components/ui/input'
import { Label } from '@/view/components/ui/label'

export function SignIn() {
  return (
    <>
      <Helmet title="Login" />
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar painel
          </h1>
          <p className="text-muted-foreign text-sm">
            Acompanhe suas venda pelo painel do parceiro!
          </p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" />
          </div>

          <Button className="w-full" type="submit">
            Acessar painel
          </Button>
        </form>
      </div>
    </>
  )
}
