import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PrivacyPolicy() {
    const router = useRouter();

    useEffect(() => {
        router.push("/policy/privacy.html");
    })
}