import React from "react";
import CardList from '../components/cardList'
//import {robots} from './robots.js';
import SearchBox from '../components/SearchBox.js'
import './App.css'
import Scroll from '../components/Scroll.js'

class App extends React.Component  {
    constructor(){
        super() 
        this.state = {
            robots: [],
            searchfield:''
        }
}
     componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
            return response.json();
        }).then(users =>{
            this.setState({ robots: users });
        })
        
    }
    onSearchChange = (event)=> {
      this.setState({searchfield: event.target.value})//sygkrinei to ti plhktrologoyme me ton pinaka
      }
    render() {
        const {robots,searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {//filtrarei ton pinaka robots
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
           })
           return !robots.length ?//ean ta robot=0 tote loading.. allios emfanise ta robot
             <h1 className="tc">Loading...</h1>:
          (
        <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
        <CardList robots={filteredRobots} />
        </Scroll>
        </div>
        )};
    }

export default App;