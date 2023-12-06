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
import { EmptyState } from "@/components/empty-state";
import { NotFound } from "@/components/not-found";

const schema = yup.object().shape({
  search: yup.string().required("Campo obrigatório"),
});

interface FormValues {
  search: string;
}

interface PokemonStatsModel {
  name: string;
  value: number;
}

type PokemonModel = {
  name: string;
  abilities: string[];
  picture: string;
  stats: PokemonStatsModel[];
};

export default function Home() {
  const [pokemon, setPokemon] = useState<PokemonModel>();
  const [notFound, setNotFound] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const handleSearch: SubmitHandler<FormValues> = async (params) => {
    try {
      const response = await api.get(`/pokemon/search/?name=${params.search}`);
      const { data } = await response.data;
      setPokemon(data);
      setNotFound(false);
    } catch (error: any) {
      if (error.response.status === 404) {
        setNotFound(true);
      }
    }
  };

  return (
    <div className="flex flex-row justify-center w-full h-full">
      <div
        className={`bg-black flex flex-row justify-center w-full h-full ${
          isSubmitting ? "opacity-20" : ""
        }`}
      >
        <div className="w-96 h-full bg-white bg-opacity-10 backdrop-blur-3xl p-6">
          <h1 className="pt-6 w-72 text-white text-opacity-80 text-4xl font-black capitalize">
            Encontre seu pokemon
          </h1>

          <form
            onSubmit={handleSubmit(handleSearch)}
            className="flex items-center justify-center mt-5"
          >
            <InputSearch {...register("search")} error={errors.search} />
          </form>

          {notFound ? (
            <NotFound />
          ) : pokemon ? (
            <div className="flex flex-col justify-center items-center p-2">
              <div className="flex flex-col items-center justify-between w-64 h-80 m-3 p-2 shadow-lg rounded-xl">
                <Image
                  className="object-contain"
                  src={pokemon?.picture}
                  alt=""
                  width={250}
                  height={250}
                />
                <h4 className="poke-name text-center text-2xl font-bold dark:text-zinc-200">
                  {pokemon?.name}
                </h4>
              </div>

              <div className="relative overflow-x-auto">
                <div className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <Header />

                  {pokemon?.stats.map((stat) => (
                    <Stats
                      key={stat.name}
                      name={stat.name}
                      value={stat.value}
                    />
                  ))}
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
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
      {isSubmitting && <Spinner />}
    </div>
  );
}
