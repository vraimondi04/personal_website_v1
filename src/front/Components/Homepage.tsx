import Tiles from "./Tiles"

export default function Homepage () {
    return (
        <div>
            <section className="hero has-background-link-light is-fullheight">
                {/* Hero head: will stick at the top */}
                <div className="hero-head">
                    <header className="navbar is-fixed-top has-background-link-light">
                        <div className="container">
                            <div className="navbar-brand">
                                <a className="navbar-item" onClick={() => {
                                    const anchor = document.querySelector('#tiles')
                                    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                }}>
                                    Vincent Raimondi
                                </a>
                                <span className="navbar-burger" data-target="navbarMenuHeroC" onClick={() => document.querySelector('.navbar-menu').classList.toggle('is-active')}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </div>

                            <div id="navbarMenuHeroC" className="navbar-menu">
                                <div className="navbar-end">
                                    <a className="navbar-item" onClick={() => {
                                        const anchor = document.querySelector('#about')
                                        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                    }}>
                                        About
                                    </a>
                                    <a className="navbar-item"onClick={() => {
                                        const anchor = document.querySelector('#projects')
                                        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                    }}>
                                        Projects
                                    </a>
                                    <a className="navbar-item" onClick={() => {
                                        const anchor = document.querySelector('#resume')
                                        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                    }}>
                                        Resume
                                    </a>
                                    <a className="navbar-item" onClick={() => {
                                        const anchor = document.querySelector('#spotify')
                                        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                    }}>
                                        Spotify
                                    </a>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>

                {/* Hero content: will be in the middle */}
                {/* TRY TO IMPLEMENT BULMA TILES INTO THE HERO-BODY */}
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <Tiles/>
                    </div>
                </div>

            </section>
        </div>
    )
}
