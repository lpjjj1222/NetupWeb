'use client'

import React from "react";
// import { Button } from '@nextui-org/button';
import { useEffect } from "react";

const navigateTimeout = 2000;
const publicTestFlightLink = "https://testflight.apple.com/join/QP0AJmDO"

export default function Download() {
    console.log('@@@@@@@Download')
    useEffect(() => {
        window.location.href = publicTestFlightLink

        setTimeout(() => {
            return (
                <div style={{
                    height: 200,
                    position: "relative",
                    alignItems: "center",
                }}>
                    <div style={{
                        alignItems: "center",
                        height: 100,
                    }}>
                        <button
                            style={{
                                width: "30%",
                                height: 60,
                                position: "absolute",
                                top: "40%",
                                left: "35%",
                                alignItems: "center",
                            }}
                            onClick={() => {
                                window.location.href = publicTestFlightLink
                            }}>
                            Click to download Netup
                        </button>
                    </div>
                </div>
            );
        }, navigateTimeout)
    }, []);
}