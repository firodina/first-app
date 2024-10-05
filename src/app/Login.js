import { useState } from "react";

function Login() {
  const [count, setcount] = useState(10);
  return (
    <div>
      <h1>count :{count}</h1>

      <button onClick={() => setcount(count - 1)}>decrement</button>
      <br />
      <button onClick={() => setcount(10)}>reset</button>
    </div>
  );
}

export default Login;
