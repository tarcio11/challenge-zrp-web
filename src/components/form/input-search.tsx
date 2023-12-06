import { ComponentProps, ForwardRefRenderFunction, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { FiSearch } from "react-icons/fi";

type InputProps = ComponentProps<"input">;

type InputRootProps = ComponentProps<"div"> &
  InputProps & {
    error?: FieldError | null;
    name: string;
  };

export const InputSearchBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputRootProps
> = (props: InputRootProps, ref) => {
  return (
    <div className="w-full" data-error={!!props.error}>
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="w-full flex items-center justify-center text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
        <FiSearch className="w-5 h-5 ml-3 text-gray-400" />
        <input
          ref={ref}
          {...props}
          className="w-full p-4 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white focus:outline-none rounded-3xl"
          placeholder="Pesquisar"
        />
      </div>
      {!!props.error && (
        <div className="flex flex-col">
          <span className="text-red-500 text-sm">{props.error.message}</span>
        </div>
      )}
    </div>
  );
};

export const InputSearch = forwardRef(InputSearchBase);
