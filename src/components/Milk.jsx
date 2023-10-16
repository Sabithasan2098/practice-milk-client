import { Link, useLoaderData } from "react-router-dom";
import MilkCard from "./MilkCard";

const Milk = () => {
  const milks = useLoaderData();
  console.log(milks);
  return (
    <div className="mt-10">
      <h1 className="text-5xl text-center font-extrabold mb-10">
        Total milk item:{milks.length}
      </h1>
      <div className="grid grid-cols-2 mb-10">
        {milks.map((milk) => (
          <MilkCard milk={milk} key={milk._id}></MilkCard>
        ))}
      </div>
      <div className="mb-10 text-center">
        <Link to={"/add"}>
          <button className="btn btn-primary">Add milk</button>
        </Link>
      </div>
    </div>
  );
};

export default Milk;
