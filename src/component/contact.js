import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
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
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            Will add the text for later. For now. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent className="info">
                                <i className="fa fa-phone-square" aria-hidden="true"/>    
                                254-245-5260</ListItemContent>
                            </ListItem>
                            
                            <ListItem>
                                <ListItemContent className="info">
                                <i className="fa fa-envelope" aria-hidden="true"/>    
                                emmanuel.stephen68@gmail.com</ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;