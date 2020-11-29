import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
import Image from './me2.png';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                    <img 
                        src={Image}
                        alt="professional picture" 
                        style={{height: '200px'}}
                        />
                    </div>

                    <h2 style={{paddingTop: '2em'}}>Emmanuel Stephen</h2>
                    <h4 style={{color: 'grey'}}>Programmer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <p>Will add the text for later. For now. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                    </p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <h5>Phone</h5>
                    <p>(254)-245-5260</p>
                    <h5>Email</h5>
                    <p>emmanuel.stephen68@gmail.com</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>Right Side</Cell>
                </Grid>           
            </div>
        )
    }
}

export default Resume;