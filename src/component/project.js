import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from "react-mdl";
import Image from "./weatherDashBoard.png"

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    //Regular JS project with ServerSide API
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '280px', background:'url(https://github.com/Manii-dot/COVIDRoadTrip/raw/main/screenshot.png) center / cover'}} ></CardTitle>
                    <CardText>
                        COVID-Road-Trip
                    </CardText>
                    <CardActions border>
                        <Button colored ><a href="https://github.com/christinakerr/COVIDRoadTrip">GitHub Link</a></Button>
                        <Button colored><a href="https://christinakerr.github.io/COVIDRoadTrip/">Demo Link</a></Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '280px', background:'url(https://github.com/Manii-dot/Weather-Dash-Board/raw/main/Asset/WDB.png) center / cover'}} ></CardTitle>
                    <CardText>
                    Weather-Dash-Board
                    </CardText>
                    <CardActions border>
                        <Button colored ><a href="https://github.com/Manii-dot/Weather-Dash-Board/raw/main/Asset/WDB.png">GitHub Link</a></Button>
                        <Button colored><a href="https://manii-dot.github.io/Weather-Dash-Board/">Deployed Link</a></Button>
                        <Button colored><a href="https://www.youtube.com/watch?v=cEk2FEGVkRM&feature=youtu.be">YouTube Link</a></Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '280px', background:'url(https://github.com/Manii-dot/till-new-years/raw/master/newYear.png) center / cover'}} ></CardTitle>
                    <CardText>
                        Till-New-Year
                    </CardText>
                    <CardActions border>
                        <Button colored ><a href="https://github.com/Manii-dot/till-new-years">GitHub Link</a></Button>
                        <Button colored><a href="https://manii-dot.github.io/till-new-years/">Deployed Link</a></Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
            )
        } 
        //Express, SQL, MongoDB
        else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '280px', background:'url(https://github.com/Manii-dot/Band-Aids/raw/main/Screenshot.png) center / cover'}} ></CardTitle>
                    <CardText>
                        Band-Aid
                    </CardText>
                    <CardActions border>
                        <Button colored ><a href="https://github.com/Manii-dot/Band-Aids">GitHub Link</a></Button>
                        <Button colored><a href="https://band-aids.herokuapp.com">Demo Link</a></Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '280px', background:'url(https://github.com/Manii-dot/fitness-tracker/raw/main/Asset/ScreenShot1.png) center / cover'}} >Server Side API JS</CardTitle>
                    <CardText>
                        Fitness-Tracker
                    </CardText>
                    <CardActions border>
                        <Button colored ><a href="https://github.com/Manii-dot/fitness-tracker">GitHub Link</a></Button>
                        <Button colored><a href="hhttps://a-fitness-tracker.herokuapp.com/">Demo Link</a></Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '280px', background:'url(https://github.com/Manii-dot/Online-Offline-Budget-Trackers/raw/main/asset/SC.png) center / cover'}} ></CardTitle>
                    <CardText>
                    Online-Offline-Budget-Trackers
                    </CardText>
                    <CardActions border>
                        <Button colored ><a href="https://github.com/Manii-dot/Online-Offline-Budget-Trackers">GitHub Link</a></Button>
                        <Button colored><a href="https://my-on-offline-budget-tracker.herokuapp.com/">Demo Link</a></Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
               </div>
            )
        } 
        //React 
        else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '280px', background:'url(https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png) center / cover'}} ></CardTitle>
                    <CardText>
                        Paw-Prints in progress
                    </CardText>
                    <CardActions border>
                        <Button colored ><a href="https://github.com/Manii-dot/paw-prints">GitHub Link</a></Button>
                        <Button colored><a href="/">Demo Link</a></Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '280px', background:'url(https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png) center / cover'}} ></CardTitle>
                    <CardText>
                        Employee-Directory
                    </CardText>
                    <CardActions border>
                        <Button colored ><a href="https://github.com/Manii-dot/Employee-Directory">GitHub Link</a></Button>
                        <Button colored><a href=" https://my-employees-directory.herokuapp.com/">Demo Link</a></Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
               </div>
            )
        } 
    }


    render() {
        return (
            <div classname="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Regular JS project with ServerSide API </Tab>
                    <Tab>Express, SQL, MongoDB</Tab>
                    <Tab>React</Tab>
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Project;