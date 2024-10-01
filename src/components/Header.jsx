import ToggleButton from "./ToggleButton";
import { followers } from "../data/followers";

export default function Header() {
  const totalFollowers = followers.reduce(
    (acc, { followers: followersCount }) => acc + followersCount,
    0
  );

  return (
    <header id="header" className="relative">
      <div className="z-10 relative w-full max-w-screen-lg mx-auto p-4">
        <div className="flex justify-between items-center gap-8 py-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Social Media Dashboard</h1>
            <p className="w-fit text-[var(--color-text-secondary)]">
              Total Followers: {totalFollowers}
            </p>
          </div>
          <ToggleButton />
        </div>
      </div>
    </header>
  );
}
