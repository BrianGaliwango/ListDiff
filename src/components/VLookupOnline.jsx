import React from "react";
import FormInputCard from "./FormInputCard";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import ButtonComponent from "./ButtonComponent";
import {
  MdPlaylistRemove,
  MdOutlineSort,
  MdContentCopy,
  MdChecklistRtl,
} from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
import { RiDeleteBin5Line, RiDoubleQuotesR } from "react-icons/ri";
import { CgLaptop } from "react-icons/cg";
import { columnExtract } from "./assets/images/image";

const ColumnExtractor = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center p-5  "
    >
      <Form className="">
        <Row className="d-md-flex gap-3 mb-5 ">
          <Col md={4} xs={12}>
            <FormInputCard
              cardStyles="blue-shades-border-color"
              headerBarClassName="w-100 d-inline-flex justify-content-between p-3 blue-shades-header-panel  "
              listTitle="VLookup Values"
              linesStyles="d-flex align-items-center justify-content-center rounded-pill fw-bold px-2 blue-shades-lines vLookup-line-styles "
              duplicatesStyles="d-flex align-items-center justify-content-center rounded-pill fw-bold px-2 blue-shades-duplicates vLookup-dup-styles"
              lines="Line: 0"
              duplicates="Dupe: 0"
              rowsColumnsStyles="d-none"
              readOnlyTextareaStyles="d-none"
              textareaRows="18"
              textAreaPlaceholder="ValueA &#10;ValueA1"
              textareaStyles="vLookup-values-textarea p-2"
              buttonGroupStyles="w-100 d-inline-flex justify-content-end d-flex p-2"
              fileInputStyles="d-none "
              columnsInputStyle="d-none"
              vLookCheckboxStyles="d-none"
              toggleQuotesBtn={
                <ButtonComponent
                  btnTip="Toggle Quotes"
                  icon={<RiDoubleQuotesR className="fs-4 " />}
                />
              }
              trimDuplicatesBtn={
                <ButtonComponent
                  btnTip="Trim Spaces & Duplicates"
                  icon={<MdPlaylistRemove className="fs-4 " />}
                />
              }
              sortBtn={
                <ButtonComponent
                  btnTip="Sort"
                  icon={<MdOutlineSort className="text-dark fs-4" />}
                />
              }
              reverseOrderBtn={
                <ButtonComponent
                  btnTip="Reverse Order"
                  icon={<LuArrowUpDown className="fs-5" />}
                />
              }
              copyBtn={
                <ButtonComponent
                  btnTip="Copy"
                  icon={<MdContentCopy className="fs-5" />}
                />
              }
              deleteBtn={
                <ButtonComponent
                  btnTip="Clear"
                  icon={<RiDeleteBin5Line className="fs-5" />}
                />
              }
            />
          </Col>

          <Col>
            <FormInputCard
              cardStyles="green-shades-border-color"
              headerBarClassName="w-100 d-inline-flex justify-content-between p-3 green-shades-header-panel"
              listTitle="Table Values"
              linesStyles="d-flex align-items-center justify-content-center rounded-pill fw-bold px-2 green-shades-lines vLookup-line-styles "
              duplicatesStyles="d-flex align-items-center justify-content-center rounded-pill fw-bold px-2 green-shades-duplicates vLookup-dup-styles "
              rowsColumnsStyles="d-flex align-items-center justify-content-center rounded-pill fw-bold px-2 green-shades-duplicates vLookup-dup-styles "
              lines="line: 0"
              duplicates="Dupe: 0"
              rowsColumns="0 x 0"
              readOnlyTextareaStyles="d-none"
              textareaRows="18"
              textAreaPlaceholder="ValueA , ValueB,...,ValueX &#10;ValueA1,ValueB1,...,ValueX1"
              textareaStyles="vLookup-values-textarea p-2"
              buttonGroupStyles="w-100 d-flex justify-content-between d-flex p-2 gap-2"
              fileInputStyles="d-none "
              addHeaderRowBtn={
                <ButtonComponent
                  btnTip="Add a Header Row"
                  text="H1"
                  btnbtnStyleClass="fw-bold"
                />
              }
              trimDuplicatesBtn={
                <ButtonComponent
                  btnTip="Trim Spaces & Duplicates"
                  icon={<MdPlaylistRemove className="fs-4 " />}
                />
              }
              copyBtn={
                <ButtonComponent
                  btnTip="Copy"
                  icon={<MdContentCopy className="fs-5" />}
                />
              }
              deleteBtn={
                <ButtonComponent
                  btnTip="Clear"
                  icon={<RiDeleteBin5Line className="fs-5" />}
                />
              }
            />
          </Col>
        </Row>

        <Row className="gap-5 mb-5">
          <Col className="d-flex justify-content-end ">
            <ButtonComponent
              text="VLookup!"
              btnStyleClass="vLookup-btn"
              toolTipStyles="d-none"
            />
          </Col>
          <Col className="d-flex justify-content-end gap-3 ">
            <ButtonComponent
              btnTip="Switch Desktop / Laptop View"
              toolTipStyles="tip-style"
              btnStyleClass="border border-dark fw-bold vLookup-view-btn p-0"
              icon={<CgLaptop className="fs-3" />}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <FormInputCard
              cardStyles="green-shades-border-color"
              headerBarClassName="w-100 d-inline-flex justify-content-between p-3 green-shades-header-panel"
              listTitle="Output"
              linesStyles="d-flex align-items-center justify-content-center rounded-pill fw-bold px-2 green-shades-lines vLookup-line-styles "
              duplicatesStyles="d-flex align-items-center justify-content-center rounded-pill fw-bold px-2 green-shades-duplicates vLookup-dup-styles "
              rowsColumnsStyles="d-flex align-items-center justify-content-center rounded-pill fw-bold px-2 green-shades-duplicates vLookup-dup-styles "
              lines="line: 0"
              duplicates="Dupe: 0"
              rowsColumns="0 x 0"
              readOnlyTextareaStyles="d-none"
              textareaRows="18"
              textareaStyles="vLookup-values-textarea p-2"
              buttonGroupStyles="w-100 d-flex justify-content-between d-flex p-2 gap-2"
              fileInputStyles="d-none "
              addHeaderRowBtn={
                <ButtonComponent
                  btnTip="Add a Header Row"
                  text="H1"
                  btnbtnStyleClass="fw-bold"
                />
              }
              trimDuplicatesBtn={
                <ButtonComponent
                  btnTip="Trim Spaces & Duplicates"
                  icon={<MdPlaylistRemove className="fs-4 " />}
                />
              }
              copyBtn={
                <ButtonComponent
                  btnTip="Copy"
                  icon={<MdContentCopy className="fs-5" />}
                />
              }
              deleteBtn={
                <ButtonComponent
                  btnTip="Clear"
                  icon={<RiDeleteBin5Line className="fs-5" />}
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
                  A complementary tool to the{" "}
                  <span className="text-blue">Column Alignment Tool</span> is
                  this column extraction utility.
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
                  The behavior is similar to the Unix{" "}
                  <span className="text-blue">Cut</span> commandline function.
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
