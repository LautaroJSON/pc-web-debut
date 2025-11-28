import gugul from "../../../assets/icons/gugul.svg";
import imagen from "../../../assets/icons/imagen.svg";
import carpeta from "../../../assets/icons/carpeta.svg";
import corazon from "../../../assets/icons/corazon.svg";
import windows from "../../../assets/icons/windows.svg";
import papelera from "../../../assets/icons/papelera.svg";
import decoracion1 from "../../../assets/icons/decoracion1.svg";
import ai from "../../../assets/icons/ai.svg";
import ps from "../../../assets/icons/ps.svg";
import pr from "../../../assets/icons/pr.svg";
import winrawr from "../../../assets/icons/winrawr.svg";
import zteam from "../../../assets/icons/zteam.svg";
import discawrd from "../../../assets/icons/discawrd.svg";
import tomblr from "../../../assets/icons/tomblr.svg";

export type TSvgName =
  | "carpeta"
  | "corazon"
  | "decoracion1"
  | "gugul"
  | "imagen"
  | "papelera"
  | "ai"
  | "ps"
  | "pr"
  | "winrawr"
  | "zteam"
  | "discawrd"
  | "tomblr"
  | "windows";

const icons: Record<TSvgName, string> = {
  carpeta,
  corazon,
  decoracion1,
  gugul,
  imagen,
  papelera,
  ai,
  ps,
  pr,
  winrawr,
  zteam,
  discawrd,
  tomblr,
  windows,
};

interface ISvgComponente {
  svgName: TSvgName;
  width?: string;
  height?: string;
  className?: string;
  onMouseMove?: (e: React.MouseEvent) => void;
}

const SvgComponente = ({
  svgName,
  className,
  width = "100px",
  height = "100px",
  onMouseMove,
}: ISvgComponente) => {
  return (
    <img
      src={icons[svgName]}
      alt={svgName}
      width={width}
      height={height}
      className={className}
      onMouseMove={onMouseMove}
    />
  );
};

export default SvgComponente;
