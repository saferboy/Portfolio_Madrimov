import { Comments } from "./coments-model";
import { Likes } from "./likes-model";

export interface Blogs {
    id:         number,
    title:      string,
    content:    string,
    img:        string,
    likes:      Likes,
    comments:   Comments,
}

export interface BlogBody {
    title: string,
    content: string
}