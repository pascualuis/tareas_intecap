import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';

const Grafica = () => {
    const [gastos, setGastos] = useState([]);
    const chartRef = useRef(null);

    // Registro de componentes de Chart.js necesarios para su uso
    useEffect(() => {
        Chart.register(...registerables);
    }, []);

    // Obtener los datos del localStorage
    useEffect(() => {
        const storedGastos = localStorage.getItem('listaGastos');
        if (storedGastos) {
            setGastos(JSON.parse(storedGastos));
        }
    }, []);

    // Crear gráfico cuando los datos cambien
    useEffect(() => {
        if (chartRef.current !== null) {
            chartRef.current.destroy();
        }

        const ctx = document.getElementById('graficoGastos');
        if (ctx) {
            const labels = gastos.map(gasto => gasto.titulo);
            const data = gastos.map(gasto => parseFloat(gasto.valor)); // Asegurarse que los valores sean numéricos

            chartRef.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: "Monto de gastos",
                        data: data,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        subtitle: {
                            display: true,
                            text: 'Monto total de gastos por título'
                        }
                    },
                    responsive: true
                }
            });
        }
    }, [gastos]); // Dependencia para actualizar el gráfico

    return (
        <div>
            <canvas id="graficoGastos"></canvas>
        </div>
    );
}

export default Grafica;
