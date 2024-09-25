import iconUp from "../assets/images/icon-up.svg";
import iconDown from "../assets/images/icon-down.svg";
import { formatNumber } from "../utils/formatNumber";

export default function OverviewCard(props) {
  const { platform, title, value, todayChange } = props;

  const icon = todayChange > 0 ? iconUp : iconDown;

  return (
    <div className="bg-gray-100 p-8 rounded">
      <div className="flex justify-between items-center gap-4 mb-6">
        <h3 className="font-bold">{title}</h3>
        <img src={`./src/assets/images/icon-${platform}.svg`} alt="" />
      </div>
      <div className="flex justify-between items-end gap-4">
        <p className="text-4xl font-bold leading-none">{formatNumber(value)}</p>
        <p
          className="flex justify-center items-center gap-1"
          style={{
            color: todayChange > 0 ? "var(--color-green)" : "var(--color-red)",
          }}
        >
          <img src={icon} alt="" />
          {todayChange > 0 ? todayChange : -todayChange}%
        </p>
      </div>
    </div>
  );
}
