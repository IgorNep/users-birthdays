import React, { Component } from "react";
import { getDOB } from "./components/helper/getDob";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    users: [],
    january: [],
    february: [],
    march: [],
    april: [],
    may: [],
    june: [],
    july: [],
    august: [],
    september: [],
    october: [],
    november: [],
    december: [],
    months: [
      { name: "january", id: 0 },
      { name: "february", id: 1 },
      { name: "march", id: 2 },
      { name: "april", id: 3 },
      { name: "may", id: 4 },
      { name: "june", id: 5 },
      { name: "july", id: 6 },
      { name: "august", id: 7 },
      { name: "september", id: 8 },
      { name: "october", id: 9 },
      { name: "november", id: 10 },
      { name: "december", id: 11 },
    ],
  };
  componentDidMount() {
    fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ users: data });
        data.map((user) => {
          switch (getDOB(user.dob)) {
            case 0:
              this.setState({
                january: [user, ...this.state.january],
              });
              break;
            case 1:
              this.setState({
                february: [user, ...this.state.february],
              });
              break;
            case 2:
              this.setState({
                march: [user, ...this.state.march],
              });
              break;
            case 3:
              this.setState({
                april: [user, ...this.state.april],
              });
              break;
            case 4:
              this.setState({
                may: [user, ...this.state.may],
              });
              break;
            case 5:
              this.setState({
                june: [user, ...this.state.june],
              });
              break;
            case 6:
              this.setState({
                july: [user, ...this.state.july],
              });
              break;
            case 7:
              this.setState({
                august: [user, ...this.state.august],
              });
              break;
            case 8:
              this.setState({
                september: [user, ...this.state.september],
              });
              break;
            case 9:
              this.setState({
                october: [user, ...this.state.october],
              });
              break;
            case 10:
              this.setState({
                november: [user, ...this.state.november],
              });
              break;
            case 11:
              this.setState({
                december: [user, ...this.state.december],
              });
              break;
            default:
              console.log("Wrong number of month");
              break;
          }
        });
      });
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
