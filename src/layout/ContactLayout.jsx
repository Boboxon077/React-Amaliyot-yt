import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function ContactLayout() {
    return (
        <div>
            <h1>Contact</h1>
            <p>Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quis aliquid, harum
                aliquam dolore error, atque voluptatum
                ab voluptate doloremque possimus quidem
                nihil et velit? Asperiores quia facilis
                quis impedit a.</p>

                <nav>
                    <NavLink to="faq">Faq</NavLink>
                    <NavLink to="Form">Form</NavLink>
                </nav>

                <Outlet/>
        </div>
    )
}

export default ContactLayout