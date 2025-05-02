import { Label } from "@repo/ui";

export default function Home() {
  return (
    <main
      className={"relative flex h-screen flex-col items-center justify-center"}
    >
      <Label className={"font-semibold text-3xl tracking-tighter"}>
        Next Essential
      </Label>
      <p className={"my-4 max-w-[44rem] text-center"}>
        The Next.js Essential Starter Template is a Next.js project that
        provides a basic structure for building ypur next.js project.
      </p>
    </main>
  );
}
