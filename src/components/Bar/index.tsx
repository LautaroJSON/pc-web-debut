import SvgComponente from "../Icons/Svg";
import { AppsContainer, BarContainer } from "./styles";

const Bar = () => {
  return (
    <BarContainer>
      <SvgComponente svgName="windows" className="winIcon" />
      <AppsContainer>
        <SvgComponente svgName="carpeta" className="appsClass" />
        <SvgComponente svgName="discawrd" className="appsClass" />
        <SvgComponente svgName="ai" className="appsClass" />
        <SvgComponente svgName="ps" className="appsClass" />
      </AppsContainer>
    </BarContainer>
  );
};

export default Bar;
