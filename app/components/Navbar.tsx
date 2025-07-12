import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import ClientNav from "./ClientNav";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <ClientNav session={session} />
      </nav>
    </header>
  );
};

export default Navbar;
