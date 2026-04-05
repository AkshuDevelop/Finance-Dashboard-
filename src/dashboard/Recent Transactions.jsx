import React from "react";

export default function RecentTransactions() {
  const transactions = [
    {
      title: "Bananas",
      category: "Groceries",
      date: "12 Mar, 2026",
      amount: -120,
    },
    {
      title: "Movie Tickets",
      category: "Entertainment",
      date: "10 Mar, 2026",
      amount: -450,
    },
    {
      title: "Face Wash",
      category: "Skincare",
      date: "9 Mar, 2026",
      amount: -299,
    },
    {
      title: "Electricity Bill",
      category: "Bills",
      date: "5 Mar, 2026",
      amount: -1850,
    },
    {
      title: "Metro Card Recharge",
      category: "Travel",
      date: "3 Mar, 2026",
      amount: -300,
    },
    {
      title: "Doctor Visit",
      category: "Healthcare",
      date: "1 Mar, 2026",
      amount: -700,
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-zinc-200 w-full">
      {/* title */}
      <h3 className="text-zinc-800 font-semibold mb-4">Recent Transactions</h3>

      {/* list */}
      <div className="flex flex-col divide-y divide-zinc-200">
        {transactions.map((txn, index) => (
          <div
            key={index}
            className="
              flex items-center justify-between
              py-3
              transition-all
              hover:bg-zinc-50
              px-2
              rounded-lg
            "
          >
            {/* left side */}
            <div className="flex items-center gap-3">
              {/* icon */}
              <div
                className="
                w-9 h-9
                rounded-full
                bg-zinc-100
                flex items-center justify-center
                text-zinc-600
                text-sm
              "
              >
                ₹
              </div>

              {/* text */}
              <div>
                <div className="text-sm font-medium text-zinc-800">
                  {txn.title}
                </div>

                <div className="text-xs text-zinc-500">{txn.category}</div>
              </div>
            </div>

            {/* right side */}
            <div className="text-right">
              <div className="text-xs text-zinc-400">{txn.date}</div>

              <div className="text-sm font-medium text-zinc-800">
                ₹{Math.abs(txn.amount)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
