import { FiSearch } from "react-icons/fi";

export const InputSearch = () => {
  return (
    <div>
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="w-80 flex items-center justify-center text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
        <FiSearch className="w-5 h-5 ml-3 text-gray-400" />
        <input
          type="search"
          id="search"
          className="w-full p-4 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white focus:outline-none rounded-3xl"
          placeholder="Pesquisar"
          required
        />
      </div>
    </div>
  );
};
