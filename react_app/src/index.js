import React, { Component } from 'react'
import { render } from 'react-dom'


const MessageProps = {
  author: "sayeed",
  publisher: "alhamd",
  pagesCount: 200,
  progress: 150
}

// ReactDOM.render(
//   <div style={style}>
//     <h1>Hello World</h1>
//     <p>Enjoy the tutorial</p>
//   </div>
//   , 
//   document.getElementById('root'));

// OR 

// Using Components
class Message extends Component {
  getPercent = (decimal) => {
    return (decimal * 100) + '%'
  }
  calPercent = (total, goal) => {
    return this.getPercent(total/goal)
  }
  render() {
    console.log(this.props)
    //destructuring
    const { author, publisher, pages, progress } = this.props
    return (
      <section>
        <div>
          <h1>Welcome {author}</h1>
        </div>
        <div>
          <p>Your Book was published by {publisher} having {pages} pages</p>
          <p>You have completed {progress} pages out of {pages} pages </p>
          <p>Your progress is : <strong>{this.calPercent(progress, pages)}</strong></p>
        </div>
      </section>
    )
  }
}

render(<Message author={MessageProps.author} publisher={MessageProps.publisher} pages={MessageProps.pagesCount} progress={MessageProps.progress} />, document.getElementById('root'));