import React from "react";
import Post from "@/main/_components/Post";

import { fetchFollowingPosts } from "@/_utils/post";

async function FollowingPage() {
    const posts = await fetchFollowingPosts();

    return (
        <>
            <div className="flex flex-col items-center pt-3 pb-6 h-full gap-3 bg-app-bg-1">
                {posts.map((post, i) => (
                    <Post postInfo={post} key={i} />
                ))}
            </div>
        </>
    );
}

export default FollowingPage;
