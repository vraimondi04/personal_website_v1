import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faSchool, faCity, faAward, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

export default function About () {
    return (
        <div>
            <section className="section is-medium" id='about'>
                <h1 className="title">About Me (My Origin Story)</h1>
                <h2 className="subtitle">
                   I'm Vincent Raimondi, a senior Computer Science student at <strong>University of California, Riverside</strong>.
                </h2>

                <div className="timeline is-centered">
                    <header className="timeline-header">
                        <span className="tag is-medium is-link">The Beginning</span>
                    </header>

                    <div className="timeline-item is-link">
                        <div className="timeline-marker is-link"></div>
                        <div className="timeline-content">
                            <p className="heading">
                                September 2019
                                <FontAwesomeIcon className='fa-2x ml-3' icon={faSchool}/>
                            </p>
                            <p><strong>Started enrollment at UC Riverside</strong></p>
                            <p>-Majoring in Computer Science with Business Applications</p>
                            {/* <img className='ml-6 mt-2' src='https://upload.wikimedia.org/wikipedia/en/thumb/5/51/UC_Riverside_seal.svg/125px-UC_Riverside_seal.svg.png' alt='UCR'/> */}
                        </div>
                    </div>

                    <div className="timeline-item is-link">
                        <div className="timeline-marker is-link"></div>
                        <div className="timeline-content">
                            <p className="heading">
                                January - April 2022
                                <FontAwesomeIcon className='fa-2x ml-3' icon={faAward}/>
                            </p>
                            <p><strong>Participated in Student Hackathons</strong></p>
                            <p>-Won ‘Best Use of Google Cloud’ & ‘Best UI/UX’ for designing user-friendly websites</p>
                        </div>
                    </div>

                    <div className="timeline-item is-link">
                        <div className="timeline-marker is-link"></div>
                        <div className="timeline-content">
                            <p className="heading">
                                June - September 2022
                                <FontAwesomeIcon className='fa-2x ml-3' icon={faCity}/>
                            </p>
                            <p><strong>Software Engineering Intern @ Northwestern Mutual</strong></p>
                            <p>-Intern for the Engineering Solutions Delivery team, who are responsible for developing and maintaining web applications used by 10k+ field representatives</p>
                        </div>
                    </div>

                    <header className="timeline-header">
                        <span className="tag is-medium is-link">To be continued...</span>
                    </header>
                </div>

            </section>
        </div>
    )
}
