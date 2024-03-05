"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body }),
      });

      router.push("/");
      router.refresh();
    } catch (err) {
      console.error(err);
    }

    setTitle("");
    setBody("");
  };

  return (
    <main>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-6 flex flex-row items-center md:flex-col md:items-start">
          <div>
            <label className="mb-2 block pr-4 text-left text-2xl font-bold md:text-3xl">
              Add Post
            </label>
          </div>
          <div className="w-full">
            <input
              className="w-full appearance-none rounded border-2 border-ctp-lavender bg-ctp-surface0 px-4 py-3 leading-tight focus:border-ctp-mauve focus:outline-none"
              type="text"
              onChange={handleTitleChange}
              placeholder="Title"
              required
            />
          </div>
        </div>
        <div className="mb-6 flex flex-col">
          <div>
            <textarea
              className="w-full appearance-none rounded border-2 border-ctp-lavender bg-ctp-surface0 px-4 py-3 leading-tight focus:border-ctp-mauve focus:outline-none"
              rows={10}
              placeholder="..."
              onChange={handleBodyChange}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="rounded bg-gradient-to-r from-ctp-mauve to-ctp-lavender px-3 py-2 text-ctp-crust"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
