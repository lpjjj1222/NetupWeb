import { cn } from "@saasfly/ui";
import Marquee from "@saasfly/ui/marquee";

const reviews = [
  {
    name: "Tech Innovators Coffee Chat",
    username: "San Francisco, CA",
    body: "Discuss the latest trends in technology over a cup of coffee.",
    img: "/images/netup/tech.jpeg",
  },
  {
    name: "Healthcare Professionals Coffee Chat",
    username: "Boston, MA",
    body: "Network with healthcare professionals and share industry insights.",
    img: "/images/netup/healthcare.jpeg",
  },
  {
    name: "Startup Founders Coffee Chat",
    username: "Austin, TX",
    body: "Connect with fellow startup founders and exchange ideas.",
    img: "/images/netup/startup.jpeg",
  },
  {
    name: "Finance Networking Lunch",
    username: "New York, NY",
    body: "Join us for a lunch to discuss investment strategies and market trends.",
    img: "/images/netup/finance.jpeg",
  },
  {
    name: "Marketing Professionals Dinner",
    username: "Los Angeles, CA",
    body: "Enjoy dinner while networking with marketing experts.",
    img: "/images/netup/marketing.jpeg",
  },
  {
    name: "University of Washington Alumni Brunch",
    username: "Seattle, WA",
    body: "Reconnect with alumni over a delightful brunch.",
    img: "/images/netup/uw.jpeg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const Comments = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-4 sm:py-20 md:py-20 xl:py-20">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export { Comments };
