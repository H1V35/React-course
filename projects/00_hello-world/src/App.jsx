import darthVaderAvatar from "../src/assets/images/darth-vader.png";
import stormTrooperAvatar from "../src/assets/images/stormtrooper.png";
import yodaAvatar from "../src/assets/images/yoda.png";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  const yoda = { userName: "yoda", avatar: yodaAvatar, isFollowing: false };

  return (
    <section className="flex flex-col bg-zinc-900 rounded-3xl min-w-[480px]">
      <h2 className="text-2xl font-extrabold px-6 py-6">Who to follow</h2>

      <div className=" ">
        <TwitterFollowCard
          formatUserName={formatUserName}
          userName="darthvader"
          avatar={darthVaderAvatar}
          isFollowing
        >
          Darth Vader
        </TwitterFollowCard>

        <TwitterFollowCard
          formatUserName={formatUserName}
          userName="stormtrooper"
          avatar={stormTrooperAvatar}
          isFollowing
        >
          Storm Trooper
        </TwitterFollowCard>

        <TwitterFollowCard formatUserName={formatUserName} {...yoda}>
          Yoda
        </TwitterFollowCard>

        <a
          href="#"
          className="text-sky-500 block px-6 py-6 rounded-b-3xl transition duration-300 hover:bg-zinc-800"
        >
          Show more
        </a>
      </div>
    </section>
  );
}
