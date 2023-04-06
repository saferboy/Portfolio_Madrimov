import { Blogs } from "./blog-model";

export interface Likes {
    id: number,
    uid:    string,
    blogs:  Blogs,
    blogsid:    number
}