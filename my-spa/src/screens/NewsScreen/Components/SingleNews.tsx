/* eslint-disable */
// NewsDetail.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface NewsDetail {
  id: number;
  title: string;
  body: string;
  // Puedes agregar más campos aquí según la estructura de tus datos
}

const SingleNews = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [newsDetail, setNewsDetail] = useState<NewsDetail | null>(null);

  useEffect(() => {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setNewsDetail(data))
      .catch((error) => console.error("Error:", error));
  }, [id]);

  if (!newsDetail) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{t("newsDetail")}</h1>
      <h3>{t("newsId") + id}</h3>
      <p>{newsDetail?.body}</p>
    </div>
  );
};

export default SingleNews;
