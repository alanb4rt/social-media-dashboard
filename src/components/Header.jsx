import ToggleButton from "./ToggleButton";

export default function Header() {
  return (
    <header className="flex justify-between items-center gap-8 py-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold">Social Media Dashboard</h1>
        <p className="w-fit text-[var(--color-text-secondary)]">
          Total Followers: 23,004
        </p>
      </div>
      <ToggleButton />
    </header>
  );
}
