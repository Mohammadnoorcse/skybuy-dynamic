

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 p-6">
      <h1 className="text-7xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-600 mt-2 max-w-md">
        Sorry! The page you're looking for does not exist or has been removed.
      </p>

      <a
        href="/"
        className="mt-6 px-6 py-3 bg-[#167389] text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </a>
    </div>
  );
}
