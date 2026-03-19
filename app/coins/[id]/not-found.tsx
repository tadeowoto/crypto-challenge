export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-2xl font-bold">Moneda no encontrada</h2>
      <p className="text-muted-foreground">
        La moneda que buscas no se encuentra en nuestra base de datos.
      </p>
    </div>
  );
}
