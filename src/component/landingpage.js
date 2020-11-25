import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
import Image from './me.png';

console.log(Image);

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
            <Cell col={12}>
                <img
                src={Image}
                alt="ME"
                className="avatar-img"
                />

                <div className="banner-text">
                    <h1>Full Stack Web Developer</h1>

                    <hr/>

                    <p>HTML/CSS | Bootstrap | JavaScript | React | Redux |NodeJS | Express | MongoDB</p>

                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/emmanuel-stephen-702893178/" rel="noopener noreferrer" >
                            <i className="fa fa-linkedin-square"  aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </Cell>
            </Grid>
            </div>
        )
    }
}

export default Landing;