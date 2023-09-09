import { useMutation, useQueryClient } from "@tanstack/react-query";
import LS from "../utils/localStorage";
import Api from "../lib/axios";

const useTranslate = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: translate } = useMutation({
    mutationFn: async (q: string) => {
      try {
        const { data } = await Api.post(
          "",
          {
            source: LS.getItem("source") || "en",
            target: LS.getItem("target") || "uk",
            q,
          }
        );

        const text = data.data.translations[0].translatedText as string

        
        queryClient.setQueryData(["translatedText"], text);

        return text;
      } catch (e) {
        console.error(e);
      }
    },
  });

  return { translate };
};

export default useTranslate;
