import { Component, ErrorInfo } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    children: PropTypes.node.isRequired
}

type ErrorBoundaryProps = PropTypes.InferProps<typeof propTypes>;

export class ErrorBoundary extends Component<ErrorBoundaryProps, {error?: string}> {
    constructor (props: ErrorBoundaryProps) {
        super(props)
        this.state = { error: null }
    }

    static getDerivedStateFromError (error: Error) {
        // Update state so the next render will show the fallback UI.
        return { error: error.message }
    }

    componentDidCatch (error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log('Error! ', error.message, ' --- ', JSON.stringify(errorInfo))
    }

    render () {
        if (this.state.error) {
            // You can render any custom fallback UI
            return <h1>{this.state.error}</h1>
        }

        return this.props.children
    }
}
