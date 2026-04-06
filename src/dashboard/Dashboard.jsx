import React from "react";
import Summary from "./Summary";
import LineChartComponent from "./charts/Line Chart";
import SpendingCategoryPieChart from "./charts/Pie Chart";
import RecentTransactions from "./Recent Transactions";

export default function Dashboard() {
  return (
    <section className="px-4 sm:px-6 lg:px-6 py-6">
      <div className="flex flex-col gap-10">
        {/* heading */}

        <h1 className="text-3xl lg:text-4xl font-light text-black">
          Home /<span className="font-bold">Dashboard</span>
        </h1>

        {/* top cards */}

        <div
          className="
          flex flex-col
          lg:flex-row

          gap-4
        "
        >
          <Summary
            Status="Available Balance"
            className="
              w-full
              lg:w-96

              h-40
              sm:h-56
              lg:h-80
            "
            Amount="19450"
            Detail="15% More than March"
          />

          <Summary
            Status="Total Spent"
            className="
              w-full
              lg:w-96

              h-40
              sm:h-56
              lg:h-80
            "
            Amount="10290"
            Detail="10% Less than March"
          />

          <div className="w-full">
            <LineChartComponent />
          </div>
        </div>

        <SpendingCategoryPieChart />

        <RecentTransactions />
      </div>
    </section>
  );
}
