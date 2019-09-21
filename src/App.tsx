import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {

    return (
        <div className="app">
            <header className="header">
                <Header/>
            </header>

            <aside className="sidebar">
                <Sidebar />
            </aside>

            <main className="main">
                <Main name="Welch W C Lin"/>
            </main>

            <footer className="footer">
                <Footer/>
            </footer>
        </div>
    );
}

export default App;