// import myImage from '../images/ash_ketchum.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faDocker, faGitAlt, faPython, faNode, faJsSquare, faAws, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faEnvelope, faCodeMerge, faComments, faMusic } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

export default function Tiles () {
    return (
        <section className="tile is-ancestor">
            <div className="tile is-vertical is-8">
                <div className="tile">
                    <div className="tile is-parent is-vertical">
                        <motion.article className="tile is-child notification is-warning" whileHover={{ scale: 1.1 }}>
                            <p className="title">"Every Puzzle has an Answer"</p>
                            <p className="subtitle">-Professor Layton</p>
                        </motion.article>
                        <motion.article className="tile is-child notification is-info" whileHover={{ scale: 1.1 }}>
                            <p className="title ml-4">
                                Contact Me
                                <FontAwesomeIcon className='fa ml-3' icon={faComments}/>
                            </p>
                            <div className='is-flex is-justify-content-space-evenly is-align-items-center'>
                                <FontAwesomeIcon className='fa-3x is-clickable' icon={faLinkedin} onClick={() => window.open('https://www.linkedin.com/in/vincent-raimondi-8ab8971b6/')}/>
                                <FontAwesomeIcon className='fa-3x is-clickable' icon={faGithub} onClick={() => window.open('https://github.com/vraimondi04')}/>
                                <FontAwesomeIcon className='fa-3x is-clickable' icon={faInstagram} onClick={() => window.open('https://www.instagram.com/vincent.raimondi4/')}/>
                                <FontAwesomeIcon className='fa-3x is-clickable' icon={faEnvelope} onClick={() => window.open('mailto:vraim001@ucr.edu')}/>
                            </div>
                        </motion.article>
                    </div>
                    <div className="tile is-parent">
                        <motion.article className="tile is-child notification is-danger" whileHover={{ scale: 1.1 }}>
                            <p className="title">Hi! I'm Vincent.</p>
                            <p className="subtitle ml-1">Software Developer and Pokemon Trainer</p>
                            <figure className="image is-fullwidth">
                                <img className="ml-2" src='https://images.nintendolife.com/ce0215c1a817d/maxresdefault.large.jpg' alt='pokemon trainer'/>
                            </figure>
                        </motion.article>
                    </div>
                </div>
                <div className="tile is-parent">
                    <motion.article className="tile is-child notification is-link" whileHover={{ scale: 1.1 }}>
                        <p className="title">
                            Technologies + Tools
                            <FontAwesomeIcon className='fa ml-3' icon={faCodeMerge}/>
                        </p>
                        <div className='is-flex-wrap-wrap is-justify-content-space-evenly is-align-items-center'>
                            <FontAwesomeIcon className='fa-3x' icon={faReact}/>
                            <FontAwesomeIcon className='fa-3x' icon={faNode}/>
                            <FontAwesomeIcon className='fa-3x' icon={faPython}/>
                            <FontAwesomeIcon className='fa-3x' icon={faJsSquare}/>
                            <FontAwesomeIcon className='fa-3x' icon={faDocker}/>
                            <FontAwesomeIcon className='fa-3x' icon={faGitAlt}/>
                            <FontAwesomeIcon className='fa-3x' icon={faDatabase}/>
                            <FontAwesomeIcon className='fa-3x' icon={faAws}/>
                        </div>
                        <div className="content">
                            {/* <!-- Content --> */}
                        </div>
                    </motion.article>
                </div>
            </div>
            <div className="tile is-parent">
                <motion.article className="tile is-child notification is-success" whileHover={{ scale: 1.1 }}>
                    <div className="content">
                        <p className="title">
                            What I'm Listening To
                            <FontAwesomeIcon className='fa ml-3' icon={faMusic}/>
                        </p>
                        {/* <p className="subtitle">Add form here?</p> */}
                        <div className="content">
                            <iframe src="https://open.spotify.com/embed/playlist/66pC4xWeliKhwNMukO5CEs?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        </div>
                    </div>
                </motion.article>
            </div>
        </section>
    )
}
