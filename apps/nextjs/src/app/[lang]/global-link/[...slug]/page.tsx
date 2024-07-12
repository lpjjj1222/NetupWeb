"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

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

  useEffect(() => {
    console.log("params", params);
    console.log("screen", screen);
    console.log("id", id);

    if (screen && screenMap.has(screen)) {
      const suffix = id ? `/${id}` : "";
      window.location.href = `${localLinkPrefix}/${screen}${suffix}`;
      // 设置超时，如果没有跳转则显示下载链接
      setTimeout(() => {
        window.location.href = window.location.origin;
      }, 6000); // 6秒后跳转到下载页面
    }
  }, [screen, id]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        textAlign: "right",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
      }}
    >
      <Image
        src="/images/netup/open_in_safari.jpg"
        width={320}
        height={1000}
        alt="Open in safari"
        style={{ marginTop: "2%" }}
      />

      {/* <div style={{ marginTop: "3%", paddingBottom: "20%", color: "black" }}>
        <Link href="/download">
          If you didn't install Netup, Download here
        </Link>
      </div> */}
    </div>
  );
}
