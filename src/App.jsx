import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import Dashboard from "./dashboard/Dashboard";
import Transactions from "./Transactions/Transactions";
import Insights from "./insights/insights";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-zinc-200 min-h-screen flex">
        <Header />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/insights" element={<Insights />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
