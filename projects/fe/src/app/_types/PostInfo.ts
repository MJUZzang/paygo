import { StaticImageData } from "next/image";
import type UserInfo from "@/app/_types/UserInfo";

export default interface PostInfo {
    id: number;
    user: UserInfo;
    content: string;
    image: StaticImageData;
    hasLiked: boolean;
    likes: number;
    comments: number;
    postedAt: Date;
}
