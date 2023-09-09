import { useQuery } from "@tanstack/react-query";
import Languages from "../types/languages";
import Api from "../lib/axios";

type ApiRes = { language: string };

type Language = { isoCode: string; langName: string };

const useLanguages = () => {
  const { data: languages, isLoading } = useQuery({
    queryFn: async () => {
      try {
        const res = await Api.get("languages");

        const data = res.data.data.languages as ApiRes[];

        const mappedData: Language[] = data.map((e) => {
          const code = e.language;

          return {
            isoCode: code,
            langName: Languages[code]|| "something",
          } satisfies Language;
        });

        return mappedData;
      } catch (e) {
        console.error(e);
      }
    },
    queryKey: ["languages"],
    enabled: true
  });

  return { languages, isLoading };
};

export default useLanguages;
