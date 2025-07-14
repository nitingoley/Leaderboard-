
const Notification = ({ lastClaim }) => {
  return (
    <div className="mb-4 text-green-700 font-semibold text-center">
      🎉 {lastClaim.name} received{" "}
      <span className="text-lg">{lastClaim.points}</span> points!
    </div>
  );
};

export default Notification;
