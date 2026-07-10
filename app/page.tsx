import AuthContainer from "@/components/auth/AuthContainer";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-200 to-indigo-200">
      <AuthContainer />
    </main>
  );
}
