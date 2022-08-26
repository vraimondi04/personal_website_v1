import { Document, Page } from 'react-pdf'

export default function Resume () {
    return (
        <div>
            <section className='section is-medium' id='resume'>
                <h1 className="title">My Resume</h1>
                <h2 className="subtitle"></h2>

                <div>
                    <Document file='https://drive.google.com/file/d/1JmutJwt_E6LMLyFxt7M1YVml1qkmqekq/view?usp=sharing'>
                        <Page pageNumber={1}/>
                    </Document>
                </div>
            </section>
        </div>
    )
}
