import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header title="Emmanuel Stephen" scroll>
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Emmanuel Stephen">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
  );
}

export default App;
