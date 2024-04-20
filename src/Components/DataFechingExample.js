import React, { useState, useEffect } from 'react';

const DataFetchingExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular llamada API
    const fetchData = async () => {
      try {
        // Llamada
        await new Promise(resolve => setTimeout(resolve, 2000));

        const apiData = {
          message: "Datos cargados exitosamente."
        };

        setData(apiData);
        setLoading(false); // Finalizo carga
      } catch (error) {
        console.error('Error al cargar la info.', error);
        setLoading(false);
      }
    };

    // Llamada al cargar
    fetchData();

    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  return (
    <div>
      <h1>Ejemplo de consumo API</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <p>{data.message}</p>
      )}
    </div>
  );
};

export default DataFetchingExample;