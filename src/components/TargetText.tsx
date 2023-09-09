import { useQuery, useQueryClient } from "@tanstack/react-query";

const TargetText = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery(
    ['translatedText'],
    () => queryClient.getQueryData(['translatedText']),
  );

  return (
    <textarea
      id="targetText"
      className="textarea bg-slate-100"
      placeholder="Translation"
      rows={10}
      readOnly
      value={data as string}
    ></textarea>
  );
};

export default TargetText;
