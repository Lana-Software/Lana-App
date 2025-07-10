export interface user {
	user_id: number;
	user_profile: string;
	recent_post: {
		comments: number;
		likes: string;
		image: string;
	};
}
