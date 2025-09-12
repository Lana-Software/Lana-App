import type { Author } from "./author";

export interface Post {
	comments: string[]; // TODO: make this an array of Comment objects e.g `Comment[]`
	likes: string[];
	images: string[];
	author: Author;
}
