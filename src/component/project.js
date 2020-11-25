import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell  } from "react-mdl";

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activetab === 0) {
            return (
                <div><h1>This is React</h1></div>
            )
        } else if (this.state.activetab === 1) {
            return (
                <div><h1>This is Angular</h1></div>
            )
        } else if (this.state.activetab === 2) {
            return (
                <div><h1>This is VueJs</h1></div>
            )
        } else if (this.state.activetab === 3) {
            return (
                <div><h1>This is MongoDB</h1></div>
            )
        }
    }

    render() {
        return(
            <div classname="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                <section className="project-grid">
                    {this.toggle}
                </section>
            </div>
        )
    }
}

export default Project;