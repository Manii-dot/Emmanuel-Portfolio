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
                        style={{height: '300px', borderRadius: '30px 60px 60px 10px'}}
                        />
                    </div>

                    <h2 style={{paddingTop: '2em'}}>Emmanuel Stephen</h2>
                    <h4 style={{color: 'grey'}}>Programmer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <p> Some of my interests range from Cloud Computing, Full Stack Web development, Sports/Fitness, Aerospace Science, and Recording Arts. I am currently in training for full-stack-web Developer at the University of Texas Austin until December 8. I am fluent in English, HAitian Creole and French</p>
                    <h5>Phone:</h5>
                    <p>(254)-245-5260</p>
                    <h5>Email:</h5>
                    <p>emmanuel.stephen68@gmail.com</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education 
                        startYear={2020}
                        endYear={2020}
                        schoolName="The Coding Boot Camp at UT Austin"
                        schoolDescription="I am attending the Coding Boot Camp at UT Austin, the first university-backed coding boot camp in the state of Texas. So far, I learned front-end and back-end technologies through a coding curriculum, including; JavaScript, HTML5, CSS, JQuery, Responsive Design, Bootstrap, React.js, MongoDB, MySQL, Heroku, User Authentication, and Security and Session Storage. I Worked together with my peers to tackle complex projects and get hands-on programming training through experiential learning opportunities with employers. I took my new skills to the next level by building a portfolio of web applications, coding mobile apps, and challenging projects that showcase my knowledge. I will receive a Certificate of Completion from UT Austin, demonstrating my achievement to future employers."
                        />

                        <Education 
                        startYear={2015}
                        endYear={2020}
                        schoolName="American Military University"
                        schoolDescription="I earned a Bachelor of Science in Information Technology Management with a brod range of fields that support our computer/information-based society and economy. I enherited problem-solving skills and techniques needed to provide computer-based solutions to practical problems as well as the mean to  develop and communicate technological solutions to industrial problems, manage systems operations, improve and evaluate products, provide customer support, and facilitate technology transfer in industry and government. I learned to apply ethical judgments and critical thinking to assess the impact of information technology on contemporary social, political, and economic issues."
                        />

                        <Education 
                        startYear={2006}
                        endYear={2007}
                        schoolName="Full Sail University"
                        schoolDescription="I earned an Associate of Science in Recoding Art. From live music production to audio postproduction for film, television, and video games, I covered a wide array of procedures and applications all while working with the same gear found in professional studios. I developped a critical-listening skills from an engineering perspective with recorded music from studio sessions, live concert material, and audio postproduction mixes as the subject of analysis."
                        />
                        <hr style={{borderTop: '3px solid white'}} />

                        <h2>Experience</h2>

                        <Experience
                        startYear={2010}
                        endYear={2019}
                        jobName="US Army/ MOS: Multi-Channel Transmission System Maintainer "
                        jobDescription="I had the opportunity of being a regular Service member to becoming a world-class leadership to the upcominmg Service members overtime. Within the Nation’s largest professional military signal organization, I had the priviledge to provide services to different major military bases and on-going forward operation both Army, and Joint command operated. 
                        Some of my accomplishments ranged from serving as First-Line Supervisor for six other Maintainers/Technicians, who subsequently managed 5-member subsections. I prioritized and switch among several projects simultaneously while quickly learning a breadth of new concepts and
                        technologies. I served as a leading point for weekly meetings, created shift schedules, orchestrated conference calls, and supervised staff
                        development training.I continously sponsored and trained incoming technicians to ensure proper use of regulated procedures, troubleshooting techniques
                        and organizational standards. I assured that 100% of mission intent/agendas with proper accountability and management of over $1.6 millions of equipment were met. I managed troubleshooting of client equipment with routine research on wide variety of network, software, and hardware
                        issues under stressful and time-sensitive conditions. I interpreted schematic work order drawings to determine job specifications, material and equipment requirements and
                        establish a plan of operation. I was directly responsible for the promotion and upward mobility of a total of 16 Enlisted Service members."
                        />

                        <Experience
                        startYear={2008}
                        endYear={2010}
                        jobName="Palm Beach Shores Town Hall"
                        jobDescription="Fostered and maintained a clean environment through the deployment of on-call technicians, engineers, and handymen across the town of Palm Beach
                        Shores. I tremendously improved company reaction time through the proper and timely dispatch of employees.Managed records of work-orders and call requests for over 1,000 residents. I executed the Mayor’s intent through various community initiatives. I provided outstanding customer service to company clients, leading to Employee of the month recognition."
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
                        <Skills
                        skills="AWS Essentials"
                        progress={40}
                        />


                    </Cell>
                </Grid>           
            </div>
        )
    }
}

export default Resume;