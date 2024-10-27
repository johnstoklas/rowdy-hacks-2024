
import React, { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables, LinearScale, CategoryScale, LineElement, PointElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

Chart.register(
    LinearScale,
    CategoryScale,
    LineElement,
    PointElement,
    Tooltip,
    Legend
);

const HealthGraph = () => {
    const chartRef = useRef(null);
    const [data, setData] = useState({
        labels: [],
        datasets: [{
            label: 'Your Data',
            data: [],
            borderColor: '#66B58F',
            backgroundColor: 'rgba(102, 181, 143, 0.2)',
            fill: true,
        }]
    });

    const fetchData = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:5000/data");
            const entries = response.data.entries;

            const labels = entries.map(entry => entry.date);
            const values = entries.map(entry => entry.value);

            setData({
                labels,
                datasets: [{
                    label: 'Your Data',
                    data: values,
                    borderColor: '#66B58F',
                    backgroundColor: 'rgba(102, 181, 143, 0.2)',
                    fill: true,
                }]
            });
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 5000);

        return () => {
            clearInterval(interval);
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <h1>Analyze Trends Over Time!</h1>
            {data.labels.length > 0 ? ( 
                <Line 
                    ref={chartRef} 
                    data={data} 
                    options={{
                        responsive: true,
                        maintainAspectRatio: false 
                    }} 
                />
            ) : (
                <p>Loading data...</p> 
            )}
        </div>
    );
};

export default HealthGraph;