import { useState } from "react";

export default function TestForm() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/tests", { method: "GET" });
    const data = await res.text();
    setResponse(data);
  };

  return (
    <div>
      <h2>Submit Test</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={question} 
          onChange={(e) => setQuestion(e.target.value)} 
          placeholder="Enter a test question"
        />
        <button type="submit">Submit</button>
      </form>
      <p>Response: {response}</p>
    </div>
  );
}
