import React, { Component } from "react";
import EmployeeDirectory from "./components/EmployeeDirectory";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import API from "./utils/API";

class App extends Component {
  
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
   
    const employees = this.state.employees.filter(employee => employee.id.value !== id);

    this.setState({ employees });
  };

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
            city={employee.location.city}
            state={employee.location.state}
            phone={employee.phone}
            image={employee.picture.large}

          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
