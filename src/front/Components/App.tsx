import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import '../style.scss'
import Container from './Container'

export function App () {
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<Container/>} />
        </Routes>
    </BrowserRouter>
    )
}
