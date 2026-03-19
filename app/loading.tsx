import { Skeleton } from "./components/ui/skeleton";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardAction, // Asegúrate de que esté exportado en tu componente ui/card
} from "./components/ui/card";
import { plusJakartaSans } from "./fonts";

export default function Loading() {
  const skeletons = new Array(8).fill(null);

  return (
    <main className="w-full h-full p-5 bg-background-color">
      <header className="text-center flex flex-col gap-4">
        <h1
          className={`text-4xl ${plusJakartaSans.className} font-bold tracking-tight text-accent-color`}
        >
          Top crypto coins
        </h1>
        <p className="text-pretty text-muted-foreground">
          The best crypto coins to start trading with your portfolio today !
        </p>
      </header>

      <div className="w-full h-full p-5">
        <section className="p-5 w-full h-fit min-h-200 flex flex-col items-center justify-start">
          <h2 className="text-2xl font-bold">Coin List</h2>

          <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
            {skeletons.map((_, i) => (
              <li key={i} className="flex justify-center">
                <Card className="w-full max-w-sm flex flex-col justify-between min-h-115 bg-transparent backdrop-blur-md border border-border/40 shadow-sm animate-pulse overflow-hidden">
                  <div className="aspect-video w-full p-6 bg-transparent border-b border-border/40 flex items-center justify-center">
                    <Skeleton className="h-20 w-20 rounded-full bg-zinc-800/40" />
                  </div>

                  <CardHeader>
                    <CardAction>
                      <Skeleton className="h-[26px] w-20 rounded-md bg-sky-500/10 border border-sky-500/20" />
                    </CardAction>
                    <div className="space-y-2">
                      <Skeleton className="h-7 w-3/4 bg-zinc-800/80" />
                      <Skeleton className="h-5 w-1/3 bg-zinc-800/60" />
                    </div>
                  </CardHeader>

                  <CardContent className="grid gap-2">
                    <div className="flex justify-between items-center h-5">
                      <Skeleton className="h-3 w-20 bg-zinc-800/40" />
                      <Skeleton className="h-3 w-24 bg-zinc-800/60" />
                    </div>
                    <div className="flex justify-between items-center h-5">
                      <Skeleton className="h-3 w-20 bg-zinc-800/40" />
                      <Skeleton className="h-3 w-12 bg-zinc-800/60" />
                    </div>
                    <div className="flex justify-between items-center h-5">
                      <Skeleton className="h-3 w-20 bg-zinc-800/40" />
                      <Skeleton className="h-3 w-24 bg-zinc-800/60" />
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Skeleton className="h-10 w-full rounded-md bg-zinc-800/80" />
                  </CardFooter>
                </Card>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
