import { Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import PropTypes from "prop-types";

const ButtonComponent = ({
  btnStyleClass,
  onClick ,
  btnTip,
  icon,
  text,
  text2,
  toolTipStyles,
}) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip className={toolTipStyles}>{btnTip}</Tooltip>
      }
    >
      <Button
        variant="border rounded-1 text-center"
        className={btnStyleClass}
        onClick={onClick}
      >
        {text}
        {icon}
        {text2}
      </Button>
    </OverlayTrigger>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default ButtonComponent;
