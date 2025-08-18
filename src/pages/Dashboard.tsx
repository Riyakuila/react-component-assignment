import React, { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const Dashboard: React.FC = () => {
  const [data] = useState<User[]>([
    { id: 1, name: "Riya", email: "riya@example.com", role: "Admin" },
    { id: 2, name: "Bob", email: "bob@example.com", role: "Moderator" },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: "User" },
    { id: 4, name: "Alice", email: "alice@example.com", role: "User" },
  ]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleCheckboxChange = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        User Dashboard
      </h1>
      <table className="min-w-full bg-gray-800 text-white rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Check Box</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr
              key={user.id}
              className={
                selectedIds.includes(user.id)
                  ? "bg-blue-800"
                  : "bg-gray-900"
              }
            >
              <td className="px-4 py-2">
                <input
                  type="checkbox"
                  checked={selectedIds.includes(user.id)}
                  onChange={() => handleCheckboxChange(user.id)}
                />
              </td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;