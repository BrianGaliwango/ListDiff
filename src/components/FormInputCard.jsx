import React from "react";
import { Card, ButtonGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const FormInputCard = ({
  listTitle,
  lines,
  duplicates,
  headerBarClassName,
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
          {moveBtn}
          {linkOffBtn}
          {joinLinesBtn}
          {trimDuplicatesBtn}
          {sortBtn}
          {reverseOrderBtn}
          {copyBtn}
          {deleteBtn}
        </ButtonGroup>
      </div>
    </Card>
  );
};

export default FormInputCard;
