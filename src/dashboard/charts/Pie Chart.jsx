"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function SpendingCategoryPieChart() {
  const data = [
    { name: "Groceries", value: 4200 },
    { name: "Healthcare", value: 1800 },
    { name: "Skincare", value: 950 },
    { name: "Bills", value: 5200 },
    { name: "Travel", value: 3100 },
    { name: "Entertainment", value: 1600 },
    { name: "Shopping", value: 2750 },
  ];

  const COLORS = [
    "#18181B",
    "#3F3F46",
    "#71717A",
    "#A1A1AA",
    "#52525B",
    "#27272A",
    "#D4D4D8",
  ];

  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div
      className="
      bg-white

      rounded-2xl

      p-6

      shadow-sm

      border border-zinc-200

      w-full
    "
    >
      <div
        className="
        flex

        flex-col
        sm:flex-row

        gap-3

        sm:items-center
        sm:justify-between

        mb-6
      "
      >
        <h3
          className="
          text-zinc-800
          font-semibold
        "
        >
          Spending by Category
        </h3>

        <span
          className="
          text-sm

          bg-zinc-100

          px-3 py-1

          rounded-lg

          text-zinc-600
        "
        >
          This month
        </span>
      </div>

      <div
        className="
        flex

        flex-col
        lg:flex-row

        items-center

        gap-10
      "
      >
        <div
          className="
          relative

          w-[220px]
          h-[220px]

          sm:w-[260px]
          sm:h-[260px]
        "
        >
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={60}
                outerRadius={85}
                paddingAngle={3}
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div
            className="
            absolute

            inset-0

            flex
            flex-col

            items-center
            justify-center
          "
          >
            <span
              className="
              text-xl
              font-semibold
              text-zinc-900
            "
            >
              ₹{(total / 1000).toFixed(1)}k
            </span>

            <span
              className="
              text-xs
              text-zinc-400
            "
            >
              Total
            </span>
          </div>
        </div>

        <div
          className="
          w-full

          grid

          grid-cols-1
          sm:grid-cols-2

          gap-3
        "
        >
          {data.map((item, index) => (
            <div
              key={item.name}
              className="
                flex

                justify-between

                bg-zinc-50

                px-3 py-2

                rounded-lg
              "
            >
              <div
                className="
                flex items-center gap-2
              "
              >
                <span
                  className="
                    w-2.5 h-2.5

                    rounded-full
                  "
                  style={{
                    backgroundColor: COLORS[index],
                  }}
                />

                {item.name}
              </div>
              ₹{item.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
