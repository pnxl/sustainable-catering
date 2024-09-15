import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Sustainable Catering — Limantara Foundation" }];
};

export default function Index() {
  return (
    <div className="flex h-screen py-16 px-48">
      <header className="w-full flex flex-col gap-y-8">
        <h1 className="leading text-2xl font-bold text-white">
          Welcome to <span className="sr-only">Remix</span>
        </h1>
        <hr className="border-2 border-white" />
      </header>
    </div>
  );
}
