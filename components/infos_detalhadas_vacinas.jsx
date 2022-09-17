const InfosDetalhadasVacinas = (props) => {
  return (
    <div>
      <h6>{props.nomeVacina.includes("CORONAVAC") ? "coronavac" : props.nomeVacina.toLowerCase()}</h6>
      <span>
        1ª Dose: <span>{props.qtdPrimeiraDose}</span>
      </span>
      <span>
        2ª Dose: <span>{props.qtdSegundaDose}</span>
      </span>
    </div>
  );
};

export default InfosDetalhadasVacinas;
