import Link from 'next/link';
import { getPosts } from '@/api/post';

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div className="grid grid-cols-1 gap-y-8">
      {posts.map((post) => (
        <div className="" key={post.id}>
          <h2 className="font-bold text-lg uppercase">
            POST #{post.id}: {post.title}
          </h2>
          <div
            className="mt-2"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
          <footer className="mt-2">
            <Link href={`/posts/${post.id}`}>
              Read More
            </Link>
            &nbsp;&nbsp;&bull;&nbsp;&nbsp;
            <Link href={`/posts/${post.id}`}>
              Quick View
            </Link>
          </footer>
        </div>
      ))}
    </div>
  );
}
