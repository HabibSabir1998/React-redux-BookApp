import React, { Component } from 'react';
import BookList from '../containers/Book-list';
import BookDetail from '../containers/book-detail';
export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
