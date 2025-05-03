import { signOut } from "@/auth"

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button
        type="submit"
        className="h-[35px] flex justify-center items-center px-4 py-2 border border-gray-700 rounded hover:bg-gray-700/20 cursor-pointer transition-colors"
      >
        Sign out
      </button>
    </form>
  )
}
