import Layout from "../components/Layout";
import Image from "next/image";


export default function Home() {
  return (
    <Layout>
      <section className="text-center py-10">
        <h2 className="text-3xl font-semibold">Welcome to Strata Council Management</h2>
        <p className="mt-4 text-gray-700">Providing professional strata management services for residential and commercial properties.</p>
      </section>
      {/* Add the image here */}
        <div className="mt-6">
          <Image
            src="/freeuse.jpg"
            alt="Strata Council Building"
            width={600}
            height={400}
            priority
            className="rounded-lg shadow-lg"
          />
        </div>

    </Layout>
  );
}
