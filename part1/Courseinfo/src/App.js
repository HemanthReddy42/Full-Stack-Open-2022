import React from "react";

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Course Name : {props.course}</h1>
    </div>
  );
};

const Content = ({ parts }) => {
  //props not working for objects
  return (
    <div>
      {parts.map((val, i) => (
        <Part key={i} name={val.name} exercises={val.exercises} />
      ))}
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <h4>
        {props.name} : {props.exercises}
      </h4>
    </div>
  );
};

const Total = ({ total }) => {
  let sum = 0;
  const s = total.map((val) => (sum = sum + val.exercises));
  return (
    <div>
      <h4>Total no of exercises : {sum}</h4>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <p>
        <Content parts={course.parts} />
      </p>
      <p>
        <Total total={course.parts} />
      </p>
    </div>
  );
};

export default App;
