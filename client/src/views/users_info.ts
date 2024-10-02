import { user } from "./user";
import {getRandomStr, getRandomInt, getRandomColor} from "../ts/utilities";

let imgid = 0

export let users_info: Array<user> = [
    {
        user_id: 100199001,
        user_profile: 'https://api.dicebear.com/7.x/notionists/svg?scale=150&backgroundType=gradientLinear,solid&backgroundColor=' + getRandomColor() + ',' + getRandomColor() + '&seed=' + getRandomStr(9),
        recent_post: {
            likes: getRandomInt(999),
            comments: getRandomInt(499.5),
            image: 'https://picsum.photos/200/300?random='+ imgid++ +'.webp' 
        }
    },
    {
        user_id: 100199002,
        user_profile: 'https://api.dicebear.com/7.x/initials/svg?seed=' + getRandomStr(2),
        recent_post: {
            likes: getRandomInt(999),
            comments: getRandomInt(499.5),
            image: 'https://picsum.photos/200/300?random='+ imgid++ +'.webp'  
        }
    },
    {
        user_id: 100199003,
        user_profile: 'https://api.dicebear.com/7.x/notionists/svg?scale=150&backgroundType=gradientLinear,solid&backgroundColor=' + getRandomColor() + ',' + getRandomColor() + '&seed=' + getRandomStr(9),
        recent_post: {
            likes: getRandomInt(999) ,
            comments: getRandomInt(499.5),
            image: 'https://picsum.photos/200/300?random='+ imgid++ +'.webp' 
        }
    },
    {
        user_id: 100199004,
        user_profile: 'https://api.dicebear.com/7.x/initials/svg?seed=' + getRandomStr(2),
        recent_post: {
            likes: getRandomInt(999),
            comments: getRandomInt(499.5),
            image: 'https://picsum.photos/200/300?random='+ imgid++ +'.webp' 
        }
    },
    {
        user_id: 100199005,
        user_profile: 'https://api.dicebear.com/7.x/notionists/svg?scale=150&backgroundType=gradientLinear,solid&backgroundColor=' + getRandomColor() + ',' + getRandomColor() + '&seed=' + getRandomStr(9),
        recent_post: {
            likes: getRandomInt(999),
            comments: getRandomInt(499.5),
            image: 'https://picsum.photos/200/300?random='+ imgid++ +'.webp' 
        }
    },
    {
        user_id: 100199006,
        user_profile: 'https://api.dicebear.com/7.x/initials/svg?seed=' + getRandomStr(2),
        recent_post: {
            likes: getRandomInt(999) ,
            comments: getRandomInt(499.5),
            image: 'https://picsum.photos/200/300?random='+ imgid++ +'.webp' 
        }
    }
];
