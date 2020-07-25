import React from "react";
import { Consumer } from "../../context";

import { getDOB, sortByDate, getDate } from "../helper/getDob";

export default class Month extends React.Component {
  state = {
    showInfo: false,
    monthsName: [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ],
  };

  onMouseEnter = () => {
    this.setState({ showInfo: true });
  };
  onMouseLeave = () => {
    this.setState({ showInfo: false });
  };
  render() {
    const { showInfo, monthsName } = this.state;
    const { month } = this.props;
    return (
      <Consumer>
        {(value) => {
          const {
            january,
            february,
            march,
            april,
            may,
            june,
            july,
            august,
            september,
            october,
            november,
            december,
          } = value;

          const usersList = (month) => {
            if (month === 0) {
              return sortByDate(january).map((user, index) => (
                <li key={index}>
                  {user.firstName} {user.lastName} - {getDate(user.dob)}
                </li>
              ));
            } else if (month === 1) {
              return sortByDate(february).map((user, index) => (
                <li key={index}>
                  {user.firstName} {user.lastName} - {getDate(user.dob)}
                </li>
              ));
            } else if (month === 2) {
              return sortByDate(march).map((user, index) => (
                <li key={index}>
                  {user.firstName} {user.lastName} - {getDate(user.dob)}
                </li>
              ));
            } else if (month === 3) {
              return sortByDate(april).map((user, index) => (
                <li key={index}>
                  {user.firstName} {user.lastName} - {getDate(user.dob)}
                </li>
              ));
            } else if (month === 4) {
              return sortByDate(may).map((user, index) => (
                <li key={index}>
                  {user.firstName} {user.lastName} - {getDate(user.dob)}
                </li>
              ));
            } else if (month === 5) {
              return sortByDate(june).map((user, index) => (
                <li key={index}>
                  {user.firstName} {user.lastName} - {getDate(user.dob)}
                </li>
              ));
            } else if (month === 6) {
              return sortByDate(july).map((user, index) => (
                <li key={index}>
                  {user.firstName} {user.lastName} - {getDate(user.dob)}
                </li>
              ));
            } else if (month === 7) {
              return sortByDate(august).map((user, index) => (
                <li key={index}>
                  {user.firstName} {user.lastName} - {getDate(user.dob)}
                </li>
              ));
            } else if (month === 8) {
              return sortByDate(september).map((user, index) => (
                <li key={index}>
                  {user.firstName} {user.lastName} - {getDate(user.dob)}
                </li>
              ));
            } else if (month === 9) {
              return sortByDate(october).map((user, index) => (
                <li key={index}>
                  {user.firstName} {user.lastName} - {getDate(user.dob)}
                </li>
              ));
            } else if (month === 10) {
              return sortByDate(november).map((user, index) => (
                <li key={index}>
                  {user.firstName} {user.lastName} - {getDate(user.dob)}
                </li>
              ));
            } else if (month === 11) {
              return sortByDate(december).map((user, index) => (
                <li key={index}>
                  {user.firstName} {user.lastName} - {getDate(user.dob)}
                </li>
              ));
            }
          };
          return (
            <React.Fragment>
              <ul className="mb-3 " style={{ display: "flex" }}>
                <li
                  style={{
                    backgroundColor: month.color,
                    padding: "2px 8px",
                    borderRadius: "3px",
                    cursor: "pointer",
                    marginBottom: "3px",
                    textAlign: "center",
                    color: "#fff",
                    marginRight: "4px",
                  }}
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                >
                  {month.name}
                  {showInfo ? (
                    <ul
                      style={{
                        position: "absolute",
                        top: "25px",
                        left: "30%",
                        width: "300px",
                        zIndex: "1",
                        backgroundColor: "grey",
                        color: "#fff",
                        padding: "10px",
                        borderRadius: "10px",
                        listStyle: "none",
                      }}
                    >
                      <li
                        style={{
                          textDecoration: "underline",
                          textTransform: "uppercase",
                        }}
                      >
                        {monthsName[month.id]}
                      </li>
                      {usersList(month.id)}
                    </ul>
                  ) : null}
                </li>
              </ul>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
