function Insights({ transactions }) {
  const expenses = transactions.filter(
    (t) => t.type === "expense"
  );

  const totalExpense = expenses.reduce(
    (acc, t) => acc + Number(t.amount),
    0
  );

  const categoryMap = {};

  expenses.forEach((t) => {
    categoryMap[t.category] =
      (categoryMap[t.category] || 0) + Number(t.amount);
  });

  let topCategory = "None";
  let max = 0;

  for (let cat in categoryMap) {
    if (categoryMap[cat] > max) {
      max = categoryMap[cat];
      topCategory = cat;
    }
  }

  return (
    <div className="bg-white p-5 rounded-xl shadow mb-6">

      <h2 className="font-semibold mb-3">
        Insights
      </h2>

      {expenses.length === 0 ? (
        <p className="text-gray-500">
          No insights yet. Add some expenses.
        </p>
      ) : (
        <div className="space-y-2 text-sm">

          <p>
            💡 Highest spending category:
            <span className="font-semibold ml-1">
              {topCategory}
            </span>
          </p>

          <p>
            💰 Total expenses:
            <span className="font-semibold ml-1">
              ₹{totalExpense}
            </span>
          </p>

          <p className="text-gray-600">
            You are spending most on{" "}
            <strong>{topCategory}</strong>.
          </p>

        </div>
      )}

    </div>
  );
}

export default Insights;
