import React, { Component } from "react";
import { Consumer } from "../../context";
import { giveColorToMonth } from "../helper/giveColor";

import Month from "./Month";

export default class Months extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { months } = value;
          giveColorToMonth(value.january, months[0]);
          giveColorToMonth(value.february, months[1]);
          giveColorToMonth(value.march, months[2]);
          giveColorToMonth(value.april, months[3]);
          giveColorToMonth(value.may, months[4]);
          giveColorToMonth(value.june, months[5]);
          giveColorToMonth(value.july, months[6]);
          giveColorToMonth(value.august, months[7]);
          giveColorToMonth(value.september, months[8]);
          giveColorToMonth(value.november, months[9]);
          giveColorToMonth(value.october, months[10]);
          giveColorToMonth(value.december, months[11]);

          return (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                position: "relative",
              }}
            >
              {months.map((month) => (
                <Month key={month.id} month={month} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
