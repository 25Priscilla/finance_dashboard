import { useState } from "react";

function TransactionForm({ addTransaction, role }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
    type: "income",
  });

  // 🔒 Viewer cannot add
  if (role === "viewer") return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.amount || !form.category || !form.date) {
      alert("Fill all fields");
      return;
    }

    addTransaction(form);

    setForm({
      title: "",
      amount: "",
      category: "",
      date: "",
      type: "income",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5 rounded-xl shadow space-y-3"
    >
      <h2 className="font-semibold text-lg">Add Transaction</h2>

      {/* Title */}
      <input
        className="w-full border p-2 rounded"
        placeholder="Title"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />

      {/* Amount */}
      <input
        className="w-full border p-2 rounded"
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) =>
          setForm({ ...form, amount: e.target.value })
        }
      />

      {/* Category Dropdown */}
      <select
        className="w-full border p-2 rounded"
        value={form.category}
        onChange={(e) =>
          setForm({ ...form, category: e.target.value })
        }
      >
        <option value="">Select Category</option>

        {/* Expense categories */}
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>

        {/* Income categories */}
        <option value="Salary">Salary</option>
        <option value="Freelance">Freelance</option>
      </select>

      {/* Date */}
      <input
        type="date"
        className="w-full border p-2 rounded"
        value={form.date}
        onChange={(e) =>
          setForm({ ...form, date: e.target.value })
        }
      />

      {/* Type */}
      <select
        className="w-full border p-2 rounded"
        value={form.type}
        onChange={(e) =>
          setForm({ ...form, type: e.target.value })
        }
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button className="w-full bg-black text-white py-2 rounded">
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;
