
import { defineStore } from "pinia";
import { users_info } from "./users_info"; // users array

export const useUserStore = defineStore("user", { // user
    state:() => {
        return { 
            userarray: users_info,
        }
    },
    // getters: {

    // }
    // ,
    actions: {
        getuser (){
            return this.userarray;
        },

        getUserRecentPost (){ // que buscas loco?
            for (let i = 0; i < this.userarray.length; i++) {
                let user = this.userarray[i];
                let recentpost = user.recent_post;
                return recentpost
            }

        },
        
        getUserRecentPostLikes (){ // no entiendo una monda
            for (let i = 0; i < this.userarray.length; i++) {
                let recen = this.getUserRecentPost()
                return recen?.likes
            }
        },

        getUserRecentPostComments (){ // no entiendo una monda
            for (let i = 0; i < this.userarray.length; i++) {
                let recen = this.getUserRecentPost()
                return recen?.comments
            }
        },

        getUserPfp (){
            for (let i = 0; i < this.userarray.length; i++) {
                let recen = this.getUserRecentPost()
                return recen?.image.toString()
            }
        }

    }
})