"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.scss");
const client_1 = require("react-dom/client");
const App_1 = require("./Components/App");
const ErrorBoundary_1 = require("./Components/ErrorBoundary");
const root = (0, client_1.createRoot)(document.getElementById('root'));
root.render(<ErrorBoundary_1.ErrorBoundary>
        <App_1.App />
    </ErrorBoundary_1.ErrorBoundary>);
