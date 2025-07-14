const LeaderboardTable = ({ leaderboard }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-gray-200 border rounded-2xl overflow-hidden shadow-sm">
        <thead className="bg-indigo-100">
          <tr>
            <th className="p-3 text-left text-indigo-800">Rank</th>
            <th className="p-3 text-left text-indigo-800">Name</th>
            <th className="p-3 text-left text-indigo-800">Total Points</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {Array.isArray(leaderboard) &&
            leaderboard.map((user) => (
              <tr key={user.name}>
                <td className="p-3">#{user.rank}</td>
                <td className="p-3 font-medium">{user.name}</td>
                <td className="p-3">{user.totalPoints}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
