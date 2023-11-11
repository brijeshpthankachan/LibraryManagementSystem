import React from 'react'
import { Menubar } from 'primereact/menubar'
import { navbarItems } from '../configuration/NavbarConfig'

export default function NavBar() {

    return (
        <div className="card">
            <Menubar model={navbarItems} />
        </div>
    )
}
