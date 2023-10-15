import React, { useState } from "react";
import { Card, ButtonGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { BsFileEarmarkArrowUp } from "react-icons/bs";

const FormInputCard = ({
  cardStyles,
  headerBarClassName,
  listTitle,
  linesStyles,
  lines,
  rowsColumns,
  rowsColumnsStyles,
  duplicatesStyles,
  duplicates,
  toolTipStyles,
  textareaRows,
  textareaStyles,
  readOnlyAttr ,
  readOnlyTextareaStyles,
  textAreaPlaceholder,
  buttonGroupStyles,
  addHeaderRowBtn,
  linkOffBtn,
  joinLinesBtn,
  trimDuplicatesBtn,
  sortBtn,
  reverseOrderBtn,
  saveAsBtn,
  copyBtn,
  deleteBtn,
  moveBtn,
  fileInputStyles,
  lockScrolling,
  columnsInputStyle,
  vLookupColumnsInputStyle,
  vLookCheckboxStyles,
  undoBtn,
  addIndexBtn,
  numberedLinesBtn,
  bulletedLines,
  alignAsColumnsBtn,
  toggleCaseBtn,
  toggleQuotesBtn,
  viewBtn,
  data,
  onChange,
  checkedOnChange,
  selectOnChange
}) => {
  return (
    <Card className={cardStyles}>
      {/* <Form> */}
      <div className={headerBarClassName}>
        <h4 className="card-title">{listTitle}</h4>
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
              <Tooltip className={toolTipStyles}>&nbsp; Lines &nbsp; </Tooltip>
            }
          >
            <span className={linesStyles}>{lines}</span>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip className={toolTipStyles}>
                {" "}
                &nbsp; Rows x Columns &nbsp;{" "}
              </Tooltip>
            }
          >
            <span className={rowsColumnsStyles}>{rowsColumns}</span>
          </OverlayTrigger>
        </div>
      </div>
      <Form.Group
        className="position-relative"
      >
        <Form.Control
          readOnly={readOnlyAttr}
          as="textarea"
          rows={textareaRows}
          className={textareaStyles}
          placeholder={textAreaPlaceholder}
          value={data}
          onChange={onChange}
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
                overlay={
                  <Tooltip className="tip-style rounded">
                    {" "}
                    &nbsp; Upload File &nbsp;{" "}
                  </Tooltip>
                }
              >
                <Form.Group
                  className="file-form-group rounded"
                >
                  <Form.Label
                    id="file-input-label"
                    htmlFor="file-input"
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
            <div className={columnsInputStyle}>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip className="tip-style2 rounded">
                    What is your Column separator?
                  </Tooltip>
                }
              >
                <Form.Group
                  className="d-inline-flex rounded gap-2 h-100"
                >
                  <Form.Label className="d-flex align-items-center text-center h-75 vLookup-select-label">
                    Delimiter:
                  </Form.Label>
                  <Form.Select value={data} onChange={selectOnChange} className="vLookup-select h-75 px-2 ">
                    <option value="," >
                      ,
                    </option>
                    <option value="tab">Tab</option>
                    <option value="S">Space</option>
                    <option value=":">:</option>
                    <option value=";">;</option>
                    <option value="|">|</option>
                    <option value="^">^</option>
                    <option value="-">-</option>
                    <option value="=">=</option>
                  </Form.Select>
                </Form.Group>
              </OverlayTrigger>
            </div>
            <div className={vLookupColumnsInputStyle}>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip className="tip-style2 rounded ">
                    Columns wanted e.g. 2 3
                  </Tooltip>
                }
              >
                <Form.Group className="rounded h-100">
                  <Form.Control
                    type="text"
                    placeholder="Columns wanted"
                    className="h-75 px-3 vLookup-input"
                  />
                </Form.Group>
              </OverlayTrigger>
            </div>
            <div className={vLookCheckboxStyles}>
              <Form.Check
                type="checkbox"
                label="Match Exact"
                className="d-inline-flex align-items-center gap-2 text-center h-75 vLookup-checkbox "
                onChange={checkedOnChange}
              />
            </div>
            {lockScrolling}
            {undoBtn}
            {toggleCaseBtn}
            {addIndexBtn}
            {numberedLinesBtn}
            {bulletedLines}
            {alignAsColumnsBtn}
          </div>

          <div className="d-inline-flex gap-1">
            {toggleQuotesBtn}
            {linkOffBtn}
            {joinLinesBtn}
            {addHeaderRowBtn}
            {trimDuplicatesBtn}
            {sortBtn}
            {reverseOrderBtn}
            {saveAsBtn}
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
