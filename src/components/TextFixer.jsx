import React from "react";
import FormInputCard from "./FormInputCard";
import { Container, Row, Col, Form} from "react-bootstrap";
import ButtonComponent from "./ButtonComponent";
import {
  MdLinkOff,
  MdLink,
  MdPlaylistRemove,
  MdOutlineSort,
  MdContentCopy,
  MdChecklistRtl,
} from "react-icons/md";
import { LuArrowUpDown, LuLaptop2 } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center p-5  "
    >
      <Form className="">
        <Row className="d-md-flex gap-5 mb-5 ">
          <Col>
            <FormInputCard
              cardStyles="blue-shades-border-color"
              headerBarClassName="w-100 d-inline-flex justify-content-between p-3 blue-shades-header-panel  "
              listTitle="Input A"
              linesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold fs-4 px-2 py-1 blue-shades-lines "
              duplicatesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold fs-4 px-2 py-1 blue-shades-duplicates"
              lines="0"
              duplicates="0"
              textareaRows="17"
              readOnlyTextareaStyles="d-none"
              buttonGroupStyles="w-100 d-inline-flex justify-content-end d-flex p-2"
              fileInputStyles="d-none "
              linkOffBtn={
                <ButtonComponent
                  btnTip="Split CSV Lines On , : ; "
                  icon={<MdLinkOff className="fs-4 " />}
                />
              }
              joinLinesBtn={
                <ButtonComponent
                  btnTip="Join All Lines With A Comma"
                  icon={<MdLink className="fs-4 " />}
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
              listTitle="Output B"
              linesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold fs-4 px-2 py-1 green-shades-lines "
              duplicatesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold fs-4 px-2 py-1 green-shades-duplicates "
              lines="0"
              duplicates="0"
              textareaRows="17"
              readOnlyTextareaStyles="d-none"
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
        </Row>
        <Row className="gap-5 mb-5">
          <Col className="d-flex justify-content-end ">
            <ButtonComponent
              text="Go!"
              styleClass="go-btn "
              toolTipStyles="d-none"
            />
          </Col>
          <Col className="d-flex justify-content-end gap-3 ">
            <ButtonComponent
              btnTip="Options"
              icon={<MdChecklistRtl className="text-dark fs-4" />}
            />

            <ButtonComponent
              btnTip="Switch Desktop / Laptop View"
              icon={<LuLaptop2 className="fs-5" />}
            />
          </Col>
        </Row>
        <Row className="mb-5 check-inputs-wrapper p-5">
          <Col className="d-flex flex-md-row flex-column ">
            {/* <Form className="d-flex flex-row gap-1"> */}
            <div className=" d-flex flex-column mb-3 col-md-3 col-sm-8">
              <Form.Check
                checked
                type="checkbox"
                label="Remove Start Spaces"
                className="d-inline-flex align-items-center gap-2"
              />
              <Form.Check
                checked
                type="checkbox"
                label="Remove End Spaces"
                className="d-inline-flex align-items-center gap-2"
              />
              <Form.Check
                checked
                type="checkbox"
                label="Remove Extra Spaces"
                className="d-inline-flex align-items-center gap-2"
              />
              <Form.Check
                checked
                type="checkbox"
                label="Remove Leading Zeroes"
                className="d-inline-flex align-items-center gap-2"
              />
              <Form.Check
                checked
                type="checkbox"
                label="Remove Duplicates"
                className="d-inline-flex align-items-center gap-2"
              />
            </div>

            {/* Radio inputs */}
            <div className="mb-3 col-md-3 col-sm-8 px-2">
              <div className="mb-3">
                <Form.Check
                  type="radio"
                  label="Remove BEFORE including:"
                  className="d-inline-flex align-items-center gap-2"
                />
                <br />
                <Form.Check
                  type="radio"
                  label="Remove BEFORE  excluding:"
                  className="d-inline-flex align-items-center gap-2"
                />
                <br />
                <Form.Control
                  type="text"
                  placeholder="Text"
                  className="d-inline-flex align-items-center gap-2 w-75 ms-4 p-2"
                />
              </div>

              <div>
                <Form.Check
                  type="radio"
                  label="Remove BEFORE including:"
                  className="d-inline-flex align-items-center gap-2"
                />
                <br />
                <Form.Check
                  type="radio"
                  label="Remove BEFORE  excluding:"
                  className="d-inline-flex align-items-center gap-2"
                />
                <br />
                <Form.Control
                  type="text"
                  placeholder="Text"
                  className="d-inline-flex align-items-center gap-2 w-75 ms-4 p-2"
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="d-flex flex-column col-md-3 col-sm-8 px-2 mb-3">
              <div className="d-flex flex-column mb-2">
                <Form.Check
                  type="checkbox"
                  label="Append at Start"
                  className="d-inline-flex align-items-center gap-2 "
                />
                <Form.Control
                  type="text"
                  placeholder="Text"
                  className="d-inline-flex align-items-center gap-2 w-75 ms-4 p-2 rounded-0"
                />
              </div>

              {/* Append at End */}
              <div className="d-flex flex-column mb-2">
                <Form.Check
                  type="checkbox"
                  label="Append at End"
                  className="d-inline-flex align-items-center gap-2"
                />
                <Form.Control
                  type="text"
                  placeholder="Text"
                  className="d-inline-flex align-items-center gap-2 w-75 ms-4 p-2 rounded-0"
                />
              </div>

              {/* Split lines at */}
              <div className="d-flex flex-column mb-2">
                <Form.Check
                  type="checkbox"
                  label="Split lines at:"
                  className="d-inline-flex align-items-center gap-2"
                />
                <Form.Control
                  type="text"
                  placeholder="Punctuation"
                  className="d-inline-flex align-items-center gap-2 w-75 ms-4 p-2 rounded-0"
                />
              </div>
            </div>

            {/* Dropdowns */}
            <div className="col-md-3 col-sm-12 mb-3 ">
              <div className="ps-4 bg-body-secondary rounded border border-secondary-subtle border-2">
                <Form.Select className="p-2 rounded-0">
                  <option>No Space</option>
                  <option>Capitalize</option>
                  <option>Uppercase</option>
                  <option>Lowercase</option>
                </Form.Select>
              </div>

              <div className="ps-4 bg-body-secondary rounded border border-secondary-subtle border-2">
                <Form.Select className="p-2 rounded-0">
                  <option>No Sort</option>
                  <option>Sort A - z </option>
                  <option>Sort Z - a </option>
                </Form.Select>
              </div>

              <div className="ps-4 bg-body-secondary rounded border border-secondary-subtle border-2 ">
                <Form.Select className="p-2 rounded-0">
                  <option className="">No Format</option>
                  <option>Line Numbered</option>
                  <option>As Unordered List</option>
                  <option>As Ordered List</option>
                  <option>As Table</option>
                  <option>Join All Lines</option>
                </Form.Select>
              </div>
            </div>
            {/* </Form> */}
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <h1 className="mb-4">Text Data Formatting Tool</h1>
            <div>
              <ul className="border-0 ms-4 text-list">
                <li className="border-0">
                  There are times when your data set are not in a useable format
                  for analysis or presentation
                </li>
                <li className="border-0">
                  With the <b>Text Fixer</b> Tool, you can tidy up your data
                  ready for processing or presentation
                </li>
                <li className="border-0">
                  There were many occasions where I had to clean up the data so
                  I could use the{" "}
                  <Link className="text-primary"> List Comparison Tool </Link>-
                  It was with this in mind that the Text Fixer Tool was built
                </li>
                <li className="border-0">
                  Cut and Paste your data into textbox A, with the results shown
                  in output B
                </li>
                <li className="border-0">
                  There are many functionalities which you can use as part of
                  this tool
                </li>

                <br />

                <ul className="border-0 ms-5">
                  <li className="border-0">
                    Insertion of text before and after each input line
                  </li>

                  <li className="border-0">
                    Removal of text strings before and after each input line
                  </li>

                  <li className="border-0">
                    A special feature is the option to add/remove inclusively or
                    exclusively the text you desire
                  </li>

                  <li className="border-0">
                    The cleaning of extraneous spaces, duplicates and blank
                    lines from your data-set
                  </li>

                  <li className="border-0">
                    The output can be formatted as HTML, numbered lines, HTML
                    list items or even rejoined as one single line
                  </li>

                  <li className="border-0">
                    If you click on the chain icon, you can also join all input
                    lines into one single, output line
                  </li>

                  <li className="border-0">
                    Lines can also be split at any designated punctuation e.g.
                    CSV data
                  </li>
                </ul>

                <br />

                <li className="border-0">
                  The number of options and usage is large, allowing you to
                  manipulate your data and formatting it to a useable form
                </li>

                <li className="border-0">
                  It has helped me simplify my work over the years and I hope
                  you find it as useful without the need to write Excel
                  functions to do the same.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Main;
