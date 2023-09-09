import { Select } from "./Select";
import LS from "../utils/localStorage";
import useLanguages from "../hooks/useLanguages";
import { defaultSourcelang, defaultTargetlang } from "../utils/defaultLangs";

const ToolBar = () => {
  const { languages } = useLanguages();

  const handleSourceLangChange = (lang: string) => LS.setItem("source", lang);
  const handleTargetLangChange = (lang: string) => LS.setItem("target", lang);

  return (
    <header className="container flex justify-center gap-x-10 py-5">
      <section>
        {languages && (
          <Select
            id="source_lang"
            defaultOption={defaultSourcelang()}
            options={languages.map((e) => {
              return { key: e.langName, value: e.isoCode };
            })}
            onChange={handleSourceLangChange}
          />
        )}
      </section>
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
