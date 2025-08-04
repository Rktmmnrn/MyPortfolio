const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-[#800000]">404</h1>
      <p className="text-xl mt-4 text-gray-600">Oops! Page not found.</p>
      <a href="/" className="mt-6 text-[#800000] underline hover:opacity-70">Return Home</a>
    </div>
  );
};

export default NotFound;
