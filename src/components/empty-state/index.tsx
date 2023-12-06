import Image from "next/image";

export const EmptyState = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <div className="flex flex-col justify-between items-center dark:bg-zinc-900 rounded-lg p-2">
        <Image
          className="object-contain h-32 w-32"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
          alt="Pikachu"
          width={120}
          height={120}
        />
        <h4 className="text-center text-2xl font-bold dark:text-zinc-200 mt-3">
          Pikachu
        </h4>
      </div>
      <div className="flex flex-col justify-between items-center dark:bg-zinc-900 rounded-lg p-2">
        <Image
          className="object-contain h-32 w-32"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          alt=""
          width={120}
          height={120}
        />
        <h4 className="text-center text-2xl font-bold dark:text-zinc-200 mt-3">
          Bulbasaur
        </h4>
      </div>
      <div className="flex flex-col justify-between items-center dark:bg-zinc-900 rounded-lg p-2">
        <Image
          className="object-contain h-32 w-32"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
          alt=""
          width={120}
          height={120}
        />
        <h4 className="text-center text-2xl font-bold dark:text-zinc-200 mt-3">
          Ditto
        </h4>
      </div>
      <div className="flex flex-col justify-between items-center dark:bg-zinc-900 rounded-lg p-2">
        <Image
          className="object-contain h-32 w-32"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
          alt=""
          width={120}
          height={120}
        />
        <h4 className="text-center text-2xl font-bold dark:text-zinc-200 mt-3">
          Bulbasaur
        </h4>
      </div>
    </div>
  );
};
