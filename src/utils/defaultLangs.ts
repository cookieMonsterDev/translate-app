import LS from "./localStorage";

export const defaultSourcelang = () => {
  const s = LS.getItem("source");

  if (!s) {
    LS.setItem("source", "en");
    return "en";
  }

  return JSON.parse(s);
};

export const defaultTargetlang = () => {
  const t = LS.getItem("target");

  if (!t) {
    LS.setItem("target", "uk");
    return "uk";
  }

  return JSON.parse(t);
};
