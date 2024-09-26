import FollowerCard from "./components/FollowerCard";
import OverviewCard from "./components/OverviewCard";
import { followers } from "./data/followers";
import { overview } from "./data/overview";

export default function App() {
  return (
    <>
      <div id="App" data-theme="light">
        <div className="w-full max-w-screen-lg mx-auto p-4">
          <header className="flex justify-between items-center gap-8 py-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold">Social Media Dashboard</h1>
              <p className="w-fit text-[var(--color-text-secondary)]">
                Total Followers: 23,004
              </p>
            </div>
            <div className="w-fit text-[var(--color-text-secondary)]">
              Dark Mode
            </div>
          </header>
          <main>
            <section className="flex gap-8 flex-wrap mb-8">
              {followers.map((data, index) => (
                <FollowerCard key={index} {...data} />
              ))}
            </section>
            <section>
              <h2 className="text-3xl font-bold mb-4">Overview - Today</h2>
              <div className="grid grid-cols-4 gap-8">
                {overview.map((data, index) => (
                  <OverviewCard key={index} {...data} />
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
