"use client";

// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

export default function AppleAppSiteAssociation() {
    // const router = useRouter();

    return (
        `{
            "applinks": {
                "apps": [],
                "details": [
                    {
                        "appID": "HBSAFB9N3N.social.netup.netup",
                        "paths": [ "*"]
                    },
                    {
                     "appID": "HBSAFB9N3N.social.netup",
                     "paths": [ "*"]
                     }
                ]
            }
         }`
    )

    // useEffect(() => {
    //     router.push("/public/apple-app-site-association");
    // })
}