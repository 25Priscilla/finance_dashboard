function RoleSwitcher({ role, setRole }) {
  return (
    <div className="mb-4 text-right">

      <label className="mr-2">Role:</label>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="admin">Admin</option>
        <option value="viewer">Viewer</option>
      </select>

    </div>
  );
}

export default RoleSwitcher;
