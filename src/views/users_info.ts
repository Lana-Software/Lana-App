import { user } from "./user";

let imgid = 0
function getRandomInt(num:number){
    return Math.floor(Math.random() * num + (num/1.5))
}


function getRandonStr(length){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const characterslength = characters.length;
    let result = ''
    let index = 0
    
    while (index < length) {
        result += characters.charAt(Math.floor(Math.random() * characterslength));
        console.log(result)
        index+=1
    }

    return result;
}

export let users_info: Array<user> = [
    {
        user_id: 100199001,
        user_profile: 'https://api.dicebear.com/7.x/initials/svg?seed=' + getRandonStr(2),
        recent_post: {
            likes: getRandomInt(999),
            comments: getRandomInt(499.5),
            image: 'https://picsum.photos/200/300?random='+ imgid++ +'.webp' 
        }
    },
    {
        user_id: 100199002,
        user_profile: 'https://api.dicebear.com/7.x/initials/svg?seed=' + getRandonStr(2),
        recent_post: {
            likes: getRandomInt(999),
            comments: getRandomInt(499.5),
            image: 'https://picsum.photos/200/300?random='+ imgid++ +'.webp'  
        }
    },
    {
        user_id: 100199003,
        user_profile: 'https://api.dicebear.com/7.x/initials/svg?seed=' + getRandonStr(2),
        recent_post: {
            likes: getRandomInt(999) ,
            comments: getRandomInt(499.5),
            image: 'https://picsum.photos/200/300?random='+ imgid++ +'.webp' 
        }
    },
    {
        user_id: 100199004,
        user_profile: 'https://api.dicebear.com/7.x/initials/svg?seed=' + getRandonStr(2),
        recent_post: {
            likes: getRandomInt(999),
            comments: getRandomInt(499.5),
            image: 'https://picsum.photos/200/300?random='+ imgid++ +'.webp' 
        }
    },
    {
        user_id: 100199005,
        user_profile: 'https://api.dicebear.com/7.x/initials/svg?seed=' + getRandonStr(2),
        recent_post: {
            likes: getRandomInt(999),
            comments: getRandomInt(499.5),
            image: 'https://picsum.photos/200/300?random='+ imgid++ +'.webp' 
        }
    },
    {
        user_id: 100199006,
        user_profile: 'https://api.dicebear.com/7.x/initials/svg?seed=' + getRandonStr(2),
        recent_post: {
            likes: getRandomInt(999) ,
            comments: getRandomInt(499.5),
            image: 'https://picsum.photos/200/300?random='+ imgid++ +'.webp' 
        }
    }
];
