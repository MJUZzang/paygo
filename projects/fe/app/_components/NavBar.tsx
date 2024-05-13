"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Analysis from "@/_images/Analytics";
import AccountCircle from "@/_images/AccountCircle";
import Workout from "@/_images/Workout";
import Forum from "@/_images/Forum";
import { usePathname } from "next/navigation";
import FoodPicture from "@/_components/FoodPicture";

const excepts = ["/initial-setup", "/plan-info", "/food-info", "/plan"];

const NavBar = () => {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let temp = true;
        for (const except of excepts) {
            if (pathname.includes(except)) {
                temp = false;
                break;
            }
        }
        if (isVisible !== temp) setIsVisible(temp);
    }, [pathname]);

    return (
        <>
            <div className={`pb-[95px] ${!isVisible && "hidden"}`} />
            <div
                className={`absolute max-h-[100dvh] h-full ${
                    !isVisible && "hidden"
                }`}
            >
                <div
                    className={`fixed bg-app-bg bottom-0 w-full flex boxshadow h-[65px] pb-4 justify-between items-center
                    shadow-[-1px_0px_6px_1px_rgba(0,0,0,0.1)]`}
                >
                    <Link
                        href="/workout"
                        className="flex flex-col items-center justify-between basis-1/5"
                    >
                        <Workout
                            isActive={pathname.includes("/workout")}
                            className={`${
                                pathname === "/workout"
                                    ? "fill-app-blue"
                                    : "fill-gray-600"
                            }`}
                        />
                        <p
                            className={`text-[0.6rem] ${
                                pathname === "/workout"
                                    ? "text-app-blue"
                                    : "text-gray-600"
                            }`}
                        >
                            운동
                        </p>
                    </Link>

                    <Link
                        href="/analysis"
                        className="flex flex-col items-center justify-between basis-1/5"
                    >
                        <Analysis
                            className={`${
                                pathname === "/analysis"
                                    ? "fill-app-blue stroke-app-blue"
                                    : "fill-none stroke-gray-600"
                            }`}
                        />
                        <p
                            className={`text-[0.6rem] ${
                                pathname === "/analysis"
                                    ? "text-app-blue"
                                    : "text-gray-600"
                            }`}
                        >
                            그래프
                        </p>
                    </Link>

                    <div className="bg-app-blue p-3 rounded-full relative bottom-5 cursor-pointer">
                        <FoodPicture className="fill-app-bg" />
                    </div>

                    <Link
                        href="/community/following"
                        className="flex flex-col items-center justify-between basis-1/5"
                    >
                        <Forum
                            isActive={pathname === "/community/following"}
                            className={`${
                                pathname === "/community/following"
                                    ? "fill-app-blue"
                                    : "fill-gray-600"
                            }`}
                            dotsColor="fill-app-bg"
                        />
                        <p
                            className={`text-[0.6rem] ${
                                pathname === "/community/following"
                                    ? "text-app-blue"
                                    : "text-gray-600"
                            }`}
                        >
                            커뮤니티
                        </p>
                    </Link>

                    <Link
                        href="/profile/posts"
                        className="flex flex-col items-center justify-between basis-1/5"
                    >
                        <AccountCircle
                            isActive={pathname.includes("/profile/")}
                            className={`${
                                pathname.includes("/profile/")
                                    ? "fill-app-blue"
                                    : "fill-gray-600/75"
                            }`}
                        />
                        <p
                            className={`text-[0.6rem] ${
                                pathname.includes("/profile")
                                    ? "text-app-blue"
                                    : "text-gray-600"
                            }`}
                        >
                            프로필
                        </p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NavBar;
