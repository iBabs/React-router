import { Link, useLoaderData } from "react-router-dom";

export default function Stations() {
  const stations = useLoaderData();
  return (
    <div className="p-5 space-y-2">
      {stations.map((station) => (
        <Link to="/" key={station.id} className=" p-5 min-w-full my-5 hover:text-red-700 transition-all ease-in-out duration-500">
          <p className="bg-slate-300 px-5 py-8 text-center">
            {station.name} is in {station.location}
          </p>
        </Link>
      ))}
    </div>
  );
}

//loader function

export const stationsLoader = async () => {
  const res = await fetch("http://localhost:4000/stations");

  return res.json();
};