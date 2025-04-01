import Layout from "../../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold text-center mt-5">Contact Strata Council</h2>
      <form className="max-w-lg mx-auto mt-5 bg-white shadow-lg p-6 rounded-lg">
        <label className="block mb-2">Name:</label>
        <input type="text" className="w-full p-2 border rounded" />
        <label className="block mt-4 mb-2">Email:</label>
        <input type="email" className="w-full p-2 border rounded" />
        <label className="block mt-4 mb-2">Message:</label>
        <textarea className="w-full p-2 border rounded"></textarea>
        <button type="submit" className="w-full mt-5 bg-blue-600 text-white p-2 rounded">Send</button>
      </form>
    </Layout>
  );
}