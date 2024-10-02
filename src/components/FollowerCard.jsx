import iconUp from "../assets/images/icon-up.svg";
import iconDown from "../assets/images/icon-down.svg";
import { formatNumber } from "../utils/formatNumber";

export default function FollowerCard(props) {
  const { platform, username, count, metric, todayChange, color } = props;

  const icon = todayChange > 0 ? iconUp : iconDown;

  const isGradient = color.includes("linear-gradient");

  const borderStyle = isGradient
    ? { backgroundImage: color }
    : { backgroundColor: color };

  return (
    <div className="card flex flex-col gap-6 flex-1 p-8 text-center">
      <div
        className="absolute inset-x-0 top-0 h-[0.3rem]"
        style={borderStyle}
      ></div>
      <div className="flex justify-center items-end gap-2">
        <img src={`./src/assets/images/icon-${platform}.svg`} alt="" />
        <p className="text-sm text-[var(--color-text-secondary)] font-bold">
          {username}
        </p>
      </div>
      <div>
        <h3 className="text-[4rem] leading-none font-bold">
          {formatNumber(count)}
        </h3>
        <p className="uppercase tracking-[0.4em] text-sm text-[var(--color-text-secondary)]">
          {metric}
        </p>
      </div>
      <p
        className="flex justify-center items-center gap-1 font-bold"
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
