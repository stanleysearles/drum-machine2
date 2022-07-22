import React from 'react';
import kick1 from './assets/kick1.mp3';
import kick2 from './assets/kick2.mp3';
import openhi from './assets/openhihat.mp3';
import closedhi from './assets/closedhihat.mp3';
import snare from './assets/snare.mp3';
import rim from './assets/rim.mp3';
import shaker from './assets/shaker.mp3';
import cowbell from './assets/cowbell.mp3';
import conga from './assets/conga.mp3';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleQ = this.handleQ.bind(this);
    this.handleW = this.handleW.bind(this);
    this.handleE = this.handleE.bind(this);
    this.handleA = this.handleA.bind(this);
    this.handleS = this.handleS.bind(this);
    this.handleD = this.handleD.bind(this);
    this.handleZ = this.handleZ.bind(this);
    this.handleX = this.handleX.bind(this);
    this.handleC = this.handleC.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  handleQ() {
    document.getElementById("Q").play();
    document.getElementById("display").innerHTML = "Kick 1";
  }
  handleW() {
    document.getElementById("W").play();
    document.getElementById("display").innerHTML = "Kick 2";
  }
  handleE() {
    document.getElementById("E").play();
    document.getElementById("display").innerHTML = "Open Hi Hat";
  }
  handleA() {
    document.getElementById("A").play();
    document.getElementById("display").innerHTML = "Closed Hi Hat";
  }
  handleS() {
    document.getElementById("S").play();
    document.getElementById("display").innerHTML = "Snare";
  }
  handleD() {
    document.getElementById("D").play();
    document.getElementById("display").innerHTML = "Shaker";
  }
  handleZ() {
    document.getElementById("Z").play();
    document.getElementById("display").innerHTML = "Rim";
  }
  handleX() {
    document.getElementById("X").play();
    document.getElementById("display").innerHTML = "Cowbell";
  }
  handleC() {
    document.getElementById("C").play();
    document.getElementById("display").innerHTML = "Conga";
  }

  handleKeyPress(e){
    if (e.keyCode === 81) {
      document.getElementById("Q").play();
      document.getElementById("kick1").click();
      document.getElementById("display").innerHTML = "Kick 1";
    } else if (e.keyCode === 87) {
      document.getElementById("W").play();
      document.getElementById("kick2").click();
      document.getElementById("display").innerHTML = "Kick 2";
    } else if (e.keyCode === 69) {
      document.getElementById("E").play();
      document.getElementById("openhi").click();
      document.getElementById("display").innerHTML = "Open Hi Hat";
    } else if (e.keyCode === 65) {
      document.getElementById("A").play();
      document.getElementById("closedhi").click();
      document.getElementById("display").innerHTML = "Closed Hi Hat";
    } else if (e.keyCode === 83) {
      document.getElementById("S").play();
      document.getElementById("snare").click();
      document.getElementById("display").innerHTML = "Snare";
    } else if (e.keyCode === 68) {
      document.getElementById("D").play();
      document.getElementById("shaker").click();
      document.getElementById("display").innerHTML = "Shaker";
    } else if (e.keyCode === 90) {
      document.getElementById("Z").play();
      document.getElementById("rim").click();
      document.getElementById("display").innerHTML = "Rim";
    } else if (e.keyCode === 88) {
      document.getElementById("X").play();
      document.getElementById("cowbell").click();
      document.getElementById("display").innerHTML = "Cowbell";
    } else if (e.keyCode === 67) {
      document.getElementById("C").play();
      document.getElementById("conga").click();
      document.getElementById("display").innerHTML = "Conga";
    } 
  }

  render(){
    var drummachinestyle = {
      backgroundColor: "lightgreen",
      height: "400px",
      width: "400px",
      margin: "auto auto",
      paddingTop: "20px",
      marginTop: "20vh"
    }

    var displaystyle = {
          textAlign: "center",
      width: "300px",
      height: "30px",
      backgroundColor: "beige",
      margin: "0 auto",
      border: "1px solid black",
    }

    var buttonsstyle = {
            height: "300px",
        width: "300px",
        backgroundColor: "beige",
        margin: "20px auto",
    }

    var drumpadstyle = {
            height: "90px",
        width: "90px",
        margin: "5px",
    }

    var soundstyle = {
      display: "none"
    }

    return (
      <div className="App">
        <div id="drum-machine" style={drummachinestyle}>
        <div id="display" style={displaystyle}></div>
        <div id="buttons" style={buttonsstyle}>
          <button id="kick1" class="drum-pad" style={drumpadstyle} onClick={this.handleQ}>
            Q
          </button>
          <button id="kick2" class="drum-pad" style={drumpadstyle} onClick={this.handleW}>
            W
          </button>
          <button id="openhi" class="drum-pad" style={drumpadstyle} onClick={this.handleE}>
            E
          </button>
          <button id="closedhi" class="drum-pad" style={drumpadstyle} onClick={this.handleA}>
            A
          </button>
          <button id="snare" class="drum-pad" style={drumpadstyle} onClick={this.handleS}>
            S
          </button>
          <button id="shaker" class="drum-pad" style={drumpadstyle} onClick={this.handleD}>
            D
          </button>
          <button id="rim" class="drum-pad" style={drumpadstyle} onClick={this.handleZ}>
            Z
          </button>
          <button id="cowbell" class="drum-pad" style={drumpadstyle} onClick={this.handleX}>
            X
          </button>
          <button id="conga" class="drum-pad" style={drumpadstyle} onClick={this.handleC}>
            C
          </button>
          <audio controls={true} className="clip" id="Q" style={soundstyle}>
            <source src={kick1} type="audio/mp3" / >
            Your browser does not support the audio tag.
          </audio>
          <audio controls={true} className="clip" id="W" style={soundstyle}>
            <source src={kick2} type="audio/mp3" / >
            Your browser does not support the audio tag.
          </audio>
          <audio controls={true} className="clip" id="E" style={soundstyle}>
            <source src={openhi} type="audio/mp3" / >
            Your browser does not support the audio tag.
          </audio>
          <audio controls={true} className="clip" id="A" style={soundstyle}>
            <source src={closedhi} type="audio/mp3" / >
            Your browser does not support the audio tag.
          </audio>
          <audio controls={true} className="clip" id="S" style={soundstyle}>
            <source src={snare} type="audio/mp3" / >
            Your browser does not support the audio tag.
          </audio>
          <audio controls={true} className="clip" id="D" style={soundstyle}>
            <source src={shaker} type="audio/mp3" / >
            Your browser does not support the audio tag.
          </audio>
          <audio controls={true} className="clip" id="Z" style={soundstyle}>
            <source src={rim} type="audio/mp3" / >
            Your browser does not support the audio tag.
          </audio>
          <audio controls={true} className="clip" id="X" style={soundstyle}>
            <source src={cowbell} type="audio/mp3" / >
            Your browser does not support the audio tag.
          </audio>
          <audio controls={true} className="clip" id="C" style={soundstyle}>
            <source src={conga} type="audio/mp3" / >
            Your browser does not support the audio tag.
          </audio>
        </div>
        </div>
      </div>
    )
  }
}
