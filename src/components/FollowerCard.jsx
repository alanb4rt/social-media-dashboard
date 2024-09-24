import iconUp from "../assets/images/icon-up.svg";
import iconDown from "../assets/images/icon-down.svg";

export default function FollowerCard(props) {
  const { platform, username, followers, todayChange, color } = props;

  const icon = todayChange > 0 ? iconUp : iconDown;

  const isGradient = color.includes("linear-gradient");

  const borderStyle = isGradient
    ? { backgroundImage: color }
    : { backgroundColor: color };

  return (
    <div className="relative overflow-hidden flex flex-col gap-6 flex-1 bg-gray-100 rounded p-8 text-center">
      <div className="absolute inset-x-0 top-0 h-1" style={borderStyle}></div>
      <div className="flex justify-center items-center gap-2">
        <img src={`./src/assets/images/icon-${platform}.svg`} alt="" />
        <p>{username}</p>
      </div>
      <div>
        <h3 className="text-6xl font-bold">{followers}</h3>
        <p className="uppercase tracking-widest">Followers</p>
      </div>
      <p
        className="flex justify-center items-center gap-2"
        style={{
          color: todayChange > 0 ? "var(--color-green)" : "var(--color-red)",
        }}
      >
        <img src={icon} alt="" />
        {todayChange > 0 ? todayChange : -todayChange} Today
      </p>
    </div>
  );
}
