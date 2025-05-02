import Folder from "./Folder";
import { useTranslation } from "../context/TranslationContext";

const EdelsteinDetails = () => {
  const { t } = useTranslation();

  return (
    <div className="py-4 px-2 text-xs sm:text-base sm:px-6 flex flex-col items-center justify-center text-center">
      <h3 className="text-lg sm:text-xl font-black text-accent pb-2">
        {t("projects.edelstein.details.overviewTitle")}
      </h3>
      <p className="p-4">
        {t("projects.edelstein.details.overviewPara1")}
      </p>
      <p className="pb-2">
        {t("projects.edelstein.details.overviewPara2")}
      </p>

      <h4 className="text-lg sm:text-xl font-black text-accent pb-2">
        {t("projects.edelstein.details.keyImplTitle")}
      </h4>
      <ul className="space-y-2 text-center flex flex-col items-center pb-12">
        <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
          <span className="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
          </span>
          <span>
            <strong>{t("projects.edelstein.details.implementations.advancedFiltering.label")}</strong>{" "}
            {t("projects.edelstein.details.implementations.advancedFiltering.text")}
          </span>
        </li>
        <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
          <span className="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
            </svg>
          </span>
          <span>
            <strong>{t("projects.edelstein.details.implementations.dynamicAdminPanel.label")}</strong>{" "}
            {t("projects.edelstein.details.implementations.dynamicAdminPanel.text")}
          </span>
        </li>
        <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
          <span className="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
          </span>
          <span>
            <strong>{t("projects.edelstein.details.implementations.responsiveDesign.label")}</strong>{" "}
            {t("projects.edelstein.details.implementations.responsiveDesign.text")}
          </span>
        </li>
        <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
          <span className="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
            </svg>
          </span>
          <span>
            <strong>{t("projects.edelstein.details.implementations.modularCode.label")}</strong>{" "}
            {t("projects.edelstein.details.implementations.modularCode.text")}
          </span>
        </li>
      </ul>

      <h4 className="text-lg sm:text-xl font-black text-accent pb-4">
        {t("projects.edelstein.details.liveDemoTitle")}
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <Folder
          size={1}
          color="#00d8ff"
          className="pt-2"
          feRepo="https://github.com/SebSchoeneberger/KLUGELOU-FE"
          beRepo="https://github.com/SebSchoeneberger/KLUGELOU-BE"
          liveLink="https://klugelou.onrender.com"
        />
        <p className="p-4 text-center sm:text-left max-w-[400px]">
          {t("projects.edelstein.details.liveDemoInstructions")}&nbsp;
          <a
            className="underline"
            href="https://klugelou.onrender.com/admin/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://klugelou.onrender.com/admin/login
          </a>
          <br />
          <strong>{t("projects.edelstein.details.credentials.usernameLabel")}</strong>{" "}
          {t("projects.edelstein.details.credentials.username")}
          <br />
          <strong>{t("projects.edelstein.details.credentials.passwordLabel")}</strong>{" "}
          {t("projects.edelstein.details.credentials.password")}
          <br />
          {t("projects.edelstein.details.credentialsNote")}
        </p>
      </div>
    </div>
  );
};

export default EdelsteinDetails;
