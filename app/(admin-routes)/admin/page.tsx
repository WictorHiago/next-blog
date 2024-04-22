// TESTE ROUTES AUTHENTICATION

// PAGINA DE ADMIN PROTEGIDA
// PAGINA DE ADMIN PROTEGIDA
// PAGINA DE ADMIN PROTEGIDA
// PAGINA DE ADMIN PROTEGIDA

import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="bg-zinc-800 h-full">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Protected Route
        </span>{" "}
      </h1>
      <div className="flex gap-2">
        <p className="text-3xl font-extrabold text-gray-900 dark:text-white">Authenticated</p>
        <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Success!
        </p>
      </div>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and
        drive economic growth. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel totam pariatur cumque
        obcaecati, assumenda eveniet consectetur tempore delectus aliquid incidunt quis magnam facere iure sit fuga illo
        a corporis. Omnis.
      </p>
      <br />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link href="/">Go to Home</Link>
      </button>
    </div>
  );
}
