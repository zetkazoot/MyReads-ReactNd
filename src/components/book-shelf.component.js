import React from "react";
import BookComponent from "./book.component";

class BookShelfComponent extends React.Component {
  handleChange(book, shelf) {
    this.props.handleChangeShelf(book, shelf);
  }
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.bookshelfBooks.map((book, index) => {
              return (
                <BookComponent
                  key={book.id + index}
                  book={book}
                  handleChange={this.props.onShelfChange}
                ></BookComponent>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelfComponent;
