import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Image from './me2.png';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2> Emmanuel Stephen</h2>
                        <img className="avatar-img2"src={Image}
                        alt="professional picture"
                        // style={{height: '250px'}} 
                        />
                    </Cell>
                    <Cell col={6}>OK</Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;