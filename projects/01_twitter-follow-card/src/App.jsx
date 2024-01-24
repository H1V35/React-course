import darthVaderAvatar from "../src/assets/images/darth-vader.png";
import stormTrooperAvatar from "../src/assets/images/stormtrooper.png";
import yodaAvatar from "../src/assets/images/yoda.png";
import c3poAvatar from "../src/assets/images/c-3po.png";
import r2d2Avatar from "../src/assets/images/r2-d2.png";
import { TwitterFollowCard } from "./TwitterFollowCard";

const yoda = { userName: "yoda", avatar: yodaAvatar };

const users = [
  {
    userName: "c3po",
    name: "C-3PO",
    avatar: c3poAvatar,
    isFollowing: false,
  },
  {
    userName: "r2d2",
    name: "R2-D2",
    avatar: r2d2Avatar,
    isFollowing: false,
  },
];

const formatUserName = (userName) => `@${userName}`;

export function App() {
  return (
    <section className="flex flex-col bg-zinc-900 rounded-3xl min-w-[480px]">
      <h2 className="text-2xl font-extrabold px-6 py-6">Who to follow</h2>

      <div>
        <TwitterFollowCard
          formatUserName={formatUserName}
          userName="darthvader"
          avatar={darthVaderAvatar}
          initialIsFollowing={true}
        >
          Darth Vader
        </TwitterFollowCard>

        <TwitterFollowCard
          formatUserName={formatUserName}
          userName="stormtrooper"
          avatar={stormTrooperAvatar}
          initialIsFollowing={true}
        >
          Storm Trooper
        </TwitterFollowCard>

        <TwitterFollowCard formatUserName={formatUserName} {...yoda}>
          Yoda
        </TwitterFollowCard>

        {users.map(({ userName, name, avatar, isFollowing }) => {
          return (
            <TwitterFollowCard
              formatUserName={formatUserName}
              userName={userName}
              avatar={avatar}
              initialIsFollowing={isFollowing}
              key={userName}
            >
              {name}
            </TwitterFollowCard>
          );
        })}

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
