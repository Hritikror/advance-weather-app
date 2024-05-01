import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextState, { CONTEXT } from "./misc/Context";
ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextState>
    <App />
    </ContextState>
)
