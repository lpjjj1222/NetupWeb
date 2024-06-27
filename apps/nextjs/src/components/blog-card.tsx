import { FollowerPointerCard } from "@saasfly/ui/following-pointer";

export function XBlogArticle() {
  return (
    <div className="w-80">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
            avatar={blogContent.authorAvatar}
          />
        }
      >
        <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl">
          <div style={{background: 'linear-gradient(to bottom right, #F7D481, #FBA87F, #FFE9E9, #FFFFFF, #FFE9E9, #FE73B6)'}}
          className="aspect-w-16 aspect-h-10 xl:aspect-w-16 xl:aspect-h-10 relative w-full overflow-hidden rounded-tl-lg rounded-tr-lg">
            <img
              src={blogContent.image}
              alt="netup app preview"
              className={`transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl `}
            />
          </div>
          <div className=" p-4">
            <h2 className="my-4 text-lg font-bold text-zinc-700">
              {blogContent.title}
            </h2>
            <h2 className="my-4 text-sm font-normal text-zinc-500">
              {blogContent.description}
            </h2>
            {/* <div className="mt-10 flex flex-row items-center justify-between">
              <span className="text-sm text-gray-500">{blogContent.date}</span>
              <div className="relative z-10 block rounded-xl bg-black px-6 py-2 text-xs font-bold text-white">
                Read More
              </div>
            </div> */}
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

const blogContent = {
  slug: "making-sense-of-career-networking-in-various-fields",
  author: "Netup",
  date: "",
  title: "Making Sense of Career Networking in Various Fields",
  description:
    "A perfect platform to connect with professionals and find the latest career opportunities.",
  image:
    "/images/netup/rectangle.png",
  authorAvatar:
    "/images/netup/happyLogo.png",
};

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex items-center space-x-2">
    <img
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
    />
    <p>{title}</p>
  </div>
);
