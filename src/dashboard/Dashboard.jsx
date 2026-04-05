import React from "react";
import Summary from "../Components/Summary";

export default function Dashboard() {
  return (
    <section className="p-6 gap-6 m-6">
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl font-light text-black">
          Home / <h1 className="font-bold text-black">Dashboard</h1>{" "}
        </h1>
        <Summary
          Status="Available Balance"
          className="w-72 h-64"
          Amount="19450"
          Detail="15% More then March"
        />
      </div>
    </section>
  );
}
