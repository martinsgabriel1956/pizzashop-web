import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="">
      <h1>Cabeçalho</h1>

      <div className="">
        <Outlet />
      </div>
    </div>
  )
}
