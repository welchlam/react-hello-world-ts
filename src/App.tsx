import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Sidebar, {Feature} from "./components/sidebar/Sidebar";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer";

function App() {
    const features: Array<Feature> = [];

    return (
        <div className="app">
            <header className="header">
                <Header/>
            </header>

            <aside className="sidebar">
                <Sidebar features={features} />
            </aside>

            <main className="main">
                // @ts-ignore
                <Main name="Welch W C Lin"/>
            </main>

            <footer className="footer">
                <Footer/>
            </footer>
        </div>
    );
}

export default App;