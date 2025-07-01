import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <div className="flex flex-col gap-y-4">
        <Outlet />
    </div>
  )
}

export default AuthLayout