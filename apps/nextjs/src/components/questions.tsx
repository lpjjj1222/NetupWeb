import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@saasfly/ui/accordion";

export function Questions() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>About Netup</AccordionTrigger>
        <AccordionContent>
          NetupSocial is a premier platform for connecting with professionals and discovering the latest career opportunities. Designed to streamline professional networking, NetupSocial helps you expand your network, explore new career paths, and stay informed about industry trends.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Why Netup?</AccordionTrigger>
        <AccordionContent>
        Netup uses innovative swipe-and-match technology to make career networking as easy and engaging as connecting with friends, helping you build valuable professional relationships.
        </AccordionContent>
      </AccordionItem>
      {/* <AccordionItem value="item-3">
        <AccordionTrigger>Is this starter for you?</AccordionTrigger>
        <AccordionContent>
          If you’re embarking on the development of a SaaS service and are in
          search of a solid foundation, meticulously crafted architecture, and
          an enriching developer experience, then this starter kit stands as a
          prime resource to consider. It encompasses a holistic collection of
          best practices and tools, each thoroughly vetted and demonstrated to
          be effective across numerous projects. Even if you’re uncertain about
          whether a starter kit fits your project’s needs, this resource still
          holds significant value. By delving into the starter kit, you have the
          opportunity to garner inspiration from its array of solutions to
          common challenges encountered by developers. This exploration can
          serve as a pathway to identifying commendable practices and devising
          robust solutions tailored to your specific development process. In
          summary, whether you opt to leverage this starter kit in its entirety
          or merely extract certain ideas from it, we are confident it provides
          indispensable insights and tools for anyone aiming to create a
          high-caliber SaaS service.
        </AccordionContent>
      </AccordionItem> */}
    </Accordion>
  );
}
