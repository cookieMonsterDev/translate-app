import { useQuery } from "@tanstack/react-query";
import Api from "../lib/axios";

type ApiRes = { language: string };

type Language = { code: string; name: string };

const useLanguages = () => {
  const { data: languages, isLoading } = useQuery({
    queryFn: async () => {
      try {
        const res = await Api.get("languages");

        const data = res.data as ApiRes;
        // const res = data.map(e => e)

        return data as Language[];
      } catch (e) {
        console.error(e);
      }
    },
    queryKey: ["languages"],
  });

  return { languages, isLoading };
};

export default useLanguages;
