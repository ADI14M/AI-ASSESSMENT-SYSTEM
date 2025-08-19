import axios from "axios";
import { useState } from "react";

export default function CreateAssessment() {
  const [questions, setQuestions] = useState([]);

  const generate = async () => {
    const res = await axios.post("http://localhost:5000/api/test/generate", {
      topic: "Machine Learning"
    });
    setQuestions(res.data);
  };

  return (
    <div>
      <h1>Create Assessment</h1>
      <button onClick={generate}>Generate Questions</button>
      {questions.map((q, i) => (
        <div key={i}>{q.question}</div>
      ))}
    </div>
  );
}
