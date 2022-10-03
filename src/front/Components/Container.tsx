// import axios from 'axios'
import Tiles from './Tiles'
import About from './About'
import Projects from './Projects'
import Resume from './Resume'
import Spotify from './Spotify'
import Homepage from './Homepage'

export default function Container () {
    return (
        <div>
            <Homepage/>
            <About/>
            <Projects/>
            <Resume/>
            <Spotify/>
        </div>
    )
}
