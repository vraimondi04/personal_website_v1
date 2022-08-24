// import myImage from '../images/ash_ketchum.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faDocker, faGitAlt, faPython, faNode, faJsSquare, faAws } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

export default function Tiles () {
    return (
        <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
                <div className="tile">
                    <div className="tile is-parent is-vertical">
                        <article className="tile is-child notification is-success">
                            <p className="title">Vertical...</p>
                            <p className="subtitle">Top tile</p>
                        </article>
                        <article className="tile is-child notification is-warning">
                            <p className="title has-text-dark">...tiles</p>
                            <p className="subtitle has-text-dark">Bottom tile</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-danger">
                            <p className="title">Hi! I'm Vincent.</p>
                            <p className="subtitle">Software Developer and Pokemon Trainer</p>
                            <figure className="image is-fullwidth">
                                <img src='https://images.nintendolife.com/ce0215c1a817d/maxresdefault.large.jpg' alt='pokemon trainer'/>
                            </figure>
                        </article>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification is-link">
                        <p className="title">Technologies and Tools</p>
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
                <article className="tile is-child notification is-info">
                    <div className="content">
                        <p className="title">Tall tile</p>
                        <p className="subtitle">With even more content</p>
                        <div className="content">
                            {/* <!-- Content --> */}
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}
