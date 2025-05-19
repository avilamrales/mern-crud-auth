import { useAuth } from "../context/AuthContext";

export default function TasksPage() {
  const { user } = useAuth();

  console.log(user);

  return <div>TasksPage</div>;
}
