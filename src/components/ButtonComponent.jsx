import { Button } from "react-bootstrap";
import { MdLinkOff } from "react-icons/md";

const ButtonComponent = ({icon}) => {
  return (
    <Button variant="transparent bg-white p-1 btns rounded border">
      {icon}
    </Button>
  );
};

export default ButtonComponent;
