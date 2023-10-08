import React from "react";
import { Card, ButtonGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { BsFileEarmarkArrowUp } from "react-icons/bs";

const FormInputCard = ({
  cardStyles,
  listTitle,
  linesStyles,
  lines,
  duplicatesStyles,
  duplicates,
  toolTipStyles,
  headerBarClassName,
  textareaRows ,
  textareaStyles,
  readOnlyTextareaStyles,
  textAreaPlaceholder,
  buttonGroupStyles,
  linkOffBtn,
  joinLinesBtn,
  trimDuplicatesBtn,
  sortBtn,
  reverseOrderBtn,
  copyBtn,
  deleteBtn,
  moveBtn,
  fileInputStyles,
  lockScrolling,
  toggleQuotesBtn ,
  viewBtn ,
  
}) => {
  return (
    <Card className={cardStyles}>
      {/* <Form> */}
      <div className={headerBarClassName}>
        <h4 className="fs-5">{listTitle}</h4>
        <div className="ml-auto d-inline-flex gap-2">
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip className={toolTipStyles}>
                {" "}
                &nbsp; Duplicates &nbsp;{" "}
              </Tooltip>
            }
          >
            <span className={duplicatesStyles}>{duplicates}</span>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip className={toolTipStyles}> &nbsp; Lines &nbsp; </Tooltip>
            }
          >
            <span className={linesStyles}>{lines}</span>
          </OverlayTrigger>
        </div>
      </div>
      <Form.Group
        className="position-relative"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Control
          as="textarea"
          rows={textareaRows}
          className={textareaStyles}
          placeholder={textAreaPlaceholder}
        />

        <Form.Control
          readOnly
          as="textarea"
          rows="auto"
          className={readOnlyTextareaStyles}
          // placeholder="1"
          value="1"
        />
      </Form.Group>
      {/* </Form> */}
      <div className="d-flex p-2 footer-panel">
        <ButtonGroup aria-label="Basic example" className={buttonGroupStyles}>
          <div className="d-flex inline flex-nowrap gap-1">
            {moveBtn}
            <div className={fileInputStyles}>
              <OverlayTrigger
              placement="top"
                overlay={<Tooltip> &nbsp; Upload File &nbsp; </Tooltip>}
              >
                <Form.Group
                  controlId="formFile"
                  className="file-form-group rounded"
                >
                  <Form.Label
                    colum
                    id="file-input-label"
                    for="file-input"
                    className="w-100 h-100 p-0 text-center d-flex align-items-center justify-content-center rounded file-input-label"
                  >
                    <BsFileEarmarkArrowUp className=" fw-bold fs-5" />
                  </Form.Label>
                  <Form.Control
                    type="file"
                    id="file-input"
                    name="file-input"
                    className="d-none opacity-0"
                  />
                </Form.Group>
              </OverlayTrigger>
            </div>
            {lockScrolling}
          </div>

          <div className="d-inline-flex gap-1">
            {toggleQuotesBtn}
            {linkOffBtn}
            {joinLinesBtn}
            {trimDuplicatesBtn}
            {sortBtn}
            {reverseOrderBtn}
            {copyBtn}
            {deleteBtn}
            {viewBtn}
          </div>
        </ButtonGroup>
      </div>
    </Card>
  );
};

export default FormInputCard;
