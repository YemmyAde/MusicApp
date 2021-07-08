import React from "react";
import "./styling";
import { Background} from "./styling";
import "./index.css";
import {MusicCenter, MusicWrite, MusicWrite2, MusicWrap} from './styling'
import Image1 from './images/music2.png'

function Home() {
  return (
    <Background>
      <MusicWriteup />
    </Background>
  );
}

const MusicWriteup = ()=>{
  return(<div> 
    <MusicWrap>
    <MusicWrite className="writeup">The World is <br/>a song  </MusicWrite>
    <MusicCenter src={Image1} alt="" /> 
    <MusicWrite2 className="writeup2">Singing in the shower is all fun and games, until you get Shampoo in your mouth, Then it just becomes a Soap Opera </MusicWrite2>
    </MusicWrap>
    </div>
  )
}
export default Home;
