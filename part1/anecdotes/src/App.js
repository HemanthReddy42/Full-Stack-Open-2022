import { useState } from "react";
const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Dispaly = (props) => {
  return (
    <h4>
      {props.anecdote[props.select]} {props.points}
    </h4>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setvote] = useState(new Uint8Array(6));
  const [mostVoted, setMostVoted] = useState(0);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  const randomeone = () => {
    setSelected(getRandomInt(6));
  };
  const voteone = () => {
    const copy = { ...vote };
    copy[selected] += 1;
    setvote(copy);
    if (vote[selected] > vote[mostVoted]) {
      setMostVoted(selected);
    }
  };

  return (
    <div>
      <h2>Anecdote with most votes</h2>
      <Dispaly select={selected} anecdote={anecdotes} />
      <Button handleClick={randomeone} text="anecdotes" />
      <Button handleClick={voteone} text="vote" />
      <h2>Anecdote with most votes</h2>
      <Dispaly select={mostVoted} anecdote={anecdotes} />
    </div>
  );
};

export default App;
