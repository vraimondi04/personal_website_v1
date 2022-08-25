// import myImage from '../images/ash_ketchum.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faDocker, faGitAlt, faPython, faNode, faJsSquare, faAws, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faEnvelope, faCodeMerge, faComments, faMusic } from '@fortawesome/free-solid-svg-icons'

export default function Tiles () {
    return (
        <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
                <div className="tile">
                    <div className="tile is-parent is-vertical">
                        <article className="tile is-child notification is-warning">
                            <p className="title">Who is Frank Ocean</p>
                            <p className="subtitle">-Reub</p>
                        </article>
                        <article className="tile is-child notification is-info">
                            <p className="title ml-4">
                                Contact Me
                                <FontAwesomeIcon className='fa ml-3' icon={faComments}/>
                            </p>
                            <FontAwesomeIcon className='fa-3x mr-5 ml-3 is-clickable' icon={faLinkedin} onClick={() => window.open('https://www.linkedin.com/in/vincent-raimondi-8ab8971b6/')}/>
                            <FontAwesomeIcon className='fa-3x mr-5' icon={faGithub}/>
                            <FontAwesomeIcon className='fa-3x mr-5' icon={faInstagram}/>
                            <FontAwesomeIcon className='fa-3x' icon={faEnvelope}/>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-danger">
                            <p className="title">Hi! I'm Vincent.</p>
                            <p className="subtitle ml-1">Software Developer and Pokemon Trainer</p>
                            <figure className="image is-fullwidth">
                                <img className="ml-2" src='https://images.nintendolife.com/ce0215c1a817d/maxresdefault.large.jpg' alt='pokemon trainer'/>
                            </figure>
                        </article>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification is-link">
                        <p className="title">
                            Technologies and Tools
                            <FontAwesomeIcon className='fa ml-3' icon={faCodeMerge}/>
                        </p>
                        <FontAwesomeIcon className='fa-3x mr-5 ml-4' icon={faReact}/>
                        <FontAwesomeIcon className='fa-3x mr-5' icon={faNode}/>
                        <FontAwesomeIcon className='fa-3x mr-5' icon={faPython}/>
                        <FontAwesomeIcon className='fa-3x mr-5' icon={faJsSquare}/>
                        <FontAwesomeIcon className='fa-3x mr-5' icon={faDocker}/>
                        <FontAwesomeIcon className='fa-3x mr-5' icon={faGitAlt}/>
                        <FontAwesomeIcon className='fa-3x mr-5' icon={faDatabase}/>
                        <FontAwesomeIcon className='fa-3x mr-5' icon={faAws}/>
                        <div className="content">
                            {/* <!-- Content --> */}
                        </div>
                    </article>
                </div>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child notification is-success">
                    <div className="content">
                        <p className="title">
                            Suggest Me Songs
                            <FontAwesomeIcon className='fa ml-3' icon={faMusic}/>
                        </p>
                        <p className="subtitle">add fav genres/songs?</p>
                        <div className="content">
                            {/* <!-- Content --> */}
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}
