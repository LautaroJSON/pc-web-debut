import gugul from "../../../assets/icons/gugul.svg";
import imagen from "../../../assets/icons/imagen.svg";
import carpeta from "../../../assets/icons/carpeta.svg";
import corazon from "../../../assets/icons/corazon.svg";
import windows from "../../../assets/icons/windows.svg";
import papelera from "../../../assets/icons/papelera.svg";
import decoracion1 from "../../../assets/icons/decoracion1.svg";

export type TSvgName =
  | "carpeta"
  | "corazon"
  | "decoracion1"
  | "gugul"
  | "imagen"
  | "papelera"
  | "windows";

const icons: Record<TSvgName, string> = {
  carpeta,
  corazon,
  decoracion1,
  gugul,
  imagen,
  papelera,
  windows,
};

interface ISvgComponente {
  svgName: TSvgName;
  width?: string;
  className?: string;
}

const SvgComponente = ({
  svgName,
  className,
  width = "100px",
}: ISvgComponente) => {
  return (
    <img
      src={icons[svgName]}
      alt={svgName}
      width={width}
      height={width}
      className={className}
    />
  );
};

export default SvgComponente;
