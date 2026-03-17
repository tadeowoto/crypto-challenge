export default async function CoinsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div>Coin ID: {id}</div>;
}
