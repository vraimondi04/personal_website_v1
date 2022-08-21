import axios from 'axios'

export default function Container () {
    // have function that makes axios post request for spotify information from backend
    async function fetchData () {
        const response = await axios.post('/api')
        console.log(response.data)
    }
    return (
        <section className="hero is-link is-fullheight">
            {/* Hero head: will stick at the top */}
            <div className="hero-head">
                <header className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item">
                                What is Vincent Listening to?
                            </a>
                            <span className="navbar-burger" data-target="navbarMenuHeroC">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>

                        <div id="navbarMenuHeroC" className="navbar-menu">
                            <div className="navbar-end">
                                <a className="navbar-item">
                                    About
                                </a>
                                <a className="navbar-item">
                                    Projects
                                </a>
                                <a className="navbar-item">
                                    Resume
                                </a>
                                <span className="navbar-item">
                                    <a className="button is-success is-inverted">
                                        <span className="icon">
                                            <i className="fab fa-github"></i> {/* change to spotify icon ? */}
                                        </span>
                                        <span>Spotify</span>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

            {/* Hero content: will be in the middle */}
            {/* TRY TO IMPLEMENT BULMA TILES INTO THE HERO-BODY */}
            <div className="hero-body">
                <div className="container has-text-centered">
                    <button className="title" onClick={fetchData}>
                        Who is Frank Ocean?
                    </button>
                    <p className="subtitle">
                        -Reub
                    </p>
                </div>
            </div>

            {/* Hero footer: will stick at the bottom */}
            <div className="hero-foot">
                <nav className="tabs is-boxed is-fullwidth">
                    <div className="container">
                        <ul>
                            <li className="is-active"><a>Overview</a></li>
                            <li><a>Modifiers</a></li>
                            <li><a>Grid</a></li>
                            <li><a>Elements</a></li>
                            <li><a>Components</a></li>
                            <li><a>Layout</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    )
}
