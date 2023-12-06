import { NavLink } from "./nav-link";

export const HeaderNav = () => {
  return (
    <ul className="flex justify-between border-b border-gray-300 dark:border-gray-700">
      <NavLink text="ABOUT" />
      <li className="px-4 py-3 border-b-2 border-gray-700 dark:border-gray-700 dark:text-zinc-200">
        Stats
      </li>
      <NavLink text="MOVES" />
      <NavLink text="EVOLUTIONS" />
    </ul>
  );
};
