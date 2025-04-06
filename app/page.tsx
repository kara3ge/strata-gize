/*
 * Reference:
 * Microsoft. (2025). Copilot (GPT-4) [Large Language Model]. https://copilot.microsoft.com/
 * In-Text Citation:
 * (Microsoft, 2025)
 */

import Layout from "../components/Layout";
import "../app/globals.css";
import Image from "next/image";


export default function Home() {
  return (
    <Layout>
      <section className="text-center py-10">
        <h2 className="text-3xl font-semibold">Welcome to Strata Council Management</h2>
        <p className="mt-4 text-gray-700">Providing professional strata management services for residential and commercial properties.</p>
      </section>
      
        <div className="mt-6 w-full flex justify-center">
          <Image
            src="/freeuse.jpg"
            alt="Strata Council Building"
            width={600}
            height={400}
            priority
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>


    </Layout>
  );
}
