import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faHtml5, faCss3Alt, faReact, faNode, faDocker, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function Projects () {
    return (
        <div>
            <section className='section is-medium has-background-link-light' id='projects'>
                <h1 className="title">My Projects</h1>
                <h2 className="subtitle"></h2>

                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title"> Personal Website</p>
                            <p className="subtitle">
                                (You are here
                                <FontAwesomeIcon className='fa ml-2 mr-1' icon={faLocationDot}/>
                                ) GitLab
                                <FontAwesomeIcon className='fa ml-3 is-clickable' icon={faArrowUpRightFromSquare} onClick={() => window.open('https://gitlab.com/vraimondi04/what-is-vincent-listening-to')}/>
                            </p>
                            <div className="content">
                                <p>Built and deployed with React, Bulma, Node.js, Express.js, Docker, ESLint, Husky, and the Google Cloud Platform.</p>
                                <p>Utilize the Spotify Web API to create and display user generated recommendations through Spotify’s 20+ endpoints.</p>
                                <FontAwesomeIcon className='fa-3x ml-5 mr-5' icon={faReact}/>
                                <FontAwesomeIcon className='fa-3x ml-3 mr-5' icon={faNode}/>
                                <FontAwesomeIcon className='fa-3x ml-3 mr-5' icon={faDocker}/>
                                <FontAwesomeIcon className='fa-3x ml-3' icon={faGoogle}/>
                            </div>
                        </article>
                    </div>

                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title">ScottyMaps</p>
                            <p className="subtitle">
                                Devpost
                                <FontAwesomeIcon className='fa ml-3 is-clickable' icon={faArrowUpRightFromSquare} onClick={() => window.open('https://devpost.com/software/scottymaps')}/>
                            </p>
                            <div className="content">
                                <p>Web application with a personalized Google Maps of UC Riverside that helps guide over 20k+ undergraduate students across campus.</p>
                                <p>Used Google Maps API and digital art to design over 15 campus landmarks as custom locational markers.</p>
                                <FontAwesomeIcon className='fa-3x ml-6 mr-5' icon={faHtml5}/>
                                <FontAwesomeIcon className='fa-3x ml-4 mr-5' icon={faCss3Alt}/>
                                <FontAwesomeIcon className='fa-3x ml-4 mr-5' icon={faJsSquare}/>
                                <FontAwesomeIcon className='fa-3x ml-4' icon={faGoogle}/>
                            </div>
                        </article>
                    </div>

                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title">PlanetHer</p>
                            <p className="subtitle">
                                Devpost
                                <FontAwesomeIcon className='fa ml-3 is-clickable' icon={faArrowUpRightFromSquare} onClick={() => window.open('https://devpost.com/software/planether')}/>
                            </p>
                            <div className="content">
                                <p>A user-friendly web application that teaches users information about our solar system.</p>
                                <p>Designed 10 UI components such as animations and planetary positions with JavaScript and CSS.</p>
                                <FontAwesomeIcon className='fa-3x ml-6 mr-5' icon={faHtml5}/>
                                <FontAwesomeIcon className='fa-3x ml-6 mr-5' icon={faCss3Alt}/>
                                <FontAwesomeIcon className='fa-3x ml-6 mr-5' icon={faJsSquare}/>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    )
}
