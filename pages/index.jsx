import Head from "next/head";
import { useEffect, useState } from "react";
import { relacaoCidades } from "../infos_temp";

export default function Home() {
  const [cidades, setCidades] = useState(null);

  // const chamaApi = async () => {
  //   const resultado = await fetch("/api/get_nomes_cidades");
  //   console.log(await resultado.json());

  //   const data = {
  //     cidade: "IGREJINHA",
  //   };

  //   const testePost = await fetch("/api/filtrar_vacinas", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });

  //   console.log(await testePost.json());
  //   setCidades(await resultado.json());
  // };

  const chamaApi = () => {
    setCidades([...relacaoCidades]);
  };

  useEffect(() => {
    chamaApi();
  }, []);

  return (
    <main>
      <Head>
        <title>Projeto Integrador - Vacinômetro</title>
        <meta name="description" content="Vacinômetro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="24" y="1" width="23" height="68" rx="11.5" stroke="#3137CA" strokeWidth="2" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 35.5C0 42.4036 5.59644 48 12.5 48H21V23H12.5C5.59644 23 0 28.5964 0 35.5ZM50 48H57.5C64.4036 48 70 42.4036 70 35.5C70 28.5964 64.4036 23 57.5 23H50V48Z"
            fill="#83CDF1"
          />
          <circle cx="40" cy="21" r="2" fill="#3137CA" />
          <circle cx="31" cy="28" r="2" fill="#3137CA" />
          <circle cx="39" cy="51" r="2" fill="#3137CA" />
          <circle cx="31.5" cy="15.5" r="2.5" fill="#3137CA" />
          <circle cx="39.5" cy="35.5" r="2.5" fill="#3137CA" />
          <circle cx="31.5" cy="43.5" r="2.5" fill="#3137CA" />
        </svg>
        <h1>Vacinômetro</h1>
      </header>
      <div>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.33512 4.80232C9.74423 4.73752 10.0234 4.35334 9.95856 3.94423C9.89376 3.53511 9.50958 3.25599 9.10047 3.32079C6.64008 3.71047 4.71044 5.64012 4.32076 8.1005C4.25596 8.50961 4.53508 8.89379 4.9442 8.95859C5.35331 9.02339 5.73749 8.74426 5.80229 8.33515C6.09032 6.51661 7.51658 5.09035 9.33512 4.80232Z"
                fill="#3137CA"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 0.25C5.61522 0.25 1.25 4.61522 1.25 10C1.25 15.3848 5.61522 19.75 11 19.75C16.3848 19.75 20.75 15.3848 20.75 10C20.75 4.61522 16.3848 0.25 11 0.25ZM2.75 10C2.75 5.44365 6.44365 1.75 11 1.75C15.5563 1.75 19.25 5.44365 19.25 10C19.25 14.5563 15.5563 18.25 11 18.25C6.44365 18.25 2.75 14.5563 2.75 10Z"
                fill="#3137CA"
              />
              <path
                d="M19.5304 17.4698C19.2375 17.1769 18.7626 17.1769 18.4697 17.4698C18.1768 17.7626 18.1768 18.2375 18.4697 18.5304L22.4696 22.5304C22.7625 22.8233 23.2374 22.8233 23.5303 22.5304C23.8232 22.2375 23.8232 21.7626 23.5303 21.4697L19.5304 17.4698Z"
                fill="#3137CA"
              />
            </svg>
            <select name="cidades" id="cidades" defaultValue="-1">
              <option value="-1" disabled>
                SELECIONE UMA CIDADE...
              </option>
              {cidades &&
                cidades.map((cidade) => (
                  <option key={cidade.estabelecimento_municipio_nome} value={cidade.estabelecimento_municipio_nome}>
                    {cidade.estabelecimento_municipio_nome}
                  </option>
                ))}
            </select>
          </div>
          <button type="button">Buscar</button>
        </div>
      </div>
    </main>
  );
}
