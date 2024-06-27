"use client";

import React from "react";

import { WobbleCard } from "@saasfly/ui/wobble-card";

export function WobbleCardShow() {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className="flex flex-row md:flex-row items-center justify-between py-0 px-1"
      >
        <div style={{minHeight:'80%', minWidth:'50%'}} >
          <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
            Long lasting connections
          </h2>
          {/* <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Say goodbye to nonresponse emails, 
          <br />
          matching long-lasting connections 
          <br />
          and personal growth for all parties 
          <br />
          involved.
          </p> */}
          <p className="mt-4 mr-1 text-left  text-base/6 text-neutral-200">Say goodbye to nonresponse emails, matching long-lasting connections and personal growth for all parties involved. </p>
        </div>
        <img
          src="/images/netup/combo2.png"
          width={200}
          height={200}
          alt="linear demo"
          className="rounded-2xl object-contain filter"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] py-0 px-0" >
        <h2 className="max-w-80  text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
          Personalized opportunities
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Meaningful event suggestions just for you based on your interests, profile information, and past interactions
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]" className="flex flex-row md:flex-row items-center justify-between py-0 px-1">
        <div style={{minHeight:'80%', minWidth:'50%'}}>
          <h2 className="max-w-sm text-balance  text-left text-base font-semibold tracking-[-0.015em] text-white md:max-w-lg md:text-xl lg:text-3xl">
            Host your own event and foster a community
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Utilize the easy event scheduler to plan one-on-one or group coffee chats and meals, and kickstart networking interactions during others' events, meals, or coffee chats.
          </p>
        </div>
        <img
          src="/images/netup/combo.png"
          width={600}
          height={600}
          alt="linear demo"
          className="max-w-120 rounded-2xl object-contain"
        />
      </WobbleCard>
    </div>
  );
}
