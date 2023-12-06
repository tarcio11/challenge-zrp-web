export const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-8">
      <h2 className="text-2xl font-black text-white">Pokemon não encontrado</h2>
      <h4 className="text-sm font-medium text-white">
        Tente novamente com outro nome
      </h4>
      <button className="mt-4 px-4 py-2 bg-white rounded-lg text-black font-medium">
        Voltar
      </button>
    </div>
  );
};
