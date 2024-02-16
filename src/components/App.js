import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";


function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((res) => res.json())
    .then((data) => setQuestions(data));
  }, [])

  function handleSubmitQuestion(newQuestion) {
    console.log(newQuestion);
    setQuestions([...questions, newQuestion]) 
  }

  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onSubmitQuestion={handleSubmitQuestion}/> : <QuestionList onDelete={handleDeleteQuestion} questions={questions}/>}
    </main>
  );
}

export default App;
