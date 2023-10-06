import React from "react";
import FormInputCard from "./FormInputCard";
import { Container, Row, Col, Form, ListGroup } from "react-bootstrap";
import ButtonComponent from "./ButtonComponent";
import { MdOutlineSort, MdContentCopy, MdLockOpen } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  BsArrowLeft,
  BsFileEarmarkArrowUp,
  BsEyeSlash,
  BsLaptop,
} from "react-icons/bs";
import { AiOutlineMergeCells } from "react-icons/ai";


const CompareText = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center p-5  "
    >
      <Form className=" compare-lists-form w-100">
        <Row className="d-md-flex gap-5 mb-5 ">
          <Col>
            <FormInputCard
              cardStyles="blue-shades-border-color"
              headerBarClassName="w-100 d-inline-flex justify-content-between p-3 blue-shades-header-panel"
              listTitle="Input A"
              linesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold fs-4 px-2 py-1 blue-shades-lines "
              duplicatesStyles="d-none "
              lines="0"
              readOnlyTextareaStyles="position-absolute top-0 start-0 border-0 rounded-0 text-center readonly-textarea"
              textareaStyles="p-2 border-0 rounded-0 "
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
              uploadFileBtn={
                <ButtonComponent
                  btnTip="Upload from file"
                  styleClass="fs-6 fw-bold"
                  icon={<BsFileEarmarkArrowUp className="mb-3 fw-bold fs-5" />}
                />
              }
              trimDuplicatesBtn={
                <ButtonComponent
                  btnTip="Trim Spaces"
                  icon={<AiOutlineMergeCells className="fs-4 " />}
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
              listTitle="Input B"
              linesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold fs-4 px-2 py-1 green-shades-lines "
              duplicatesStyles="d-none "
              lines="0"
              readOnlyTextareaStyles="position-absolute top-0 start-0 border-0 rounded-0 text-center readonly-textarea p-2"
              textareaStyles="p-2 border-0 rounded-0 "
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
              lockScrolling={
                <ButtonComponent
                  btnTip="Lock Scrolling"
                  styleClass="fs-5"
                  icon={<MdLockOpen className="mb-3 fw-bold fs-4" />}
                />
              }
              trimDuplicatesBtn={
                <ButtonComponent
                  btnTip="Trim Spaces"
                  icon={<AiOutlineMergeCells className="fs-4 " />}
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
              text="Compare Text"
              styleClass="compare-text-btn text-light "
              toolTipStyles="d-none"
            />
          </Col>
          <Col className="d-flex justify-content-end gap-1 ">
            <ButtonComponent
              btnTip="Show / Hide Results"
              icon={<BsEyeSlash className="text-dark fs-4 fw-bolder" />}
              styleClass="p-0 "
            />

            <ButtonComponent
              btnTip="Switch Desktop / Laptop View"
              icon={<BsLaptop className="fs-4 fw-bolder" />}
              styleClass="p-0 "
            />
          </Col>
        </Row>

        <Row className="empty-inputs-wrapper p-4">
          <Col sm={12} className="empty-inputs-col p-4"></Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h1 className="mb-4">
              Text Diff - Understanding Unified Diff Format
            </h1>

            <p className="mb-3">
              The Unified Diff Format, also known as Unidiff, is a common way of
              displaying differences between files. This format is most commonly
              seen in the output of tools like <b>diff</b> or <b>git diff </b> .
              A unified diff presents differences in a useful way that makes it
              easy to see what changes need to be made to go from one version of
              a file to another.
            </p>

            <p className="mb-3">
              A unified diff is composed of one or more diff hunks. Here's an
              example of a diff hunk:
            </p>

            <ListGroup className="gap-2 p-3 compare-text-ul mb-3">
              <ListGroup.Item className="border-0 compare-text-li bg-transparent">
                @@ -1,3 +1,2 @@
              </ListGroup.Item>
              <ListGroup.Item className="border-0 compare-text-li bg-transparent">
                This is an unchanged line
              </ListGroup.Item>
              <ListGroup.Item className="border-0 compare-text-li bg-transparent">
                -This is a removed line
              </ListGroup.Item>
              <ListGroup.Item className="border-0 compare-text-li bg-transparent">
                +This is an added line
              </ListGroup.Item>
              <ListGroup.Item className="border-0 compare-text-li bg-transparent">
                This is an unchanged line
              </ListGroup.Item>
            </ListGroup>

            <p className="mb-2">
              The <em> @@ -1,3 +1,2 @@</em> part is the hunk header. The{" "}
              <em> -1,3 </em>part means that the hunk starts from line 1 and
              shows 3 lines from the original file. The +1,2 part means that the
              hunk starts from line 1 and shows 2 lines from the new file.
              Essentially, it indicates the change in line numbers between the
              two versions.
            </p>
            <p className="mb-4">
              Lines that are removed from the original file are preceded by a -,
              while lines added in the new file are preceded by a +. Lines that
              haven't changed are often shown to give context to the changes.
            </p>

            <div>
              <h2 className="fw-bold mb-1">Example</h2>
              <small>Consider two simple text files:</small>
              <br />
              <small className="fw-bold">File1.txt</small>
              <ListGroup className="gap-1 p-3 compare-text-ul">
                <ListGroup.Item className="border-0 compare-text-li bg-transparent">
                  Apple
                </ListGroup.Item>
                <ListGroup.Item className="border-0 compare-text-li bg-transparent">
                  Banana
                </ListGroup.Item>
                <ListGroup.Item className="border-0 compare-text-li bg-transparent">
                  Cherry
                </ListGroup.Item>
                <ListGroup.Item className="border-0 compare-text-li bg-transparent">
                  Date
                </ListGroup.Item>
                <ListGroup.Item className="border-0 compare-text-li bg-transparent">
                  Elderberry
                </ListGroup.Item>
              </ListGroup>
              <div>
                <small className="fw-bold">File2.txt</small>
                <ListGroup className="gap-1 p-3 compare-text-ul mb-2">
                  <ListGroup.Item className="border-0 compare-text-li bg-transparent">
                    Apple
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 compare-text-li bg-transparent">
                    Banana
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 compare-text-li bg-transparent">
                    Cherry
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 compare-text-li bg-transparent">
                    Date
                  </ListGroup.Item>
                </ListGroup>
              </div>
              <div>
                <p className="mb-2 fs-6">
                  The unified diff between these two files would look like this:
                </p>
                <ListGroup className="gap-1 p-3 compare-text-ul ">
                  <ListGroup.Item className="border-0 compare-text-li bg-transparent">
                    @@ -1,5 +1,4 @@
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 compare-text-li bg-transparent">
                    Apple
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 compare-text-li bg-transparent">
                    -Banana
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 compare-text-li bg-transparent">
                    +Blueberry
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 compare-text-li bg-transparent">
                    Cherry
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 compare-text-li bg-transparent">
                    Date
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 compare-text-li bg-transparent">
                    -Elderberry
                  </ListGroup.Item>
                </ListGroup>
                <small>
                  This diff is saying that in order to transform File1.txt into
                  File2.txt, you need to remove the "Banana" line, add the
                  "Blueberry" line, and remove the "Elderberry" line. The other
                  lines ("Apple", "Cherry", and "Date") remain the same in both
                  files.
                </small>
              </div>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default CompareText;
