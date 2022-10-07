// import axios from 'axios'
import About from './About'
import Projects from './Projects'
import Resume from './Resume'
import Spotify from './Spotify'
import Homepage from './Homepage'

export default function Container () {
    return (
        <div>
            <Homepage/>
            <section id='about'>
                <About/>
            </section>

            <section id='projects'>
                <Projects/>
            </section>

            <section id='resume'>
                <Resume/>
            </section>

            <section id='spotify'>
                <Spotify/>
            </section>
        </div>
    )
}
