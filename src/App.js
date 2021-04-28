import './App.css';
import image from './img/moi.jpg';
import React from 'react';
 
class App extends React.Component {
    constructor() {
      super();
        this.state = { 
            name:"Hamza",
            bio:'...',
            profession:'Student',
            img:image,
            toggle:true
         }
    }
    toggle = () => {
      this.setState({ toggle: !this.state.toggle });
    };
    componentDidMount() {
      setInterval(() => {
        this.setState({toglle:this.state.toglle});
      },1000 );
    }
    
    render() { 
        return ( 
            <>
            {this.state.toggle ? (
              <div>
               <h1>{this.state.name}</h1>
               <h2>{this.state.bio}</h2>
               <h2>{this.state.profession}</h2>
               <img src={image} alt="moi" id="img" width="200px"/>
               </div>
            ) : <div>There's nothing here</div>}
            <button className=" btn-primary" onClick={this.toggle}>click</button>
            
         
          </>
        );
      }
    }
    
export default App ;