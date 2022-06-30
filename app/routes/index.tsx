import { useLoaderData } from "@remix-run/react";
// import type { LoaderFunction } from "@remix-run/server-runtime";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function loader(): Promise<Post[]> {
  console.log(process.env.API_KEY);
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  return posts;
}

export default function Index() {
  const posts = useLoaderData<Post[]>();

  return (
    // <div className="flex flex-wrap w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      <section className="flex flex-col items-center justify-center gap-4 border-2 w-96">
        <h2>Posts</h2>
        {posts && posts.map((post) => <PostItem key={post.id} {...post} />)}
      </section>
    </div>
  );
}

export function PostItem({ body, title, userId, id }: Post) {
  return (
    <div className="bg-white rounded-sm">
      <h3 className="text-2xl text-center text-zinc-800">{title}</h3>
      <p>{body}</p>
    </div>
  );
}
