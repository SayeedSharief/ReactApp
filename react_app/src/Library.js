import React, { Component } from 'react'
// import {render} from 'react-dom'

//function Component    
const Book = ({ author, title, pages, freeBookmark }) => {
    // console.log('Inside Book')
    return (
        <div>
            <h1>Author: {author} </h1>
            <p>TItle: {title}</p>
            <p>Pages: {pages}</p>
            <p>Free Bookmark: {freeBookmark? 'Yes': 'No'}</p>
        </div>
    )
}

const Hiring = () => <div>
    <p>Library is hiring. Please visit www.library.com</p>
</div>

const NotHiring = () => <div><p>Not Hiring. Come back later</p></div>

class Library extends Component {
    constructor(props) {
        // super is used to create new instance of the class
        super(props)
        this.state = {
            open: true,
            freeBookmark: true,
            hiring: false
        }
        // Make this method accessible "this" properties of this class. 
        // Here state is being accessed
        this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
    }
    toggleOpenClosed(){
        //when state changes component will be called again to render state changes
        this.setState(prevState =>({
            open: !prevState.open,
            freeBookmark: !this.state.freeBookmark,
            hiring: !prevState.hiring
        }))
        // OR
        // this.setState ({
        //     open: !this.state.open
        // })
        // console.log('Function')
    }
    render() {
        console.log('Props to Library: ', this.props)
        const { books } = this.props
        // OR
        // const books = this.props.books
        return (
            <div>
                <div>
                    <h1>Our Library is {this.state.open ? 'open' : 'closed'}</h1>
                    {this.state.hiring? <Hiring /> : <NotHiring />}
                    <button onClick={this.toggleOpenClosed}>Toggle</button>
                </div>
                <div>
                    {books.map(
                        (book, i) => <Book key={i}
                            author={book.author}
                            title={book.title}
                            pages={book.pages} 
                            freeBookmark={this.state.freeBookmark}/>
                    )}
                </div>
            </div>
        )
    }
}

// OR
// Cleaner syntax, Benifits
// 1. No need to use constructor
// 2. no need to bind the toggleOpenClosed(), as arrow function does it by default
// class Library extends Component{
//     state = {open: true}

//     toggleOpenClosed = () =>{
//     }

//     render(){
            // code as above
//     }
// }
export default Library