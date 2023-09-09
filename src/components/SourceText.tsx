import { useQueryClient } from "@tanstack/react-query";
import useTranslate from "../hooks/useTranslate";
import { debounce } from "../utils/debounce";

const SourceText = () => {
  const queryClient = useQueryClient();
  const { translate } = useTranslate();

  const handleChange = debounce(async (val: string) => {
    if (!val) return;

    queryClient.setQueryData(["sourceText"], val);
    await translate(val);
  }, 700);

  return (
    <textarea
      id="sourceText"
      className="textarea"
      placeholder="Type text."
      rows={10}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default SourceText;
