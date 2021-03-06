import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from './component/main';
import { Link } from 'react-router-dom';
import Footer from './component/footer';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Emmanuel Stephen</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/project">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Emmanuel Stephen</Link>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/project">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
        <Footer/>
    </Layout>
</div>
  );
}

export default App;
