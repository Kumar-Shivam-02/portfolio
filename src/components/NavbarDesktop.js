import React from "react"

export default function NavbarDesktop() {
    return (
        <nav id="desktop-nav">
            <div className="logo">Kumar Shivam</div>
            <div>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}