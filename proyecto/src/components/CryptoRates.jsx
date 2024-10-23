import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CryptoRates() {
    const [cryptoData, setCryptoData] = useState(null);

    useEffect(() => {
        // Llamada API para obtener los datos de criptomonedas
        fetch('https://api.coincap.io/v2/assets')
            .then(response => response.json())
            .then(data => setCryptoData(data))
            .catch(error => console.error('Error al obtener los datos:', error));
    }, []);

    if (!cryptoData || !cryptoData.data) {
        // Evita que se intente acceder a un valor nulo o indefinido
        return <div className="text-center my-5">Cargando datos de criptomonedas...</div>;
    }

    return (
        <div className="container my-5">
            <h2 className="text-center">Crypto Rates</h2>
            <table className="table table-striped table-bordered mt-4">
                <thead className="table-dark">
                    <tr>
                        <th>Cryptocurrency</th>
                        <th>Symbol</th>
                        <th>Price (USD)</th>
                        <th>Market Cap (USD)</th>
                    </tr>
                </thead>
                <tbody>
                    {cryptoData.data.map(crypto => (
                        <tr key={crypto.id}>
                            <td>{crypto.name}</td>
                            <td>{crypto.symbol}</td>
                            <td>${parseFloat(crypto.priceUsd).toFixed(2)}</td>
                            <td>${parseFloat(crypto.marketCapUsd).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CryptoRates;
