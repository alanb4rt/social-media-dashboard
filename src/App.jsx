import FollowerCard from "./components/FollowerCard";
import Header from "./components/Header";
import OverviewCard from "./components/OverviewCard";
import { followers } from "./data/followers";
import { overview } from "./data/overview";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="w-full max-w-screen-lg mx-auto px-4">
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-14">
            {followers.map((data, index) => (
              <FollowerCard key={index} {...data} />
            ))}
          </section>
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[var(--color-text-secondary)]">
              Overview - Today
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {overview.map((data, index) => (
                <OverviewCard key={index} {...data} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
