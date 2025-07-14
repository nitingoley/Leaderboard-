const UserSelector = ({
  users,
  selectedUser,
  setSelectedUser,
  handleClaim,
}) => (
  <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
    <select
      className="flex-1 border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
      value={selectedUser}
      onChange={(e) => setSelectedUser(e.target.value)}
    >
      <option value="">Select User</option>
      {users.map((user) => (
        <option value={user._id} key={user._id}>
          {user.name}
        </option>
      ))}
    </select>
    <button
      onClick={handleClaim}
      className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl shadow-md transition-all"
    >
      Claim Points
    </button>
  </div>
);

export default UserSelector;
