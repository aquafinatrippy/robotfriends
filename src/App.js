import React from 'react';
import Cardlist from './Cardlist';
import { robots } from './robots';
import Searchbox from './Searchbox';
import './app.css';


export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield : ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });

    }

    render(){
        const filteredRobots = this.state.robots.filter(robots => {
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
        <div className='tc'>
        <h1 className='f1'>RobotFriends</h1>
        < Searchbox searchChange={this.onSearchChange}/>
        <Cardlist robots={filteredRobots}/>
        </div>
    );
    }
    
}