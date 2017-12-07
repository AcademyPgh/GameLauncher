import React, { Component } from 'react';
import axios from 'axios';
import Settings from './settings';

class Game extends Component {
    constructor(props){
        super(props);
        this.startGame = this.startGame.bind(this);
        this.installGame = this.installGame.bind(this);
    }
    
    startGame(steamId){
        var self=this; 
        axios.get(`${Settings.clientUrl}api/games/startgame/${this.props.fullGame.steamId}`)
         .then(function(response) {
           console.log(response.data);
          //here is where we will map out our responses
          self.props.setErrorValues(response.data.status, response.data.message); 
         }).catch(err => console.log(`Error: ${err}`));
        }

    installGame(steamId){
        var self=this; 
        axios.get(`${Settings.clientUrl}api/games/installgame/${this.props.fullGame.steamId}`)
            .then(function(response) {
            console.log(response.data);
            //here is where we will map out our responses
            self.props.setErrorValues(response.data.status, response.data.message); 
            }).catch(err => console.log(`Error: ${err}`));
    }
//if in one state, return this (all options in the render function):    
    render (){
        return(
            <div className="games">        
                <div className="game" >
                    <div className="gameHeading"> 
                        <span className="gameTitle"> {this.props.fullGame.name}</span> 
                        <button className="install" onClick= {this.installGame} ><span className="fa fa-download"><span className="tooltip"> <span className="tooltiptext">Install</span> </span></span> </button>
                    </div>
                    <div className="gameBody" onClick={this.startGame} >
                        <img className="gameImage" src = {`http://cdn.akamai.steamstatic.com/steam/apps/${this.props.fullGame.steamId}/header.jpg?t=1510847069`} /> 
                    <div className="playButton"><span className="fa fa-play"></span>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;
//Export default Game means this is a component and it will export itself, this makes it a public class