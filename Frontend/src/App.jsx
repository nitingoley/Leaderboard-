import { useEffect, useState } from "react";
import axios from "axios";
import UserForm from "./components/UserForm";
import Notification from "./components/Notification";
import LeaderboardTable from "./components/LeaderboardTable";
import UserSelector from "./components/UserSelector";

const API_BASE = import.meta.env.MODE === "development"
  ? import.meta.env.VITE_BACKEND_URL
  : "/api";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);
  const [newUserName, setNewUserName] = useState("");
  const [lastClaim, setLastClaim] = useState(null);

  const fetchUsers = async () => {
    const res = await axios.get(`${API_BASE}/users`);
    setUsers(res.data);
  };

  const fetchLeaderboard = async () => {
    const res = await axios.get(`${API_BASE}/leaderboard`);
    setLeaderboard(res.data);
  };

  useEffect(() => {
    fetchUsers();
    fetchLeaderboard();
  }, []);

  const handleClaim = async () => {
    if (!selectedUser) return alert("Please select a user");
    const res = await axios.post(`${API_BASE}/users/claim/${selectedUser}`);
    setLastClaim({ name: res.data.user.name, points: res.data.points });
    fetchUsers();
    fetchLeaderboard();
  };

  const handleAddUser = async () => {
    if (!newUserName.trim()) return;
    await axios.post(`${API_BASE}/users`, { name: newUserName });
    setNewUserName("");
    fetchUsers();
    fetchLeaderboard();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          🏆 Leaderboard
        </h1>

        <UserForm
          newUserName={newUserName}
          setNewUserName={setNewUserName}
          handleAddUser={handleAddUser}
        />

        <UserSelector
          users={users}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          handleClaim={handleClaim}
        />

        {lastClaim && <Notification lastClaim={lastClaim} />}
        <LeaderboardTable leaderboard={leaderboard} />
      </div>
    </div>
  );
}

export default App;
