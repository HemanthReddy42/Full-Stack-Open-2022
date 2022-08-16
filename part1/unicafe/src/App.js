import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const StatisticLine = (props) => {
  return (
    <table>
      <tbody>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
        </tr>
        </tbody>
    </table>
  );
};

const Statistics = (props) => {
  const avg = (props.good - props.bad) / props.all;
  const pos = (props.good / props.all) * 100;
  if (props.all === 0) return <h3>No Feedback Given</h3>;
  return (
    <div>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="nuteral" value={props.neutral} />
      <StatisticLine text="Bad" value={props.bad} />
      <StatisticLine text="all" value={props.all} />
      <StatisticLine text="average" value={avg} />
      <StatisticLine text="positive" value={pos} />
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodreview = () => {
    setGood(good + 1);
  };

  const badreview = () => {
    setBad(bad + 1);
  };

  const neutralreview = () => {
    setNeutral(neutral + 1);
  };

  return (
    <div>
      <h2>Feedback</h2>
      <Button handleClick={goodreview} text="Good" />
      <Button handleClick={neutralreview} text="neutral" />
      <Button handleClick={badreview} text="Bad" />
      <h3>Statistics</h3>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={good + neutral + bad}
      />
    </div>
  );
};

export default App;
