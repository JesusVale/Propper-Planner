import { CalendarIcon } from "../icons";
import HeaderLinkTab from "./header-link-tab";

const headerRoutes = [
  {
    text: "Calendary",
    path: "/"
  },
  {
    text: "My Routine",
    path: "/routine"
  }
]

function Header() {
  return (
    <header className="flex py-4 px-6 justify-between shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex gap-2 items-center">
            <CalendarIcon width={35} height={35} color="#0466F6" />
            <p className="font-title-font font-black text-2xl">Proper <span className="text-main-color">Planner</span></p>
        </div>
        <div className="flex gap-3 items-center">
            {
              headerRoutes.map(({text, path}) => (
                <HeaderLinkTab key={path} to={path}>{text}</HeaderLinkTab>
              ))
            }
        </div>
        

    </header>
  )
}

export default Header