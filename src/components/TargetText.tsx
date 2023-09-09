import React from "react";

const TargetText = () => {
  return <textarea className="textarea bg-slate-100" rows={10} onChange={(e) => console.log(e.target.value)} readOnly></textarea>;
};

export default TargetText;
