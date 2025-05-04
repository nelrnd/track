import { auth } from "@/auth"
import Link from "next/link"
import SignOut from "./sign-out"
import SignIn from "./sign-in"

export default async function Navbar() {
  const session = await auth()

  return (
    <nav className="fixed z-50 top-0 w-full px-4">
      <ul className="max-w-[600px] m-auto bg-background/50 backdrop-blur-xl p-4 mt-4 rounded-lg border border-gray-700 flex items-center gap-4">
        <li className="mr-auto">
          <Link href="/" className="font-bold">
            TRACK
          </Link>
        </li>
        {session?.user ? (
          <>
            <li>
              <Link
                href="/habit/create"
                className="h-[35px] flex justify-center items-center px-4 py-2 border border-gray-700 rounded hover:bg-gray-700/20 cursor-pointer transition-colors"
              >
                Create habit
              </Link>
            </li>
            <li>
              <SignOut />
            </li>
          </>
        ) : (
          <li>
            <SignIn />
          </li>
        )}
      </ul>
    </nav>
  )
}
