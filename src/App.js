import React from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import './app.css';
import Scroll from './Scroll';


export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield : ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users =>{
            this.setState({robots: users});
        })

        
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });

    }

    render(){
        const filteredRobots = this.state.robots.filter(robots => {
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h1>Loading</h1>
        }else{
        return(
        <div className='tc'>
            <h1 className='f1'>RobotFriends</h1>
            < Searchbox searchChange={this.onSearchChange}/>
            <Scroll>
                <Cardlist robots={filteredRobots}/>
            </Scroll>
        </div>
    );}
    }
    
}