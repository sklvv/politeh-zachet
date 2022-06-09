import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux"
import store from "./store"
import {CssBaseline} from "@mui/material"


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <Provider store={store}>
        <CssBaseline/>
        <App/>
    </Provider>
)

