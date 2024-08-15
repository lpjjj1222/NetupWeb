import { useEffect } from "react";
import Link from "next/link";

import * as Icons from "@saasfly/ui/icons";

import { XBlogArticle } from "~/components/blog-card";
import { Comments } from "~/components/comments";
import { DocumentGuide } from "~/components/document-guide";
import { FeaturesCard } from "~/components/features-card";
import { Meteorss } from "~/components/meteors-card";
import { Questions } from "~/components/questions";
import ShimmerButton from "~/components/shimmer-button";
import ShimmerButton2 from "~/components/shimmer-button2";
import { TypewriterEffectSmooths } from "~/components/typewriterEffectSmooth";
import { WobbleCardShow } from "~/components/wobble";
import { WordReveal } from "~/components/word-reveal";
import type { Locale } from "~/config/i18n-config";
import GLOBAL from "~/global";
import { getDictionary } from "~/lib/get-dictionary";
import type { Meteor } from "~/types/meteors";
import { getAccountById } from "../../../../../../src/controllers/userController";
const meteors_data: Meteor = {
  name: "Contact Us",
  description: "Need Help? Contact Our Support Team.",
  button_content: "Email Us",
  url: "mailto: contact@netup.social",
};

export default async function IndexPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);
  // TRY TO FETCH SOME DATA FROM AMPLIFY
  //   const fetchAccount = async () => {
  //     console.log('getaccountbyiding');
  //     const idd = await getAccountById(GLOBAL.client, "us-east-2:14de523a-02dd-cab7-6cab-298ce2448f37");
  //     console.log('@@@@@@@@@@', idd);
  // };
  // console.log('fetching account')

  // fetchAccount();


  return (
    <>
      <section className="w-full px-8 sm:px-20 md:px-48 md:mb-0 xl:h-[80vh] xl:px-20 2xl:px-40">
        <div className="grid grid-cols-1 gap-10 pb-10 md:pb-40 xl:grid-cols-2">
          <div className="flex flex-col items-start">
            <div className="flex flex-col pt-4 md:pt-28 lg:pt-28 xl:pt-28">
              <Link href="/download" target="_blank">
                <DocumentGuide>
                  {dict.marketing.introducing || "Introducing Saasfly"}
                </DocumentGuide>
              </Link>

              <div className="mt-6">
                <h1 className="relative mb-6 max-w-4xl text-left text-4xl font-bold dark:text-zinc-100 sm:text-7xl md:text-7xl xl:text-7xl">
                  {dict.marketing.title ||
                    "Saasfly: A new SaaS player? Make things easier."}
                </h1>
              </div>

              <div>
                <span className="text-zinc-500 sm:text-xl">
                  {dict.marketing.sub_title || ""}
                </span>
                <TypewriterEffectSmooths />
              </div>

              <div className="mb-4 mt-6 flex w-full flex-col justify-center space-y-4 sm:flex-row sm:justify-start sm:space-x-8 sm:space-y-0">
                <Link href="/download">
                  <ShimmerButton className="mx-auto flex items-center justify-center">
                    <span className="z-10 flex w-48 items-center justify-center whitespace-pre text-sm font-semibold leading-none tracking-tight text-white 2xl:h-8 2xl:w-60 2xl:text-xl">
                      {dict.marketing.get_started}
                    </span>
                  </ShimmerButton>
                </Link>

                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfTc9uSAmcc5s3fsvObgGETFKfsbffyr6RPmU7a1pgkKaubyQ/viewform">
                  <ShimmerButton2 className="mx-auto flex  items-center justify-center">
                    <span className="z-10 flex w-48 items-center justify-center whitespace-pre text-sm font-semibold leading-none tracking-tight text-white 2xl:h-8 2xl:w-60 2xl:text-xl">
                      {dict.marketing.to_be_host}
                    </span>
                  </ShimmerButton2>
                </Link>

                {/* <Link href="https://github.com/NetupApp" target="_blank">
                  <div className="flex h-full items-center justify-center">
                    <Icons.GitHub className="mr-2 h-6 w-6" />
                    <span className="text-base font-semibold">
                      {dict.marketing.view_on_github || "View on GitHub"}
                    </span>
                  </div>
                </Link> */}
              </div>
            </div>
          </div>

          <div className="block h-full w-full">
            <div className="flex flex-col-reverse pt-0 md:flex-col md:pt-28">
              <div className="hidden md:block">
                <Meteorss meteor={meteors_data} />
              </div>
              <div className="mt-4 flex w-full flex-col-reverse items-center justify-between md:flex-row">
                <XBlogArticle />
                <div className="mb-4 w-full md:ml-4 md:mt-0 md:w-1/2">
                  <FeaturesCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hidden xl:h-[100vh] w-full sm:mt-24 md:mt-0 md:block">
        <div className="flex h-full w-full justify-between px-[100px]">
          <div className="flex w-[60%] flex-col pr-4 pt-60 md:pt-0 xl:pt-60">
            <WobbleCardShow />
          </div>
          <div className="h-full w-[40%]">
            <div className="flex flex-col pl-[120px]">
              <WordReveal />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-40 hidden h-[70vh] w-full xl:block">
        <div className="flex h-full w-full justify-between 2xl:px-[220px]">
          <div className="flex w-[60%] flex-col pr-4 pt-60 2xl:pt-40">
            <div className="px-[120px]">
              <Questions />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-8 md: mt-20 xl:hidden" >
          <Questions />        
      </section>

      <section className="w-full px-8 pt-10 sm:px-0 sm:pt-0 md:px-0 md:pt-0 xl:px-0 xl:pt-0">
        <div className="flex h-full w-full flex-col items-center pb-[100px] pt-10">
          <div>
            <h1 className="mb-6 text-center text-3xl font-bold dark:text-zinc-100 md:text-5xl">
              Events You Can Discover Here
            </h1>
          </div>
          <div className="mb-6 text-xl dark:text-zinc-100 md:text-xl">
            Build professional connections through various{" "}
            <span className="font-bold">meetups</span>.
          </div>

          <div className="w-full overflow-x-hidden">
            <Comments />
          </div>
        </div>
      </section>
      <div className="block px-10 md:hidden">
        <Meteorss meteor={meteors_data} />
      </div>
    </>
  );
}
