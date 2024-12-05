import React, { useState } from "react";
import "./Table.css";

class TableFunc extends React.Component {
  state = {
    characters: [
      { name: "Rajesh", age: "21" },
      { name: "Arsad", age: "28" },
      { name: "Bikash", age: "38" },
    ],
  };

  removeRow = (index) => {
    // Filter out the row to be removed by index
    const updatedCharacters = this.state.characters.filter(
      (character, i) => i !== index
    );
    // Update the state with the new array
    this.setState({ characters: updatedCharacters });
  };

  addCharacter = (character) => {
    // Add the new character to the existing list
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    return (
      <>
        <Table characters={this.state.characters} removeRow={this.removeRow} />
        <Form addCharacter={this.addCharacter} />
      </>
    );
  }
}

export default TableFunc;

function Table({ characters, removeRow }) {
  return (
    <table className="table">
      <TableHeader />
      <TableBody characters={characters} removeRow={removeRow} />
    </table>
  );
}

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Action</th>
      </tr>
    </thead>
  );
}

function TableBody({ characters, removeRow }) {
  const rows = characters.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.age}</td>
        <td>
          <button onClick={() => removeRow(index)}>Remove</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}

function Form({ addCharacter }) {
  const initialState = {
    name: "",
    age: "",
  };

  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (state.name && state.age) {
      addCharacter(state);
      setState(initialState); // Reset the form after submission
    }
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={state.name}
          onChange={handleChange}

        />
        <br />
        <br />
        <label htmlFor="age">Age Of Person : </label>
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={state.age}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
