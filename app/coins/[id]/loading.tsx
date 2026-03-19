import { Skeleton } from "@/app/components/ui/skeleton";
import { MoveLeft } from "lucide-react";

export default function LoadingCoinDetail() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 animate-pulse">
      <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-12">
        <MoveLeft size={16} />
        Back to Dashboard
      </div>

      <div className="flex flex-col gap-8">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Skeleton className="w-16 h-16 rounded-full" />
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-48" />
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
          <Skeleton className="h-9 w-36 rounded-full" />
        </header>

        <hr className="border-border" />

        <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <Skeleton className="h-7 w-48 mb-4" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>

          <aside className="space-y-8">
            <div className="p-6 rounded-2xl bg-muted/30 border border-border/50 space-y-3">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-10 w-32" />
            </div>

            <div className="space-y-6 px-2">
              <div className="flex justify-between items-center border-b border-border/50 pb-3">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex justify-between items-center border-b border-border/50 pb-3">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex justify-between items-center pb-3">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-20" />
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
