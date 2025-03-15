"use client";

import Link from "next/link";

export default function MyProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link
        href={"/"}
        className="text-blue-500 hover:text-blue-700 mb-4 inline-block"
      >
        ← Ana Sayfa
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-center">Projelerim</h1>

      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            BusTrack Istanbul
          </h2>
          <p className="text-gray-600 mb-4">
            Istanbul'daki IETT otobüslerinin gerçek zamanlı konumlarını takip
            etmenizi sağlayan mobil uygulama. Flutter teknolojisi kullanılarak
            geliştirilmiş bu uygulama, toplu taşıma kullanıcıları için seyahat
            planlamasını kolaylaştırır ve bekleme sürelerini azaltır.
          </p>
          <a
            href={"https://github.com/Denizozaltay/BusTrackIstanbul"}
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            ProblemSolver
          </h2>
          <p className="text-gray-600 mb-4">
            Kullanıcıların sorduğu soruları analiz eden, çözümleyen ve detaylı
            açıklamalar sunan yapay zeka destekli uygulama. Flutter ile
            geliştirilen bu projede, OpenRouter API entegrasyonu sayesinde
            kullanıcılara hızlı ve doğru cevaplar sunulur.
          </p>
          <a
            href={"https://github.com/Denizozaltay/ProblemSolver"}
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
