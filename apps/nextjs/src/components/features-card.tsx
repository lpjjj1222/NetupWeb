"use client";

import { cn } from "@saasfly/ui";
import { AnimatedList } from "@saasfly/ui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "William Johnson",
    description: "Software engineer at Microsoft",
    time: "15m ago",

    icon: "/images/netup/profile1.jpeg",
    color: "#00C9A7",
  },
  {
    name: "Priya Sharma",
    description: "Securities Analyst at Goldman Sachs",
    time: "10m ago",
    icon: "/images/netup/profile6.jpeg",
    color: "#FFB800",
  },
  {
    name: "Paige Lin",
    description: "Student at University of Washington",
    time: "5m ago",
    icon: "/images/netup/profile5.jpeg",
    color: "#FF3D71",
  },
  {
    name: "Jacy Chen",
    description: "Project Manager at Juniper Networks",
    time: "2m ago",
    icon: "/images/netup/profile4.jpeg",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        {/* <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div> */}
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
        >
          <img src={icon} style={{borderRadius:'10%'}} alt="" />
        </div>
        
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function FeaturesCard() {
  return (
    <div className="relative flex max-h-[435px] min-h-[435px] flex-col overflow-hidden rounded-2xl border bg-background p-6 shadow-lg dark:border-[#443c3c]">
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
