import ToggleButton from "./ToggleButton";
import { followers } from "../data/followers";

export default function Header() {
  const totalFollowers = followers.reduce(
    (acc, { followers: followersCount }) => acc + followersCount,
    0
  );

  return (
    <header className="flex justify-between items-center gap-8 py-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold">Social Media Dashboard</h1>
        <p className="w-fit text-[var(--color-text-secondary)]">
          Total Followers: {totalFollowers}
        </p>
      </div>
      <ToggleButton />
    </header>
  );
}
