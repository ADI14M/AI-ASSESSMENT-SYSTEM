import { useState } from "react";

export default function EvaluationResult() {
  const [result, setResult] = useState("");

  const handleCheck = async () => {
    const res = await fetch("/api/evaluation", { method: "GET" });
    const data = await res.text();
    setResult(data);
  };

  return (
    <div>
      <h2>Evaluation Result</h2>
      <button onClick={handleCheck}>Check Evaluation</button>
      <p>Result: {result}</p>
    </div>
  );
}
