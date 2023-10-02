import { Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const ButtonComponent = ({ styleClass, btnTip, icon, text, text2 }) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip className=""> &nbsp; {btnTip} &nbsp; </Tooltip>}
    >
      <Button
        variant="transparent p-1 btns rounded border"
        className={styleClass}
      >
        {text}
        {icon}
        {text2}
      </Button>
    </OverlayTrigger>
  );
};

export default ButtonComponent;
