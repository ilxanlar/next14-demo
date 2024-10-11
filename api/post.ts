import { Comment } from '@/api/comment';

export type Post = {
  id: string
  userId: string
  title: string
  body: string
}

export async function getPosts() {
  const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts: Post[] = await postsResponse.json()
  return posts
}

export async function getPost(postId: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  const post: Post = await response.json()
  return post
}

export async function getPostComments(postId: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  const comments: Comment[] = await response.json()
  return comments
}
