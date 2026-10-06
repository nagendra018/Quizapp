// import CounterClass from "./components/CounterClass";
// export default function App() {
//  return <CounterClass />;
// }
// import { useState } from "react";
// export default function App() {
//  const [count, setCount] = useState(0);
//  return (
//  <div>
//  <h2>Count: {count}</h2>
//  <button onClick={() => setCount(count + 1)}>Increase</button>
//  </div>
//  );
// }
// import { useState } from "react";
// export default function App() {
//  const [message, setMessage] = useState("Waiting...");
//  function handleClick() {
//  setMessage("Button clicked successfully!");
//  }
//  return (
//  <div>
//  <button onClick={handleClick}>Click Me</button>
//  <p>{message}</p>
//  </div>
//  );
// import { useState } from "react";
// export default function App() {
//  const [loggedIn, setLoggedIn] = useState(false);
//  return (
//  <div>
//  <h2>{loggedIn ? "Welcome, User!" : "Please log in."}</h2>
//  <button onClick={() => setLoggedIn(!loggedIn)}>
//  {loggedIn ? "Log out" : "Log in"}
//  </button>
//  </div>
//  );
// }
// export default function App() {
//  const name = "Student";
//  const course = "Full Stack Development-II";
//  const message = `Hello ${name}, welcome to ${course}!`;
//  return <h2>{message}</h2>;
// }
// import { useState } from "react";
// export default function App() {
//  const [count, setCount] = useState(0);
//  const increase = () => setCount(prev => prev + 1);
//  return (
//  <div>
//  <h2>Counter: {count}</h2>
//  <button onClick={increase}>Increase</button>
//  </div>
//  );
// }
// import { useEffect, useState } from "react";
// export default function App() {
//  const [posts, setPosts] = useState([]);
//  const [error, setError] = useState("");
//  useEffect(() => {
//  fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
//  .then(r => {
//  if (!r.ok) throw new Error("Network error");
//  return r.json();
//  })
//  .then(data => setPosts(data))
//  .catch(err => setError(err.message));
//  }, []);
//  return (
//  <div>
//  <h2>Posts</h2>
//  {error && <p>{error}</p>}
//  <ul>
//  {posts.map(post => <li key={post.id}>{post.title}</li>)}
//  </ul>
//  </div>
//  );
// }
// import Student from "./components/Student";
// export default function App() {
//  return (
//  <Student
//  name="Anita"
//  branch="Computer Science and Engineering"
//  />
//  );
// }
// import { useState } from "react";
// export default function App() {
//  const [form, setForm] = useState({ name: "", email: "" });
//  const [submitted, setSubmitted] = useState(false);
//  function handleChange(e) {
//  setForm({ ...form, [e.target.name]: e.target.value });
//  }
//  function handleSubmit(e) {
//  e.preventDefault();
//  setSubmitted(true);
//  }
//  return (
//  <div>
//  <form onSubmit={handleSubmit}>
//  <input name="name" value={form.name}
//  onChange={handleChange} placeholder="Name" />
//  <input name="email" value={form.email}
//  onChange={handleChange} placeholder="Email" />
//  <button type="submit">Submit</button>
//  </form>
//  {submitted && <p>{form.name} — {form.email}</p>}
//  </div>
//  );
// export default function App() {
//  const subjects = ["JavaScript", "React.js", "Node.js", "Express.js", "MySQL"];
//  return (
//  <div>
//  <h2>Subjects</h2>
//  <ul>
//  {subjects.map(subject => (
//  <li key={subject}>{subject}</li>
//  ))}
//  </ul>
//  </div>
//  );
// }
import Nav from "./components/navbar";
import Form from"./components/forms";
function App(){
    return(
        <div>
            <Nav></Nav>
            <Form />
        </div>
    ); 
}
export default App;





