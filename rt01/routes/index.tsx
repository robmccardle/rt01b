import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Deluded logo: a luxurious letter D dripping with juice"
        />
        <p class="my-4">
          Noone spends that much money on
          <code class="mx-2">Lingerie</code>
        </p>
        <h1 class="text-4xl font-bold">It's DELUDED</h1>
        <Counter count={count} />
      </div>
    </div>
  );
}
