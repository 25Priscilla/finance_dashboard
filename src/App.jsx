import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Charts from "./components/Charts";
import RoleSwitcher from "./components/RoleSwitcher";
import Insights from "./components/Insights";

function App() {
  // ✅ Safe localStorage load
  const [transactions, setTransactions] = useState(() => {
    try {
      const data = localStorage.getItem("transactions");
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Error loading data:", error);
      return [];
    }
  });

  const [role, setRole] = useState("admin");

  // ✅ Save data
  useEffect(() => {
    try {
      localStorage.setItem("transactions", JSON.stringify(transactions));
    } catch (error) {
      console.error("Error saving data:", error);
    }
  }, [transactions]);

  // ➕ Add
  const addTransaction = (tx) => {
    setTransactions((prev) => [
      ...prev,
      { ...tx, id: Date.now() },
    ]);
  };

  // ❌ Delete
  const deleteTransaction = (id) => {
    setTransactions((prev) =>
      prev.filter((t) => t.id !== id)
    );
  };

  // 📊 Calculations
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const balance = income - expense;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-6">

        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
          💰 Finance Dashboard
        </h1>

        {/* 🎭 Role Switch */}
        <RoleSwitcher role={role} setRole={setRole} />

        {/* 📊 Summary */}
        <Dashboard
          income={income}
          expense={expense}
          balance={balance}
        />

        {/* 📈 Charts */}
        <Charts transactions={transactions} />

        {/* 💡 Insights */}
        <Insights transactions={transactions} />

        {/* ➕ Form + 📋 List */}
        <div className="grid md:grid-cols-2 gap-6">

          <TransactionForm
            addTransaction={addTransaction}
            role={role}
          />

          <TransactionList
            transactions={transactions}
            deleteTransaction={deleteTransaction}
            role={role}
          />

        </div>

      </div>
    </div>
  );
}

export default App;
