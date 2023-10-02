import React from "react";
import FormInputCard from "./FormInputCard";
import { Container, Row, Col, Form, ListGroup } from "react-bootstrap";
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

const Main = () => {
  return (
    <Container
      fluid
      className="p-5 d-flex flex-column justify-content-center  "
    >
      <Row className="d-md-flex gap-5 mb-4 ">
        <Col>
          <FormInputCard
            headerBarClassName="w-100 d-inline-flex justify-content-between p-2 bg-info fs-2"
            listTitle="List A"
            lines="0"
            duplicates="0"
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
            headerBarClassName="w-100 d-inline-flex justify-content-between p-2 bg-success fs-2"
            listTitle="Output B"
            lines="0"
            duplicates="0"
            moveBtn={
              <ButtonComponent
                btnTip="Move B To A"
                text="A"
                icon={<BsArrowLeft />}
                text2="B"
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
      <Row className="gap-5 mb-4">
        <Col className="d-flex justify-content-end ">
          <ButtonComponent text="GO!" styleClass="bg-success text-light" />
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
      <Row>
        <Col>
          <Form className="d-flex flex-row gap-1">
            <div className=" d-flex flex-column mb-3 col-md-3 col-sm-12">
              <Form.Check
                type="checkbox"
                label="Remove Start Spaces"
                className="d-inline-flex align-items-center gap-2"
              />
              <Form.Check
                type="checkbox"
                label="Remove End Spaces"
                className="d-inline-flex align-items-center gap-2"
              />
              <Form.Check
                type="checkbox"
                label="Remove Extra Spaces"
                className="d-inline-flex align-items-center gap-2"
              />
              <Form.Check
                type="checkbox"
                label="Remove Leading Zeroes"
                className="d-inline-flex align-items-center gap-2"
              />
              <Form.Check
                type="checkbox"
                label="Remove Duplicates"
                className="d-inline-flex align-items-center gap-2"
              />
            </div>

            {/* Radio inputs */}
            <div className="mb-3 col-md-3 col-sm-12 px-2">
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
                  className="d-inline-flex align-items-center gap-2"
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
                  className="d-inline-flex align-items-center gap-2"
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="d-flex flex-column col-md-3 col-sm-12 px-2">
              <div className="d-flex flex-column">
                <Form.Check
                  type="checkbox"
                  label="Append at Start"
                  className="d-inline-flex align-items-center gap-2"
                />
                <Form.Control
                  type="text"
                  placeholder="Text"
                  className="d-inline-flex align-items-center gap-2"
                />
              </div>

              {/* Append at End */}
              <div className="d-flex flex-column">
                <Form.Check
                  type="checkbox"
                  label="Append at End"
                  className="d-inline-flex align-items-center gap-2"
                />
                <Form.Control
                  type="text"
                  placeholder="Text"
                  className="d-inline-flex align-items-center gap-2"
                />
              </div>

              {/* Split lines at */}
              <div className="d-flex flex-column">
                <Form.Check
                  type="checkbox"
                  label="Split lines at:"
                  className="d-inline-flex align-items-center gap-2"
                />
                <Form.Control
                  type="text"
                  placeholder="Punctuation"
                  className="d-inline-flex align-items-center gap-2"
                />
              </div>
            </div>

            {/* Dropdowns */}
            <div className="col-md-3 col-sm-12 px-2">
              <Form.Select>
                <option>No Space</option>
                <option>Capitalize</option>
                <option>Uppercase</option>
                <option>Lowercase</option>
              </Form.Select>

              <Form.Select>
                <option>No Sort</option>
                <option>Sort A - z </option>
                <option>Sort Z - a </option>
              </Form.Select>

              <Form.Select className="bg-body-tertiary">
                <option className="w-75">No Format</option>
                <option>Line Numbered</option>
                <option>As Unordered List</option>
                <option>As Ordered List</option>
                <option>As Table</option>
                <option>Join All Lines</option>
              </Form.Select>
            </div>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="mb-4">Text Data Formatting Tool</h1>
          <div>
            <ListGroup className="border-0 ms-4">
              <ListGroup.Item className="border-0">
                There are times when your data set are not in a useable format
                for analysis or presentation
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                With the Text Fixer Tool, you can tidy up your data ready for
                processing or presentation
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                There were many occasions where I had to clean up the data so I
                could use the List Comparison Tool - It was with this in mind
                that the Text Fixer Tool was built
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                Cut and Paste your data into textbox A, with the results shown
                in output B
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                There are many functionalities which you can use as part of this
                tool
              </ListGroup.Item>

              <br />

              <ListGroup className="border-0 ms-5">
                <ListGroup.Item className="border-0">
                  Insertion of text before and after each input line
                </ListGroup.Item>

                <ListGroup.Item className="border-0">
                  Removal of text strings before and after each input line
                </ListGroup.Item>

                <ListGroup.Item className="border-0">
                  A special feature is the option to add/remove inclusively or
                  exlusively the text you desire
                </ListGroup.Item>

                <ListGroup.Item className="border-0">
                  The cleaning of extraneous spaces, duplicates and blank lines
                  from your data-set
                </ListGroup.Item>

                <ListGroup.Item className="border-0">
                  The output can be formatted as HTML, numbered lines, HTML list
                  items or even rejoined as one single line
                </ListGroup.Item>

                <ListGroup.Item className="border-0">
                  If you click on the chain icon, you can also join all input
                  lines into one single, output line
                </ListGroup.Item>

                <ListGroup.Item className="border-0">
                  Lines can also be split at any designated punctuation e.g. CSV
                  data
                </ListGroup.Item>
              </ListGroup>

              <br />

              <ListGroup.Item className="border-0">
                The number of options and usage is large, allowing you to
                manipulate your data and formatting it to a useable form
              </ListGroup.Item>

              <ListGroup.Item className="border-0">
                It has helped me simplify my work over the years and I hope you
                find it as useful without the need to write Excel functions to
                do the same.
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
