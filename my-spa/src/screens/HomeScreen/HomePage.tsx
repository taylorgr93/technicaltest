/* eslint-disable */
// src/components/HomePage.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const styles = {
  homeContainer: {
    textAlign: "center",
    padding: "20px",
  } as React.CSSProperties,
  homeTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "30px",
  } as React.CSSProperties,
  moduleLinks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  } as React.CSSProperties,
  moduleLink: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 20px",
    margin: "10px 0",
    borderRadius: "5px",
    textDecoration: "none",
  } as React.CSSProperties,
  moduleLinkHover: {
    backgroundColor: "#0056b3",
  } as React.CSSProperties,
  moduleButtonLanguage: {
    display: "flex",
    flexDirection: "row",
    //   alignItems: "center",
    justifyContent: "center",
    gap: "10px", // Añade un espacio de 10px entre los elementos
  } as React.CSSProperties,
};

const HomePage: React.FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div style={styles.homeContainer}>
      <h1 style={styles.homeTitle}>{t("welcome")}</h1>{" "}
      <div style={styles.moduleButtonLanguage}>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("es")}>Español</button>
      </div>
      <div style={styles.moduleLinks}>
        <Link
          to="/users"
          style={styles.moduleLink}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor =
              styles.moduleLinkHover.backgroundColor || "#0000ff";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor =
              styles.moduleLink.backgroundColor || "#808080";
          }}
        >
          {t("userModuleButton")}
        </Link>
        <Link
          to="/news"
          style={styles.moduleLink}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor =
              styles.moduleLinkHover.backgroundColor || "#0000ff";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor =
              styles.moduleLink.backgroundColor || "#808080";
          }}
        >
          {t("newsModuleButton")}
        </Link>
        {/* Otros enlaces */}
      </div>
    </div>
  );
};

export default HomePage;
