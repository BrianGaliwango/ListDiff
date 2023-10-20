import React, { useState } from "react";
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
  const [listDataA, setListDataA] = useState();
  const [listDataAOnly, setListDataAOnly] = useState();
  const [listADuplicates, setListADuplicates] = useState(0);
  const [listBDuplicates, setListBDuplicates] = useState(0);
  const [listDataB, setListDataB] = useState();
  const [listDataAnB, setListDataAnB] = useState();
  const [listDataBOnly, setListDataBOnly] = useState();
  const [listDataAuB, setListDataAuB] = useState();
  const [ignoreLeadingZero, setIgnoreLeadingZero] = useState();
  const [linesCount, setLinesCount] = useState(0);
  const [linesB, setLinesB] = useState(0);
  const [onlyBLines, setOnlyBLines] = useState(0);
  const [aOnlyLines, setAOnlyLines] = useState(0);
  const [duplicatesLines, setDuplicatesLines] = useState(0);
  const [aUBLines, setAuBLines] = useState(0);

  // Handle onChange func List A
  const handleChange = (event) => {
    let linesArea = event.target.value;
    let lines = linesArea.split("\n");
    let dupCounts = {};

    if (lines[lines.length - 1] === "") {
      lines.length--;
    } else {
      let linesA = lines.filter((e) => e.replace(/(\r\n|\n|\r)/gm, ""));
      let count = linesA.length;
      setLinesCount(count);
    }

    // Find dups
    let linesA = lines.filter((e) => e.replace(/(\r\n|\n|\r)/gm, ""));
    linesA.forEach((dup) => {
      dupCounts[dup] = (dupCounts[dup] || 0) + 1;
      let dups = Object.keys(dupCounts).filter((e) => {
        return dupCounts[e] > 1;
      });
      setListADuplicates(dups.length);
    });

    setListDataA(event.target.value);
  };

  // OnChange List B func lines
  const handleChangeB = (event) => {
    let linesArea = event.target.value;
    let lines = linesArea.split("\n");
    let dupCounts = {};

    if (lines[lines.length - 1] === "") {
      lines.length--;
    } else {
      let linesA = lines.filter((e) => e.replace(/(\r\n|\n|\r)/gm, ""));
      let count = linesA.length;
      setLinesB(count);
    }

    // Find dups
    let linesA = lines.filter((e) => e.replace(/(\r\n|\n|\r)/gm, ""));
    linesA.forEach((dup) => {
      dupCounts[dup] = (dupCounts[dup] || 0) + 1;
      let dups = Object.keys(dupCounts).filter((e) => {
        return dupCounts[e] > 1;
      });
      setListBDuplicates(dups.length);
    });

    setListDataB(event.target.value);
  };

  // Get data func
  const getData = () => {
    if (!listDataA || !listDataB) {
      alert("fill in fields");
    } else {
      // Make Array
      const listDataAArr = listDataA.replace(/\r\n/gm, "\n").split("\n");
      const listDataBArr = listDataB.replace(/\r\n/gm, "\n").split("\n");

      // Filter empty values
      const listA = listDataAArr
        .filter((item) => item.length > 1)
        .map((el) => el.trim());
      const listB = listDataBArr
        .filter((item) => item.length > 1)
        .map((el) => el.trim());
      console.log(listA);

      // List data A only
      const listAOnly = listA.filter((val) => !listDataB.includes(val));

      setListDataAOnly(listAOnly.join("\n"));
      setAOnlyLines(listAOnly.length);

      // List data B only
      const listBOnly = listB.filter((val) => !listDataA.includes(val));
      setListDataBOnly(listBOnly.join("\r\n"));
      setOnlyBLines(listBOnly.length);

      // Check for duplicates
      const duplicates = listDataAArr.filter((element) =>
        listDataBArr.includes(element)
      );
      const cleanedDups = duplicates.filter((e) =>
        e.replace(/(\r\n|\n|\r)/gm, "")
      );
      setListDataAnB(cleanedDups.join("\r\n"));
      setDuplicatesLines(cleanedDups.length);

      // All items
      const listAuB = listDataAArr.concat(listDataBArr);
      const list = listAuB.filter((listItem) => listItem.length > 0);
      const cleanedAuBList = list.filter(
        (val, index) => listAuB.indexOf(val) === index
      );
      setListDataAuB(cleanedAuBList.join("\r\n"));
      setAuBLines(cleanedAuBList.length);
    }
  };

  // Move A value to B
  const moveAValueToB = () => {
    if (listDataA) {
      let linesArea = listDataA;
      let lines = linesArea.split("\n");
      let dupCounts = {};

      if (lines[lines.length - 1] === "") {
        lines.length--;
      } else {
        let linesA = lines.filter((e) => e.replace(/(\r\n|\n|\r)/gm, ""));
        let count = linesA.length;
        setLinesB(count);
      }

      // Find dups
      let linesA = lines.filter((e) => e.replace(/(\r\n|\n|\r)/gm, ""));
      linesA.forEach((dup) => {
        dupCounts[dup] = (dupCounts[dup] || 0) + 1;
        let dups = Object.keys(dupCounts).filter((e) => {
          return dupCounts[e] > 1;
        });
        setListBDuplicates(dups.length);
      });
      setListDataB(listDataA);
      setListDataA("");
      setLinesCount(0);
      setListADuplicates(0);
    }
  };

  // Move B value to a
  const moveBValueToA = () => {
    if (listDataB) {
      let linesArea = listDataB;
      let lines = linesArea.split("\n");
      let dupCounts = {};

      if (lines[lines.length - 1] === "") {
        lines.length--;
      } else {
        let linesA = lines.filter((e) => e.replace(/(\r\n|\n|\r)/gm, ""));
        let count = linesA.length;
        setLinesCount(count);
      }

      // Find dups
      let linesA = lines.filter((e) => e.replace(/(\r\n|\n|\r)/gm, ""));
      linesA.forEach((dup) => {
        dupCounts[dup] = (dupCounts[dup] || 0) + 1;
        let dups = Object.keys(dupCounts).filter((e) => {
          return dupCounts[e] > 1;
        });
        setListADuplicates(dups.length);
      });
      setListDataA(listDataB);
      setLinesB(0);
      setListDataB("");
      setListBDuplicates(0);
    }
  };

  // Split CSV
  const splitCsv = () => {
    if (listDataA) {
      let list = listDataA;
      let dupCounts = {};

      // Make array
      let cldList = list.replace(/\n\s\t|[,;:]/gm, "\n").split("\n");

      let trimmedList = cldList
        .filter((item) => item.length > 1)
        .map((el) => el.trim());

      // Find dups
      let linesA = trimmedList.filter((e) => e.replace(/(\r\n|\n|\r)/gm, ""));
      linesA.forEach((dup) => {
        dupCounts[dup] = (dupCounts[dup] || 0) + 1;
        let dups = Object.keys(dupCounts).filter((e) => {
          return dupCounts[e] > 1;
        });
        setListADuplicates(dups.length);
      });

      setListDataA(trimmedList.join("\n"));
      setLinesCount(trimmedList.length);
    }
  };

  // Split List B data func
  const splitListBData = () => {
    if (listDataB) {
      let list = listDataB;
      let dupCounts = {};

      // Make array
      let cldList = list.replace(/\n\s\t|[,;:]/gm, "\n").split("\n");

      let trimmedList = cldList
        .filter((item) => item.length > 1)
        .map((el) => el.trim());

      // Find dups
      let linesA = trimmedList.filter((e) => e.replace(/(\r\n|\n|\r)/gm, ""));
      linesA.forEach((dup) => {
        dupCounts[dup] = (dupCounts[dup] || 0) + 1;
        let dups = Object.keys(dupCounts).filter((e) => {
          return dupCounts[e] > 1;
        });
        setListBDuplicates(dups.length);
      });

      setListDataB(trimmedList.join("\n"));
      setLinesB(trimmedList.length);
    }
  };

  // Trim list A duplicates and white spaces
  const trimADuplicatesWhiteSpaces = () => {
    if (listDataA) {
      let linesArea = listDataA;
      let lines = linesArea.split("\n");

      // Filter dups
      const filteredList = lines.map((el) => el.trim());
      const newList = [...new Set(filteredList)]
      setListDataA(newList.join("\n"));
      setLinesCount(newList.length);
      setListADuplicates(0);
      console.log(newList);
    }
  };

  // Trim list B duplicates and white spaces
  const trimBDuplicatesWhiteSpaces = () => {
    if (listDataB) {
      let linesArea = listDataB;
      let lines = linesArea.split("\n");

      // Filter dups
      const filteredList = lines.map((el) => el.trim());
      const newList = [...new Set(filteredList)]
      setListDataB(newList.join("\n"));
      setLinesB(newList.length);
      setListBDuplicates(0);
      console.log(newList);
    }
  };

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
              linesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold px-2 py-1 green-shades-lines "
              duplicatesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold px-2 py-1 green-shades-duplicates "
              lines={linesCount}
              duplicates={listADuplicates}
              readOnlyTextareaStyles="d-none"
              textareaRows="10"
              textareaStyles="p-2"
              // readOnlyAttr={true}
              data={listDataA}
              onChange={handleChange}
              buttonGroupStyles="w-100 d-flex justify-content-between d-flex p-2 gap-2"
              fileInputStyles="d-none "
              columnsInputStyle="d-none"
              vLookupColumnsInputStyle="d-none"
              vLookCheckboxStyles="d-none"
              moveBtn={
                <ButtonComponent
                  btnTip="Move B To A"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="fs-6 btns move-btn"
                  text="A "
                  icon={<BsArrowRight className="mb-3 fw-bold fs-5" />}
                  text2="B"
                  onClick={moveAValueToB}
                />
              }
              splitCSVBtn={
                <ButtonComponent
                  btnTip="Split CSV Lines On , : ; tab "
                  toolTipStyles="tip-style2 rounded"
                  icon={<MdLinkOff className="fs-4 " />}
                  btnStyleClass="fs-6 btns"
                  onClick={splitCsv}
                />
              }
              trimDuplicatesBtn={
                <ButtonComponent
                  btnTip="Trim Spaces & Duplicates"
                  toolTipStyles="tip-style2 rounded"
                  btnStyleClass="fs-6 btns"
                  icon={<MdPlaylistRemove className="fs-4 " />}
                  onClick={trimADuplicatesWhiteSpaces}
                />
              }
              sortBtn={
                <ButtonComponent
                  btnTip="Sort"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="fs-6 btns"
                  icon={<MdOutlineSort className="text-dark fs-4" />}
                />
              }
              reverseOrderBtn={
                <ButtonComponent
                  btnTip="Reverse Order"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="fs-6 btns"
                  icon={<LuArrowUpDown className="fs-5" />}
                />
              }
              copyBtn={
                <ButtonComponent
                  btnTip="Copy"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="fs-6 btns"
                  icon={<MdContentCopy className="fs-5" />}
                />
              }
              deleteBtn={
                <ButtonComponent
                  btnTip="Clear"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="fs-6 btns"
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
              linesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold px-2 py-1 green-shades-lines "
              duplicatesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold px-2 py-1 green-shades-duplicates "
              lines={linesB}
              duplicates={listBDuplicates}
              readOnlyTextareaStyles="d-none"
              textareaRows="10"
              textareaStyles="p-2"
              data={listDataB}
              onChange={handleChangeB}
              buttonGroupStyles="w-100 d-flex justify-content-between d-flex p-2 gap-2"
              fileInputStyles="d-none "
              columnsInputStyle="d-none"
              vLookupColumnsInputStyle="d-none"
              vLookCheckboxStyles="d-none"
              moveBtn={
                <ButtonComponent
                  btnTip="Move B To A"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="fs-6 btns move-btn"
                  text="A "
                  icon={<BsArrowLeft className="mb-3 fw-bold fs-5" />}
                  text2=" B"
                  onClick={moveBValueToA}
                />
              }
              splitCSVBtn={
                <ButtonComponent
                  btnTip="Split CSV Lines On , : ; tab "
                  toolTipStyles="tip-style2 rounded"
                  btnStyleClass="fs-6 btns"
                  icon={<MdLinkOff className="fs-4 " />}
                  onClick={splitListBData}
                />
              }
              trimDuplicatesBtn={
                <ButtonComponent
                  btnTip="Trim Spaces & Duplicates"
                  toolTipStyles="tip-style2 rounded"
                  btnStyleClass="fs-6 btns"
                  icon={<MdPlaylistRemove className="fs-4 " />}
                  onClick={trimBDuplicatesWhiteSpaces}
                />
              }
              sortBtn={
                <ButtonComponent
                  btnTip="Sort"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="fs-6 btns"
                  icon={<MdOutlineSort className="text-dark fs-4" />}
                />
              }
              reverseOrderBtn={
                <ButtonComponent
                  btnTip="Reverse Order"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="fs-6 btns"
                  icon={<LuArrowUpDown className="fs-5" />}
                />
              }
              copyBtn={
                <ButtonComponent
                  btnTip="Copy"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="fs-6 btns"
                  icon={<MdContentCopy className="fs-5" />}
                />
              }
              deleteBtn={
                <ButtonComponent
                  btnTip="Clear"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="fs-6 btns"
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
              btnStyleClass="compare-lists-btn text-light "
              toolTipStyles="d-none"
              onClick={getData}
            />
          </Col>
          <Col className="d-flex justify-content-end gap-3 ">
            <ButtonComponent
              btnTip="Options"
              toolTipStyles="tip-style rounded"
              btnStyleClass="btns "
              icon={<MdChecklistRtl className="text-dark fs-4" />}
            />

            <ButtonComponent
              btnTip="Switch Desktop / Laptop View"
              toolTipStyles="tip-style rounded"
              btnStyleClass="btns "
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
                onChange={(e) => setIgnoreLeadingZero(e.target.checked)}
              />
              <Form.Check
                checked
                type="checkbox"
                label="Ignore Begin End Spaces"
                className="d-inline-flex align-items-center gap-2"
                onChange={(e) => setIgnoreLeadingZero(e.target.checked)}
              />
              <Form.Check
                checked
                type="checkbox"
                label="Ignore Extra Spaces"
                className="d-inline-flex align-items-center gap-2"
                onChange={(e) => setIgnoreLeadingZero(e.target.checked)}
              />
            </div>

            {/* Checkbox */}
            <div className="d-flex flex-column col-md-3 col-sm-8 px-2 mb-3">
              <div className="d-flex flex-column mb-1">
                <Form.Check
                  type="checkbox"
                  label="Ignore Leading Zeroes"
                  className="d-inline-flex align-items-center gap-2 "
                  onChange={(e) => setIgnoreLeadingZero(e.target.checked)}
                />
              </div>

              {/* Line Numbered */}
              <div className="d-flex flex-column mb-2">
                <Form.Check
                  type="checkbox"
                  label="Line Numbered"
                  className="d-inline-flex align-items-center gap-2"
                  onChange={(e) => setIgnoreLeadingZero(e.target.checked)}
                />
              </div>
            </div>

            {/* Dropdowns */}
            <div className="col-md-3 col-sm-12 mb-3 ">
              <div className="ps-4 bg-body-secondary rounded border border-secondary-subtle border-2">
                <Form.Select
                  onChange={(e) => setIgnoreLeadingZero(e.target.value)}
                  className="p-2 rounded-0"
                >
                  <option>No Sort</option>
                  <option>Sort A - z </option>
                  <option>Sort Z - a </option>
                </Form.Select>
              </div>

              <div className="ps-4 bg-body-secondary rounded border border-secondary-subtle border-2">
                <Form.Select
                  onChange={(e) => setIgnoreLeadingZero(e.target.value)}
                  className="p-2 rounded-0"
                >
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

        <Row className="d-flex align-items-center justify-content-between  gap-4 mb-5 only-wrapper ">
          <Col className="d-flex mb-3">
            <FormInputCard
              cardStyles="only-cards w-100 blue-shades-border-color"
              headerBarClassName="w-100 d-inline-flex justify-content-between p-3 blue-shades-header-panel"
              listTitle="A Only"
              linesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold px-2 py-1 blue-shades-lines "
              duplicatesStyles="d-none "
              lines={aOnlyLines}
              readOnlyTextareaStyles="d-none"
              textareaRows="10"
              textareaStyles="p-2"
              textAreaPlaceholder="Values in A Only"
              data={listDataAOnly}
              onChange={(e) => setListDataAOnly(e.target.value)}
              buttonGroupStyles="w-100 d-flex justify-content-between d-flex p-2 gap-2"
              fileInputStyles="d-none "
              columnsInputStyle="d-none"
              vLookupColumnsInputStyle="d-none"
              vLookCheckboxStyles="d-none"
              trimDuplicatesBtn={
                <ButtonComponent
                  btnTip="Trim Spaces & Duplicates"
                  toolTipStyles="tip-style2 rounded"
                  btnStyleClass="btns "
                  icon={<MdPlaylistRemove className="fs-4 " />}
                />
              }
              sortBtn={
                <ButtonComponent
                  btnTip="Sort"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns "
                  icon={<MdOutlineSort className="text-dark fs-4" />}
                />
              }
              reverseOrderBtn={
                <ButtonComponent
                  btnTip="Reverse Order"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns "
                  icon={<LuArrowUpDown className="fs-5" />}
                />
              }
              copyBtn={
                <ButtonComponent
                  btnTip="Copy"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns "
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
              linesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold px-2 py-1 red-shades-lines "
              duplicatesStyles="d-none"
              lines={duplicatesLines}
              readOnlyTextareaStyles="d-none"
              textareaRows="10"
              textareaStyles="p-2"
              textAreaPlaceholder="Values in A AND B"
              data={listDataAnB}
              onChange={(e) => setListDataAnB(e.target.value)}
              buttonGroupStyles="w-100 d-flex justify-content-between d-flex p-2 gap-2"
              fileInputStyles="d-none "
              columnsInputStyle="d-none"
              vLookupColumnsInputStyle="d-none"
              vLookCheckboxStyles="d-none"
              trimDuplicatesBtn={
                <ButtonComponent
                  btnTip="Trim Spaces & Duplicates"
                  toolTipStyles="tip-style2 rounded"
                  btnStyleClass="btns "
                  icon={<MdPlaylistRemove className="fs-4 " />}
                />
              }
              sortBtn={
                <ButtonComponent
                  btnTip="Sort"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns "
                  icon={<MdOutlineSort className="text-dark fs-4" />}
                />
              }
              reverseOrderBtn={
                <ButtonComponent
                  btnTip="Reverse Order"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns "
                  icon={<LuArrowUpDown className="fs-5" />}
                />
              }
              copyBtn={
                <ButtonComponent
                  btnTip="Copy"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns "
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
              linesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold px-2 py-1 blue-shades-lines "
              duplicatesStyles="d-none "
              lines={onlyBLines}
              readOnlyTextareaStyles="d-none"
              textareaRows="10"
              textareaStyles="p-2"
              textAreaPlaceholder="Values in B Only"
              data={listDataBOnly}
              onChange={(e) => setListDataBOnly(e.target.value)}
              buttonGroupStyles="w-100 d-flex justify-content-between d-flex p-2 gap-2"
              fileInputStyles="d-none "
              columnsInputStyle="d-none"
              vLookupColumnsInputStyle="d-none"
              vLookCheckboxStyles="d-none"
              trimDuplicatesBtn={
                <ButtonComponent
                  btnTip="Trim Spaces & Duplicates"
                  toolTipStyles="tip-style2 rounded"
                  btnStyleClass="btns "
                  icon={<MdPlaylistRemove className="fs-4 " />}
                />
              }
              sortBtn={
                <ButtonComponent
                  btnTip="Sort"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns "
                  icon={<MdOutlineSort className="text-dark fs-4" />}
                />
              }
              reverseOrderBtn={
                <ButtonComponent
                  btnTip="Reverse Order"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns "
                  icon={<LuArrowUpDown className="fs-5" />}
                />
              }
              copyBtn={
                <ButtonComponent
                  btnTip="Copy"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns "
                  icon={<MdContentCopy className="fs-5" />}
                />
              }
            />
          </Col>
        </Row>
        <Row className="mb-5 aub-wrapper ">
          <Col xs={12} className="position-relative">
            <FormInputCard
              cardStyles="bottom-only-card only-cards  green-shades-border-color position-absolute bottom-0 start-50 translate-middle-x "
              headerBarClassName="w-100 d-inline-flex justify-content-between p-3 green-shades-header-panel text-success"
              listTitle="A u B"
              linesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold px-2 py-1 green-shades-lines "
              duplicatesStyles="d-none"
              lines={aUBLines}
              readOnlyTextareaStyles="d-none"
              textareaRows="10"
              textareaStyles="p-2"
              textAreaPlaceholder="Values in A OR B"
              data={listDataAuB}
              onChange={(e) => setListDataAuB(e.target.value)}
              buttonGroupStyles="w-100 d-flex justify-content-between d-flex p-2 gap-2"
              fileInputStyles="d-none "
              columnsInputStyle="d-none"
              vLookupColumnsInputStyle="d-none"
              vLookCheckboxStyles="d-none"
              trimDuplicatesBtn={
                <ButtonComponent
                  btnTip="Trim Spaces & Duplicates"
                  toolTipStyles="tip-style2 rounded"
                  btnStyleClass="btns "
                  icon={<MdPlaylistRemove className="fs-4 " />}
                />
              }
              sortBtn={
                <ButtonComponent
                  btnTip="Sort"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns "
                  icon={<MdOutlineSort className="text-dark fs-4" />}
                />
              }
              reverseOrderBtn={
                <ButtonComponent
                  btnTip="Reverse Order"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns "
                  icon={<LuArrowUpDown className="fs-5" />}
                />
              }
              copyBtn={
                <ButtonComponent
                  btnTip="Copy"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns "
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
