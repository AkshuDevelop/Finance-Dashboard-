import React, { useState } from "react";

export default function Transactions({ role }) {
  const initialData = [
    {
      title: "Salary",
      category: "Income",
      amount: 45000,
      type: "income",
      date: "2026-03-01",
    },
    {
      title: "Bananas",
      category: "Groceries",
      amount: 120,
      type: "expense",
      date: "2026-03-02",
    },
    {
      title: "Milk",
      category: "Groceries",
      amount: 60,
      type: "expense",
      date: "2026-03-02",
    },
    {
      title: "Movie Tickets",
      category: "Entertainment",
      amount: 450,
      type: "expense",
      date: "2026-03-04",
    },
    {
      title: "Spotify",
      category: "Entertainment",
      amount: 119,
      type: "expense",
      date: "2026-03-05",
    },
    {
      title: "Freelance",
      category: "Income",
      amount: 8000,
      type: "income",
      date: "2026-03-06",
    },
    {
      title: "Electricity Bill",
      category: "Bills",
      amount: 1850,
      type: "expense",
      date: "2026-03-08",
    },
    {
      title: "Doctor Visit",
      category: "Healthcare",
      amount: 700,
      type: "expense",
      date: "2026-03-09",
    },
    {
      title: "Amazon Order",
      category: "Shopping",
      amount: 2300,
      type: "expense",
      date: "2026-03-11",
    },
    {
      title: "Bonus",
      category: "Income",
      amount: 12000,
      type: "income",
      date: "2026-03-16",
    },
  ];

  /* state */
  const [transactionsData, setTransactionsData] = useState(initialData);

  const [editingIndex, setEditingIndex] = useState(null);

  const [editedTxn, setEditedTxn] = useState({});

  const isAdmin = role === "admin";

  /* search/filter/sort */
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("date");

  const filteredData = transactionsData

    .filter((txn) => txn.title.toLowerCase().includes(search.toLowerCase()))

    .filter((txn) => (filter === "all" ? true : txn.type === filter))

    .sort((a, b) => {
      if (sort === "amount") return b.amount - a.amount;

      return new Date(b.date) - new Date(a.date);
    });

  /* edit handlers */

  const startEdit = (txn, index) => {
    setEditingIndex(index);

    setEditedTxn(txn);
  };

  const saveEdit = () => {
    const updated = [...transactionsData];

    updated[editingIndex] = editedTxn;

    setTransactionsData(updated);

    setEditingIndex(null);
  };

  const handleChange = (field, value) => {
    setEditedTxn({
      ...editedTxn,

      [field]: value,
    });
  };

  return (
    <section className="p-6 gap-6 m-6">
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl font-light text-black">
          Home /<span className="font-bold">Transactions</span>
        </h1>

        {/* controls */}
        <div className="flex gap-3">
          <input
            placeholder="Search transaction..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              px-4 py-2
              bg-white
              border border-zinc-200
              rounded-xl shadow-sm
              text-sm w-56
            "
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="
              px-4 py-2
              bg-white border
              border-zinc-200
              rounded-xl shadow-sm
              text-sm
            "
          >
            <option value="all">All</option>

            <option value="income">Income</option>

            <option value="expense">Expense</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="
              px-4 py-2
              bg-white border
              border-zinc-200
              rounded-xl shadow-sm
              text-sm
            "
          >
            <option value="date">Sort by Date</option>

            <option value="amount">Sort by Amount</option>
          </select>
        </div>

        {/* table */}
        <div
          className="
          bg-white border
          border-zinc-200
          rounded-2xl shadow-sm
          overflow-hidden
        "
        >
          {/* header */}
          <div
            className="
            grid grid-cols-5
            px-8 py-4
            text-sm text-zinc-500
            border-b border-zinc-200
            bg-zinc-50 font-medium
          "
          >
            <span>Transaction</span>

            <span>Category</span>

            <span>Date</span>

            <span className="text-right">Amount</span>

            <span></span>
          </div>

          {/* rows */}
          <div className="divide-y divide-zinc-200">
            {filteredData.map((txn, index) => {
              const isEditing = editingIndex === index;

              return (
                <div
                  key={index}
                  className="
                    grid grid-cols-5
                    px-8 py-5 items-center
                    hover:bg-zinc-50 transition
                  "
                >
                  {/* title */}
                  {isEditing ? (
                    <input
                      value={editedTxn.title}
                      onChange={(e) => handleChange("title", e.target.value)}
                      className="
                        bg-zinc-100
                        px-2 py-1 rounded-lg
                      "
                    />
                  ) : (
                    <span
                      className="
                      text-[15px]
                      font-medium
                    "
                    >
                      {txn.title}
                    </span>
                  )}

                  {/* category */}
                  {isEditing ? (
                    <input
                      value={editedTxn.category}
                      onChange={(e) => handleChange("category", e.target.value)}
                      className="
                        bg-zinc-100
                        px-2 py-1 rounded-lg
                      "
                    />
                  ) : (
                    <span
                      className="
                      text-zinc-600
                    "
                    >
                      {txn.category}
                    </span>
                  )}

                  {/* date */}
                  {isEditing ? (
                    <input
                      type="date"
                      value={editedTxn.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      className="
                        bg-zinc-100
                        px-2 py-1 rounded-lg
                      "
                    />
                  ) : (
                    <span
                      className="
                      text-zinc-500
                    "
                    >
                      {txn.date}
                    </span>
                  )}

                  {/* amount */}
                  {isEditing ? (
                    <input
                      type="number"
                      value={editedTxn.amount}
                      onChange={(e) =>
                        handleChange("amount", Number(e.target.value))
                      }
                      className="
                        bg-zinc-100
                        px-2 py-1 rounded-lg
                        text-right
                      "
                    />
                  ) : (
                    <span
                      className={`
                        text-right font-semibold

                        ${
                          txn.type === "income"
                            ? "text-green-600"
                            : "text-red-500"
                        }
                      `}
                    >
                      {txn.type === "income" ? "+" : "-"}₹{txn.amount}
                    </span>
                  )}

                  {/* edit button */}
                  {/* edit button */}
                  <div className="flex justify-end">
                    {isAdmin && !isEditing && (
                      <button
                        onClick={() => startEdit(txn, index)}
                        className="
                          bg-white
                          border border-zinc-200
                          rounded-lg
                          p-1.5
                          hover:bg-zinc-100
                          transition
                        "
                      >
                        {/* pencil icon */}

                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4 stroke-zinc-900"
                          fill="none"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="
                              M16.862 3.487
                              a2.25 2.25 0 113.182 3.182
                              L7.5 19.213
                              3 21l1.787-4.5
                              12.075-13.013
                            "
                          />
                        </svg>
                      </button>
                    )}

                    {isEditing && (
                      <button
                        onClick={saveEdit}
                        className="
                          bg-white
                          border border-zinc-200
                          rounded-lg
                          p-1.5
                          hover:bg-zinc-100
                          transition
                        "
                      >
                        {/* check icon */}

                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4 stroke-zinc-900"
                          fill="none"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
