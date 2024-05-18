import { Outlet } from "react-router-dom"
import Header from "../components/header/header"

function Root() {
  return (
    <>
        <Header />
        <div className="content p-4">
            <Outlet />
        </div>
    </>
  )
}

export default Root