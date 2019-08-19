import React, { Component } from 'react'
// import {render} from 'react-dom'


const Book = ({ author, title, pages }) => {
    return (
        <div>
            <h1>Author: {author} </h1>
            <p>TItle: {title}</p>
            <p>Pages: {pages}</p>
        </div>
    )
}

class Library extends Component {
    render() {
        console.log('Props to Library: ', this.props)
        const books = this.props.books
        return (
            <div>
                {books.map(
                    (book, i) => <Book key={i} 
                                    author={book.author}
                                    title={book.title}
                                    pages = {book.pages} />
                )}
            </div>
        )
    }
}

{/* <Book author="sayeed" title="Welcome to World" pages="203"/> */ }
export default Library