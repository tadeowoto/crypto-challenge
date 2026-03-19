import { Skeleton } from "./components/ui/skeleton";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "./components/ui/card";

export default function Loading() {
  const skeletons = new Array(6).fill(null);

  return (
    <main className="container p-5 mx-auto">
      <header className="text-center flex flex-col items-center gap-4 mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-accent-color">
          Top crypto coins
        </h1>
        <p className="text-pretty">
          The best crypto coins to start trading with your portfolio today !
        </p>
      </header>

      <section className="p-5">
        <h2 className="text-2xl font-bold text-center">Coin List</h2>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {skeletons.map((_, i) => (
            <li key={i} className="w-full max-w-sm">
              <Card className="w-full h-full flex flex-col overflow-hidden">
                <div className="aspect-video w-full p-6 bg-muted/20 flex items-center justify-center">
                  <Skeleton className="h-20 w-20 rounded-full" />
                </div>

                <CardHeader className="space-y-3">
                  <Skeleton className="h-5 w-20 rounded-full" />
                  <Skeleton className="h-7 w-3/4" />
                  <Skeleton className="h-5 w-1/4" />
                </CardHeader>

                <CardContent className="grid gap-3">
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-12" />
                  </div>
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </CardContent>

                <CardFooter className="mt-auto">
                  <Skeleton className="h-10 w-full rounded-md" />
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
