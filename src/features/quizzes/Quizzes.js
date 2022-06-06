import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { quizzesSelector } from "./quizzesSlice";
import { topicsSelector } from "../topics/topicsSlice";
import { cardsSelector } from "../cards/cardsSlice";
import { useEffect } from "react";

let uniqueId = uuidv4();

console.log(uniqueId);

export default function Quizzes() {
  const quizzes = useSelector(quizzesSelector); // replaced this with a call to your selector to get all the quizzes in state
  const topics = useSelector(topicsSelector);
  const cards = useSelector(cardsSelector);

  useEffect(() => {
    localStorage.setItem("quizzes", JSON.stringify(quizzes));
    localStorage.setItem("topics", JSON.stringify(topics));
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [quizzes, topics, cards]);

  return (
    <section className="center">
      <h1>Quizzes</h1>
      <ul className="quizzes-list">
        {Object.values(quizzes).map((quiz) => (
          <Link key={quiz.id} to={ROUTES.quizRoute(quiz.id)}>
            <li className="quiz">{quiz.name}</li>
            <li className="questions-display">
              {quiz.cardIds.length} Question{quiz.cardIds.length > 1 && "s"}
            </li>
          </Link>
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button">
        Create New Quiz
      </Link>
    </section>
  );
}
