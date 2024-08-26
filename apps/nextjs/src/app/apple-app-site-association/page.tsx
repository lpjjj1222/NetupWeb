"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AppleAppSiteAssociation() {
    const router = useRouter();

    useEffect(() => {
        router.push("/.well-known/apple-app-site-association");
    })
}