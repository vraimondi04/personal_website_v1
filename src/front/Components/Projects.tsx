import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faHtml5, faCss3Alt, faReact, faNode, faDocker, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

export default function Projects () {
    return (
        <section className='section is-medium has-background-link-light'>
            <h1 className="title">My Projects</h1>
            <h2 className="subtitle"></h2>

            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <motion.article className="tile is-child box" whileHover={{ scale: 1.1 }}>
                        <p className="title"> Personal Website</p>
                        <p className="subtitle">
                            (You are here
                            <FontAwesomeIcon className='fa pl-2 pr-1' icon={faLocationDot}/>
                            ) GitLab
                            <a href='https://gitlab.com/vraimondi04/what-is-vincent-listening-to' target='_blank' rel="noreferrer">
                                <FontAwesomeIcon className='fa ml-3 is-clickable' icon={faArrowUpRightFromSquare}/>
                            </a>
                        </p>
                        <div className="content">
                            <p>Built and deployed with React, Bulma, Node.js, Express.js, Docker, ESLint, Husky, and the Google Cloud Platform.</p>
                            <p>Utilize the Spotify Web API to create and display user generated recommendations through Spotify’s 20+ endpoints.</p>
                            <div className='is-flex is-justify-content-space-evenly is-align-items-center'>
                                <FontAwesomeIcon className='fa-3x' icon={faReact}/>
                                <FontAwesomeIcon className='fa-3x' icon={faNode}/>
                                <FontAwesomeIcon className='fa-3x' icon={faDocker}/>
                                <FontAwesomeIcon className='fa-3x' icon={faGoogle}/>
                            </div>
                        </div>
                    </motion.article>
                </div>

                <div className="tile is-parent">
                    <motion.article className="tile is-child box" whileHover={{ scale: 1.1 }}>
                        <p className="title">NBA Analysis</p>
                        <p className="subtitle">
                            Github
                            <a href='https://github.com/vraimondi04/CS180' target='_blank' rel="noreferrer">
                                <FontAwesomeIcon className='fa ml-3 is-clickable' icon={faArrowUpRightFromSquare}/>
                            </a>
                        </p>
                        <div className="content">
                            <p>Visualized NBA trends over the past 20 years using a Kaggle dataset with React Charts.js and Node.js</p>
                            <p>Optimized performance of CRUD operations for player and team statistics with client-side rendering for 5 analytics features of the web application.</p>
                            <div className='is-flex is-justify-content-space-evenly'>
                                <FontAwesomeIcon className='fa-3x' icon={faReact}/>
                                <FontAwesomeIcon className='fa-3x' icon={faNode}/>
                                <FontAwesomeIcon className='fa-3x' icon={faJsSquare}/>
                            </div>
                        </div>
                    </motion.article>
                </div>

                <div className="tile is-parent">
                    <motion.article className="tile is-child box" whileHover={{ scale: 1.1 }}>
                        <p className="title">ScottyMaps</p>
                        <p className="subtitle">
                            Devpost
                            <a href='https://devpost.com/software/scottymaps' target='_blank' rel="noreferrer">
                                <FontAwesomeIcon className='fa ml-3 is-clickable' icon={faArrowUpRightFromSquare}/>
                            </a>
                        </p>
                        <div className="content">
                            <p>Web application with a personalized Google Maps of UC Riverside that helps guide over 20k+ undergraduate students across campus.</p>
                            <p>Used Google Maps API and digital art to design over 15 campus landmarks as custom locational markers.</p>
                            <div className='is-flex is-justify-content-space-evenly'>
                                <FontAwesomeIcon className='fa-3x' icon={faHtml5}/>
                                <FontAwesomeIcon className='fa-3x' icon={faCss3Alt}/>
                                <FontAwesomeIcon className='fa-3x' icon={faJsSquare}/>
                                <FontAwesomeIcon className='fa-3x' icon={faGoogle}/>
                            </div>
                        </div>
                    </motion.article>
                </div>

                <div className="tile is-parent">
                    <motion.article className="tile is-child box" whileHover={{ scale: 1.1 }}>
                        <p className="title">PlanetHer</p>
                        <p className="subtitle">
                            Devpost
                            <a href='https://devpost.com/software/planether' target='_blank' rel="noreferrer">
                                <FontAwesomeIcon className='fa ml-3 is-clickable' icon={faArrowUpRightFromSquare}/>
                            </a>
                        </p>
                        <div className="content">
                            <p>A user-friendly web application that teaches users information about our solar system.</p>
                            <p>Designed 10 UI components such as animations and planetary positions with JavaScript and CSS.</p>
                            <div className='is-flex is-justify-content-space-evenly'>
                                <FontAwesomeIcon className='fa-3x' icon={faHtml5}/>
                                <FontAwesomeIcon className='fa-3x' icon={faCss3Alt}/>
                                <FontAwesomeIcon className='fa-3x' icon={faJsSquare}/>
                            </div>
                        </div>
                    </motion.article>
                </div>
            </div>
        </section>
    )
}
