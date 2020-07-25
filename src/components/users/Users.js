import React, { Component } from "react";
import User from "./User";
import { giveColor } from "../helper/giveColor";
import { Consumer } from "../../context";

class Users extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { users } = value;
          giveColor(value.january);
          giveColor(value.february);
          giveColor(value.march);
          giveColor(value.april);
          giveColor(value.may);
          giveColor(value.june);
          giveColor(value.july);
          giveColor(value.august);
          giveColor(value.september);
          giveColor(value.november);
          giveColor(value.october);
          giveColor(value.december);
          return (
            <div
              className="card card-body mb-3"
              style={{ position: "relative", zIndex: "0" }}
            >
              <table className="table table-striped">
                <thead className="thead">
                  <tr>
                    <th>Name</th>
                    <th>Date of birth</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <User key={user.id} user={user} usersInMonth={value} />
                  ))}
                </tbody>
              </table>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Users;
