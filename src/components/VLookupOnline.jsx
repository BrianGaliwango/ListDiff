import React from "react";
import FormInputCard from "./FormInputCard";
import { Container, Row, Col, Form, Card, Table } from "react-bootstrap";
import ButtonComponent from "./ButtonComponent";
import {
  MdPlaylistRemove,
  MdOutlineSort,
  MdContentCopy,
  MdFormatListBulletedAdd,
  MdFormatListBulleted,
  MdOutlineFormatLineSpacing,
  MdOutlineSave,
} from "react-icons/md";
import { LuArrowUpDown, LuRedo2 } from "react-icons/lu";
import { RiDeleteBin5Line, RiDoubleQuotesR } from "react-icons/ri";
import { VscCaseSensitive } from "react-icons/vsc";
import { CgLaptop } from "react-icons/cg";
import { ImListNumbered } from "react-icons/im";

const ColumnExtractor = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center p-5  "
    >
      <Form className="">
        <Row className="d-flex gap-3 mb-4 ">
          <Col md={4} className="vLookup-left-col">
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
              vLookupColumnsInputStyle="d-none"
              vLookCheckboxStyles="d-none"
              toggleQuotesBtn={
                <ButtonComponent
                  btnTip="Toggle Quotes"
                  toolTipStyles="tip-style rounded"
                  icon={<RiDoubleQuotesR className="fs-4 " />}
                  btnStyleClass="btns"
                />
              }
              trimDuplicatesBtn={
                <ButtonComponent
                  btnTip="Trim Spaces & Duplicates"
                  toolTipStyles="tip-style2 rounded"
                  icon={<MdPlaylistRemove className="fs-4 " />}
                  btnStyleClass="btns"
                />
              }
              sortBtn={
                <ButtonComponent
                  btnTip="Sort"
                  toolTipStyles="tip-style rounded"
                  icon={<MdOutlineSort className="text-dark fs-4" />}
                  btnStyleClass="btns"
                />
              }
              reverseOrderBtn={
                <ButtonComponent
                  btnTip="Reverse Order"
                  toolTipStyles="tip-style rounded"
                  icon={<LuArrowUpDown className="fs-5" />}
                  btnStyleClass="btns"
                />
              }
              copyBtn={
                <ButtonComponent
                  btnTip="Copy"
                  toolTipStyles="tip-style rounded"
                  icon={<MdContentCopy className="fs-5" />}
                  btnStyleClass="btns"
                />
              }
              deleteBtn={
                <ButtonComponent
                  btnTip="Clear"
                  toolTipStyles="tip-style rounded"
                  icon={<RiDeleteBin5Line className="fs-5" />}
                  btnStyleClass="btns"
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
                  toolTipStyles="tip-style rounded"
                  text="H1"
                  btnStyleClass="fw-bold btns"
                />
              }
              trimDuplicatesBtn={
                <ButtonComponent
                  btnTip="Trim Spaces & Duplicates"
                  toolTipStyles="tip-style2 rounded"
                  icon={<MdPlaylistRemove className="fs-4" />}
                  btnStyleClass="fw-bold btns"
                />
              }
              copyBtn={
                <ButtonComponent
                  btnTip="Copy"
                  toolTipStyles="tip-style rounded"
                  icon={<MdContentCopy className="fs-5" />}
                  btnStyleClass="fw-bold btns"
                />
              }
              deleteBtn={
                <ButtonComponent
                  btnTip="Clear"
                  toolTipStyles="tip-style rounded"
                  icon={<RiDeleteBin5Line className="fs-5" />}
                  btnStyleClass="fw-bold btns"
                />
              }
            />
          </Col>
        </Row>

        <Row className="gap-5 mb-4">
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
              toolTipStyles="tip-style rounded"
              btnStyleClass="border border-dark fw-bold vLookup-view-btn p-0 btns"
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
              vLookCheckboxStyles="d-none"
              vLookupColumnsInputStyle="d-none"
              columnsInputStyle="d-none"
              undoBtn={
                <ButtonComponent
                  btnTip="Undo"
                  toolTipStyles="tip-style rounded"
                  icon={<LuRedo2 className="fs-5 fw-bold undo-btn-icon" />}
                  btnStyleClass="fw-bold btns "
                />
              }
              toggleCaseBtn={
                <ButtonComponent
                  btnTip="Toggle Case"
                  toolTipStyles="tip-style rounded"
                  icon={<VscCaseSensitive className="fs-5 fw-bold" />}
                  btnStyleClass="fw-bold btns "
                />
              }
              addIndexBtn={
                <ButtonComponent
                  btnTip="Add Index"
                  toolTipStyles="tip-style rounded"
                  icon={<MdFormatListBulletedAdd className="fs-5" />}
                  btnStyleClass="fw-bold btns "
                />
              }
              numberedLinesBtn={
                <ButtonComponent
                  btnTip="Numbered Lines"
                  toolTipStyles="tip-style rounded"
                  icon={<ImListNumbered className="fs-6" />}
                  btnStyleClass="fw-bold btns "
                />
              }
              bulletedLines={
                <ButtonComponent
                  btnTip="Bulleted Lines"
                  toolTipStyles="tip-style rounded"
                  icon={<MdFormatListBulleted className="fs-4" />}
                  btnStyleClass="fw-bold btns "
                />
              }
              alignAsColumnsBtn={
                <ButtonComponent
                  btnTip="Align As Columns(with spaces)"
                  toolTipStyles="tip-style2 rounded "
                  icon={
                    <MdOutlineFormatLineSpacing className="fs-5 vLookup-spacing-btn" />
                  }
                  btnStyleClass="fw-bold btns "
                />
              }
              sortBtn={
                <ButtonComponent
                  btnTip="Sort Ascending"
                  toolTipStyles="tip-style rounded"
                  icon={<MdOutlineSort className="text-dark fs-4" />}
                  btnStyleClass="fw-bold btns "
                />
              }
              reverseOrderBtn={
                <ButtonComponent
                  btnTip="Reverse Order"
                  toolTipStyles="tip-style rounded"
                  icon={<LuArrowUpDown className="fs-5" />}
                  btnStyleClass="fw-bold btns "
                />
              }
              saveAsBtn={
                <ButtonComponent
                  btnTip="Save As..."
                  toolTipStyles="tip-style rounded"
                  icon={<MdOutlineSave className="fs-4 " />}
                  btnStyleClass="fw-bold btns "
                />
              }
              trimDuplicatesBtn={
                <ButtonComponent
                  btnTip="Trim Spaces & Duplicates"
                  toolTipStyles="tip-style2 rounded"
                  icon={<MdPlaylistRemove className="fs-4 " />}
                  btnStyleClass="fw-bold btns "
                />
              }
              copyBtn={
                <ButtonComponent
                  btnTip="Copy"
                  toolTipStyles="tip-style rounded"
                  icon={<MdContentCopy className="fs-5" />}
                  btnStyleClass="fw-bold btns "
                />
              }
              deleteBtn={
                <ButtonComponent
                  btnTip="Clear"
                  toolTipStyles="tip-style rounded"
                  icon={<RiDeleteBin5Line className="fs-5" />}
                  btnStyleClass="fw-bold btns"
                />
              }
            />
          </Col>
        </Row>

        <Row className="pt-5">
          <h2 className="mb-4">
            Easy VLookup Online Tool: Skip the Excel Complexities
          </h2>
          <p className="mb-4">
            Are you tired of dealing with the complicated setup of Excel
            VLookups? Our Easy VLookup Online Tool is here to simplify your
            life! This user-friendly tool enables you to perform VLookups
            without needing to navigate the intricacies of Excel. All you need
            are your text inputs and CSV data, and our online tool will handle
            the rest.
          </p>
          <Col className="">
            <h4 className="mb-4">Key Features of Our VLookup Online Tool</h4>
            <Card className="border-0 mb-4 d-flex ps-5 ">
              <ul className="mb-3 text-list text-start">
                <li className="">
                  Easy-to-use interface: Designed for simplicity, our VLookup
                  tool allows you to focus on getting results without the need
                  to master Excel functions.
                </li>
                <li>
                  Text input and CSV data compatibility: Upload your data as
                  text inputs or in CSV format, and let the tool handle the
                  VLookup for you.
                </li>
                <li>
                  Accurate results: Rely on our online VLookup tool to provide
                  precise and reliable results, saving you time and effort.
                </li>
                <li>
                  No installation required: Perform VLookups online without the
                  need to install any additional software or plugins.
                </li>
              </ul>
            </Card>
            <Card className="border-0 mb-3">
              <h2 className="mb-3 fw-bold">
                Understanding VLookup in Excel: A Simple Explanation
              </h2>
              <Card.Text>
                Before diving into our online tool, let's get familiar with
                VLookup and how it works in Excel. VLookup is a powerful
                function that helps you search for a specific value in a table
                and return related data from another column.
              </Card.Text>
            </Card>
            <Card className="border-0 mb-4">
              <h3 className="mb-3">How VLookup Works</h3>
              <Card.Body>
                <Card.Text className="fs-6 mb-3">
                  VLookup stands for "Vertical Lookup." It searches for a
                  specified value in the first column of a table and then
                  returns a corresponding value from another column in the same
                  row. There are vast amount of resources available online that
                  goes in depth on how it works, but for our part, we will just
                  give a brief summary.
                </Card.Text>
                <p className="mb-2">
                  Here's a simple example to illustrate how VLookup works:
                </p>
                <div className="bg-body-tertiary rounded ps-5 py-3 pb-4 mb-3 table-wrapper">
                  <Table className="w-50 ms-5">
                    <thead>
                      <tr>
                        <th>&nbsp;</th>
                        <th>A</th>
                        <th>B</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Name</td>
                        <td>Email</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Alice</td>
                        <td>alice@example.com</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Bob</td>
                        <td>bob@example.com</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Carol</td>
                        <td>carol@example.com</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <p className="mb-3">
                  Let's say you want to find Bob's email address. You would use
                  the VLookup function like this:
                </p>
                <div className="p-3 bg-body-tertiary rounded mb-3 table-wrapper">
                  <pre className="vLookup-email-example">=VLOOKUP("Bob", A1:B4, 2, FALSE)</pre>
                </div>
                <p>
                  The function searches for "Bob" in the first column (A1:A4),
                  finds him in row 3, and then returns the information from the
                  second column (B3) in the same row, which is
                  "bob@example.com."
                </p>
              </Card.Body>
            </Card>
            <Card className="border-0">
              <h3 className="mb-3 fw-bold">What You Can Use VLookup For</h3>
              <Card.Body>
                <Card.Text className="fs-6 mb-3">
                  VLookup is a versatile tool in Excel that can help you:
                </Card.Text>

                <ul className="mb-3 text-list text-start ps-5">
                  <li className="">
                    Find specific information in large datasets
                  </li>
                  <li>Combine data from different sources.</li>
                  <li>Match and compare data from separate columns.</li>
                </ul>
                <p className="mb-2">
                  Now that you have a basic understanding of VLookup, you can
                  harness the power of this helpful function to efficiently find
                  the information you need with our online version!
                </p>
                <p>
                  ** Our tool will only parse the data based on the delimiter
                  you chose. If the wrong delimiter is provided, the results may
                  not be what you expected.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ColumnExtractor;
