import React, {useEffect, useState, useRef} from 'react';
import Chart from 'chart.js/auto';

 

const Grafica = () => {
    const [gastos, setGastos] = useState([]);
    const chartRef = useRef(null);
 
    useEffect(() =>{
        //obteniendo los datos del local storage
        const storedGastos = localStorage.getItem('listaGastos');
        if(storedGastos){
            setGastos(JSON.parse(storedGastos));
        }
    }, []);
 
    useEffect(() =>{
        //destruir el grafico anterior si existiera
        if (chartRef.current!== null){
            chartRef.current.destroy();
        }
 
        //crear grafico cuando datos cambien
        const ctx = document.getElementById('graficoGastos');
        if (ctx){
            const labels = gastos.map(gasto => gasto.titulo);
            const data = gastos.map(gasto => gasto.valor);
 
            chartRef.current= new Chart(ctx, {
                type: 'bar',
                data: {
                    labels:labels,
                    datasets: [{
                        label:"Monto de gastos",
                        data: data,
                        backgroundColor: 'rgba(54,162,235,0.2)',
                        borderColor: 'rbga(54,162,235,1)',
                        borderWidth:1
                    }]
                },
                options:{
                    scales:{
                        y:{
                            beginAtZero:true
                        }
                    }
                }
            });
        }
    }, [gastos]);
return(
    <div>
        <h2>Grafico de gastos</h2>
        <canvas id="graficoGastos" width="400" height="400"></canvas>
    </div>
);
};
export default Grafica
