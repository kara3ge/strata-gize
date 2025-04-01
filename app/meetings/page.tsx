import Layout from "../../components/Layout";

const meetings = [
  { date: "April 10, 2025", agenda: "Budget Planning" },
  { date: "May 5, 2025", agenda: "Maintenance Updates" }
];

export default function Meetings() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold text-center mt-5">Upcoming Meetings</h2>
      <ul className="mt-5">
        {meetings.map((meeting, index) => (
          <li key={index} className="bg-white shadow-md rounded-lg p-4 m-2">
            <span className="font-semibold">{meeting.date}</span>: {meeting.agenda}
          </li>
        ))}
      </ul>
    </Layout>
  );
}