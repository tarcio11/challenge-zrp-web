interface StatsProps {
  name: string;
  value: number;
}

export const Stats = ({ name, value }: StatsProps) => {
  return (
    <div className="flex items-center justify-between">
      <span className="w-20 py-3 text-center">{name}</span>
      <span className="w-14 py-3 text-center">{value}</span>
      <div className="flex-1 px-3">
        <div className={`w-1/3 bg-gray-200 rounded-full h-1 dark:bg-gray-700`}>
          <div
            className={`bg-green-600 h-2 rounded-full dark:bg-green-500`}
          ></div>
        </div>
      </div>
    </div>
  );
};
