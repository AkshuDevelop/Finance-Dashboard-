"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import React, { useState } from "react";

export default function LineChartComponent() {
  const [mode, setMode] = useState("spend");
  const [range, setRange] = useState("6m");

  const datasets = {
    spend: {
      "6m": [
        { month: "Nov", value: 1240 },
        { month: "Dec", value: 980 },
        { month: "Jan", value: 1560 },
        { month: "Feb", value: 1125 },
        { month: "Mar", value: 1780 },
        { month: "Apr", value: 1345 },
      ],

      "1y": [
        { month: "May", value: 880 },
        { month: "Jun", value: 1100 },
        { month: "Jul", value: 950 },
        { month: "Aug", value: 1400 },
        { month: "Sep", value: 1250 },
        { month: "Oct", value: 1600 },
        { month: "Nov", value: 1240 },
        { month: "Dec", value: 980 },
        { month: "Jan", value: 1560 },
        { month: "Feb", value: 1125 },
        { month: "Mar", value: 1780 },
        { month: "Apr", value: 1345 },
      ],
    },

    savings: {
      "6m": [
        { month: "Nov", value: 420 },
        { month: "Dec", value: 510 },
        { month: "Jan", value: 460 },
        { month: "Feb", value: 600 },
        { month: "Mar", value: 720 },
        { month: "Apr", value: 680 },
      ],

      "1y": [
        { month: "May", value: 300 },
        { month: "Jun", value: 420 },
        { month: "Jul", value: 380 },
        { month: "Aug", value: 520 },
        { month: "Sep", value: 490 },
        { month: "Oct", value: 610 },
        { month: "Nov", value: 420 },
        { month: "Dec", value: 510 },
        { month: "Jan", value: 460 },
        { month: "Feb", value: 600 },
        { month: "Mar", value: 720 },
        { month: "Apr", value: 680 },
      ],
    },
  };

  const data = datasets[mode][range];

  return (
    <div
      className="
      bg-white

      rounded-2xl

      p-6

      shadow-sm

      border border-zinc-200

      w-full

      h-[260px]
      sm:h-[300px]
      lg:h-[320px]
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

        mb-4
      "
      >
        <div
          className="
          flex
          bg-zinc-100
          rounded-xl
          p-1
        "
        >
          <button
            onClick={() => setMode("spend")}
            className={`
              px-4 py-1.5

              text-sm

              rounded-lg

              transition

              ${
                mode === "spend"
                  ? "bg-white shadow text-zinc-900"
                  : "text-zinc-500"
              }
            `}
          >
            Spend
          </button>

          <button
            onClick={() => setMode("savings")}
            className={`
              px-4 py-1.5

              text-sm

              rounded-lg

              transition

              ${
                mode === "savings"
                  ? "bg-white shadow text-zinc-900"
                  : "text-zinc-500"
              }
            `}
          >
            Savings
          </button>
        </div>

        <select
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="
            bg-zinc-100

            text-sm

            rounded-lg

            px-3 py-1.5
          "
        >
          <option value="6m">Last 6 months</option>

          <option value="1y">Last 1 year</option>
        </select>
      </div>

      <div className="w-full h-[170px] sm:h-[210px] lg:h-[230px]">
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid
              stroke="#E4E4E7"
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#71717A", fontSize: 12 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#71717A", fontSize: 12 }}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid #E4E4E7",
              }}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke={mode === "spend" ? "#18181B" : "#16A34A"}
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
