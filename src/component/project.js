import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from "react-mdl";

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '280px', background:'url(https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png) center / cover'}} >Server Side API JS</CardTitle>
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
                    <CardTitle style={{color: 'white', height: '280px', background:'url(https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png) center / cover'}} >Server Side API JS</CardTitle>
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
                    <CardTitle style={{color: 'white', height: '280px', background:'url(https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png) center / cover'}} >Server Side API JS</CardTitle>
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
            </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '280px', background:'url(https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png) center / cover'}} >Server Side API JS</CardTitle>
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
                    <CardTitle style={{color: 'white', height: '280px', background:'url(https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png) center / cover'}} >Server Side API JS</CardTitle>
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
                    <CardTitle style={{color: 'white', height: '280px', background:'url(https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png) center / cover'}} >Server Side API JS</CardTitle>
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
               </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '280px', background:'url(https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png) center / cover'}} >Server Side API JS</CardTitle>
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
                    <CardTitle style={{color: 'white', height: '280px', background:'url(https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png) center / cover'}} >Server Side API JS</CardTitle>
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
                    <CardTitle style={{color: 'white', height: '280px', background:'url(https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png) center / cover'}} >Server Side API JS</CardTitle>
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
               </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '280px', background:'url(https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png) center / cover'}} >Server Side API JS</CardTitle>
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
                    <CardTitle style={{color: 'white', height: '280px', background:'url(https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png) center / cover'}} >Server Side API JS</CardTitle>
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
                    <CardTitle style={{color: 'white', height: '280px', background:'url(https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png) center / cover'}} >Server Side API JS</CardTitle>
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
               </div>
            )
        }
    }


    render() {
        return (
            <div classname="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Server Side API JS</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
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