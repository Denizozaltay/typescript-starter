"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Ben Deniz
        </h1>

        <div className="text-gray-600 space-y-4">
          <p className="leading-relaxed">
            Ben bir yazılım geliştiriciyim. Beykent Üniversitesinde Bilgisayar
            Mühendisliği okuyorum. Kendi çapımda projeler geliştirmeyi
            seviyorum.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href={"/my-projects"}
              className="inline-block bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors"
            >
              Projelerimi Görüntüle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
