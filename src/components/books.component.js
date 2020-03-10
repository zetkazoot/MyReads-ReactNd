import React, { Component } from "react";
import { Link } from "react-router-dom";

import BookShelfComponent from "../components/book-shelf.component";

class BooksComponent extends Component {
  render() {
    const currentlyReading = this.props.books.filter(
      book => book.shelf === "currentlyReading"
    );
    const wantToRead = this.props.books.filter(
      book => book.shelf === "wantToRead"
    );
    const read = this.props.books.filter(book => book.shelf === "read");
    return (
      <div className="list-books">
        <div className="list-books-content">
          <div>
            <BookShelfComponent
              bookshelfTitle="Currently Reading"
              bookshelfBooks={currentlyReading}
              onShelfChange={this.props.onShelfChange}
            />
            <BookShelfComponent
              bookshelfTitle="Want to Read"
              bookshelfBooks={wantToRead}
              onShelfChange={this.props.onShelfChange}
            />
            <BookShelfComponent
              bookshelfTitle="Read"
              bookshelfBooks={read}
              onShelfChange={this.props.onShelfChange}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BooksComponent;
