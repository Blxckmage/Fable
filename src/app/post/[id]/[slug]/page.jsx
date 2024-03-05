import FormattedDate from "@/components/FormattedDate";
import { getPost } from "@/lib/api";
import { clerkClient } from "@clerk/nextjs";
import Image from "next/image";

const Page = async ({ params: { id, slug } }) => {
  const post = await getPost(id);
  const user = await clerkClient.users.getUser(post.authorId);
  console.log(post);
  console.log(user);
  return (
    <article className="item-center flex flex-col">
      <h1 className="w-full max-w-2xl px-4 text-3xl font-bold">{post.title}</h1>
      <nav className="mt-7 flex w-full max-w-2xl items-start px-4 text-ctp-subtext0">
        <div className="mb-4 flex items-center">
          <Image
            alt={post.author}
            src={user.imageUrl}
            width={28}
            height={28}
            className="rounded-full"
          />
          <p className="ml-2 md:block">{post.author}</p>
          <span className="block">&nbsp;/&nbsp;</span>
        </div>
        <div className="mb-4 mr-2 md:ml-0">
          <FormattedDate date={post.date} />
        </div>
      </nav>
      <div className="w-full px-4  text-lg">{post.body}</div>
    </article>
  );
};

export default Page;
