import './style.scss'
import { createRoot } from 'react-dom/client'
import { App } from './Components/App'
import { ErrorBoundary } from './Components/ErrorBoundary'

const root = createRoot(document.getElementById('root'))

root.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
)
