import { FaHome } from "react-icons/fa";
import { useRouter } from "next/router";
import Button from "@/components/common/Button";

export default function Custom404() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Button
        action={() => router.push("/")}
        buttonLabel={
          <span className="flex items-center gap-2">
            <FaHome /> Back to Home
          </span>
        }
        buttonBackgroundColor="blue"
      />
    </div>
  );
}
