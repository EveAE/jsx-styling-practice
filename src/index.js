//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const time = date.getHours();
const customStyle = {
  color: ""
};

console.log(time);

let greeting;

if (time < 12) {
  greeting = "Good Morning!";
  customStyle.color = "red";
} else if (time < 18) {
  greeting = "Good Afternoon!";
  customStyle.color = "green";
} else {
  greeting = "Good Evening!";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
