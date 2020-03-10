import React, { Component } from "react";
import { Route } from "react-router-dom";

import * as BooksAPI from "./BooksAPI";
import "./App.css";

import SearchBooks from "./components/search.component";
import BooksComponent from "./components/books.component";

class BooksApp extends Component {
  state = {
    books: [],
    showSearchPage: false,
    shelf: undefined
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
      //console.log(books);
    });
  }
  onShelfChange = (book, shelf) => {
    book.shelf = shelf;
    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat([book])
    }));
    BooksAPI.update(book, shelf);
  };

  render() {
    return (
      <div className="app">
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <BooksComponent
                onShelfChange={this.onShelfChange}
                books={this.state.books}
              ></BooksComponent>
            </div>
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              onShelfChange={this.onShelfChange}
              books={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
