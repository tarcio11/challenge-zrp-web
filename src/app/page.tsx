import Image from "next/image";

import { InputSearch } from "@/components/form/input-search";
import { Header } from "@/components/header";
import { Stats } from "@/components/stats";

export default function Home() {
  return (
    <div className="bg-black flex flex-row justify-center w-full h-full">
      <div className="w-96 h-full bg-white bg-opacity-10 backdrop-blur-3xl">
        <h1 className="pt-6 w-72 ml-6 text-white text-opacity-80 text-4xl font-black capitalize">
          Encontre seu pokemon
        </h1>

        <form className="flex items-center justify-center mt-5">
          <InputSearch />
        </form>

        <div className="flex flex-col justify-center items-center p-2">
          <div className="w-64 m-3 p-2 shadow-lg rounded-xl">
            <Image
              className="object-contain"
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
              alt=""
              width={250}
              height={250}
            />
            <h4 className="poke-name text-center text-2xl font-bold dark:text-zinc-200">
              Bulbasaur
            </h4>
            <p className="poke-number text-center text-xl font-bold dark:text-zinc-200">
              #001
            </p>
            <div className="flex justify-center items-center">
              <div className="poke-type bg-grass text-white text-center rounded-xl px-2 py-1 m-1">
                Grass
              </div>
              <div className="poke-type bg-poison text-white text-center rounded-xl px-2 py-1 m-1">
                Poison
              </div>
            </div>
          </div>

          <div className="relative overflow-x-auto">
            <div className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <Header />

              <Stats name="HP" value={45} />
              <Stats name="Attack" value={78} />

              <div className="flex items-center justify-between">
                <span className="w-20 py-3 text-center">Abilities</span>
                <span className="w-14 py-3 text-center">2</span>
                <div className="flex-1 px-3">
                  <span className="border-r border-gray-300 dark:border-gray-700 pr-1">
                    lightning-rod
                  </span>
                  <span>static</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
