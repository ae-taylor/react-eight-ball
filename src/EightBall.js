import React, { useState } from "react";
import getRandomAnswer from "./random"
import "./EightBall.css"

/** EightBall
 * Props: 
 * - answers (array of objects having a message and color)
 * 
 * State: 
 * - randomAnswer - includes message and color
 * 
 * App > EightBall > randomAnswer
 */

function EightBall(props) {
  const INITIAL_STATE = { msg: "Think of a Question.", color: "black" }
  const [answer, setAnswer] = useState(INITIAL_STATE);

  function handleClick() {
    const answer = getRandomAnswer(props.answers);
    setAnswer(answer);
  }

  return (
    <div className="EightBall"
      onClick={handleClick}
      style={{ backgroundColor: answer.color }}>
      <h1>{answer.msg}</h1>
    </div>
  );
}


EightBall.defaultProps = {
  answers:
    [
      { msg: "It is certain.", color: "green" },
      { msg: "It is decidedly so.", color: "green" },
      { msg: "Without a doubt.", color: "green" },
      { msg: "Yes - definitely.", color: "green" },
      { msg: "You may rely on it.", color: "green" },
      { msg: "As I see it, yes.", color: "green" },
      { msg: "Most likely.", color: "green" },
      { msg: "Outlook good.", color: "green" },
      { msg: "Yes.", color: "green" },
      { msg: "Signs point to yes.", color: "goldenrod" },
      { msg: "Reply hazy, try again.", color: "goldenrod" },
      { msg: "Ask again later.", color: "goldenrod" },
      { msg: "Better not tell you now.", color: "goldenrod" },
      { msg: "Cannot predict now.", color: "goldenrod" },
      { msg: "Concentrate and ask again.", color: "goldenrod" },
      { msg: "Don't count on it.", color: "red" },
      { msg: "My reply is no.", color: "red" },
      { msg: "My sources say no.", color: "red" },
      { msg: "Outlook not so good.", color: "red" },
      { msg: "Very doubtful.", color: "red" },
    ]
};

export default EightBall;