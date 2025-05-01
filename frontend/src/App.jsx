import { BrowserRouter, Routes, Route } from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<h1 className="text-4xl font-bold">Home Page</h1>}
        />
        <Route
          path="/login"
          element={<h1 className="text-4xl font-bold">Login</h1>}
        />
        <Route
          path="/register"
          element={<h1 className="text-4xl font-bold">Register</h1>}
        />
        <Route
          path="/tasks"
          element={<h1 className="text-4xl font-bold">Tasks Page</h1>}
        />
        <Route
          path="/add-task"
          element={<h1 className="text-4xl font-bold">New Task</h1>}
        />
        <Route
          path="/tasks/:id"
          element={<h1 className="text-4xl font-bold">Update Task</h1>}
        />
        <Route
          path="/profile"
          element={<h1 className="text-4xl font-bold">Profile</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}
