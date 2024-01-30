import { useState } from "react";

const followButtonVariants = {
  follow:
    "px-6 py-2 bg-white rounded-full border border-white font-bold text-base text-black transition duration-300 hover:bg-zinc-300",
  following:
    "w-[125px] px-6 py-2 rounded-full border border-white font-bold text-base text-[rgba(255, 255, 255, 0.87)] transition duration-300 hover:bg-red-900 hover:bg-opacity-20 hover:border-red-600 hover:text-red-600",
};

function determineButtonText(isFollowing, isHovered) {
  if (isFollowing) {
    return isHovered ? "Unfollow" : "Following";
  }
  return "Follow";
}

export function TwitterFollowCard({
  children,
  formatUserName,
  userName = "unknown",
  avatar,
  initialIsFollowing,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const [isHovered, setIsHovered] = useState(false);

  const buttonText = determineButtonText(isFollowing, isHovered);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <a
      href="#"
      className="flex justify-between items-center px-6 py-3 text-xl transition duration-300 hover:bg-zinc-800"
    >
      <header className="flex items-center gap-4">
        <img
          src={avatar}
          alt={`${children}'s avatar`}
          className="w-20 h-20 rounded-full"
        />
        <div className="flex flex-col">
          <strong className="hover:underline">{children}</strong>
          <span className="text-lg">{formatUserName(userName)}</span>
        </div>
      </header>

      <aside>
        <button
          className={`${
            isFollowing
              ? followButtonVariants.following
              : followButtonVariants.follow
          }`}
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {buttonText}
        </button>
      </aside>
    </a>
  );
}
