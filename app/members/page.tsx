/*
 * Reference:
 * Microsoft. (2025). Copilot (GPT-4) [Large Language Model]. https://copilot.microsoft.com/
 * In-Text Citation:
 * (Microsoft, 2025)
 */

import Layout from "../../components/Layout";

const members = [
  { name: "Alice Johnson", role: "Chairperson" },
  { name: "Bob Smith", role: "Treasurer" },
  { name: "Charlie Lee", role: "Secretary" }
];

export default function Members() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold text-center mt-5">Council Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        {members.map((member, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 text-center">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}