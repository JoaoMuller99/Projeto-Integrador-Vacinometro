import Head from "next/head";
import { useEffect, useState } from "react";
import InfosVacinas from "../components/infos_vacinas";
// Components
import Logo from "../components/logo";
import SelectCidade from "../components/select_cidade";
// Data
import { relacaoCidades, relacaoDados } from "../infos_temp";

export default function Home() {
  const [cidades, setCidades] = useState(null);
  const [cidadeSelecionada, setCidadeSelecionada] = useState(null);
  const [data, setData] = useState(null);

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

  const handleOnClick = () => {
    if (cidadeSelecionada) {
      setData([...relacaoDados]);
    }
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
      <Logo />
      <div>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="select-main-container">
          <SelectCidade cidades={cidades} setCidadeSelecionada={setCidadeSelecionada} />
          <button onClick={handleOnClick} type="button">
            Buscar
          </button>
        </div>
        {data && cidadeSelecionada && <InfosVacinas data={data} cidadeSelecionada={cidadeSelecionada} />}
      </div>
    </main>
  );
}
