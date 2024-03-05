import prisma from "./prisma";

export const getPosts = async () => {
  const posts = await prisma.post.findMany();
  if (posts) {
    return posts;
  }
  return null;
};

export const getPost = async (id) => {
  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });
  if (post) {
    return post;
  }
  return null;
};
