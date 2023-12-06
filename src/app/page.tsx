"use client";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Header } from "@/components/header";
import { Stats } from "@/components/stats";
import { InputSearch } from "@/components/form/input-search";
import { Spinner } from "@/components/spinner";
import { api } from "@/services/api";
import { useState } from "react";

const schema = yup.object().shape({
  search: yup.string(),
});

interface FormValues {
  search?: string;
}

type PokemonModel = {
  name: string;
  abilities: string[];
};

export default function Home() {
  const [pokemon, setPokemon] = useState<PokemonModel>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const handleSearch: SubmitHandler<FormValues> = async (params) => {
    const response = await api.get(`/pokemon/search/?name=${params.search}`);
    const { data } = await response.data;
    setPokemon(data);
  };

  return (
    <div className="flex flex-row justify-center w-full h-full">
      <div
        className={`bg-black flex flex-row justify-center w-full h-full ${
          isSubmitting ? "opacity-20" : ""
        }`}
      >
        <div className="w-96 h-full bg-white bg-opacity-10 backdrop-blur-3xl">
          <h1 className="pt-6 w-72 ml-6 text-white text-opacity-80 text-4xl font-black capitalize">
            Encontre seu pokemon
          </h1>

          <form
            onSubmit={handleSubmit(handleSearch)}
            className="flex items-center justify-center mt-5"
          >
            <InputSearch {...register("search")} error={errors.search} />
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
                {pokemon?.name}
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
                  <span className="w-14 py-3 text-center">
                    {pokemon?.abilities.length ?? 0}
                  </span>
                  <div className="flex-1 px-3">
                    {pokemon?.abilities.map((ability) => (
                      <span
                        key={ability}
                        className="border-r border-gray-300 dark:border-gray-700 pr-1"
                      >
                        {ability}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSubmitting && <Spinner />}
    </div>
  );
}
