import React, { Component } from 'react';
import Header from './components/Header';
import Board from './components/Board';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <section className="centered-content">
                <Header />
                <Board />
                <Footer />
            </section>
        );
    }
}

export default App;