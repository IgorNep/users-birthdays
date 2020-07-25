import React, { Component } from "react";
import PropTypes from "prop-types";
import { getDOB, sortByDate, getDate } from "../helper/getDob";
import { Consumer } from "../../context";

class User extends Component {
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
    const { firstName, lastName, dob, color } = this.props.user;
    const { monthsName, showInfo } = this.state;

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
            <tr>
              <td>
                {firstName} {lastName}
              </td>
              <td>
                <span
                  style={{
                    padding: "3px 8px",
                    backgroundColor: color,
                    cursor: "pointer",
                    borderRadius: "4px",
                    color: "#fff",
                    position: "relative",
                  }}
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                >
                  {monthsName[getDOB(dob)]}
                </span>
                {showInfo ? (
                  <ul
                    style={{
                      position: "fixed",
                      top: "100px",
                      right: "50%",
                      backgroundColor: "grey",
                      color: "#fff",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    <span
                      style={{
                        textDecoration: "underline",
                        textTransform: "uppercase",
                      }}
                    >
                      {monthsName[getDOB(dob)]}
                    </span>
                    {usersList(getDOB(dob))}
                  </ul>
                ) : null}
              </td>
            </tr>
          );
        }}
      </Consumer>
    );
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired,
};
export default User;
