import React from "react";
import FormInputCard from "./FormInputCard";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import ButtonComponent from "./ButtonComponent";
import {
  MdLinkOff,
  MdPlaylistRemove,
  MdOutlineSort,
  MdContentCopy,
} from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
import { RiDeleteBin5Line, RiDoubleQuotesR } from "react-icons/ri";
import { BsArrowLeft, BsLaptop } from "react-icons/bs";
import { splitImage, joinImage } from "./assets/images/image";

const CSVSplitter = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center p-5  "
    >
      <Form className="">
        <Row className="d-md-flex gap-3 mb-5 ">
          <Col>
            <FormInputCard
              cardStyles="blue-shades-border-color"
              headerBarClassName="w-100 d-inline-flex justify-content-between p-3 blue-shades-header-panel  "
              listTitle="Input A"
              linesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold fs-4 px-2 py-1 blue-shades-lines "
              duplicatesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold fs-4 px-2 py-1 blue-shades-duplicates"
              lines="0"
              duplicates="0"
              readOnlyTextareaStyles="d-none"
              textareaRows="25"
              textareaStyles="csv-textarea"
              buttonGroupStyles="w-100 d-inline-flex justify-content-end d-flex p-2"
              fileInputStyles="d-none "
              toggleQuotesBtn={
                <ButtonComponent
                  btnTip="Toggle Quotes"
                  icon={<RiDoubleQuotesR className="fs-4 " />}
                />
              }
              linkOffBtn={
                <ButtonComponent
                  btnTip="Split CSV Lines On , : ; "
                  icon={<MdLinkOff className="fs-4 " />}
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
          <Col
            md={2}
            sm={12}
            className="split-csv-options-wrapper d-flex flex-column align-items-stretch"
          >
            <div>
              <h4 className="text-center">Split / Join</h4>
            </div>
            <div className="d-flex align-items-center justify-content-center rounded-0 border border-dark mb-3 p-0 ">
              <select className="w-100 p-2 px-3 rounded-0 border-0 " size="9">
                <option value="," className="text-center p-1" selected>
                  ,
                </option>
                <option value=";" className="text-center p-1">
                  ;
                </option>
                <option value=":" className="text-center p-1">
                  :
                </option>
                <option value="|" className="text-center p-1">
                  |
                </option>
                <option value="/" className="text-center p-1">
                  /
                </option>
                <option value="\" className="text-center p-1">
                  \
                </option>
                <option value="^" className="text-center p-1">
                  ^
                </option>
                <option value="T" className="text-center p-1">
                  Tab
                </option>
                <option value="S" className="text-center p-1">
                  Space
                </option>
              </select>
            </div>

            <div className="d-flex flex-column mb-2">
              <Form.Check
                type="checkbox"
                label="Split All Inputs"
                className="d-inline-flex align-items-center gap-2"
              />
            </div>
            <div className="d-flex align-items-center justify-content-center rounded-0 border border-dark mb-3">
              <select className="w-100  p-2 px-3 rounded-0 border-0 " size="7">
                <option value="no" className="text-center p-1" selected>
                  No Items Quotes
                </option>
                <option value="sq" className="text-center p-1">
                  'x'
                </option>
                <option value="dq" className="text-center p-1">
                  "x"
                </option>
                <option value="br" className="text-center p-1">
                  (x)
                </option>
                <option value="sb" className="text-center p-1">
                  [x]
                </option>
                <option value="sb" className="text-center p-1">
                  {" "}
                  &#123;x&#125;{" "}
                </option>
                <option value="ab" className="text-center p-1">
                  {" "}
                  &lt;x&gt;{" "}
                </option>
              </select>
            </div>

            <div className="d-flex align-items-center justify-content-center rounded-0 border border-dark mb-3">
              <select className=" w-100 p-2 px-3 rounded-0 border-0 " size="7">
                <option value="no" className="text-center p-1" selected>
                  No End Quotes
                </option>
                <option value="sq" className="text-center p-1">
                  '...'
                </option>
                <option value="dq" className="text-center p-1">
                  "..."
                </option>
                <option value="br" className="text-center p-1">
                  (...)
                </option>
                <option value="sb" className="text-center p-1">
                  [...]
                </option>
                <option value="sb" className="text-center p-1">
                  &#123;...&#125;
                </option>
                <option value="sb" className="text-center p-1">
                  &lt;...&gt;{" "}
                </option>
              </select>
            </div>
          </Col>
          <Col>
            <FormInputCard
              cardStyles="green-shades-border-color"
              headerBarClassName="w-100 d-inline-flex justify-content-between p-3 green-shades-header-panel"
              listTitle="Output B"
              linesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold fs-4 px-2 py-1 green-shades-lines "
              duplicatesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold fs-4 px-2 py-1 green-shades-duplicates "
              lines="0"
              duplicates="0"
              readOnlyTextareaStyles="d-none"
              textareaRows="25"
              textareaStyles="csv-textarea"
              buttonGroupStyles="w-100 d-flex justify-content-between d-flex p-2 gap-2"
              fileInputStyles="d-none "
              moveBtn={
                <ButtonComponent
                  btnTip="Move B To A"
                  styleClass="fs-6 move-btn"
                  text="A "
                  icon={<BsArrowLeft className="mb-3 fw-bold fs-5" />}
                  text2=" B"
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
              viewBtn={
                <ButtonComponent
                  btnTip="Switch Desktop / Laptop View"
                  icon={<BsLaptop className="fs-4 fw-bolder" />}
                  styleClass="p-0 "
                />
              }
            />
          </Col>
        </Row>

        <Row className="mb-4 pt-5">
          <h2 className="mb-4">Text & CSV Splitting Tool</h2>
          <Col className="ps-4">
            <div className="mb-4">
              <p>
                If you are a programmer or ever work with Excel spreadsheets or
                SQL databases, you will indoubtedly have dealt with Comma
                Separated Value (CSV) data Formatting and preparing data from
                one format to another is a tedious exercise and eat up value
                time. <b>With the Comma Separation & Delimiter Tool</b>, you can
                speed up this process tremendously and save hours of your time.
                It is as simple as entering your data into input box A, with the
                delimited results shown in{" "}
                <em className="text-dark">output box B!</em>
              </p>
            </div>
            <Card className="border-0 mb-4 d-flex flex-column align-items-center justify-content-center">
              <Card.Body className="">
                <Card.Title className="mb-4 fs-2">
                  SPLITTING CSV Lines
                </Card.Title>
                <Card.Text className="mb-3">
                  <u className=""> If your input data is on one line</u>, it
                  will assume that you are trying to SPLIT the data based on the
                  selected delimiter. The delimiter does not necessary need to
                  be comma values, but can be any one of the most common
                  delimiters.
                </Card.Text>
                <ul className="mb-3 ps-5 text-list2">
                  <li>
                    e.g. Commas (,), semi-colons (;), colons (:), forward (\)
                    and back (/) slashes, vertical bar (|), caret (^), and space
                    character
                  </li>
                </ul>
              </Card.Body>
              <Card.Img variant="bottom" src={splitImage} className="w-75" />
            </Card>
            <br />
            <br />
            <Card className="d-flex flex-column align-items-center justify-content-center border-0">
              <Card.Body className="">
                <Card.Title className="mb-4 fs-2">JOINING CSV Lines</Card.Title>
                <Card.Text className="mb-3">
                  <u className="">If your input data is 2 or more lines</u>, it
                  will assume a <b>JOIN</b> operation is required and will join
                  your lines together with the delimiter chosen. You can force
                  it to SPLIT multiple lines with the <b>Split All Inputs</b>{" "}
                  checkbox.
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={joinImage} className="w-75" />
              <br />
              <br />
              <div>
              <span>
                There are a few other functionalities you can use as part of
                this tool
              </span>
              <ul className="mb-3 ps-5 text-list2 ">
                <li>
                  Wrap individual items in one of the many available quote
                  characters e.g. '1010','0101','4321'
                  <br />
                  <br />
                  <ul className="ps-5 text-list3">
                    <li>
                      Single quotes ('), double quotes ("), and all types of
                      brackets ()[]&lt;&gt;&#123;&#125;
                    </li>
                  </ul>
                  <br />
                </li>
                <li>
                  Wrap complete lines with end quotes or brackets e.g.{" "}
                  <b> &#123;'abc','def','ghi',...&#125;</b>
                </li>
                <li>
                  Remove Quotes from the input data - so all data are just plain
                  text
                </li>
                <li>Reuse the output as the input</li>
              </ul>
              <br />
              <h2 className="mb-2">
                {" "}
                <em className="text-dark"> Split CSV Lines</em> button vs{" "}
                <em className="text-dark">Split All Inputs</em>
              </h2>
              <p>
                The <b>Split CSV Lines button</b> is a general split function
                which will split along any one of the following delimiters
                [comma(,) colon(:) semi-colon(;) tab(\t)].
                <br />
                The <b>Split All Inputs</b> is more precise and will split only
                on the delimiter currently selected but for all lines.
              </p>
              </div>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default CSVSplitter;
