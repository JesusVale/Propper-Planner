import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

interface Props {
    children: React.ReactNode,
    to: string,
}

function HeaderLinkTab({children, to}: Props) {

  const { pathname } = useLocation();

  return (
    <Link to={to} className={`font-bold rounded-2xl py-2 px-4${pathname === to? " bg-main-color text-white": ""}`}>{children}</Link>
  )
}

export default HeaderLinkTab