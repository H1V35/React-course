export function TwitterFollowCard({
  children,
  formatUserName,
  userName = "unknown",
  image,
  isFollowing,
}) {
  return (
    <a
      href="#"
      className="flex justify-between items-center px-6 py-3 text-xl transition duration-300 hover:bg-zinc-800"
    >
      <header className="flex items-center gap-4">
        <img
          src={image}
          alt={`${children}'s avatar`}
          className="w-20 h-20 rounded-full"
        />
        <div className="flex flex-col">
          <strong>{children}</strong>
          <span className="text-lg">{formatUserName(userName)}</span>
        </div>
      </header>

      <aside>
        <button className="ml-4 px-6 py-2 rounded-full bg-white font-bold text-black text-base">
          Follow
        </button>
      </aside>
    </a>
  );
}
