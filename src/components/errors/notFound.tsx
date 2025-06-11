export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-9xl font-bold font-sigmar text-black">404</h1>
      <p className="text-xl font-space-grotesk mt-2">Página no encontrada</p>
      <p className="text-xl font-space-grotesk mt-2 text-gray-400">Page not found</p>
      <a href="/" className="text-blue-500 font-space-grotesk mt-4 underline">
        Volver al inicio &#40;Back to home&#41;
      </a>
    </div>
  );
}