import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function Charts({ transactions }) {
  // 🔹 CATEGORY DATA (Pie Chart)
  const categoryData = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryData[t.category] =
        (categoryData[t.category] || 0) + Number(t.amount);
    }
  });

  const pieData = Object.keys(categoryData).map((key) => ({
    name: key,
    value: categoryData[key],
  }));

  // 🔹 TIME DATA (Line Chart)
  const lineData = transactions.map((t) => ({
    name: t.date,
    amount: Number(t.amount),
  }));

  return (
    <div className="bg-white p-5 rounded-2xl shadow mb-6">

      <h2 className="text-lg font-semibold mb-4">
        Analytics
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {/* 📊 Pie Chart */}
        <div>
          <h3 className="text-sm mb-2">Spending by Category</h3>
          <PieChart width={250} height={250}>
            <Pie data={pieData} dataKey="value">
              {pieData.map((_, i) => (
                <Cell key={i} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* 📈 Line Chart */}
        <div>
          <h3 className="text-sm mb-2">Transaction Trend</h3>
          <LineChart width={300} height={250} data={lineData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" />
          </LineChart>
        </div>

      </div>

    </div>
  );
}

export default Charts;
