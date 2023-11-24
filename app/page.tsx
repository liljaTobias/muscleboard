import { AddInput } from "@/components/posts/AddInput";
import prisma from "@/lib/prisma";

export default async function Home() {
  const posts = await prisma.post.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between lg:flex">
        <div className="flex-col gap-3">
          <h1 className="font-bold">Test</h1>
          <hr />
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                {post.title}
                <span className="font-extralight"> by {post.authorId}</span>
              </li>
            ))}
          </ul>
          <AddInput />
        </div>
      </div>
    </main>
  );
}
