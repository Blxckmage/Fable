import { currentUser } from "@clerk/nextjs";

export default async function getAuth() {
  const user = await currentUser();
  if (user) {
    return user;
  }
  return null;
}
