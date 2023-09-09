import { Select } from "./Select";
import LS from "../utils/localStorage";
import useLanguages from "../hooks/useLanguages";
import { defaultSourcelang, defaultTargetlang } from "../utils/defaultLangs";
import useTranslate from "../hooks/useTranslate";
import { useQueryClient } from "@tanstack/react-query";

const ToolBar = () => {
  const queryClient = useQueryClient();
  const { languages } = useLanguages();
  const { translate } = useTranslate();

  const handleSourceLangChange = (lang: string) => {
    LS.setItem("source", lang);
    const q = queryClient.getQueryData(["sourceText"]);
    q && translate(q as string);
  };
  const handleTargetLangChange = (lang: string) => {
    LS.setItem("target", lang);
    const q = queryClient.getQueryData(["sourceText"]);
    q && translate(q as string);
  };

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
