import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { quizzesSelector } from "./quizzesSlice";

let uniqueId = uuidv4();

console.log(uniqueId);

export default function Quizzes() {
  const quizzes = useSelector(quizzesSelector); // replaced this with a call to your selector to get all the quizzes in state
  return (
    <section className="center">
      <h1>Quizzes</h1>
      <ul className="quizzes-list">
        {Object.values(quizzes).map((quiz) => (
          <Link key={quiz.id} to={ROUTES.quizRoute(quiz.id)}>
            <li className="quiz">{quiz.name}</li>
          </Link>
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button">
        Create New Quiz
      </Link>
    </section>
  );
}
