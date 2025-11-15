import type { TSvgName } from "./Svg";
import SvgComponente from "./Svg";
import { IconBox, IconContainer, Title } from "./styles";

interface IIcon {
  title?: string;
  icon: TSvgName;
  width?: string;
}

const Icon = ({ title = "Lorem Ipsum", icon, width = "100px" }: IIcon) => {
  return (
    <>
      <IconContainer $Width={width}>
        <IconBox>
          <SvgComponente svgName={icon} width={width} />
        </IconBox>
        <Title>{title}</Title>
      </IconContainer>
    </>
  );
};

export default Icon;
