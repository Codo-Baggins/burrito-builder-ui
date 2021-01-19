import React, { Component } from "react";
import { submitNewOrder } from "../../apiCalls";

class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: "",
      ingredients: [],
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleIngredientChange = (event) => {
    event.preventDefault();
    this.setState({
      ingredients: [...this.state.ingredients, event.target.name],
    });
  };

  handleSubmit = (e) => {
    submitNewOrder(this.state);
    this.clearInputs();
  };

  handleSubmitWithoutCorrectInputs = (e) => {
    e.preventDefault();
    console.log("You must type a name and select at least 1 ingredient");
  };

  clearInputs = () => {
    this.setState({ name: "", ingredients: [] });
  };

  render() {
    const possibleIngredients = [
      "beans",
      "steak",
      "carnitas",
      "sofritas",
      "lettuce",
      "queso fresco",
      "pico de gallo",
      "hot sauce",
      "guacamole",
      "jalapenos",
      "cilantro",
      "sour cream",
    ];
    const ingredientButtons = possibleIngredients.map((ingredient) => {
      return (
        <button
          key={ingredient}
          name={ingredient}
          onClick={(e) => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      );
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={(e) => this.handleNameChange(e)}
        />

        {ingredientButtons}

        <p>Order: {this.state.ingredients.join(", ") || "Nothing selected"}</p>

        <button
          onClick={(e) => {
            if (
              this.state.name.length > 0 &&
              this.state.ingredients.length > 0
            ) {
              this.handleSubmit(e);
            } else {
              this.handleSubmitWithoutCorrectInputs(e);
            }
          }}>
          Submit Order
        </button>
      </form>
    );
  }
}

export default OrderForm;
