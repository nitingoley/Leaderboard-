const UserForm = ({ newUserName, setNewUserName, handleAddUser }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
      <input
        type="text"
        placeholder="Enter new user name"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
        className="flex-1 border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        onClick={handleAddUser}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl shadow-md transition-all"
      >
        Add User
      </button>
    </div>
  );
};

export default UserForm;
