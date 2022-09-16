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
      <div>
        <select name="cidades" id="cidades" defaultValue="-1">
          <option value="-1" disabled>
            Selecione uma cidade...
          </option>
          {cidades &&
            cidades.map((cidade) => (
              <option key={cidade.estabelecimento_municipio_nome} value={cidade.estabelecimento_municipio_nome}>
                {cidade.estabelecimento_municipio_nome}
              </option>
            ))}
        </select>
      </div>
    </main>
  );
}
