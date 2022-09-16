const SelectCidade = (props) => {
  const handleOnChange = (e) => {
    if (e.target.value !== "-1") {
      props.setCidadeSelecionada(e.target.value);
    }
  };

  return (
    <div>
      {props.cidades && (
        <>
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
          <select onChange={handleOnChange} name="cidades" id="cidades" defaultValue="-1">
            <option value="-1" disabled>
              SELECIONE UMA CIDADE...
            </option>
            {props.cidades.map((cidade) => (
              <option key={cidade.estabelecimento_municipio_nome} value={cidade.estabelecimento_municipio_nome}>
                {cidade.estabelecimento_municipio_nome}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default SelectCidade;
