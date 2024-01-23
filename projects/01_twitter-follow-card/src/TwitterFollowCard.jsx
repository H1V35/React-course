import { useState } from "react";

const followButtonVariants = {
  generic: "px-6 py-2 rounded-full font-bold text-base transition duration-300",
  follow: "bg-white text-black hover:bg-zinc-300",
  following:
    "w-[125px] border border-white text-[rgba(255, 255, 255, 0.87)] hover:border-red-600 hover:text-red-600 hover:bg-red-900 hover:bg-opacity-20",
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
          className={`${followButtonVariants.generic} ${
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
