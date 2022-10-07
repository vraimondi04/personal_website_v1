// import axios from 'axios'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'

export default function Spotify (props:any) {
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
        <section className='section is-medium'>
            <h1 className="title">My Spotify</h1>

            {!token
                ? <a className="button is-success" href={`https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=https://vincentraimondi.com/&response_type=token`}>
                    Spotify<FontAwesomeIcon className='ml-1' icon={faSpotify}/>
                </a>
                : <a className="button is-success is-inverted" onClick={logout}>
                    Logout
                </a>
            }

        </section>
    )
}
