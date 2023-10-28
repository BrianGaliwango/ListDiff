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
import { columnExtract } from "./assets/images/image";

const ColumnExtractor = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center main-content-container "
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
              buttonGroupStyles="w-100 d-inline-flex justify-content-between flex-wrap p-2"
              fileInputStyles="d-none "
              trimDuplicatesBtn={
                <ButtonComponent
                  btnTip="Trim Spaces & Duplicates"
                  icon={<MdPlaylistRemove className="fs-4 " />}
                  btnStyleClass="fs-6 btns"
                />
              }
              sortBtn={
                <ButtonComponent
                  btnTip="Sort"
                  icon={<MdOutlineSort className="text-dark fs-4" />}
                  btnStyleClass="fs-6 btns"
                />
              }
              reverseOrderBtn={
                <ButtonComponent
                  btnTip="Reverse Order"
                  icon={<LuArrowUpDown className="fs-5" />}
                  btnStyleClass="fs-6 btns"
                />
              }
              copyBtn={
                <ButtonComponent
                  btnTip="Copy"
                  icon={<MdContentCopy className="fs-5" />}
                  btnStyleClass="fs-6 btns"
                />
              }
              deleteBtn={
                <ButtonComponent
                  btnTip="Clear"
                  icon={<RiDeleteBin5Line className="fs-5" />}
                  btnStyleClass="fs-6 btns"
                />
              }
            />
          </Col>
          <Col xs={12} className="d-flex text-columnizer-options-wrapper">
            <div className="d-flex justify-content-center flex-wrap rounded-3 mb-3 gap-4 text-columnizer-btn-wrapper">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>&nbsp;Input delimited by...&nbsp;</Tooltip>}
              >
                <select className="p-2 px-4 border rounded-2 text-columnizer-select">
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
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>&nbsp;Filter For columns&nbsp;</Tooltip>}
              >
                <Form.Control
                  placeholder="Columns to extract"
                  className="p-2 px-4 border rounded-2 column-extractor-control"
                />
              </OverlayTrigger>

              <ButtonComponent
                text="Extract"
                styleClass="compare-text-btn text-light "
                btnTip="Extract Columns"
              />
            </div>

            <div className="gap-3 mb-2 pe-3 text-columnizer-checkbox-wrapper">
              <Form.Check
                type="radio"
                label="2x Spacers"
                className="d-inline-flex align-items-center gap-2 flex-nowrap"
                checked
              />
              <Form.Check
                type="radio"
                label="Delimiter "
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
              buttonGroupStyles="w-100 d-flex justify-content-between flex-wrap p-2 gap-2"
              fileInputStyles="d-none "
              trimDuplicatesBtn={
                <ButtonComponent
                  btnTip="Trim Spaces & Duplicates"
                  icon={<MdPlaylistRemove className="fs-4 " />}
                  btnStyleClass="fs-6 btns"
                />
              }
              sortBtn={
                <ButtonComponent
                  btnTip="Sort"
                  icon={<MdOutlineSort className="text-dark fs-4" />}
                  btnStyleClass="fs-6 btns"
                />
              }
              reverseOrderBtn={
                <ButtonComponent
                  btnTip="Reverse Order"
                  icon={<LuArrowUpDown className="fs-5" />}
                  btnStyleClass="fs-6 btns"
                />
              }
              copyBtn={
                <ButtonComponent
                  btnTip="Copy"
                  icon={<MdContentCopy className="fs-5" />}
                  btnStyleClass="fs-6 btns"
                />
              }
              deleteBtn={
                <ButtonComponent
                  btnTip="Clear"
                  icon={<RiDeleteBin5Line className="fs-5" />}
                  btnStyleClass="fs-6 btns"
                />
              }
            />
          </Col>
        </Row>

        <Row className="pt-5">
          <h2 className="mb-4">
            Extract Columns From CSV Text & Tabulated Data
          </h2>
          <Col className="">
            <Card className="border-0 mb-4 d-flex ps-5 ">
              <ul className="mb-3 text-list text-start">
                <li className="">
                  A complementary tool to the <span className="text-blue">Column Alignment Tool</span> is this
                  column extraction utility.
                </li>
                <li>
                  Like the Columnizer Tool, you can now extract just the columns
                  you want from a list of comma separated dataset or CSV-like
                  data.
                </li>
                <li>
                  Specify the delimiter being used to delimit your dataset; then
                  list the columns you want to extract and let the tool extract
                  those values.
                </li>
                <li>
                  The behavior is similar to the Unix <span className="text-blue">Cut</span> commandline function.
                </li>
                <li>
                  You can reorder the extraction output by specifying the column
                  order.
                </li>
                <li>
                  You can also retain the original delimiter or leave the
                  default double spaced delimiter in the output
                </li>
                <br />
                <br />
                <Card className="w-100 d-flex align-items-center justify-content-center border-0">
                  <Card.Img
                    variant="bottom"
                    src={columnExtract}
                    className="w-75"
                  />
                </Card>
                <br />
                <br />
              </ul>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ColumnExtractor;
