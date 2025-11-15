import { useState } from "react";
import type { TSvgName } from "./Svg";
import Modal from "../modals";
import SvgComponente from "./Svg";
import { IconBox, IconContainer, Title } from "./styles";

interface IIcon {
  title?: string;
  icon: TSvgName;
  width?: string;
  haveModal?: boolean;
}

const Icon = ({
  title = "Lorem Ipsum",
  icon,
  width = "100px",
  haveModal = false,
}: IIcon) => {
  const [open, setOpen] = useState(false);

  const handleDoubleClick = () => {
    if (haveModal) {
      setOpen(true);
    }
  };

  return (
    <>
      <IconContainer onDoubleClick={handleDoubleClick} $Width={width}>
        <IconBox>
          <SvgComponente svgName={icon} width={width} />
        </IconBox>
        <Title>{title}</Title>
      </IconContainer>
      {open && haveModal && (
        <Modal title={title} onClose={() => setOpen(false)} />
      )}
    </>
  );
};

export default Icon;
