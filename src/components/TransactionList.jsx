function TransactionList({ transactions, deleteTransaction, role }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow">

      <h2 className="font-semibold mb-3">Transactions</h2>

      {transactions.length === 0 ? (
        <p className="text-gray-500">No transactions yet</p>
      ) : (
        transactions.map((t) => (
          <div
            key={t.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div>
              <p>{t.title}</p>
              <p className="text-sm text-gray-500">
                {t.category} • {t.date}
              </p>
            </div>

            <div>
              <span
                className={
                  t.type === "income"
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {t.type === "income" ? "+" : "-"}₹{t.amount}
              </span>

              {role === "admin" && (
                <button
                  onClick={() => deleteTransaction(t.id)}
                  className="ml-2 text-red-500"
                >
                  ❌
                </button>
              )}
            </div>
          </div>
        ))
      )}

    </div>
  );
}

export default TransactionList;
