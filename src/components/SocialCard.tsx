import React from "react";

interface Follower {
  count: string;
}

interface SocialCardProps {
  platform: string;
  name: string;
  description: string;
  followers: Follower[];
  mainImage: string;
  profileImage: string;
}

function SocialCard({
  w,
  h,
  x,
  platform = "Twitter",
  name = "John Doe",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
  followers = [{ count: "1000" }, { count: "2000" }, { count: "3000" }],
  mainImage = "https://images.pexels.com/photos/259526/pexels-photo-259526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  profileImage = "https://pbs.twimg.com/profile_images/1587160193158500353/P3gQhoHU_400x400.jpg",
}: SocialCardProps) {
  console.log("SocialCard", w, h);

  // // based on the w and h, we can adjust the layout of the card
  // if (w === 2 && h === 2) {
  //   return <div>fuck</div>;
  // }

  // if (w === 2 && h === 0.5) {
  //   return <div>1*4</div>;
  // }

  return (
    <div className="mx-auto overflow-hidden rounded-3xl bg-gray-800 shadow-md w-full h-full">
      <div className="">
        <div className="flex-shrink-0 w-full">
          <img
            className="h-32 w-full object-cover"
            src={mainImage}
            alt="Card image"
          />
        </div>
        <div className="relative p-5">
          {/* Absolute img element */}
          <div className="absolute -top-10 left-5 h-14 w-14 rounded-full border bg-white outline outline-gray-400 transition-all duration-300 ease-in-out overflow-hidden">
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="flex justify-between py-1">
            <div>
              <div className="text-base font-semibold uppercase tracking-wide text-white">
                {platform}
              </div>
              <a
                href="#"
                className="mt-1 block text-sm font-normal leading-tight text-white/65"
              >
                {name}
              </a>
            </div>
            <div>
              <button className="group flex items-center gap-x-2 rounded-lg bg-indigo-500 px-4 py-1.5 text-white hover:bg-indigo-700">
                Follow
                <svg
                  className="text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1 translate-y-0.5"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill=""
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.410156 0.660156H8.95396V0.660474L11.0413 2.75536L7.97439 5.81112L10.9262 8.21807V11.3398H7.96875V5.81675L2.51421 11.2515L0.426758 9.15649L5.98576 3.61763H0.410156V0.660156Z"
                    fill="currentcolor"
                  />
                </svg>
              </button>
            </div>
          </div>
          <p className="mt-2 text-gray-400">{description}</p>
          <div className="mx-auto mt-4 flex w-full items-center justify-around gap-8 rounded-lg bg-gray-700">
            {followers.map((follower, index) => (
              <div key={index} className="my-4 flex justify-around text-center">
                <div className="flex flex-col">
                  <span className="text-3xl font-medium text-white">
                    {follower.count}
                  </span>
                  <span className="text-gray-400">Follower</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialCard;
