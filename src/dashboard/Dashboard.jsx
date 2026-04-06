import React from "react";
import Summary from "../Components/Summary";
import LineChartComponent from "./charts/Line Chart";
import SpendingCategoryPieChart from "./charts/Pie Chart";
import RecentTransactions from "./Recent Transactions";

export default function Dashboard() {
  return (
    <section className="p-6 gap-6 m-6">
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl font-light text-black">
          Home / <span className="font-bold text-black">Dashboard</span>
        </h1>
        <div className="flex flex-row gap-2.5 ">
          <Summary
            Status="Available Balance"
            className="w-96 h-80"
            Amount="19450"
            Detail="15% More then March"
          />

          <Summary
            Status="Total Spent"
            className="w-96 h-80"
            Amount="10290"
            Detail="10% Less then March"
          />
          <LineChartComponent />
        </div>
        <SpendingCategoryPieChart />
        <RecentTransactions />
      </div>
    </section>
  );
}
