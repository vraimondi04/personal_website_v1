// import axios from 'axios'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import Tiles from './Tiles'
import About from './About'

export default function Container () {
    const clientID = 'c6ebbba001ab459c9d4bd705a0a9671d'
    const [token, setToken] = useState('')

    const logout = () => {
        setToken('')
        window.localStorage.removeItem('token')
    }

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem('token')

        if (!token && hash) {
            token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1]
            // console.log(token)
            // window.location.hash = ''
            window.localStorage.setItem('token', token)
        }

        setToken(token)
    })

    // have function that makes axios post request for spotify information from backend
    // async function fetchData () {
    //     const response = await axios.post('/api')
    //     console.log(response.data)
    // }
    return (
        <div>
            <section className="hero has-background-link-light is-fullheight">
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
                                    <a className="navbar-item" onClick={() => {
                                        const anchor = document.querySelector('#about')
                                        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                    }}>
                                        About
                                    </a>
                                    <a className="navbar-item">
                                        Projects
                                    </a>
                                    <a className="navbar-item">
                                        Resume
                                    </a>
                                    {!token
                                        ? <span className="navbar-item">
                                            <a className="button is-success" href={`https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=http://localhost:3001&response_type=token`}>
                                                Spotify<FontAwesomeIcon className='ml-1' icon={faSpotify}/>
                                            </a>
                                        </span>
                                        : <span className="navbar-item">
                                            <a className="button is-success is-inverted" onClick={logout}>
                                                Logout
                                            </a>
                                        </span>}
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

            <About/>
        </div>
    )
}
