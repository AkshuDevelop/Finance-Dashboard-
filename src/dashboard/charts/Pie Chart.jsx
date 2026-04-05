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
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-200 w-full">
      {/* header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-zinc-800 font-semibold">Spending by Category</h3>

        <span className="text-sm bg-zinc-100 px-3 py-1 rounded-lg text-zinc-600">
          This month
        </span>
      </div>

      {/* layout */}
      <div className="flex items-center gap-6">
        {/* chart */}
        <div className="w-80 h-80 relative">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={3}
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* center value */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-semibold text-zinc-900">
              ₹{(total / 1000).toFixed(1)}k
            </span>

            <span className="text-xs text-zinc-400">Total Amount</span>
          </div>
        </div>

        {/* legend */}
        <div className="flex flex-col gap-2 text-sm w-full">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                />

                <span className="text-zinc-600">{item.name}</span>
              </div>

              <span className="text-zinc-800 font-medium">₹{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
