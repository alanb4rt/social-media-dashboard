import FollowerCard from "./components/FollowerCard";
import { followers } from "./data/followers";

export default function App() {
  return (
    <>
      <div className="w-full max-w-screen-lg mx-auto p-4">
        <header className="flex justify-between items-center gap-8 py-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Social Media Dashboard</h1>
            <p>Total Followers: 23,004</p>
          </div>
          <div>Dark Mode</div>
        </header>
        <main>
          <div className="flex gap-8 flex-wrap">
            {followers.map((data, index) => (
              <FollowerCard key={index} {...data} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
