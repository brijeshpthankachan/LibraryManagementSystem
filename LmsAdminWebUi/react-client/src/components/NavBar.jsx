import { Menubar } from 'primereact/menubar'
import { navbarItems } from '../configuration/NavbarConfig'

const NavBar = () => {
    return (
        <div className="card">
            <Menubar model={navbarItems} />
        </div>
    )
}

export default NavBar