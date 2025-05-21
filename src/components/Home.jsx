import React from 'react';
import { useState, useEffect } from 'react'
import Typewriter from "typewriter-effect";
import text from '../Data/homeMessage.jsx';
import "./style/Home.css";


// const delay = 1000; // ms
// const animStr = (i) => `fadeIn ${duration}ms ease-out ${delay * i}ms forwards`;

// var speeeeed = 0;


// var i = 0

function MyData(names, i=0) {
    const [currentName, setCurrentName] = useState(names[0]);

  function setNextName() {
    i++
    let newName = names[i%(names.length)]
    if (newName === currentName) { setNextName() }
    else { setCurrentName(newName) }
    return
  }

  useEffect(() => {
    setTimeout(() => {
        setNextName()
    }, 5000);
  }, [currentName])

  return (
    <div>
      {/* <h1 className="data">{currentName}</h1> */}
    </div>
  )

  }

  class MyXData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
            currentWord: 0
        }
    }

    render() {
        const timer = () => {setTimeout(() => this.state.currentWord = (this.state.currentWord + 1) % this.props.length, 5000)}

        return (

            <div onClick={timer()}>{this.props.words[this.state.currentWord]}
            </div>
            
        )
    }
  }


class MyTypewriter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cursor: "|",
            delay: this.props.delay,
        }
    }

    render() {
        // if (this.props.type === 0) {
            return (
                
        <Typewriter
            options={{
                // strings: this.props.string,
                skipAddStyles: true,
                autoStart: true,
                loop: this.props.doesLoop,
                wrapperClassName: this.props.class,
                cursorClassName: this.props.class,
                deleteSpeed: this.state.delete,
                delay: this.props.speed, 
                cursor: "",

            }}
                onInit={(typewriter) => {

                    typewriter
                        .typeString(this.props.string[0])
                        // .callFunction(() => {this.state.cursor = })
                        .pauseFor(this.props.delay)
                        .deleteAll()
                        .start()
                        
                }}
            />
            )

    }
}

function build() {
    var all = [];
    var labels = text[2]
    for (var i = 1; i < text[0].length; i++) {
        all.push(<MyTypewriter type={0} string={text[2][i]} doesLoop={true} class={"typeWriterData"} speed={40 / text[2][i].length} delay={999999999999999} delete={20 / text[2][i][0].length} />)
        all.push(<div className="cycleData">{MyData(text[0][i])}</div>)
        all.push(<div className="cycleData"><MyXData words={text[0][i]} length={text[0][i].length}/></div>)
    }
    return (all);
}

function Home() {
  return (
        <div className="home">
            <div id="name">
                <MyTypewriter id="name" type={0} string={text[0][0]} doesLoop={true} class={"typeWriterMain"} delay={999999999999999} speed={40 /text[0][0].length} />
            </div>
            {/* <MyTypewriter id="name" type={1} string={text[0][1]} doesLoop={text[1][0]} class={"typeWriterMain"} delay={999999999999999}/> */}
            {build()}
            {/* {MyData(["a", "b", "c", "d"])} */}
            {/* {items.map((item, i) => (
            <h1 key={i} style={{ animation: animStr(i) }}>
                {item}
            </h1>
            ))} */}

            {/* <Rotater strs={["test"]} style={{ animation: animStr(i) }}/> */}
        </div>
  );
}

export default Home;
