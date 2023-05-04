import React from "react";
import { connect } from "react-redux";
import CardList from '../components/cardList';
import SearchBox from '../components/SearchBox.js';
import './App.css';
import Scroll from '../components/Scroll.js';
import { requestRobots, setSearchField  } from "../actions";

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,  
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error   
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
}
}

class App extends React.Component  {
        componentDidMount(){
        this.props.onRequestRobots();
        
    }

    render() {
        const {searchField , onSearchChange , robots , isPending} = this.props;
        const filteredRobots = robots.filter(robot => {//filtrarei ton pinaka robots
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
           })
           return isPending ?//ean ta robot=0 tote loading.. allios emfanise ta robot
             <h1 className="tc">Loading...</h1>:
          (
        <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
        <CardList robots={filteredRobots} />
        </Scroll>
        </div>
        )};
    }

export default connect(mapStateToProps , mapDispatchToProps)(App);