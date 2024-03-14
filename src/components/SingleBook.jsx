import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    const title =
      this.props.book.title.length < 25 ? this.props.book.title : this.props.book.title.slice(0, 23) + "...";

    return (
      <Col xs={6} md={4} lg={3} xl={2} key={this.props.book.asin}>
        <Card className={`${this.props.card} ${this.state.selected ? "selected" : ""}`}>
          <Card.Img
            variant="top"
            src={this.props.book.img}
            className={this.props.image}
            onClick={e =>
              !this.state.selected ? this.setState({ selected: true }) : this.setState({ selected: false })
            }
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{this.props.book.category}</Card.Text>
            <Card.Text className="text-danger text-decoration-underline">{this.props.book.price + "$"}</Card.Text>
            <Button variant="success" className="button">
              Compra
            </Button>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea asin={this.props.book.asin} />}
      </Col>
    );
  }
}

export default SingleBook;
