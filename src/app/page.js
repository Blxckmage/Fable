import BlogPost from "@/components/BlogPost";

export default async function Home() {
  return (
    <section className="min-h-screen bg-ctp-base">
      <div className="m-auto mb-2 w-full max-w-4xl px-6 py-3 md:mb-12 md:px-32">
        <BlogPost
          title="Blog 1"
          date="2024-03-02 17:26"
          summary="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        />
        <BlogPost
          title="Blog 2"
          date="2024-03-02 17:26"
          summary="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        />
      </div>
    </section>
  );
}
