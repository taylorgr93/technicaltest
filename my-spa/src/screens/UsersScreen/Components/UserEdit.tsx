import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const UserEdit: React.FC = () => {
  const { t } = useTranslation();
  let { id } = useParams<{ id: string }>();

  // Aquí podrías obtener información detallada del usuario de una API
  const user = { id, name: "John Doe" };

  return (
    <div>
      <h1>{t("userDetail")}</h1>
      <p>{t("userId") + user.id}</p>
      <p>{t("userName") + user.name}</p>
      {/* Formulario de edición del usuario */}
    </div>
  );
};

export default UserEdit;
