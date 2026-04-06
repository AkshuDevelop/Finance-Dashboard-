import React from "react";

export default function Insights() {
  const insightsData = {
    highestCategory: {
      name: "Travel",
      amount: 5200,
      percentage: 28,
    },

    monthlyComparison: {
      income: 67500,
      expenses: 49200,
      savings: 18300,
    },

    observations: [
      "Travel spending increased 18% vs last month.",
      "Shopping decreased by 6%.",
      "Healthcare spending stable.",
      "Largest transaction was ₹5200 (Flight Ticket).",
    ],

    distribution: [
      { category: "Travel", percent: 28 },
      { category: "Shopping", percent: 22 },
      { category: "Bills", percent: 18 },
      { category: "Groceries", percent: 14 },
      { category: "Entertainment", percent: 10 },
      { category: "Healthcare", percent: 8 },
    ],

    metrics: {
      highestExpense: "Flight Ticket",
      highestExpenseAmount: 5200,
      mostFrequentCategory: "Groceries",
      savingsRate: 27,
      averageDailySpend: 1640,
      unplannedExpenses: 3100,
    },
  };

  return (
    <section className="px-4 sm:px-6 py-6">
      <div className="flex flex-col gap-8 lg:gap-10">
        {/* heading */}

        <h1 className="text-3xl lg:text-4xl font-light">
          Home /<span className="font-bold">Insights</span>
        </h1>

        {/* top cards */}

        <div
          className="
          grid

          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3

          gap-4
          lg:gap-6
        "
        >
          {/* highest category */}

          <div
            className="
            bg-white

            border border-zinc-200

            rounded-2xl

            p-5 lg:p-6

            shadow-sm
          "
          >
            <p className="text-sm text-zinc-500">Highest Spending Category</p>

            <h2
              className="
              text-lg
              lg:text-xl

              font-semibold

              mt-2
            "
            >
              {insightsData.highestCategory.name}
            </h2>

            <p
              className="
              text-2xl
              lg:text-3xl

              font-semibold

              mt-3
            "
            >
              ₹{insightsData.highestCategory.amount}
            </p>

            <p
              className="
              text-sm
              text-zinc-500

              mt-1
            "
            >
              {insightsData.highestCategory.percentage}% of total expenses
            </p>
          </div>

          {/* cash flow */}

          <div
            className="
            bg-white

            border border-zinc-200

            rounded-2xl

            p-5 lg:p-6

            shadow-sm
          "
          >
            <p className="text-sm text-zinc-500">Monthly Cash Flow</p>

            <div
              className="
              flex flex-col

              gap-2

              mt-4
            "
            >
              <div className="flex justify-between">
                <span className="text-zinc-500">Income</span>

                <span
                  className="
                  text-green-600
                  font-medium
                "
                >
                  + ₹{insightsData.monthlyComparison.income}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-500">Expenses</span>

                <span
                  className="
                  text-red-500
                  font-medium
                "
                >
                  - ₹{insightsData.monthlyComparison.expenses}
                </span>
              </div>

              <div
                className="
                flex justify-between

                border-t

                pt-2
                mt-2
              "
              >
                <span className="font-medium">Savings</span>

                <span
                  className="
                  text-green-600
                  font-semibold
                "
                >
                  ₹{insightsData.monthlyComparison.savings}
                </span>
              </div>
            </div>
          </div>

          {/* highest expense */}

          <div
            className="
            bg-white

            border border-zinc-200

            rounded-2xl

            p-5 lg:p-6

            shadow-sm
          "
          >
            <p className="text-sm text-zinc-500">Highest Expense</p>

            <h3
              className="
              text-lg
              font-semibold

              mt-2
            "
            >
              {insightsData.metrics.highestExpense}
            </h3>

            <p
              className="
              text-xl
              lg:text-2xl

              font-semibold

              mt-2
            "
            >
              ₹{insightsData.metrics.highestExpenseAmount}
            </p>
          </div>
        </div>

        {/* middle section */}

        <div
          className="
          grid

          grid-cols-1
          xl:grid-cols-2

          gap-4
          lg:gap-6
        "
        >
          {/* distribution */}

          <div
            className="
            bg-white

            border border-zinc-200

            rounded-2xl

            p-5 lg:p-6

            shadow-sm
          "
          >
            <p className="text-sm text-zinc-500">Category Distribution</p>

            <div
              className="
              mt-4

              flex flex-col

              gap-3
            "
            >
              {insightsData.distribution.map((item, index) => (
                <div key={index}>
                  <div
                    className="
                    flex justify-between

                    text-sm
                  "
                  >
                    <span className="text-zinc-600">{item.category}</span>

                    <span className="font-medium">{item.percent}%</span>
                  </div>

                  <div
                    className="
                    w-full
                    h-2

                    bg-zinc-100

                    rounded

                    mt-1
                  "
                  >
                    <div
                      className="
                        h-2

                        bg-zinc-800

                        rounded
                      "
                      style={{
                        width: `${item.percent}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* observations */}

          <div
            className="
            bg-white

            border border-zinc-200

            rounded-2xl

            p-5 lg:p-6

            shadow-sm
          "
          >
            <p className="text-sm text-zinc-500">Key Observations</p>

            <ul
              className="
              mt-3

              flex flex-col

              gap-2
            "
            >
              {insightsData.observations.map((item, index) => (
                <li
                  key={index}
                  className="
                    text-sm
                    text-zinc-700
                  "
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* bottom metrics */}

        <div
          className="
          grid

          grid-cols-2
          sm:grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4

          gap-4
          lg:gap-6
        "
        >
          <div
            className="
            bg-white

            border border-zinc-200

            rounded-xl

            p-4 lg:p-5

            shadow-sm
          "
          >
            <p className="text-sm text-zinc-500">Savings Rate</p>

            <p
              className="
              text-lg
              lg:text-xl

              font-semibold

              mt-1
            "
            >
              {insightsData.metrics.savingsRate}%
            </p>
          </div>

          <div
            className="
            bg-white

            border border-zinc-200

            rounded-xl

            p-4 lg:p-5

            shadow-sm
          "
          >
            <p className="text-sm text-zinc-500">Daily Avg Spend</p>

            <p
              className="
              text-lg
              lg:text-xl

              font-semibold

              mt-1
            "
            >
              ₹{insightsData.metrics.averageDailySpend}
            </p>
          </div>

          <div
            className="
            bg-white

            border border-zinc-200

            rounded-xl

            p-4 lg:p-5

            shadow-sm
          "
          >
            <p className="text-sm text-zinc-500">Unplanned Expenses</p>

            <p
              className="
              text-lg
              lg:text-xl

              font-semibold

              mt-1
            "
            >
              ₹{insightsData.metrics.unplannedExpenses}
            </p>
          </div>

          <div
            className="
            bg-white

            border border-zinc-200

            rounded-xl

            p-4 lg:p-5

            shadow-sm
          "
          >
            <p className="text-sm text-zinc-500">Most Frequent Category</p>

            <p
              className="
              text-lg
              lg:text-xl

              font-semibold

              mt-1
            "
            >
              {insightsData.metrics.mostFrequentCategory}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
