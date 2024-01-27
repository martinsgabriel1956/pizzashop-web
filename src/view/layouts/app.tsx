import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="">
      <h1>Cabeçalho</h1>

      <div className="">
        <Outlet />
      </div>
    </div>
  )
}
