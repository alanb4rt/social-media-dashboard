import ToggleButton from "./ToggleButton";
import { followers } from "../data/followers";

export default function Header() {
  const totalFollowers = followers.reduce(
    (acc, { count: followersCount }) => acc + followersCount,
    0
  );

  return (
    <header id="header" className="relative">
      <div className="z-10 relative w-full max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 sm:gap-8 py-12">
          <section>
            <h1 className="text-3xl font-bold mb-1">Social Media Dashboard</h1>
            <p className="w-fit text-[var(--color-text-secondary)] font-bold">
              Total Followers: {totalFollowers}
            </p>
          </section>
          <hr className="sm:hidden border-[var(--color-text-secondary)]" />
          <ToggleButton />
        </div>
      </div>
    </header>
  );
}
