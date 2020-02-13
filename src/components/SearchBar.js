import React from "react";
import { Form, FormGroup, Input } from "reactstrap";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="m-3">
        <Form onSubmit={this.onFormSubmit}>
          <h3 className="display-4">Video Explorer</h3>
          <FormGroup>
            <Input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Search here..."
            />
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default SearchBar;
