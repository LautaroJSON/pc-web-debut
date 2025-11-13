import { useState } from "react";
import styles from "./icon.module.css";
import Modal from "../modals";
import type { TSvgName } from "./Svg";
import SvgComponente from "./Svg";

interface IIcon {
  title?: string;
  icon: TSvgName;
}

const Icon = ({ title = "Lorem Ipsum", icon }: IIcon) => {
  const [open, setOpen] = useState(false);

  const handleDoubleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <div className={styles.iconContainer} onDoubleClick={handleDoubleClick}>
        <div className={styles.iconBox}>
          <SvgComponente svgName={icon} />
        </div>
        <div className={styles.title}>{title}</div>
      </div>
      {open && <Modal title={title} onClose={() => setOpen(false)} />}
    </>
  );
};

export default Icon;
