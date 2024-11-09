export const JobFilter = () => {
  return (
    <div className="flex flex-col rounded-xl border border-solid border-slate-400 p-4 md:p-8 w-full bg-white">
      <div className="flex flex-row justify-between">
        <h3 className="font-bold text-2xl">Filter</h3>
        <p className="text-yellow-600">Clear all</p>
      </div>

      <div className="flex flex-col mt-4">
        <h4 className="font-semibold text-l">Work type</h4>
        <div className="mt-1 flex flex-col">
          <div className="flex flex-row gap-2">
            <input type="checkbox" /> Remote
          </div>
          <div className="flex flex-row gap-2">
            <input type="checkbox" /> On site
          </div>
          <div className="flex flex-row gap-2">
            <input type="checkbox" /> Hybrid
          </div>
        </div>
        <p className="text-yellow-600">Show all</p>
      </div>
    </div>
  );
};
