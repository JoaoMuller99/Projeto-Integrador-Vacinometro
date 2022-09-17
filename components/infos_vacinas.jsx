import { useEffect, useState } from "react";
import { relacaoVacinas } from "../infos_temp";
import InfosDetalhadasVacinas from "./infos_detalhadas_vacinas";

const InfosVacinas = (props) => {
  const [listaDeVacinas, setListaDeVacinas] = useState(null);

  const organizaRelacaoVacinas = async () => {
    // const data = {
    //   cidade: props.cidadeSelecionada,
    // };

    // const resultado = await fetch("/api/nomes_vacinas", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });

    const resultado = relacaoVacinas.map((vacina) => {
      return { ...vacina };
    });

    resultado = resultado.map((item) => {
      return { ...item, quantidadePrimeiraDose: 0, quantidadeSegundaDose: 0 };
    });

    props.data.forEach((info) => {
      for (let index = 0; index < resultado.length; index++) {
        if (resultado[index].vacina_nome === info.vacina_nome) {
          if (info.vacina_descricao_dose === "1ª Dose") resultado[index].quantidadePrimeiraDose += 1;
          else if (info.vacina_descricao_dose === "2ª Dose") resultado[index].quantidadeSegundaDose += 1;
        }
      }
    });

    setListaDeVacinas([...resultado]);
  };

  useEffect(() => {
    if (props.data) organizaRelacaoVacinas();
  }, [props.data]);

  return (
    <div className="infos-vacinas-container">
      {listaDeVacinas && (
        <>
          <h3>{listaDeVacinas.length} Resultados</h3>
          <div>
            {listaDeVacinas.map((vacina) => (
              <InfosDetalhadasVacinas
                key={vacina.vacina_nome}
                nomeVacina={vacina.vacina_nome}
                qtdPrimeiraDose={vacina.quantidadePrimeiraDose}
                qtdSegundaDose={vacina.quantidadeSegundaDose}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default InfosVacinas;
