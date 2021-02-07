import React, { Component } from "react";
import EmployeeDirectory from "./components/EmployeeDirectory";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import API from "./utils/API";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees:[]
  };

  componentDidMount() {

    API.search()
      .then(res => {
        console.log(res.data.results)
        this.setState({ employees: res.data.results })})
      .catch(err => console.log(err));
      console.log(this.state.employees);
  };

  removeEmployee = id => {
    console.log(id)
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id.value !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        {this.state.employees.map(employee => (
          <EmployeeDirectory
            removeEmployee={this.removeEmployee}
            id={employee.id.value}
            key={employee.id.value}
            first={employee.name.first}
            last={employee.name.last}
            email={employee.email}
            location={employee.location.city}
            image={employee.picture.thumbnail}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
