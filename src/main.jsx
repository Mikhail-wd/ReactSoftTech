import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
