import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, onDelete}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{
        /* display QuestionItem components here after fetching */
        questions.map((question) => (
          <QuestionItem onDelete={onDelete} key={question.id} question={question}/>
        ))
        }
      </ul>
    </section>
  );
}

export default QuestionList;
