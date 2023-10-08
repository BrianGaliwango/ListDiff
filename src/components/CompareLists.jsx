import React from "react";
import FormInputCard from "./FormInputCard";
import { Container, Row, Col, Form } from "react-bootstrap";
import ButtonComponent from "./ButtonComponent";
import {
  MdLinkOff,
  MdPlaylistRemove,
  MdOutlineSort,
  MdContentCopy,
  MdChecklistRtl,
} from "react-icons/md";
import { LuArrowUpDown, LuLaptop2 } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const CompareLists = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center p-5 "
    >
      <Form className=" compare-lists-form w-100">
        <Row className="d-md-flex gap-5 mb-5 ">
          <Col>
            <FormInputCard
              cardStyles="green-shades-border-color"
              headerBarClassName="w-100 d-inline-flex justify-content-between p-3 green-shades-header-panel text-success"
              listTitle="List A"
              linesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold fs-4 px-2 py-1 green-shades-lines "
              duplicatesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold fs-4 px-2 py-1 green-shades-duplicates "
              lines="0"
              duplicates="0"
              readOnlyTextareaStyles="d-none"
              textareaRows="10"
              textareaStyles="p-2"
              buttonGroupStyles="w-100 d-flex justify-content-between d-flex p-2 gap-2"
              moveBtn={
                <ButtonComponent
                  btnTip="Move B To A"
                  styleClass="fs-6 move-btn"
                  text="A "
                  icon={<BsArrowRight className="mb-3 fw-bold fs-5" />}
                  text2=" B"
                />
              }
              fileInputStyles="d-none "
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
          <Col>
            <FormInputCard
              cardStyles="green-shades-border-color"
              headerBarClassName="w-100 d-inline-flex justify-content-between p-3 green-shades-header-panel text-success"
              listTitle="List B"
              linesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold fs-4 px-2 py-1 green-shades-lines "
              duplicatesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold fs-4 px-2 py-1 green-shades-duplicates "
              lines="0"
              duplicates="0"
              readOnlyTextareaStyles="d-none"
              textareaRows="10"
              textareaStyles="p-2"
              buttonGroupStyles="w-100 d-flex justify-content-between d-flex p-2 gap-2"
              moveBtn={
                <ButtonComponent
                  btnTip="Move B To A"
                  styleClass="fs-6 move-btn"
                  text="A "
                  icon={<BsArrowLeft className="mb-3 fw-bold fs-5" />}
                  text2=" B"
                />
              }
              fileInputStyles="d-none "
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
        </Row>

        <Row className="gap-5 mb-5">
          <Col className="d-flex justify-content-end ">
            <ButtonComponent
              text="Compare Lists"
              styleClass="compare-lists-btn text-light "
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
                label="Case Sensitive"
                className="d-inline-flex align-items-center gap-2"
              />
              <Form.Check
                checked
                type="checkbox"
                label="Ignore Begin End Spaces"
                className="d-inline-flex align-items-center gap-2"
              />
              <Form.Check
                checked
                type="checkbox"
                label="Ignore Extra Spaces"
                className="d-inline-flex align-items-center gap-2"
              />
            </div>

            {/* Checkbox */}
            <div className="d-flex flex-column col-md-3 col-sm-8 px-2 mb-3">
              <div className="d-flex flex-column mb-1">
                <Form.Check
                  type="checkbox"
                  label="Ignore Leading Zeroes"
                  className="d-inline-flex align-items-center gap-2 "
                />
              </div>

              {/* Line Numbered */}
              <div className="d-flex flex-column mb-2">
                <Form.Check
                  type="checkbox"
                  label="Line Numbered"
                  className="d-inline-flex align-items-center gap-2"
                />
              </div>
            </div>

            {/* Dropdowns */}
            <div className="col-md-3 col-sm-12 mb-3 ">
              <div className="ps-4 bg-body-secondary rounded border border-secondary-subtle border-2">
                <Form.Select className="p-2 rounded-0">
                  <option>No Sort</option>
                  <option>Sort A - z </option>
                  <option>Sort Z - a </option>
                </Form.Select>
              </div>

              <div className="ps-4 bg-body-secondary rounded border border-secondary-subtle border-2">
                <Form.Select className="p-2 rounded-0">
                  <option>No Change</option>
                  <option>Capitalize</option>
                  <option>Uppercase</option>
                  <option>Lowercase</option>
                </Form.Select>
              </div>
            </div>
            {/* </Form> */}
          </Col>
        </Row>

        {/* Only  */}

        <Row className="d-flex align-items-center justify-content-between gap-2 mb-5 only-wrapper ">
          <Col className="d-flex mb-3">
            <FormInputCard
              cardStyles="only-cards blue-shades-border-color"
              headerBarClassName="w-100 d-inline-flex justify-content-between p-3 blue-shades-header-panel"
              listTitle="A Only"
              linesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold fs-4 px-2 py-1 blue-shades-lines "
              duplicatesStyles="d-none "
              lines="0"
              readOnlyTextareaStyles="d-none"
              textareaRows="10"
              textareaStyles="p-2"
              textAreaPlaceholder="Values in A Only"
              buttonGroupStyles="w-100 d-flex justify-content-between d-flex p-2 gap-2"
              fileInputStyles="d-none "
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
            />
          </Col>
          <Col className=" mb-3">
            <FormInputCard
              cardStyles="only-cards"
              headerBarClassName="w-100 d-inline-flex justify-content-between p-3 red-shades-header-panel"
              listTitle="A n B"
              linesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold fs-4 px-2 py-1 red-shades-lines "
              duplicatesStyles="d-none"
              lines="0"
              readOnlyTextareaStyles="d-none"
              textareaRows="10"
              textareaStyles="p-2"
              textAreaPlaceholder="Values in A AND B"
              buttonGroupStyles="w-100 d-flex justify-content-between d-flex p-2 gap-2"
              fileInputStyles="d-none "
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
            />
          </Col>
          <Col className=" mb-3">
            <FormInputCard
              cardStyles="only-cards blue-shades-border-color"
              headerBarClassName="w-100 d-inline-flex justify-content-between p-3 blue-shades-header-panel"
              listTitle="B Only"
              linesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold fs-4 px-2 py-1 blue-shades-lines "
              duplicatesStyles="d-none "
              lines="0"
              readOnlyTextareaStyles="d-none"
              textareaRows="10"
              textareaStyles="p-2"
              textAreaPlaceholder="Values in B Only"
              buttonGroupStyles="w-100 d-flex justify-content-between d-flex p-2 gap-2"
              fileInputStyles="d-none "
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
            />
          </Col>
        </Row>
        <Row className="mb-5 aub-wrapper ">
          <Col xs={12} className="position-relative">
            <FormInputCard
              cardStyles="only-cards green-shades-border-color position-absolute bottom-0 start-50 translate-middle-x "
              headerBarClassName="w-100 d-inline-flex justify-content-between p-3 green-shades-header-panel text-success"
              listTitle="A u B"
              linesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold fs-4 px-2 py-1 green-shades-lines "
              duplicatesStyles="d-none "
              lines="0"
              readOnlyTextareaStyles="d-none"
              textareaRows="10"
              textareaStyles="p-2"
              textAreaPlaceholder="Values in A OR B"
              buttonGroupStyles="w-100 d-flex justify-content-between d-flex p-2 gap-2"
              fileInputStyles="d-none "
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
            />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h1 className="mb-4">Comparing Differences Between Two Lists</h1>
            <div>
              <ul className="border-0 ms-4 text-list">
                <li className="border-0">
                  This list comparison tool will perform SET Operations over
                  lists of words, numbers etc with formatted results
                </li>
                <li className="border-0">
                  Operations including: Set Intersections (AND), Set Unions (OR)
                  and Set Differences
                </li>
                <li className="border-0">
                  Cut and Paste your lists into textbox A & B, then click
                  <b> Compare Lists </b> to work out the differences between the
                  two lists
                </li>

                <br />

                <ul className="border-0 ms-5">
                  <li className="border-0">Case insensitive comparisons</li>

                  <li className="border-0">
                    Remove extraneous spaces from your input and output
                  </li>

                  <li className="border-0">
                    Remove leading zeros from your data
                  </li>

                  <li className="border-0">
                    The cleaning of extraneous spaces, duplicates and blank
                    lines from your data-set
                  </li>

                  <li className="border-0">
                    The output can also be sorted with a number of formatting
                    options including HTML, Case Capitalizations, and numbered
                    lines
                  </li>
                </ul>

                <br />

                <li className="border-0">
                  You can move the results between box A & B with the Switch
                  function - this allows the output list to become the input
                  list.
                </li>

                <li className="border-0">
                  The layout can be changed also for mobile or limited spaced
                  screens
                </li>
                <li>
                  There are many use-cases for the tool from Finance,
                  Engineering and Computing to any data reconciliation tasks.
                </li>
                <li>
                  It was initially built to help with the repetitive tasks of
                  reconciling IDs and codes in my own job
                </li>
                <li>
                  I hope you find it as useful and remove some of the
                  tediousness of comparing multiple lists without having to
                  rewrite Excel functions to do the task
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default CompareLists;
