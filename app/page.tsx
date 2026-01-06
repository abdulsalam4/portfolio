import BentoGrid from "@/components/BentoGrid";

export default function Home() {
  return (
    <main className="min-h-screen p-2 flex items-center justify-center">
      <div className="w-full h-full max-w-7xl border border-zinc-700 rounded-[2.5rem] p-4 bg-transparent relative overflow-hidden flex items-center justify-center">
        <BentoGrid />
      </div>
    </main>
  );
}
