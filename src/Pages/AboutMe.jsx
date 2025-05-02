import React from "react";
import img2 from "../assets/Sebastian Schoeneberger PP.webp";
import ReactLogo from "../assets/MERN-Logo/React.png";
import NodeLogo from "../assets/MERN-Logo/Node.js.png";
import ExpressLogo from "../assets/MERN-Logo/Express.png";
import MongoDBLogo from "../assets/MERN-Logo/MongoDB.png";
import Skills from "../components/Skills";
import devlogo from "../assets/Experience-Logo/4897896.jpg";
import germanAutotecLogo from "../assets/Experience-Logo/Mini Logo.jpeg";
import chilaLogo from "../assets/Experience-Logo/WhatsApp Image 2025-02-12 at 21.26.46.jpeg";
import inityLogo from "../assets/Experience-Logo/Inity Bar logo.jpg";
import SoftSkills from "../components/SoftSkills";
import BlurText from "../animations/BlurText";
import { useTranslation } from "../context/TranslationContext";

function AboutMe() {
  const { t } = useTranslation();

  return (
    <>
      <BlurText
        text={t("aboutMe.title")}
        delay={50}
        animateBy="words"
        direction="top"
        className="text-6xl font-bold py-6 scroll-mt-32"
        id="About"
      />

      <div className="w-16 h-2 rounded-full bg-accent "></div>

      <div className="pt-10 flex flex-col md:flex-row gap-10">
        <div className="flex-1 px-10 text-justify text-lg">
          <BlurText
            text={t("aboutMe.subtitle")}
            delay={50}
            animateBy="words"
            direction="top"
            className="p-6 text-2xl sm:text-4xl font-semibold text-center sm:text-left"
          />
          <div className="opacity-80">
            <p>{t("aboutMe.intro1")}</p>
            <p>
              {t("aboutMe.intro2.part1")}
              <span className="text-primary font-semibold">
                {t("aboutMe.intro2.mercedes")}
              </span>
              {t("aboutMe.intro2.part2")}
              <span className="text-primary font-semibold">
                {t("aboutMe.intro2.entrepreneurship")}
              </span>
              {t("aboutMe.intro2.part3")}
              <span className="text-primary font-semibold">
                {t("aboutMe.intro2.techIndustry")}
              </span>
              {t("aboutMe.intro2.part4")}
            </p>

            <h3 className="py-6 text-xl font-semibold">
              {t("aboutMe.setsTitle")}
            </h3>

            <p>
              🛠️ <strong>{t("aboutMe.sets.set1_label")}</strong> –{" "}
              {t("aboutMe.sets.set1")}
            </p>
            <p>
              🚀 <strong>{t("aboutMe.sets.set2_label")}</strong> –{" "}
              {t("aboutMe.sets.set2")}
            </p>
            <p>
              🌍 <strong>{t("aboutMe.sets.set3_label")}</strong> –{" "}
              {t("aboutMe.sets.set3")}
            </p>
            <p>
              🔍 <strong>{t("aboutMe.sets.set4_label")}</strong> –{" "}
              {t("aboutMe.sets.set4")}
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-start gap-5">
          <img
            src={img2}
            loading="lazy"
            className="w-56 rounded-full border-4 border-secondary"
            alt=""
          />
          <BlurText
            text={t("aboutMe.techStackTitle")}
            delay={50}
            animateBy="words"
            direction="top"
            className="p-6 text-2xl sm:text-4xl font-semibold text-center sm:text-left"
          />
          <div className="flex gap-2 sm:gap-4">
            <div className="flex flex-col items-center gap-3 w-20 sm:w-32">
              <img
                src={MongoDBLogo}
                className="w-full border-2 border-secondary p-4 rounded-xl bg-error"
                alt=""
              />
              <p className="text-center text-3xl sm:text-5xl text-black font-bold">
                M
              </p>
              <p className="hidden sm:inline px-3 py-2 bg-error text-secondary font-semibold rounded-3xl">
                Mongo DB
              </p>
              <p className="sm:hidden px-3 py-2 bg-error text-secondary font-semibold rounded-3xl">
                Mongo
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 w-20 sm:w-32">
              <img
                src={ExpressLogo}
                className="w-auto border-2 border-secondary p-4 rounded-xl bg-error"
                alt=""
              />
              <p className="text-center text-3xl sm:text-5xl text-black font-bold">
                E
              </p>
              <p className="hidden sm:inline px-3 py-2 bg-error text-black font-semibold rounded-3xl">
                Express.js
              </p>
              <p className="sm:hidden px-3 py-2 bg-error text-black font-semibold rounded-3xl">
                Express
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 w-20 sm:w-32">
              <img
                src={ReactLogo}
                className="w-auto border-2 border-secondary p-4 rounded-xl bg-error"
                alt=""
              />
              <p className="text-center text-3xl sm:text-5xl text-black font-bold">
                R
              </p>
              <p className="hidden sm:inline px-3 py-2 bg-error text-accent font-semibold rounded-3xl">
                React.js
              </p>
              <p className="sm:hidden px-3 py-2 bg-error text-accent font-semibold rounded-3xl">
                React
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 w-20 sm:w-32">
              <img
                src={NodeLogo}
                className="w-auto border-2 border-secondary p-4 rounded-xl bg-error"
                alt=""
              />
              <p className="text-center text-3xl sm:text-5xl text-black font-bold">
                N
              </p>
              <p className="hidden sm:inline px-3 py-2 bg-error text-primary font-semibold rounded-3xl">
                Node.js
              </p>
              <p className="sm:hidden px-3 py-2 bg-error text-primary font-semibold rounded-3xl">
                Node
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="flex flex-col md:flex-row gap-10 p-4 sm:p-10">
        <div className="flex-1">
          <BlurText
            text={t("aboutMe.educationTitle")}
            delay={50}
            animateBy="words"
            direction="top"
            className="p-6 text-2xl sm:text-4xl font-semibold text-center sm:text-left"
          />

          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic text-primary font-semibold">
                  {t("aboutMe.timeline1.date")}
                </time>
                <div className="text-xl font-black text-primary pb-2">
                  {t("aboutMe.timeline1.title")}
                </div>
                <div className="text-lg font-black text-accent pb-2">
                  {t("aboutMe.timeline1.org")}
                </div>
                <p>• {t("aboutMe.timeline1.desc1")}</p>
                <p>• {t("aboutMe.timeline1.desc2")}</p>
              </div>
              <hr />
            </li>

            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end md:mb-10">
                <time className="font-mono italic text-primary font-semibold">
                  {t("aboutMe.timeline2.date")}
                </time>
                <div className="text-xl font-black text-primary pb-2">
                  {t("aboutMe.timeline2.title")}
                </div>
                <div className="text-lg font-black text-accent pb-2">
                  {t("aboutMe.timeline2.org")}
                </div>
                <p>• {t("aboutMe.timeline2.desc1")}</p>
                <p>• {t("aboutMe.timeline2.desc2")}</p>
                <p>• {t("aboutMe.timeline2.desc3")}</p>
              </div>
              <hr />
            </li>

            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic text-primary font-semibold">
                  {t("aboutMe.timeline3.date")}
                </time>
                <div className="text-xl font-black text-primary pb-2">
                  {t("aboutMe.timeline3.title")}
                </div>
                <div className="text-lg font-black text-accent pb-2">
                  {t("aboutMe.timeline3.org")}
                </div>
                <p>• {t("aboutMe.timeline3.desc1")}</p>
                <p>• {t("aboutMe.timeline3.desc2")}</p>
                <p>• {t("aboutMe.timeline3.desc3")}</p>
              </div>
              <hr />
            </li>

            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end md:mb-10">
                <time className="font-mono italic text-primary font-semibold">
                  {t("aboutMe.timeline4.date")}
                </time>
                <div className="text-xl font-black text-primary pb-2">
                  {t("aboutMe.timeline4.title")}
                </div>
                <div className="text-lg font-black text-accent pb-2">
                  {t("aboutMe.timeline4.org")}
                </div>
                <p>• {t("aboutMe.timeline4.desc1")}</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <BlurText
            text={t("aboutMe.experienceTitle")}
            delay={50}
            animateBy="words"
            direction="top"
            className="p-6 text-2xl sm:text-4xl font-semibold text-center sm:text-left"
          />

          <div className="collapse collapse-plus shadow-2xl">
            <input type="checkbox" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              <div className="flex items-center gap-4 pb-2">
                <img src={devlogo} alt="" className="w-12 h-12 rounded-xl" />
                <h2 className="text-primary">
                  {t("aboutMe.exp1.company")} <br />
                  <span className="text-lg font-semibold text-accent">
                    {t("aboutMe.exp1.role")}
                  </span>
                </h2>
              </div>
              <p className="pl-4 text-lg">{t("aboutMe.exp1.dateRange")}</p>
            </div>
            <div className="collapse-content">
              <p>• {t("aboutMe.exp1.desc1")}</p>
              <p>• {t("aboutMe.exp1.desc2")}</p>
            </div>
          </div>

          <div className="collapse collapse-plus shadow-2xl">
            <input type="checkbox" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              <div className="flex items-center gap-4 pb-2">
                <img src={germanAutotecLogo} alt="" className="w-12 h-12 rounded-xl" />
                <h2 className="text-primary">
                  {t("aboutMe.exp2.company")} <br />
                  <span className="text-lg font-semibold text-accent">
                    {t("aboutMe.exp2.role")}
                  </span>
                </h2>
              </div>
              <p className="pl-4 text-lg">{t("aboutMe.exp2.dateRange")}</p>
            </div>
            <div className="collapse-content">
              <p>• {t("aboutMe.exp2.desc1")}</p>
              <p>• {t("aboutMe.exp2.desc2")}</p>
              <p>• {t("aboutMe.exp2.desc3")}</p>
              <p>• {t("aboutMe.exp2.desc4")}</p>
            </div>
          </div>

          <div className="collapse collapse-plus shadow-2xl">
            <input type="checkbox" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              <div className="flex items-center gap-4 pb-2">
                <img src={chilaLogo} alt="" className="w-12 h-12 rounded-xl" />
                <h2 className="text-primary">
                  {t("aboutMe.exp3.company")} <br />
                  <span className="text-lg font-semibold text-accent">
                    {t("aboutMe.exp3.role")}
                  </span>
                </h2>
              </div>
              <p className="pl-4 text-lg">{t("aboutMe.exp3.dateRange")}</p>
            </div>
            <div className="collapse-content">
              <p>• {t("aboutMe.exp3.desc1")}</p>
              <p>• {t("aboutMe.exp3.desc2")}</p>
            </div>
          </div>

          <div className="collapse collapse-plus shadow-2xl">
            <input type="checkbox" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              <div className="flex items-center gap-4 pb-2">
                <img src={inityLogo} alt="" className="w-12 h-12 rounded-xl" />
                <h2 className="text-primary">
                  {t("aboutMe.exp4.company")} <br />
                  <span className="text-lg font-semibold text-accent">
                    {t("aboutMe.exp4.role")}
                  </span>
                </h2>
              </div>
              <p className="pl-4 text-lg">{t("aboutMe.exp4.dateRange")}</p>
            </div>
            <div className="collapse-content">
              <p>• {t("aboutMe.exp4.desc1")}</p>
              <p>• {t("aboutMe.exp4.desc2")}</p>
              <p>• {t("aboutMe.exp4.desc3")}</p>
            </div>
          </div>

          <BlurText
            text={t("aboutMe.softSkillsTitle")}
            delay={50}
            animateBy="words"
            direction="top"
            className="p-6 text-2xl sm:text-4xl font-semibold text-center sm:text-left"
          />

          <SoftSkills />

          <BlurText
            text={t("aboutMe.languagesTitle")}
            delay={50}
            animateBy="words"
            direction="top"
            className="p-6 text-2xl sm:text-4xl font-semibold text-center sm:text-left"
          />

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4 border rounded-lg shadow hover:shadow-2xl hover:scale-105 p-3">
              <p className="text-xl font-semibold">
                {t("aboutMe.languagesList.german")}
              </p>
              <progress className="progress progress-primary w-56" value={100} max="100" />
            </div>
            <div className="flex items-center justify-between gap-4 border rounded-lg shadow hover:shadow-2xl hover:scale-105 p-3">
              <p className="text-xl font-semibold">
                {t("aboutMe.languagesList.spanish")}
              </p>
              <progress className="progress progress-primary w-56" value={100} max="100" />
            </div>
            <div className="flex items-center justify-between gap-4 border rounded-lg shadow hover:shadow-2xl hover:scale-105 p-3">
              <p className="text-xl font-semibold">
                {t("aboutMe.languagesList.english")}
              </p>
              <progress className="progress progress-accent w-56" value={90} max="100" />
            </div>
            <div className="flex items-center justify-between gap-4 border rounded-lg shadow hover:shadow-2xl hover:scale-105 p-3">
              <p className="text-xl font-semibold">
                {t("aboutMe.languagesList.amharic")}
              </p>
              <progress className="progress progress-accent w-56" value={65} max="100" />
            </div>
            <div className="flex items-center justify-between gap-4 border rounded-lg shadow hover:shadow-2xl hover:scale-105 p-3">
              <p className="text-xl font-semibold">
                {t("aboutMe.languagesList.italian")}
              </p>
              <progress className="progress progress-accent w-56" value={30} max="100" />
            </div>
          </div>
        </div>
      </section>

      <BlurText
        text={t("aboutMe.skillsSectionTitle")}
        delay={50}
        animateBy="words"
        direction="top"
        className="text-6xl font-bold py-6 scroll-mt-32"
        id="Skills"
      />
      <div className="w-16 h-2 rounded-full bg-accent "></div>
      <Skills />
    </>
  );
}

export default AboutMe;
