function Dashboard({ income, expense, balance }) {
  const cards = [
    { title: "Total Balance", value: balance },
    { title: "Income", value: income },
    { title: "Expenses", value: expense },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-white p-5 rounded-xl shadow"
        >
          <p className="text-gray-500 text-sm">{card.title}</p>
          <h2 className="text-xl font-bold">₹{card.value}</h2>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
