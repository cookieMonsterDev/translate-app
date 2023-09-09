import React from "react";
import { Select } from "./Select";
import LS from "../utils/localStorage";
import useLanguages from "../hooks/useLanguages";
import { defaultSourcelang, defaultTargetlang } from "../utils/defaultLangs";

const ToolBar = () => {
  const { languages } = useLanguages();

  const handleSourceLangChange = (lang: string) => LS.setItem("source", lang);
  const handleTargetLangChange = (lang: string) => LS.setItem("target", lang);
  const s = defaultSourcelang();

  return (
    <header className="container flex justify-between px-20 py-5 bg-red-500">
      <section className="">
        {languages && (
          <Select
            id="source_lang"
            defaultOption={s}
            options={languages.map((e) => {
              return { key: e.langName, value: e.isoCode };
            })}
            onChange={handleSourceLangChange}
          />
        )}
      </section>
      <button>test</button>
      <section>
        {languages && (
          <Select
            id="target_lang"
            defaultOption={defaultTargetlang()}
            options={languages.map((e) => {
              return { key: e.langName, value: e.isoCode };
            })}
            onChange={handleTargetLangChange}
          />
        )}
      </section>
    </header>
  );
};

export default ToolBar;
