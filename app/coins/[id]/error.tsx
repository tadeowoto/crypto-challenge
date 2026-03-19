"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const isRateLimit = error.message.includes("429");

  return (
    <div className="p-10 text-center border border-destructive/20 rounded-xl">
      <h2 className="text-xl font-bold mb-2">
        {isRateLimit ? "Límite de la API alcanzado" : "Algo salió mal"}
      </h2>
      <p className="text-sm text-muted-foreground mb-4">{error.message}</p>
      <button
        onClick={() => reset()}
        className="underline text-sm text-primary"
      >
        Intentar de nuevo
      </button>
    </div>
  );
}
