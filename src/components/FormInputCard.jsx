import React from "react";
import { Card, ButtonGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const FormInputCard = ({
  listTitle,
  linesStyles,
  lines,
  duplicatesStyles,
  duplicates,
  headerBarClassName,
  buttonGroupStyles,
  linkOffBtn,
  joinLinesBtn,
  trimDuplicatesBtn,
  sortBtn,
  reverseOrderBtn,
  copyBtn,
  deleteBtn,
  moveBtn,
}) => {
  return (
    <Card>
      {/* <Form> */}
      <div className={headerBarClassName}>
        <h4 className="fs-5">{listTitle}</h4>
        <div className="ml-auto d-inline-flex gap-2">
          <span className={linesStyles}>{lines}</span>
          <span className={duplicatesStyles}>{duplicates}</span>
        </div>
      </div>
      <Form.Group className="" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={16} className="p-2" />
      </Form.Group>
      {/* </Form> */}
      <div className="d-flex p-2 footer-panel">
        <ButtonGroup aria-label="Basic example" className={buttonGroupStyles}>
          <div>{moveBtn}</div>

          <div className="d-inline-flex gap-2">
            {linkOffBtn}
            {joinLinesBtn}
            {trimDuplicatesBtn}
            {sortBtn}
            {reverseOrderBtn}
            {copyBtn}
            {deleteBtn}
          </div>
        </ButtonGroup>
      </div>
    </Card>
  );
};

export default FormInputCard;
