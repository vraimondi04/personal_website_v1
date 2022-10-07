import Tiles from './Tiles'
import { useState } from 'react'

export default function Homepage () {
    const [click, setClick] = useState(false)
    return (
        <section className="hero has-background-link-light is-fullheight">
            {/* Hero head: will stick at the top */}
            <section className="hero-head" id='tiles'>
                <header className="navbar is-fixed-top has-background-link-light">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="#tiles">
                                Vincent Raimondi
                            </a>
                            <span className="navbar-burger" data-target="navbarMenuHeroC" onClick={() => setClick(!click)}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>

                        <div id="navbarMenuHeroC" className={`navbar-menu ${click ? 'is-active' : ''}`}>
                            <div className="navbar-end">
                                <a className="navbar-item" href='#about'>
                                    About
                                </a>
                                <a className="navbar-item" href='#projects'>
                                    Projects
                                </a>
                                <a className="navbar-item" href='#resume'>
                                    Resume
                                </a>
                                <a className="navbar-item" href='#spotify'>
                                    Spotify
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
            </section>

            {/* Hero content: will be in the middle */}
            {/* TRY TO IMPLEMENT BULMA TILES INTO THE HERO-BODY */}
            <div className="hero-body">
                <section className="container has-text-centered">
                    <Tiles/>
                </section>
            </div>

        </section>
    )
}
