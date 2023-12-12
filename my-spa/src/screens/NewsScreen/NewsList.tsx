/* eslint-disable */
// NewsList.tsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const styles = {
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  } as React.CSSProperties,
  containerButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    gap: "10px",
  } as React.CSSProperties,
};

interface NewsItem {
  id: number;
  title: string;
  content?: string;
  description?: string;
}

const NewsList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // URL ficticia, reemplaza con la URL real de tu API
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Asumiendo que 'data' es un array de noticias
        console.log(data);
        setNews(data);
      })
      .catch((error) => {
        console.error("Error al obtener noticias:", error);
      });
  }, []); // El array vacío asegura que useEffect se ejecute solo una vez

  return (
    <div>
      <h1>{t("newsList")}</h1>
      <button style={styles.button} type="button" onClick={() => navigate("/")}>
        {t("messageGoBack")}
      </button>
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            <Link to={`/news/${item.id}`}>
              <h2>{item.title}</h2>
              {/* <p>{item.content || item.description}</p> */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
