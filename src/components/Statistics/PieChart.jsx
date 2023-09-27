import { Chart } from "chart.js";
import { useEffect, useRef } from "react";

const PieChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    useEffect(() =>{
        if (chartInstance.current){
            chartInstance.current.destroy()
        }
        const donationChartRef = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(donationChartRef, {
            type:"pie",
            data:{
                labels:["Label 1", "Label 2"],
                datasets : [
                    {
                       data: [400, 600],
                       backgroundColor:[
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)'
                       ],
                    }
                ]
            }
        })
        return () =>{
            if(chartInstance.current){
                chartInstance.current.destroy()
            }
        }
    },[])
    return (
        <div>
            
        </div>
    );
};

export default PieChart;