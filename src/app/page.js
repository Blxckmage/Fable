import BlogPost from "@/components/BlogPost";
import { getPosts } from "@/lib/api";
import getAuth from "@/lib/get-auth";

export default async function Home() {
  const posts = await getPosts();
  return (
    <div>
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          id={post.id}
          slug={post.slug}
          title={post.title}
          date={post.date}
          summary={
            post.body.length > 250 ? post.body.slice(0, 250) + "..." : post.body
          }
        />
      ))}
    </div>
  );
}
