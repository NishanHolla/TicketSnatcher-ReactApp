import React from "react"
import i1 from "./assets/Kantara.png"
import i2 from "./assets/Headbush.png"
import i3 from "./assets/Wakanda.png"
import i4 from "./assets/prince.png"
import i5 from "./assets/Ramsetu.png"
import i6 from "./assets/Sardar.png"
import i7 from "./assets/Brahmastra.png"
import i8 from "./assets/BlackAdam.png"
import i9 from "./assets/DoctorG.png"
import i10 from "./assets/Monster.png"
import i11 from "./assets/Thankgod.png"
import i12 from "./assets/RRR.png"
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

const cinemas = [
  {
    name: "Gopalan Cinemas",
    imgURL:
      "https://www.boxofficepro.com/wp-content/uploads/2019/03/Cinepolis-Forum-Shantiniketan-Bengaluru.jpg",
    timings: [
      "9:30 am",
      "12:15 pm",
      "2:30 pm",
      "4:00 pm",
      "7:20 pm",
      "9:45 pm"
    ],
    format: ["2D", "3D", "IMAX 3D"]
  },
  {
    name: "PVR Vega City",
    imgURL:
      "https://www.boxofficepro.com/wp-content/uploads/2019/03/Cinepolis-Forum-Shantiniketan-Bengaluru.jpg",
    timings: [
      "9:30 am",
      "12:15 pm",
      "2:30 pm",
      "4:00 pm",
      "7:20 pm",
      "9:45 pm"
    ],
    format: ["2D", "3D", "IMAX 3D"]
  },

  {
    name: "Cinépolis Nexus Shantiniketan",
    imgURL:
      "https://www.boxofficepro.com/wp-content/uploads/2019/03/Cinepolis-Forum-Shantiniketan-Bengaluru.jpg",
      timings: [
        "9:30 am",
        "12:15 pm",
        "2:30 pm",
        "4:00 pm",
        "7:20 pm",
        "9:45 pm"
      ],
    format: ["2D", "3D", "IMAX 3D"]
  },
  {
    name: "Inox JP Nagar",
    imgURL:
      "https://www.boxofficepro.com/wp-content/uploads/2019/03/Cinepolis-Forum-Shantiniketan-Bengaluru.jpg",
      timings: [
        "9:30 am",
        "12:15 pm",
        "2:30 pm",
        "4:00 pm",
        "7:20 pm",
        "9:45 pm"
      ],
    format: ["2D", "3D","2D", "3D"]
  },
  {
    name: "PVR Koramangala",
    imgURL:
      "https://www.boxofficepro.com/wp-content/uploads/2019/03/Cinepolis-Forum-Shantiniketan-Bengaluru.jpg",
    timings: [
      "9:30 am",
      "12:15 pm",
      "2:30 pm",
      "4:00 pm",
      "7:20 pm",
      "9:45 pm"
    ],
    format: ["2D", "3D", "IMAX 3D"]
  }
];

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

function MvApp() {
  return (
    <div id="ml">
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
  );
}

export {
  MvApp,
  cinemas,
};