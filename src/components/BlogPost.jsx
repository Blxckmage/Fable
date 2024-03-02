import Link from "next/link";

const BlogPost = ({ title, date, summary }) => {
  return (
    <Link href="/">
      <article className="mb-6 md:mb-8">
        <header className="flex flex-col justify-between md:flex-row md:items-baseline">
          <h2 className="mb-2 cursor-pointer text-lg font-medium text-ctp-text md:text-xl">
            {title}
          </h2>
          <time className="flex-shrink-0 text-ctp-text">{date}</time>
        </header>
        <main>
          <p className="hidden leading-8 text-ctp-text md:block">{summary}</p>
        </main>
      </article>
    </Link>
  );
};

export default BlogPost;
