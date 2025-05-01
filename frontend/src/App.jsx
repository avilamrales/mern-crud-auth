import { BrowserRouter, Routes, Route } from "react-router";

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

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
          element={<LoginPage />}
        />
        <Route
          path="/register"
          element={<RegisterPage />}
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
