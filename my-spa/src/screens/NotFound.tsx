// src/components/NotFound.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
  } as React.CSSProperties,
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  } as React.CSSProperties,
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  } as React.CSSProperties,
};

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{t("notFoundPage")}</h1>
      <button style={styles.button} onClick={() => navigate(-1)}>
        {t("messageGoBack")}
      </button>
    </div>
  );
};

export default NotFound;
