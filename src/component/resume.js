import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
import Image from './me2.png';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

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
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education 
                        startYear={2020}
                        endYear={2020}
                        schoolName="University of Texas at Austin"
                        schoolDescription="Will add the text for later. For now. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
                        />

                        <Education 
                        startYear={2015}
                        endYear={2020}
                        schoolName="American Military University"
                        schoolDescription="Will add the text for later. For now. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
                        />

                        <Education 
                        startYear={2006}
                        endYear={2007}
                        schoolName="Full Sail University"
                        schoolDescription="Will add the text for later. For now. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
                        />
                        <hr style={{borderTop: '3px solid white'}} />

                        <h2>Experience</h2>

                        <Experience
                        startYear={2010}
                        endYear={2019}
                        jobName="US Army"
                        jobDescription="Will add the text for later. For now. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
                        />

                        <Experience
                        startYear={2008}
                        endYear={2010}
                        jobName="Palm Beach Show Town Hall"
                        jobDescription="Will add the text for later. For now. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
                        />
                        <hr style={{borderTop: '3px solid white'}} />
                        
                        <h2>Skills</h2>
                        
                        <Skills
                        skills="jHTML/CSS"
                        progress={70}
                        />
                         <Skills
                        skills="javascript"
                        progress={50}
                        />
                         <Skills
                        skills="NodeJS"
                        progress={50}
                        />
                         <Skills
                        skills="MYSQL"
                        progress={50}
                        />
                        <Skills
                        skills="NOSQL"
                        progress={50}
                        />
                         <Skills
                        skills="MongoDB"
                        progress={60}
                        />
                        <Skills
                        skills="React"
                        progress={60}
                        />


                    </Cell>
                </Grid>           
            </div>
        )
    }
}

export default Resume;