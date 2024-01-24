import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {cinemas} from "./Movies-App";
import { useState, createContext } from "react";

const bookContext = createContext();

function Movie(props,index){
    const[movie,setMovie] = useState(0);
    // const setMov = () =>{
    //   setShow(!show);
    //   show?setMovie(props.text):setMovie(0)
    // }
    return(
      <bookContext.Provider>
      <div className="mv-card">
          <dt>
          <img className="movie-img" src={props.link} alt={props.text}/>
          <Link to='/shows'>
          <button onClick={()=>{ setMovie(props.text) }} >
              <h2 className="movie-name">{props.text}</h2>
              {/* {show?<Shows/>:null} */}
          </button>
          </Link>
          </dt>
          <dd>
          <p className="movie-sub">{props.sub} • {props.type}</p>
          </dd>
      </div>
      </bookContext.Provider>
    );
}

// import Nishan from './Nishan/Nishan';
let movie = "";

function Flex(props) {
  return <img className="circle-img " src={props.imgURL} alt="Flex_img" />;
}

function Format(props) {
  return <p className="info">{props.format}</p>;
}

function Time(props) {
  return <p className="info">{props.time}</p>;
}

function Btn(props) {
  return (
    <div>
      {/* <button className="btn" onClick={goto}>
        <Time time={props.timings} />
        <Format format={props.format} />
      </button> */}
    </div>
  );
}

function Card(props){
  movie=props.movie;
  return (
      <div className="card">
        <div className="top">
          <p>{props.key}</p>
          <Flex imgURL={props.imgURL} />
          <h2 className="name" >{props.name}</h2>
        </div>
        <div className="bottom">
          <div>
            <Btn timings={props.t1} format={props.f1} />
          </div>
          <div>
            <Btn timings={props.t2} format={props.f2} />
          </div>
          <div>
            <Btn timings={props.t3} format={props.f3} />
          </div>
          <div>
            <Btn timings={props.t4} format={props.f1} />
          </div>
          <div>
            <Btn timings={props.t5} format={props.f3} />
          </div>
          <div>
            <Btn timings={props.t6} format={props.f2} />
          </div>
        </div>
      </div>
  );
}

// function goto(){
//    root.render(<Nishan movie={movie} ></Nishan>)
// }


function createCard(cine) {
  return (
      <Card
        // key={cine.id}
        name={cine.name}
        imgURL={cine.imgURL}
        t1={cine.timings[0]}
        t2={cine.timings[1]}
        t3={cine.timings[2]}
        t4={cine.timings[3]}
        t5={cine.timings[4]}
        t6={cine.timings[5]}
        f1={cine.format[0]}
        f2={cine.format[1]}
        f3={cine.format[2]}
        // f4={cine.format[3]}
        movie={movie}
      />
    );
  }
  
function Shows(){
    return (
      <div className="shows">
        <h1 className="heading" >Venue</h1>
        {cinemas.map(createCard)}
      </div>
    );
}

export default Movie;
export {
  Shows,
};
