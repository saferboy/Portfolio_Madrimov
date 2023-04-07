import { Blogs } from "./blog-model"

export interface Comments {
    id: number,
    email: string,
    comment: string,
    blogs: Blogs
    blogsId: number
}

export interface CommentBody {
    email: string,
    comment: string
}