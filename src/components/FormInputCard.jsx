import React from "react";
import { Card, ButtonGroup, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ButtonComponent from "./ButtonComponent";
import {
  MdLinkOff,
  MdPlaylistRemove,
  MdLink,
  MdOutlineSort,
  MdContentCopy,
} from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";

const FormInputCard = ({
  listTitle,
  lines,
  duplicates,
  headerBarClassName,
}) => {
  return (
    <Card style={{ width: "28rem" }}>
      <Form>
        <h4 className={headerBarClassName}>
          <Form.Label className="">{listTitle}</Form.Label>
          <div className="ml-auto d-inline-flex gap-2">
            <span className="bg-secondary px-2 rounded text-light">
              {lines}
            </span>
            <span className="bg-secondary px-2 rounded text-light">
              {duplicates}
            </span>
          </div>
        </h4>
        <Form.Group className="" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={16} className="p-2" />
        </Form.Group>
      </Form>
      <div className="d-flex justify-content-end bg-body-tertiary p-2">
        <ButtonGroup aria-label="Basic example" className="gap-2 d-flex p-2">
          <ButtonComponent icon={<MdLinkOff className="fs-2 " />} />
          <ButtonComponent icon={<MdLink className="fs-2" />} />
          <ButtonComponent icon={<MdPlaylistRemove className="fs-2" />} />
          <ButtonComponent
            icon={<MdOutlineSort className="text-dark fs-2" />}
          />
          <ButtonComponent icon={<LuArrowUpDown className="fs-4" />} />
          <ButtonComponent icon={<MdContentCopy className="fs-2" />} />
          <ButtonComponent icon={<RiDeleteBin5Line className="fs-2" />} />
        </ButtonGroup>
      </div>
    </Card>
  );
};

export default FormInputCard;
