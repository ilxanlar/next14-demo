import { getPost, getPostComments } from '@/api/post';

type Props = {
  params: {
    id: string
  }
}

export default async function Post(props: Props) {
  const postId = props.params.id;

  const post = await getPost(postId);
  const comments = await getPostComments(postId);

  return (
    <div>
      <h1 className="text-lg font-bold uppercase">
        POST #{post.id}: {post.title}
      </h1>
      <div
        className="py-8 text-lg"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
      {comments.length > 0 && (
        <div className="text-sm">
          <h2 className="mb-4 font-bold uppercase pb-4 border-b border-gray-200">
            Comments
          </h2>
          {comments.map(comment => (
            <div key={comment.id} className="mb-4">
              <h3 className="mb-1 font-bold">
                {comment.name} - {comment.email}
              </h3>
              <div
                className="text-gray-500"
                dangerouslySetInnerHTML={{ __html: comment.body }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
