import { Component } from "react";
import { Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    search: "",
  };

  render() {
    return (
      <Container>
        <Row>
          <Form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Book</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci un libro da cercare"
                onChange={e => {
                  this.setState({ search: e.target.value });
                }}
                value={this.state.search}
              />
            </Form.Group>
          </Form>
        </Row>

        <Row>
          {this.props.arrayBooks
            .filter(book => book.title.includes(this.state.search))
            .map(filteredBook => {
              return (
                <SingleBook book={filteredBook} image="image" card="card" button="button" key={filteredBook.asin} />
              );
            })}
        </Row>

        {/* <Row id="row">
          {this.props.arrayBooks.map(book => {
            return <SingleBook book={book} image="image" card="card" button="button" key={book.asin} />;
          })}
        </Row> */}
      </Container>
    );
  }
}

export default BookList;
