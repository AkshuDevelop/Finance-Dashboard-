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

  const [transactionsData, setTransactionsData] = useState(initialData);

  const [editingIndex, setEditingIndex] = useState(null);

  const [editedTxn, setEditedTxn] = useState({});

  const isAdmin = role === "admin";

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
    <section className="px-4 sm:px-6 py-6">
      <div className="flex flex-col gap-8">
        {/* heading */}

        <h1 className="text-3xl lg:text-4xl font-light">
          Home /<span className="font-bold">Transactions</span>
        </h1>

        {/* filters */}

        <div
          className="
          flex

          flex-col
          sm:flex-row

          gap-3
        "
        >
          <input
            placeholder="Search transaction..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              px-4 py-2

              bg-white

              border border-zinc-200

              rounded-xl

              shadow-sm

              text-sm

              w-full
              sm:w-56
            "
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="
              px-4 py-2

              bg-white

              border border-zinc-200

              rounded-xl

              shadow-sm

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

              bg-white

              border border-zinc-200

              rounded-xl

              shadow-sm

              text-sm
            "
          >
            <option value="date">Sort by Date</option>

            <option value="amount">Sort by Amount</option>
          </select>
        </div>

        {/* DESKTOP TABLE */}

        <div
          className="
          hidden
          md:block

          bg-white

          border border-zinc-200

          rounded-2xl

          shadow-sm

          overflow-hidden
        "
        >
          <div
            className="
            grid grid-cols-5

            px-8 py-4

            text-sm

            text-zinc-500

            border-b border-zinc-200

            bg-zinc-50

            font-medium
          "
          >
            <span>Transaction</span>

            <span>Category</span>

            <span>Date</span>

            <span className="text-right">Amount</span>

            <span />
          </div>

          <div className="divide-y">
            {filteredData.map((txn, index) => {
              const isEditing = editingIndex === index;

              return (
                <div
                  key={index}
                  className="
                    grid grid-cols-5

                    px-8 py-5

                    items-center

                    hover:bg-zinc-50
                  "
                >
                  {/* title */}

                  {isEditing ? (
                    <input
                      value={editedTxn.title}
                      onChange={(e) => handleChange("title", e.target.value)}
                      className="
                        bg-zinc-100

                        px-2 py-1

                        rounded-lg
                      "
                    />
                  ) : (
                    <span className="font-medium">{txn.title}</span>
                  )}

                  {/* category */}

                  {isEditing ? (
                    <input
                      value={editedTxn.category}
                      onChange={(e) => handleChange("category", e.target.value)}
                      className="
                        bg-zinc-100

                        px-2 py-1

                        rounded-lg
                      "
                    />
                  ) : (
                    <span className="text-zinc-600">{txn.category}</span>
                  )}

                  {/* date */}

                  {isEditing ? (
                    <input
                      type="date"
                      value={editedTxn.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      className="
                        bg-zinc-100

                        px-2 py-1

                        rounded-lg
                      "
                    />
                  ) : (
                    <span className="text-zinc-500">{txn.date}</span>
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

                        px-2 py-1

                        rounded-lg

                        text-right
                      "
                    />
                  ) : (
                    <span
                      className={`
                        text-right
                        font-semibold

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

                  {/* edit */}

                  <div className="flex justify-end">
                    {isAdmin && !isEditing && (
                      <button
                        onClick={() => startEdit(txn, index)}
                        className="
                          border

                          rounded-lg

                          p-1.5

                          hover:bg-zinc-100
                        "
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4"
                          fill="none"
                          stroke="black"
                          strokeWidth="2"
                        >
                          <path d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.5 19.213 3 21l1.787-4.5L16.862 3.487z" />
                        </svg>
                      </button>
                    )}

                    {isEditing && (
                      <button
                        onClick={saveEdit}
                        className="
                          border

                          rounded-lg

                          p-1.5

                          hover:bg-zinc-100
                        "
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4"
                          fill="none"
                          stroke="black"
                          strokeWidth="2"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE CARDS */}

        <div
          className="
          flex flex-col

          gap-3

          md:hidden
        "
        >
          {filteredData.map((txn, index) => {
            const isEditing = editingIndex === index;

            return (
              <div
                key={index}
                className="
                    bg-white

                    border border-zinc-200

                    rounded-xl

                    p-4

                    shadow-sm
                  "
              >
                <div
                  className="
                    flex

                    justify-between

                    items-start

                    mb-2
                  "
                >
                  <div>
                    <div
                      className="
                        font-medium
                      "
                    >
                      {isEditing ? (
                        <input
                          value={editedTxn.title}
                          onChange={(e) =>
                            handleChange("title", e.target.value)
                          }
                          className="
                              bg-zinc-100

                              px-2 py-1

                              rounded-lg
                            "
                        />
                      ) : (
                        txn.title
                      )}
                    </div>

                    <div
                      className="
                        text-xs
                        text-zinc-500
                      "
                    >
                      {isEditing ? (
                        <input
                          value={editedTxn.category}
                          onChange={(e) =>
                            handleChange("category", e.target.value)
                          }
                          className="
                              bg-zinc-100

                              px-2 py-1

                              rounded-lg
                            "
                        />
                      ) : (
                        txn.category
                      )}
                    </div>
                  </div>

                  <div
                    className="
                      text-right
                    "
                  >
                    <div
                      className={`
                          font-semibold

                          ${
                            txn.type === "income"
                              ? "text-green-600"
                              : "text-red-500"
                          }
                        `}
                    >
                      {txn.type === "income" ? "+" : "-"}₹
                      {isEditing ? editedTxn.amount : txn.amount}
                    </div>

                    <div
                      className="
                        text-xs
                        text-zinc-400
                      "
                    >
                      {isEditing ? (
                        <input
                          type="date"
                          value={editedTxn.date}
                          onChange={(e) => handleChange("date", e.target.value)}
                          className="
                              bg-zinc-100

                              px-2 py-1

                              rounded-lg
                            "
                        />
                      ) : (
                        txn.date
                      )}
                    </div>
                  </div>
                </div>

                {isAdmin && (
                  <div className="flex justify-end">
                    {!isEditing ? (
                      <button
                        onClick={() => startEdit(txn, index)}
                        className="
                            border

                            rounded-lg

                            p-1.5

                            hover:bg-zinc-100
                          "
                      >
                        ✎
                      </button>
                    ) : (
                      <button
                        onClick={saveEdit}
                        className="
                            border

                            rounded-lg

                            p-1.5

                            hover:bg-zinc-100
                          "
                      >
                        ✓
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
