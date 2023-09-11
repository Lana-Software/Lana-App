import { user } from "./user";

let imgid = 0

export let users_info: Array<user> = [
    {
        user_id: 100199001,
        user_profile: 'jhonny_pfp.png',
        recent_post: {
            comments: 18,
            likes: 69,
            image: 'https://picsum.photos/200/300?random='+ imgid++ +'.webp' 
        }
    },
    {
        user_id: 100199002,
        user_profile: 'jojopuppy1.jpg',
        recent_post: {
            comments: 54,
            likes: 45,
            image: 'https://picsum.photos/200/300?random='+ imgid++ +'.webp'  
        }
    },
    {
        user_id: 100199003,
        user_profile: 'jojopuppy2.png',
        recent_post: {
            comments: 2,
            likes: 180,
            image: 'https://picsum.photos/200/300?random='+ imgid++ +'.webp' 
        }
    },
    {
        user_id: 100199004,
        user_profile: 'jojopuppy3.jpg',
        recent_post: {
            comments: 19,
            likes: 670,
            image: 'https://picsum.photos/200/300?random='+ imgid++ +'.webp' 
        }
    },
    {
        user_id: 100199005,
        user_profile: 'jojopuppy4.png',
        recent_post: {
            comments: 19,
            likes: 670,
            image: 'https://picsum.photos/200/300?random='+ imgid++ +'.webp' 
        }
    },
    {
        user_id: 100199006,
        user_profile: 'manzanagato.png',
        recent_post: {
            comments: 19,
            likes: 670,
            image: 'https://picsum.photos/200/300?random='+ imgid++ +'.webp' 
        }
    }
];
