"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function TermsOfUse() {
    const router = useRouter();

    useEffect(() => {
        router.push("/policy/terms.html");
    })
}