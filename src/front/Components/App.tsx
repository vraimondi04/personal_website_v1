import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import '../style.scss'

export function App() {
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<p>Hello World</p>} />
        </Routes>
    </BrowserRouter>
    )
}
