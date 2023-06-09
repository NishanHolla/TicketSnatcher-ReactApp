import React from "react"
import i1 from "./Kantara.png"
import i2 from "./Headbush.png"
import i3 from "./Wakanda.png"
import i4 from "./prince.png"
import i5 from "./Ramsetu.png"
import i6 from "./Sardar.png"
import i7 from "./Brahmastra.png"
import i8 from "./BlackAdam.png"
import i9 from "./DoctorG.png"
import i10 from "./Monster.png"
import i11 from "./Thankgod.png"
import i12 from "./RRR.png"
import { Link } from "react-router-dom";
import './Movies-Styles.css';
import Movie from './parts';



const img = [i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12];
const movies1 = [
  {
      id:1,
      roll:1,
      text:"Kantara",
      sub:"UA",
      type:"2D"
  },
  {
    id:2,
    roll:2,
    text:"Head Bush",
    sub:"A",
    type:"2D"
  },
  {
    id:3,
    roll:3,
    text:"Black Panther: Wakanda Forever",
    sub:"A",
    type:"2D | 3D"
  },
  {
    id:4,
    roll:4,
    text:"Prince",
    sub:"U",
    type:"2D"
  },
  {
    id:5,
    roll:5,
    text:"Ram Setu",
    sub:"UA",
    type:"2D"
  }
];

const movies2 =[
  {
    id:1,
    roll:3,
    text:"Black Panther: Wakanda Forever",
    sub:"A",
    type:"2D | 3D"
  }
  ,
  {
    id:2,
    roll:6,
    text:"Sardar",
    sub:"UA",
    type:"2D"
  }
  ,
{
  id:3,
  roll:11,
  text:"Thank God",
  sub:"A",
  type:"2D"
}
,
{
  id:4,
  roll:10,
  text:"Monster",
  sub:"UA",
  type:"2D"
},
{
  id:5,
  roll:9,
  text:"Doctor G",
  sub:"A",
  type:"2D"
}
]

const movies3 =[
  {
    id:1,
    roll:8,
    text:"Black Adam",
    sub:"A",
    type:"2D | 3D"
  }
  ,
  {
    id:2,
    roll:12,
    text:"RRR (Hindi)",
    sub:"UA",
    type:"2D"
  }
  ,
  {
    id:3,
    roll:1,
    text:"Kantara",
    sub:"UA",
    type:"2D"
  }
  ,
  {
    id:4,
    roll:5,
    text:"Ram Setu",
    sub:"UA",
    type:"2D"
  }

,
{
  id:5,
  roll:2,
  text:"Head Bush",
  sub:"A",
  type:"2D"
}
]


function makeMovie(mv,index){
  return(
    <Movie
      key={index}
      roll={mv.roll}
      text={mv.text}
      sub={mv.sub}
      type={mv.type}
      link={img[mv.roll-1]}
    />
  );
}



//console.log(movies)

function MvApp() {


  return (
    <div>
      <div id="ml">
    <a href="http://localhost:3000/login"><h4>Back to login</h4></a>
    <h1 className="title">Now Showing</h1>

    <h3 className="sub-title">Top Trending</h3>
    <table>
    <div className="lister">{movies1.map(makeMovie)}</div>
    </table>

    <h3 className="sub-title">Recent Releases</h3>
    <table>
    <div className="lister">{movies2.map(makeMovie)}</div>
    </table>

    <h3 className="sub-title">Recommended For You</h3>
    <table>
    <div className="lister">{movies3.map(makeMovie)}</div>
    </table>
    </div>
    <div id="mq">

    </div>

    </div>

  );
}


export default MvApp;
