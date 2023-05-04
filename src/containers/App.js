import React ,{ useEffect , useState }  from "react";
import CardList from '../components/cardList'
import SearchBox from '../components/SearchBox.js'
import './App.css'
import Scroll from '../components/Scroll.js'


function App () {
    
    const [robots , setRobots] = useState([]);
    const [searchfield , setSearchfield] = useState('');
    const [count , setCount ] = useState(0);
     useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
            return response.json();
        }).then(users =>{
           setRobots(users);
           console.log(count);
        }) },[count]);// to useEffect trexei mono otan allazei to count.
        //ta dyo [] este na apofygoyme to infinity loop poy dhmioyrghte.
    
        const onSearchChange = (event)=> {
     setSearchfield( event.target.value);//sygkrinei to ti plhktrologoyme me ton pinaka
      }
   
        
        const filteredRobots = robots.filter(robot => {//filtrarei ton pinaka robots
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
           })
         
           return !robots.length ?//ean ta robot=0 tote loading.. allios emfanise ta robot
             <h1 className="tc">Loading...</h1>:
          (
        <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <button onClick={()=>setCount(count+1)} >Click me!</button>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
        <CardList robots={filteredRobots} />
        </Scroll>
        </div>
        );
    }

export default App;