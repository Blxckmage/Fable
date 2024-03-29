import getAuth from "@/lib/get-auth";
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

const Header = async () => {
  const auth = await getAuth();
  const links = [
    { id: 0, name: "Blogs", to: "/" },
    ...(auth ? [{ id: 1, name: "New Blog", to: "/create" }] : []),
  ];

  return (
    <nav className="m-auto mb-2 h-6 w-full max-w-4xl px-3 py-8 md:mb-12 md:px-20">
      <div className="flex flex-row items-center justify-between text-ctp-text">
        <h1 className="bg-gradient-to-r from-ctp-blue to-ctp-maroon bg-clip-text text-3xl font-bold text-transparent">
          Fable
        </h1>
        <ul className="flex items-center justify-center">
          {links.map((link) => (
            <li key={link.id} className="ml-4 inline-block">
              <Link href={link.to}>{link.name}</Link>
            </li>
          ))}
          <li className="ml-4 inline-block">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton afterSignInUrl="/" />
            </SignedOut>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
