import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from './container';
import './style/globals.css';

function App() {
    return(
        <>
        <Container></Container>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)