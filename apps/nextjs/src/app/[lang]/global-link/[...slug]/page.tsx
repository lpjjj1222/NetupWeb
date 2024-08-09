"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import UserPreview from "~/components/user-preview";

const localLinkPrefix = "netup://global-link";

const screenMap = new Map<string, string>([
  ["home", "home"],
  ["user", "user"],
  ["discover", "discover"],
  ["event", "event"],
  ["chat", "chat"],
  ["profile", "profile"],
]);

export default function Screen() {
  const params = useParams();
  const screen = params?.slug?.[0];
  const id = params?.slug?.[1];
  console.log('@@@screen',screen)
  console.log('@@@id',id)

  return (
      <UserPreview />
  );
}
