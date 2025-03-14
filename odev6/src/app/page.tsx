"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>(null);
  let randomUserId = Math.floor(Math.random() * 10) + 1;

  function getRandomUser() {
    const newRandomUserId = Math.floor(Math.random() * 10) + 1;
    randomUserId = newRandomUserId;

    fetch(`https://jsonplaceholder.typicode.com/users/${newRandomUserId}`)
      .then((res) => res.json())
      .then((userData) => setData(userData));
  }

  useEffect(() => {
    getRandomUser();
  }, []);
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
        <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg">
          {data ? (
            <div className="space-y-4">
              <h1 className="text-xl font-semibold text-blue-300">
                İsim: <span className="text-white">{data.name}</span>
              </h1>
              <h1 className="text-xl font-semibold text-blue-300">
                E-posta: <span className="text-white">{data.email}</span>
              </h1>
              <h1 className="text-xl font-semibold text-blue-300">
                Telefon: <span className="text-white">{data.phone}</span>
              </h1>
              <h1 className="text-xl font-semibold text-blue-300">
                Web Sitesi: <span className="text-white">{data.website}</span>
              </h1>
              <h1 className="text-xl font-semibold text-blue-300">
                Şirket: <span className="text-white">{data.company.name}</span>
              </h1>
              <h1 className="text-xl font-semibold text-blue-300">
                Şehir: <span className="text-white">{data.address.city}</span>
              </h1>
            </div>
          ) : (
            <div className="flex justify-center items-center h-60">
              <h1 className="text-xl animate-pulse">Veri yükleniyor...</h1>
            </div>
          )}
          <div className="mt-8 flex justify-center">
            <button
              onClick={getRandomUser}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Rastgele Kullanıcı Getir
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
