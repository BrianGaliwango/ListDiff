import React from "react";
import FormInputCard from "./FormInputCard";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  OverlayTrigger,
} from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import ButtonComponent from "./ButtonComponent";
import { MdPlaylistRemove, MdOutlineSort, MdContentCopy } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";
import { columnAligned, columnAlignedAb } from "./assets/images/image";

const textColumnizer = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center p-5  "
    >
      <Form className="">
        <Row className="d-md-flex gap-3 mb-5 ">
          <Col xs={12}>
            <FormInputCard
              cardStyles="blue-shades-border-color"
              headerBarClassName="w-100 d-inline-flex justify-content-between p-3 blue-shades-header-panel  "
              listTitle="Input A"
              linesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold fs-4 px-2 py-1 blue-shades-lines "
              duplicatesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold fs-4 px-2 py-1 blue-shades-duplicates"
              lines="0"
              duplicates="0"
              readOnlyTextareaStyles="d-none"
              textareaRows="14"
              textareaStyles="csv-textarea"
              buttonGroupStyles="w-100 d-inline-flex justify-content-end d-flex p-2"
              fileInputStyles="d-none "
              columnsInputStyle="d-none"
              vLookCheckboxStyles="d-none"
              vLookupColumnsInputStyle="d-none"
              trimDuplicatesBtn={
                <ButtonComponent
                  btnTip="Trim Spaces & Duplicates"
                  toolTipStyles="tip-style2 rounded"
                  btnStyleClass="btns"
                  icon={<MdPlaylistRemove className="fs-4 " />}
                />
              }
              sortBtn={
                <ButtonComponent
                  btnTip="Sort"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns"
                  icon={<MdOutlineSort className="text-dark fs-4" />}
                />
              }
              reverseOrderBtn={
                <ButtonComponent
                  btnTip="Reverse Order"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns"
                  icon={<LuArrowUpDown className="fs-5" />}
                />
              }
              copyBtn={
                <ButtonComponent
                  btnTip="Copy"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns"
                  icon={<MdContentCopy className="fs-5" />}
                />
              }
              deleteBtn={
                <ButtonComponent
                  btnTip="Clear"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns"
                  icon={<RiDeleteBin5Line className="fs-5" />}
                />
              }
            />
          </Col>
          <Col xs={12} className="d-flex text-columnizer-options-wrapper">
            <div className="d-flex justify-content-center rounded-3 mb-3 gap-4 text-columnizer-btn-wrapper">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>&nbsp;Input delimited by...&nbsp;</Tooltip>}
              >
                <select className="p-2 px-4 border rounded-2 text-columnizer-select ">
                  <option value="T" className=" p-1">
                    Tab
                  </option>
                  <option value="," className=" p-1" selected>
                    ,
                  </option>
                  <option value=" " className=" p-1">
                    Space
                  </option>
                  <option value=";" className=" p-1">
                    ;
                  </option>
                  <option value=":" className=" p-1">
                    :
                  </option>
                  <option value="|" className=" p-1">
                    |
                  </option>
                  <option value="=" className=" p-1">
                    =
                  </option>
                  <option value="\" className=" p-1">
                    \
                  </option>
                  <option value="/" className=" p-1">
                    /
                  </option>
                  <option value="^" className=" p-1">
                    ^
                  </option>
                  <option value=">" className="text-center p-1">
                    &gt;
                  </option>
                  <option value="<" className="text-center p-1">
                    &lt;
                  </option>
                  <option value="-" className="text-center p-1">
                    -
                  </option>
                  <option value="+" className="text-center p-1">
                    +
                  </option>
                  <option value="&" className="text-center p-1">
                    &
                  </option>
                  <option value="$" className="text-center p-1">
                    $
                  </option>
                  <option value="#" className="text-center p-1">
                    #
                  </option>
                  <option value="%" className="text-center p-1">
                    %
                  </option>
                  <option value="@" className="text-center p-1">
                    @
                  </option>
                  <option value="?" className="text-center p-1">
                    ?
                  </option>
                </select>
              </OverlayTrigger>

              <ButtonComponent
                text="Columnize"
                styleClass="compare-text-btn text-light "
                btnTip="Align Input"
              />
            </div>

            <div className="gap-3 mb-2 pe-3 text-columnizer-checkbox-wrapper">
              <Form.Check
                type="checkbox"
                label="2x Spacers"
                className="d-inline-flex align-items-center gap-2 flex-nowrap"
                checked
              />
              <Form.Check
                type="checkbox"
                label="Include Delimiter "
                className="d-inline-flex align-items-center gap-2"
              />
              <Form.Check
                type="checkbox"
                label="Right Justify
                "
                className="d-inline-flex align-items-center gap-2"
              />
            </div>
          </Col>
          <Col xs={12}>
            <FormInputCard
              cardStyles="green-shades-border-color"
              headerBarClassName="w-100 d-inline-flex justify-content-between p-3 green-shades-header-panel"
              listTitle="Output B"
              linesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold fs-4 px-2 py-1 green-shades-lines "
              duplicatesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold fs-4 px-2 py-1 green-shades-duplicates "
              lines="0"
              duplicates="0"
              readOnlyTextareaStyles="d-none"
              textareaRows="14"
              textareaStyles="csv-textarea"
              buttonGroupStyles="w-100 d-flex justify-content-between d-flex p-2 gap-2"
              fileInputStyles="d-none "
              columnsInputStyle="d-none"
              vLookCheckboxStyles="d-none"
              vLookupColumnsInputStyle="d-none"
              trimDuplicatesBtn={
                <ButtonComponent
                  btnTip="Trim Spaces & Duplicates"
                  toolTipStyles="tip-style2 rounded"
                  btnStyleClass="btns"
                  icon={<MdPlaylistRemove className="fs-4 " />}
                />
              }
              sortBtn={
                <ButtonComponent
                  btnTip="Sort"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns"
                  icon={<MdOutlineSort className="text-dark fs-4" />}
                />
              }
              reverseOrderBtn={
                <ButtonComponent
                  btnTip="Reverse Order"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns"
                  icon={<LuArrowUpDown className="fs-5" />}
                />
              }
              copyBtn={
                <ButtonComponent
                  btnTip="Copy"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns"
                  icon={<MdContentCopy className="fs-5" />}
                />
              }
              deleteBtn={
                <ButtonComponent
                  btnTip="Clear"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns"
                  icon={<RiDeleteBin5Line className="fs-5" />}
                />
              }
            />
          </Col>
        </Row>

        <Row className="pt-5">
          <h2 className="mb-4">
            Columnizer - Align Text Columns & Format String Alignments
          </h2>
          <Col className="ps-5">
            <Card className="border-0 mb-4 d-flex flex-column ">
              <ul className="mb-3 text-list text-start">
                <li className="">
                  Many times when you cut and paste values from Excel or any
                  spreadsheets into text, the alignments always inherently goes
                  wrong.
                </li>
                <li>
                  With the Text to Column Alignment Tool (i.e. Text Columnizer),
                  you can quickly fix mis-alignments so the data become readable
                  again in neat columns
                </li>
                <li>
                  Like the{" "}
                  <span className="text-blue">
                    {" "}
                    List Comparison Tool, Text Fixer{" "}
                  </span>{" "}
                  and <span className="text-blue"> CSV Delimiter Tool</span>
                  , aligning columns of data can be frustratingly tedious
                  but highly useful
                </li>
                <li>
                  Whether you want to fix a Cut & Paste string formatting issue
                  or convert CSV driven data to tabulated columns. This simple
                  utility will certainly be helpful.
                </li>
                <br />
                <br />
                <Card className="w-100 d-flex align-items-center justify-content-center border-0">
                  <Card.Img
                    variant="bottom"
                    src={columnAligned}
                    className="w-75"
                  />
                </Card>
                <br />
                <br />
                <li>
                  There are a few options which you can use as part of this tool
                  <br />
                  <br />
                  <ul className="ps-5">
                    <li>
                      Select the Separation delimiter of your data, this is
                      usually TABS or CSV, but could be one of the many other
                      common delimiter symbol
                    </li>
                    <li>
                      Data will be divided into column based on the Separator
                      Character
                    </li>
                    <li>
                      The tool will calculate the number of spaces required and
                      align each column to fit your data
                    </li>
                    <li>
                      You can change the alignment justification of the output
                      with the Left or <b>Right Justify</b> checkbox
                    </li>
                    <li>
                      By default, the output has a 2 spacing separated between
                      each column. You can switch that back to just one by
                      unchecking the <b>2x Spacer</b> box
                    </li>
                    <li>
                      There are cases where you may want to keep the separate
                      character in the output for further formatting etc. Just
                      check the <b>Include Delimiter</b> box.
                    </li>
                  </ul>
                  <br />
                  <Card className="d-flex flex-column align-items-center justify-content-center border-0">
                    <Card.Img
                      src={columnAlignedAb}
                      className=" text-columnizer-img "
                    />
                  </Card>
                </li>
                <br />
                <br />
                <li>
                  This formatting tool will not only make your text and
                  string-based tables more readable, but help present your data
                  in a grid-like form without special layouts
                </li>
                <li>Hopefully you will find it useful!</li>
                <li>
                  NOTE: Certain results may not format well if you have long
                  sentence-like data, wrapped text, rogue or inline delimiters,
                  or badly formatted text
                </li>
              </ul>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default textColumnizer;
