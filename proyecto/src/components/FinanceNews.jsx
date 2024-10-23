import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/FinanceNews.css'; // Archivo CSS personalizado

const FinanceNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFinanceNews = async () => {
      try {
        const response = await fetch('https://api.apilayer.com/financelayer/news?date=today&keywords=at%26t&apikey=Ad0FJj5FI8UJbYhXH6cxDV1o6NREkBJ0');
        const data = await response.json();
        setNewsData(data.data); // Esto contiene las noticias
        setLoading(false);
      } catch (error) {
        console.error('Error fetching finance news:', error);
      }
    };

    fetchFinanceNews();
  }, []);

  if (loading) {
    return <p className="text-center my-5">Cargando noticias financieras...</p>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Noticias financieras recientes</h2>
      <ul className="list-group">
        {newsData.map((news, index) => (
          <li key={index} className="list-group-item news-item">
            <a href={news.url} target="_blank" rel="noopener noreferrer" className="news-title">
              {news.title}
            </a>
            <p className="news-description">{news.description}</p>
            <p className="news-meta">
              <strong>Source:</strong> {news.source} | <strong>Published at:</strong> {new Date(news.published_at).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinanceNews;
