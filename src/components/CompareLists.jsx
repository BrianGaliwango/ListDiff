import React, { useState } from "react";
import FormInputCard from "./FormInputCard";
import { Container, Row, Col, Form } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ButtonComponent from "./ButtonComponent";
import {
  MdLinkOff,
  MdPlaylistRemove,
  MdOutlineSort,
  MdContentCopy,
  MdChecklistRtl,
  MdOutlineDesktopWindows,
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
  const [listAnBDups, setListAnBDups] = useState();
  const [listDataBOnly, setListDataBOnly] = useState();
  const [listDataAuB, setListDataAuB] = useState();
  const [listALines, setListALines] = useState(0);
  const [linesB, setLinesB] = useState(0);
  const [onlyBLines, setOnlyBLines] = useState(0);
  const [aOnlyLines, setAOnlyLines] = useState(0);
  const [duplicatesLines, setDuplicatesLines] = useState(0);
  const [aUBLines, setAuBLines] = useState(0);

  const [showOptions, setShowOptions] = useState(true);

  const [screenSize, setScreenSize] = useState(false);
  const [caseSensitive, setCaseSensitive] = useState(true);
  const [ignoreBeginSpaces, setIgnoreBeginSpaces] = useState(true);
  const [ignoreExtraSpaces, setIgnoreExtraSpaces] = useState(true);
  const [ignoreLeadingZeros, setIgnoreLeadingZeros] = useState(false);
  const [lineNumbered, setLineNumbered] = useState(false);

  const [sortOptions, setSortOptions] = useState("no-sort");
  const [caseOptions, setCaseOptions] = useState("no-change");

  // Handle onChange func List A
  const handleChange = (event) => {
    let data = event.target.value;
    let list = data.split("\n");
    let dupCounts = {};

    if (list[list.length - 1] === "") {
      list.length--;
    } else {
      let linesA = list.filter((e) => e.replace(/(\r\n|\n|\r)/gm, ""));
      let count = linesA.length;
      setListALines(count);
    }

    // Find dups
    let linesA = list.filter((e) => e.replace(/(\r\n|\n|\r)/gm, ""));
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
    let data = event.target.value;
    let listData = data.split("\n");
    let dupCounts = {};

    if (listData[listData.length - 1] === "") {
      listData.length--;
    } else {
      let linesA = listData.filter((e) => e.replace(/(\r\n|\n|\r)/gm, ""));
      let count = linesA.length;
      setLinesB(count);
    }

    // Find dups
    let linesA = listData.filter((e) => e.replace(/(\r\n|\n|\r)/gm, ""));
    linesA.forEach((dup) => {
      dupCounts[dup] = (dupCounts[dup] || 0) + 1;
      let dups = Object.keys(dupCounts).filter((e) => {
        return dupCounts[e] > 1;
      });
      setListBDuplicates(dups.length);
    });

    setListDataB(event.target.value);
  };

  // OnChange List A Only func lines
  const handleChangeAOnly = (event) => {
    let data = event.target.value;
    let listData = data.split("\n");

    if (listData[listData.length - 1] === "") {
      listData.length--;
    } else {
      let linesA = listData.filter((e) => e.replace(/(\r\n|\n|\r)/gm, ""));
      let count = linesA.length;
      setAOnlyLines(count);
    }
    setListDataAOnly(event.target.value);
  };

  // OnChange List Duplicates func lines
  const handleChangeDups = (event) => {
    let data = event.target.value;
    let listData = data.split("\n");

    if (listData[listData.length - 1] === "") {
      listData.length--;
    } else {
      let linesA = listData.filter((e) => e.replace(/(\r\n|\n|\r)/gm, ""));
      let count = linesA.length;
      setDuplicatesLines(count);
    }
    setListAnBDups(event.target.value);
  };

  // OnChange List B Only func lines
  const handleChangeBOnly = (event) => {
    let data = event.target.value;
    let listData = data.split("\n");

    if (listData[listData.length - 1] === "") {
      listData.length--;
    } else {
      let linesA = listData.filter((e) => e.replace(/(\r\n|\n|\r)/gm, ""));
      let count = linesA.length;
      setOnlyBLines(count);
    }
    setListDataBOnly(event.target.value);
  };

  // OnChange List AuB func lines
  const handleChangeAuB = (event) => {
    let data = event.target.value;
    let listData = data.split("\n");

    if (listData[listData.length - 1] === "") {
      listData.length--;
    } else {
      let linesA = listData.filter((e) => e.replace(/(\r\n|\n|\r)/gm, ""));
      let count = linesA.length;
      setAuBLines(count);
    }
    setListDataAuB(event.target.value);
  };

  // Get data func
  const getData = () => {
    if (listDataA && listDataB) {
      if (
        caseSensitive &&
        ignoreBeginSpaces &&
        ignoreExtraSpaces &&
        !ignoreLeadingZeros
      ) {
        // Make Array
        const listDataAArr = listDataA
          .replace(/\r\n\s/gm, "\n")
          .split("\n")
          .map((el) => el.trim());

        const listDataBArr = listDataB
          .replace(/\r\n\s/gm, "\n")
          .split("\n")
          .map((el) => el.trim());

        // Remove extra spaces
        const listAA = listDataAArr.map((item) => item.replace(/\s{2,}/g, " "));
        const listBB = listDataBArr.map((item) => item.replace(/\s{2,}/g, " "));

        // Filter empty values
        const listA = listAA.filter((item) => item.length > 0);
        const listB = listBB.filter((item) => item.length > 0);

        // List data A only
        const listAOnly = listA.filter((val) => !listB.includes(val));
        const newListA = [...new Set(listAOnly)];

        // Check for duplicates
        const duplicates = listA.filter((element) => listB.includes(element));
        const cleanedDups = [...new Set(duplicates)];

        // List data B only
        const listBOnly = listB.filter((val) => !listA.includes(val));
        const newListB = [...new Set(listBOnly)];

        // All items
        const listAuB = listAA.concat(listBB);
        const list = listAuB.filter((listItem) => listItem.length > 0);
        const cleanedAuBList = list.filter(
          (val, index) => listAuB.indexOf(val) === index
        );

        //Sort conditions & Case options
        if (sortOptions === "no-sort" && caseOptions === "capitalize") {
          // List A
          const lowercaseList = newListA.map((el) => el.toLowerCase());
          const capitalizedList = lowercaseList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          const capitalizedAnB = lowercaseAnB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const lowercaseB = newListB.map((el) => el.toLowerCase());
          const capitalizedListB = lowercaseB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());
          const capitalizedAuB = lowercaseAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(capitalizedAnB.join("\n"));
          setListDataBOnly(capitalizedListB.join("\r\n"));
          setListDataAuB(capitalizedAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "uppercase") {
          // List A
          const capitalizedList = newListA.map((el) => el.toUpperCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toUpperCase());
          // List B
          const uppercaseListB = newListB.map((el) => el.toUpperCase());
          // Both list
          const uppercaseAuB = cleanedAuBList.map((el) => el.toUpperCase());

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(uppercaseListB.join("\n"));
          setListDataAuB(uppercaseAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "lowercase") {
          // List A
          const lowercaseListA = newListA.map((el) => el.toLowerCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          // List B
          const lowercaseListB = newListB.map((el) => el.toLowerCase());
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());

          setListDataAOnly(lowercaseListA.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(lowercaseListB.join("\n"));
          setListDataAuB(lowercaseAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "no-change") {
          // List A
          const sortedListA = newListA.sort();
          // List AnB
          const sortedListDups = cleanedDups.sort();
          // List B
          const sortedListB = newListB.sort();
          // Both list
          const sortedListAuB = cleanedAuBList.sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListDups.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "capitalize") {
          // List A
          const sortedList = newListA.map((el) => el.toLowerCase()).sort();
          const capitalizedList = sortedList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const sortedListBCaps = newListB.map((el) => el.toLowerCase()).sort();
          const capitalizedListBCaps = sortedListBCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const sortedListDupsCaps = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          const listDupsCaps = sortedListDupsCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();
          const capitalizedListAuB = sortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(listDupsCaps.join("\n"));
          setListDataBOnly(capitalizedListBCaps.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "uppercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toUpperCase()).sort();
          // List B
          const sortedListB = newListB.map((el) => el.toUpperCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toUpperCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "lowercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toLowerCase()).sort();
          // ListB
          const sortedListB = newListB.map((el) => el.toLowerCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups.map((el) => el.toLowerCase());
          // List Aub
          const sortedListAuB = cleanedAuBList.map((el) => el.toLowerCase());

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "no-change") {
          // List A
          const descSortedListA = newListA.sort().reverse();
          // List B
          const descSortedListB = newListB.sort().reverse();
          // List Dups
          const descSortedListAnB = cleanedDups.sort().reverse();
          // List AuB
          const descSortedList = cleanedAuBList.sort().reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListAnB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedList.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "capitalize") {
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListA = descSortedListA.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListB = descSortedListB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListDups = descSortedListDups.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListAuB = descSortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          setListDataAOnly(capitalizedListA.join("\n"));
          setListAnBDups(capitalizedListDups.join("\n"));
          setListDataBOnly(capitalizedListB.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "uppercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "lowercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
        } else {
          setListDataAOnly(newListA.join("\n"));
          setListAnBDups(cleanedDups.join("\n"));
          setListDataBOnly(newListB.join("\n"));
          setListDataAuB(cleanedAuBList.join("\r\n"));
        }
        setAOnlyLines(newListA.length);
        setDuplicatesLines(cleanedDups.length);
        setOnlyBLines(newListB.length);
        setAuBLines(cleanedAuBList.length);
      } else if (
        caseSensitive &&
        !ignoreBeginSpaces &&
        ignoreExtraSpaces &&
        !ignoreLeadingZeros
      ) {
        // Make Array
        const listDataAArr = listDataA.replace(/\r\n/gm, "\n").split("\n");
        const listDataBArr = listDataB.replace(/\r\n/gm, "\n").split("\n");

        // Remove extra spaces
        const listAA = listDataAArr.map((item) => item.replace(/\s{2,}/g, " "));
        const listBB = listDataBArr.map((item) => item.replace(/\s{2,}/g, " "));

        // Filter empty values
        const listA = listAA.filter((item) => item.length > 0);
        const listB = listBB.filter((item) => item.length > 0);

        // List data A only
        const listAOnly = listA.filter((val) => !listB.includes(val));
        const newListA = [...new Set(listAOnly)];

        // List data B only
        const listBOnly = listB.filter((val) => !listA.includes(val));
        const newListB = [...new Set(listBOnly)];

        // Check for duplicates
        const duplicates = listA.filter((element) => listB.includes(element));
        const cleanedDups = [...new Set(duplicates)];

        // All items
        const listAuB = listAA.concat(listBB);
        const list = listAuB.filter((listItem) => listItem.length > 0);
        const cleanedAuBList = list.filter(
          (val, index) => listAuB.indexOf(val) === index
        );

        //Sort conditions & Case options
        if (sortOptions === "no-sort" && caseOptions === "capitalize") {
          // List A
          const lowercaseList = newListA.map((el) => el.toLowerCase());
          const capitalizedList = lowercaseList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          const capitalizedAnB = lowercaseAnB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const lowercaseB = newListB.map((el) => el.toLowerCase());
          const capitalizedListB = lowercaseB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());
          const capitalizedAuB = lowercaseAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(capitalizedAnB.join("\n"));
          setListDataBOnly(capitalizedListB.join("\r\n"));
          setListDataAuB(capitalizedAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "uppercase") {
          // List A
          const capitalizedList = newListA.map((el) => el.toUpperCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toUpperCase());
          // List B
          const uppercaseListB = newListB.map((el) => el.toUpperCase());
          // Both list
          const uppercaseAuB = cleanedAuBList.map((el) => el.toUpperCase());

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(uppercaseListB.join("\n"));
          setListDataAuB(uppercaseAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "lowercase") {
          // List A
          const lowercaseListA = newListA.map((el) => el.toLowerCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          // List B
          const lowercaseListB = newListB.map((el) => el.toLowerCase());
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());

          setListDataAOnly(lowercaseListA.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(lowercaseListB.join("\n"));
          setListDataAuB(lowercaseAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "no-change") {
          // List A
          const sortedListA = newListA.sort();
          // List AnB
          const sortedListDups = cleanedDups.sort();
          // List B
          const sortedListB = newListB.sort();
          // Both list
          const sortedListAuB = cleanedAuBList.sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListDups.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "capitalize") {
          // List A
          const sortedList = newListA.map((el) => el.toLowerCase()).sort();
          const capitalizedList = sortedList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const sortedListBCaps = newListB.map((el) => el.toLowerCase()).sort();
          const capitalizedListBCaps = sortedListBCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const sortedListDupsCaps = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          const listDupsCaps = sortedListDupsCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();
          const capitalizedListAuB = sortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(listDupsCaps.join("\n"));
          setListDataBOnly(capitalizedListBCaps.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "uppercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toUpperCase()).sort();
          // List B
          const sortedListB = newListB.map((el) => el.toUpperCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toUpperCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "lowercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toLowerCase()).sort();
          // ListB
          const sortedListB = newListB.map((el) => el.toLowerCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups.map((el) => el.toLowerCase());
          // List Aub
          const sortedListAuB = cleanedAuBList.map((el) => el.toLowerCase());

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "no-change") {
          // List A
          const descSortedListA = newListA.sort().reverse();
          // List B
          const descSortedListB = newListB.sort().reverse();
          // List Dups
          const descSortedListAnB = cleanedDups.sort().reverse();
          // List AuB
          const descSortedList = cleanedAuBList.sort().reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListAnB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedList.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "capitalize") {
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListA = descSortedListA.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListB = descSortedListB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListDups = descSortedListDups.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListAuB = descSortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          setListDataAOnly(capitalizedListA.join("\n"));
          setListAnBDups(capitalizedListDups.join("\n"));
          setListDataBOnly(capitalizedListB.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "uppercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "lowercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
        } else {
          setListDataAOnly(newListA.join("\n"));
          setListAnBDups(cleanedDups.join("\n"));
          setListDataBOnly(newListB.join("\n"));
          setListDataAuB(cleanedAuBList.join("\r\n"));
        }
        setDuplicatesLines(cleanedDups.length);
        setAOnlyLines(newListA.length);
        setOnlyBLines(newListB.length);
        setAuBLines(cleanedAuBList.length);
      } else if (
        caseSensitive &&
        !ignoreBeginSpaces &&
        !ignoreExtraSpaces &&
        !ignoreLeadingZeros
      ) {
        // Make Array
        const listDataAArr = listDataA.replace(/\r\n/gm, "\n").split("\n");
        const listDataBArr = listDataB.replace(/\r\n/gm, "\n").split("\n");

        // Filter empty values
        const listA = listDataAArr.filter((item) => item.length > 0);
        const listB = listDataBArr.filter((item) => item.length > 0);

        // List data A only
        const listAOnly = listA.filter((val) => !listB.includes(val));
        const newListA = [...new Set(listAOnly)];
        // List data B only
        const listBOnly = listB.filter((val) => !listA.includes(val));
        const newListB = [...new Set(listBOnly)];
        // Check for duplicates
        const duplicates = listA.filter((element) => listB.includes(element));
        const cleanedDups = [...new Set(duplicates)];
        // All items
        const listAuB = listDataAArr.concat(listDataBArr);
        const list = listAuB.filter((listItem) => listItem.length > 0);
        const cleanedAuBList = list.filter(
          (val, index) => listAuB.indexOf(val) === index
        );

        //Sort conditions & Case options
        if (sortOptions === "no-sort" && caseOptions === "capitalize") {
          // List A
          const lowercaseList = newListA.map((el) => el.toLowerCase());
          const capitalizedList = lowercaseList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          const capitalizedAnB = lowercaseAnB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const lowercaseB = newListB.map((el) => el.toLowerCase());
          const capitalizedListB = lowercaseB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());
          const capitalizedAuB = lowercaseAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(capitalizedAnB.join("\n"));
          setListDataBOnly(capitalizedListB.join("\r\n"));
          setListDataAuB(capitalizedAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "uppercase") {
          // List A
          const capitalizedList = newListA.map((el) => el.toUpperCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toUpperCase());
          // List B
          const uppercaseListB = newListB.map((el) => el.toUpperCase());
          // Both list
          const uppercaseAuB = cleanedAuBList.map((el) => el.toUpperCase());

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(uppercaseListB.join("\n"));
          setListDataAuB(uppercaseAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "lowercase") {
          // List A
          const lowercaseListA = newListA.map((el) => el.toLowerCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          // List B
          const lowercaseListB = newListB.map((el) => el.toLowerCase());
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());

          setListDataAOnly(lowercaseListA.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(lowercaseListB.join("\n"));
          setListDataAuB(lowercaseAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "no-change") {
          // List A
          const sortedListA = newListA.sort();
          // List AnB
          const sortedListDups = cleanedDups.sort();
          // List B
          const sortedListB = newListB.sort();
          // Both list
          const sortedListAuB = cleanedAuBList.sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListDups.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "capitalize") {
          // List A
          const sortedList = newListA.map((el) => el.toLowerCase()).sort();
          const capitalizedList = sortedList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const sortedListBCaps = newListB.map((el) => el.toLowerCase()).sort();
          const capitalizedListBCaps = sortedListBCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const sortedListDupsCaps = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          const listDupsCaps = sortedListDupsCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();
          const capitalizedListAuB = sortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(listDupsCaps.join("\n"));
          setListDataBOnly(capitalizedListBCaps.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "uppercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toUpperCase()).sort();
          // List B
          const sortedListB = newListB.map((el) => el.toUpperCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toUpperCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "lowercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toLowerCase()).sort();
          // ListB
          const sortedListB = newListB.map((el) => el.toLowerCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "no-change") {
          // List A
          const descSortedListA = newListA.sort().reverse();
          // List B
          const descSortedListB = newListB.sort().reverse();
          // List Dups
          const descSortedListAnB = cleanedDups.sort().reverse();
          // List AuB
          const descSortedList = cleanedAuBList.sort().reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListAnB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedList.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "capitalize") {
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListA = descSortedListA.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListB = descSortedListB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListDups = descSortedListDups.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListAuB = descSortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          setListDataAOnly(capitalizedListA.join("\n"));
          setListAnBDups(capitalizedListDups.join("\n"));
          setListDataBOnly(capitalizedListB.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "uppercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "lowercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
        } else {
          setListDataAOnly(newListA.join("\n"));
          setListAnBDups(cleanedDups.join("\n"));
          setListDataBOnly(newListB.join("\n"));
          setListDataAuB(cleanedAuBList.join("\r\n"));
        }
        setAOnlyLines(newListA.length);
        setOnlyBLines(newListB.length);
        setDuplicatesLines(cleanedDups.length);
        setAuBLines(cleanedAuBList.length);
      } else if (
        caseSensitive &&
        ignoreBeginSpaces &&
        !ignoreExtraSpaces &&
        !ignoreLeadingZeros
      ) {
        // Make Array
        const listDataAArr = listDataA
          .replace(/\r\n/gm, "\n")
          .split("\n")
          .map((el) => el.trim());

        const listDataBArr = listDataB
          .replace(/\r\n/gm, "\n")
          .split("\n")
          .map((el) => el.trim());

        // Filter empty values
        const listA = listDataAArr.filter((item) => item.length > 0);
        const listB = listDataBArr.filter((item) => item.length > 0);

        // List data A only
        const listAOnly = listA.filter((val) => !listB.includes(val));
        const newListA = [...new Set(listAOnly)];
        // List data B only
        const listBOnly = listB.filter((val) => !listA.includes(val));
        const newListB = [...new Set(listBOnly)];
        // Check for duplicates
        const duplicates = listA.filter((element) => listB.includes(element));
        const cleanedDups = [...new Set(duplicates)];
        // All items
        const listAuB = listDataAArr.concat(listDataBArr);
        const list = listAuB.filter((listItem) => listItem.length > 0);
        const cleanedAuBList = list.filter(
          (val, index) => listAuB.indexOf(val) === index
        );
        //Sort conditions & Case options
        if (sortOptions === "no-sort" && caseOptions === "capitalize") {
          // List A
          const lowercaseList = newListA.map((el) => el.toLowerCase());
          const capitalizedList = lowercaseList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          const capitalizedAnB = lowercaseAnB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const lowercaseB = newListB.map((el) => el.toLowerCase());
          const capitalizedListB = lowercaseB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());
          const capitalizedAuB = lowercaseAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(capitalizedAnB.join("\n"));
          setListDataBOnly(capitalizedListB.join("\r\n"));
          setListDataAuB(capitalizedAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "uppercase") {
          // List A
          const capitalizedList = newListA.map((el) => el.toUpperCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toUpperCase());
          // List B
          const uppercaseListB = newListB.map((el) => el.toUpperCase());
          // Both list
          const uppercaseAuB = cleanedAuBList.map((el) => el.toUpperCase());

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(uppercaseListB.join("\n"));
          setListDataAuB(uppercaseAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "lowercase") {
          // List A
          const lowercaseListA = newListA.map((el) => el.toLowerCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          // List B
          const lowercaseListB = newListB.map((el) => el.toLowerCase());
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());

          setListDataAOnly(lowercaseListA.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(lowercaseListB.join("\n"));
          setListDataAuB(lowercaseAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "no-change") {
          // List A
          const sortedListA = newListA.sort();
          // List AnB
          const sortedListDups = cleanedDups.sort();
          // List B
          const sortedListB = newListB.sort();
          // Both list
          const sortedListAuB = cleanedAuBList.sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListDups.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "capitalize") {
          // List A
          const sortedList = newListA.map((el) => el.toLowerCase()).sort();
          const capitalizedList = sortedList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const sortedListBCaps = newListB.map((el) => el.toLowerCase()).sort();
          const capitalizedListBCaps = sortedListBCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const sortedListDupsCaps = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          const listDupsCaps = sortedListDupsCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();
          const capitalizedListAuB = sortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(listDupsCaps.join("\n"));
          setListDataBOnly(capitalizedListBCaps.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "uppercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toUpperCase()).sort();
          // List B
          const sortedListB = newListB.map((el) => el.toUpperCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toUpperCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "lowercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toLowerCase()).sort();
          // ListB
          const sortedListB = newListB.map((el) => el.toLowerCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "no-change") {
          // List A
          const descSortedListA = newListA.sort().reverse();
          // List B
          const descSortedListB = newListB.sort().reverse();
          // List Dups
          const descSortedListAnB = cleanedDups.sort().reverse();
          // List AuB
          const descSortedList = cleanedAuBList.sort().reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListAnB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedList.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "capitalize") {
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListA = descSortedListA.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListB = descSortedListB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListDups = descSortedListDups.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListAuB = descSortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          setListDataAOnly(capitalizedListA.join("\n"));
          setListAnBDups(capitalizedListDups.join("\n"));
          setListDataBOnly(capitalizedListB.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "uppercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "lowercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
        } else {
          setListDataAOnly(newListA.join("\n"));
          setListAnBDups(cleanedDups.join("\n"));
          setListDataBOnly(newListB.join("\n"));
          setListDataAuB(cleanedAuBList.join("\r\n"));
        }
        setDuplicatesLines(cleanedDups.length);
        setAOnlyLines(newListA.length);
        setOnlyBLines(newListB.length);
        setAuBLines(cleanedAuBList.length);
      } else if (
        ignoreBeginSpaces &&
        !caseSensitive &&
        ignoreExtraSpaces &&
        !ignoreLeadingZeros
      ) {
        // Make Array
        const listDataAArr = listDataA
          .toLowerCase()
          .replace(/\r\n/gm, "\n")
          .split("\n")
          .map((el) => el.trim());

        const listDataBArr = listDataB
          .toLowerCase()
          .replace(/\r\n/gm, "\n")
          .split("\n")
          .map((el) => el.trim());

        // Remove extra spaces
        const listAA = listDataAArr.map((item) => item.replace(/\s{2,}/g, " "));
        const listBB = listDataBArr.map((item) => item.replace(/\s{2,}/g, " "));

        // Filter empty values
        const listA = listAA.filter((item) => item.length > 0);
        const listB = listBB.filter((item) => item.length > 0);

        // List data A only
        const listAOnly = listA.filter((val) => !listB.includes(val));
        const newListA = [...new Set(listAOnly)];

        // List data B only
        const listBOnly = listB.filter((val) => !listA.includes(val));
        const newListB = [...new Set(listBOnly)];

        // Check for duplicates
        const duplicates = listA.filter((element) => listB.includes(element));
        const cleanedDups = [...new Set(duplicates)];

        // All items
        const listAuB = listAA.concat(listBB);
        const list = listAuB.filter((listItem) => listItem.length > 0);
        const cleanedAuBList = list.filter(
          (val, index) => listAuB.indexOf(val) === index
        );

        // Sort and Case options
        if (sortOptions === "no-sort" && caseOptions === "capitalize") {
          // List A
          const lowercaseList = newListA.map((el) => el.toLowerCase());
          const capitalizedList = lowercaseList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          const capitalizedAnB = lowercaseAnB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const lowercaseB = newListB.map((el) => el.toLowerCase());
          const capitalizedListB = lowercaseB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());
          const capitalizedAuB = lowercaseAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(capitalizedAnB.join("\n"));
          setListDataBOnly(capitalizedListB.join("\r\n"));
          setListDataAuB(capitalizedAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "uppercase") {
          // List A
          const capitalizedList = newListA.map((el) => el.toUpperCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toUpperCase());
          // List B
          const uppercaseListB = newListB.map((el) => el.toUpperCase());
          // Both list
          const uppercaseAuB = cleanedAuBList.map((el) => el.toUpperCase());

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(uppercaseListB.join("\n"));
          setListDataAuB(uppercaseAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "lowercase") {
          // List A
          const lowercaseListA = newListA.map((el) => el.toLowerCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          // List B
          const lowercaseListB = newListB.map((el) => el.toLowerCase());
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());

          setListDataAOnly(lowercaseListA.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(lowercaseListB.join("\n"));
          setListDataAuB(lowercaseAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "no-change") {
          // List A
          const sortedListA = newListA.sort();
          // List AnB
          const sortedListDups = cleanedDups.sort();
          // List B
          const sortedListB = newListB.sort();
          // Both list
          const sortedListAuB = cleanedAuBList.sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListDups.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "capitalize") {
          // List A
          const sortedList = newListA.map((el) => el.toLowerCase()).sort();
          const capitalizedList = sortedList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const sortedListBCaps = newListB.map((el) => el.toLowerCase()).sort();
          const capitalizedListBCaps = sortedListBCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const sortedListDupsCaps = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          const listDupsCaps = sortedListDupsCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();
          const capitalizedListAuB = sortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(listDupsCaps.join("\n"));
          setListDataBOnly(capitalizedListBCaps.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "uppercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toUpperCase()).sort();
          // List B
          const sortedListB = newListB.map((el) => el.toUpperCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toUpperCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "lowercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toLowerCase()).sort();
          // ListB
          const sortedListB = newListB.map((el) => el.toLowerCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "no-change") {
          // List A
          const descSortedListA = newListA.sort().reverse();
          // List B
          const descSortedListB = newListB.sort().reverse();
          // List Dups
          const descSortedListAnB = cleanedDups.sort().reverse();
          // List AuB
          const descSortedList = cleanedAuBList.sort().reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListAnB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedList.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "capitalize") {
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListA = descSortedListA.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListB = descSortedListB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListDups = descSortedListDups.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListAuB = descSortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          setListDataAOnly(capitalizedListA.join("\n"));
          setListAnBDups(capitalizedListDups.join("\n"));
          setListDataBOnly(capitalizedListB.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "uppercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "lowercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
        } else {
          setListDataAOnly(newListA.join("\n"));
          setListAnBDups(cleanedDups.join("\n"));
          setListDataBOnly(newListB.join("\n"));
          setListDataAuB(cleanedAuBList.join("\r\n"));
        }

        setAOnlyLines(newListA.length);
        setDuplicatesLines(cleanedDups.length);
        setOnlyBLines(newListB.length);
        setAuBLines(cleanedAuBList.length);
      } else if (
        ignoreBeginSpaces &&
        !caseSensitive &&
        !ignoreExtraSpaces &&
        !ignoreLeadingZeros
      ) {
        // Make Array
        const listDataAArr = listDataA
          .toLowerCase()
          .replace(/\r\n/gm, "\n")
          .split("\n")
          .map((el) => el.trim());

        const listDataBArr = listDataB
          .toLowerCase()
          .replace(/\r\n/gm, "\n")
          .split("\n")
          .map((el) => el.trim());

        // Filter empty values
        const listA = listDataAArr.filter((item) => item.length > 0);
        const listB = listDataBArr.filter((item) => item.length > 0);

        // List data A only
        const listAOnly = listA.filter((val) => !listB.includes(val));
        const newListA = [...new Set(listAOnly)];

        // List data B only
        const listBOnly = listB.filter((val) => !listA.includes(val));
        const newListB = [...new Set(listBOnly)];

        // Check for duplicates
        const duplicates = listA.filter((element) => listB.includes(element));
        const cleanedDups = [...new Set(duplicates)];

        // All items
        const listAuB = listDataAArr.concat(listDataBArr);
        const list = listAuB.filter((listItem) => listItem.length > 0);
        const cleanedAuBList = list.filter(
          (val, index) => listAuB.indexOf(val) === index
        );

        // Sort and Case options
        if (sortOptions === "no-sort" && caseOptions === "capitalize") {
          // List A
          const lowercaseList = newListA.map((el) => el.toLowerCase());
          const capitalizedList = lowercaseList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          const capitalizedAnB = lowercaseAnB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const lowercaseB = newListB.map((el) => el.toLowerCase());
          const capitalizedListB = lowercaseB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());
          const capitalizedAuB = lowercaseAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(capitalizedAnB.join("\n"));
          setListDataBOnly(capitalizedListB.join("\r\n"));
          setListDataAuB(capitalizedAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "uppercase") {
          // List A
          const capitalizedList = newListA.map((el) => el.toUpperCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toUpperCase());
          // List B
          const uppercaseListB = newListB.map((el) => el.toUpperCase());
          // Both list
          const uppercaseAuB = cleanedAuBList.map((el) => el.toUpperCase());

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(uppercaseListB.join("\n"));
          setListDataAuB(uppercaseAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "lowercase") {
          // List A
          const lowercaseListA = newListA.map((el) => el.toLowerCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          // List B
          const lowercaseListB = newListB.map((el) => el.toLowerCase());
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());

          setListDataAOnly(lowercaseListA.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(lowercaseListB.join("\n"));
          setListDataAuB(lowercaseAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "no-change") {
          // List A
          const sortedListA = newListA.sort();
          // List AnB
          const sortedListDups = cleanedDups.sort();
          // List B
          const sortedListB = newListB.sort();
          // Both list
          const sortedListAuB = cleanedAuBList.sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListDups.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "capitalize") {
          // List A
          const sortedList = newListA.map((el) => el.toLowerCase()).sort();
          const capitalizedList = sortedList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const sortedListBCaps = newListB.map((el) => el.toLowerCase()).sort();
          const capitalizedListBCaps = sortedListBCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const sortedListDupsCaps = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          const listDupsCaps = sortedListDupsCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();
          const capitalizedListAuB = sortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(listDupsCaps.join("\n"));
          setListDataBOnly(capitalizedListBCaps.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "uppercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toUpperCase()).sort();
          // List B
          const sortedListB = newListB.map((el) => el.toUpperCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toUpperCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "lowercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toLowerCase()).sort();
          // ListB
          const sortedListB = newListB.map((el) => el.toLowerCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "no-change") {
          // List A
          const descSortedListA = newListA.sort().reverse();
          // List B
          const descSortedListB = newListB.sort().reverse();
          // List Dups
          const descSortedListAnB = cleanedDups.sort().reverse();
          // List AuB
          const descSortedList = cleanedAuBList.sort().reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListAnB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedList.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "capitalize") {
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListA = descSortedListA.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListB = descSortedListB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListDups = descSortedListDups.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListAuB = descSortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          setListDataAOnly(capitalizedListA.join("\n"));
          setListAnBDups(capitalizedListDups.join("\n"));
          setListDataBOnly(capitalizedListB.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "uppercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "lowercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
        } else {
          setListDataAOnly(newListA.join("\n"));
          setListAnBDups(cleanedDups.join("\n"));
          setListDataBOnly(newListB.join("\n"));
          setListDataAuB(cleanedAuBList.join("\r\n"));
        }

        setAOnlyLines(newListA.length);
        setOnlyBLines(newListB.length);
        setDuplicatesLines(cleanedDups.length);
        setAuBLines(cleanedAuBList.length);
      } else if (
        !caseSensitive &&
        !ignoreBeginSpaces &&
        ignoreExtraSpaces &&
        !ignoreLeadingZeros
      ) {
        // Make Array
        const listDataAArr = listDataA
          .toLowerCase()
          .replace(/\r\n/gm, "\n")
          .split("\n");

        const listDataBArr = listDataB
          .toLowerCase()
          .replace(/\r\n/gm, "\n")
          .split("\n");

        // Remove extra spaces
        const listAA = listDataAArr.map((item) => item.replace(/\s{2,}/g, " "));
        const listBB = listDataBArr.map((item) => item.replace(/\s{2,}/g, " "));

        // Filter empty values
        const listA = listAA.filter((item) => item.length > 0);
        const listB = listBB.filter((item) => item.length > 0);

        // List data A only
        const listAOnly = listA.filter((val) => !listB.includes(val));
        const newListA = [...new Set(listAOnly)];

        // List data B only
        const listBOnly = listB.filter((val) => !listA.includes(val));
        const newListB = [...new Set(listBOnly)];

        // Check for duplicates
        const duplicates = listA.filter((element) => listB.includes(element));
        const cleanedDups = [...new Set(duplicates)];

        // All items
        const listAuB = listAA.concat(listBB);
        const list = listAuB.filter((listItem) => listItem.length > 0);
        const cleanedAuBList = list.filter(
          (val, index) => listAuB.indexOf(val) === index
        );

        // Sort and Case options
        if (sortOptions === "no-sort" && caseOptions === "capitalize") {
          // List A
          const lowercaseList = newListA.map((el) => el.toLowerCase());
          const capitalizedList = lowercaseList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          const capitalizedAnB = lowercaseAnB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const lowercaseB = newListB.map((el) => el.toLowerCase());
          const capitalizedListB = lowercaseB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());
          const capitalizedAuB = lowercaseAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(capitalizedAnB.join("\n"));
          setListDataBOnly(capitalizedListB.join("\r\n"));
          setListDataAuB(capitalizedAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "uppercase") {
          // List A
          const capitalizedList = newListA.map((el) => el.toUpperCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toUpperCase());
          // List B
          const uppercaseListB = newListB.map((el) => el.toUpperCase());
          // Both list
          const uppercaseAuB = cleanedAuBList.map((el) => el.toUpperCase());

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(uppercaseListB.join("\n"));
          setListDataAuB(uppercaseAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "lowercase") {
          // List A
          const lowercaseListA = newListA.map((el) => el.toLowerCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          // List B
          const lowercaseListB = newListB.map((el) => el.toLowerCase());
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());

          setListDataAOnly(lowercaseListA.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(lowercaseListB.join("\n"));
          setListDataAuB(lowercaseAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "no-change") {
          // List A
          const sortedListA = newListA.sort();
          // List AnB
          const sortedListDups = cleanedDups.sort();
          // List B
          const sortedListB = newListB.sort();
          // Both list
          const sortedListAuB = cleanedAuBList.sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListDups.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "capitalize") {
          // List A
          const sortedList = newListA.map((el) => el.toLowerCase()).sort();
          const capitalizedList = sortedList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const sortedListBCaps = newListB.map((el) => el.toLowerCase()).sort();
          const capitalizedListBCaps = sortedListBCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const sortedListDupsCaps = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          const listDupsCaps = sortedListDupsCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();
          const capitalizedListAuB = sortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(listDupsCaps.join("\n"));
          setListDataBOnly(capitalizedListBCaps.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "uppercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toUpperCase()).sort();
          // List B
          const sortedListB = newListB.map((el) => el.toUpperCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toUpperCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "lowercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toLowerCase()).sort();
          // ListB
          const sortedListB = newListB.map((el) => el.toLowerCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "no-change") {
          // List A
          const descSortedListA = newListA.sort().reverse();
          // List B
          const descSortedListB = newListB.sort().reverse();
          // List Dups
          const descSortedListAnB = cleanedDups.sort().reverse();
          // List AuB
          const descSortedList = cleanedAuBList.sort().reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListAnB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedList.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "capitalize") {
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListA = descSortedListA.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListB = descSortedListB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListDups = descSortedListDups.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListAuB = descSortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          setListDataAOnly(capitalizedListA.join("\n"));
          setListAnBDups(capitalizedListDups.join("\n"));
          setListDataBOnly(capitalizedListB.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "uppercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "lowercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
        } else {
          setListDataAOnly(newListA.join("\n"));
          setListAnBDups(cleanedDups.join("\n"));
          setListDataBOnly(newListB.join("\n"));
          setListDataAuB(cleanedAuBList.join("\r\n"));
        }

        setDuplicatesLines(cleanedDups.length);
        setOnlyBLines(newListB.length);
        setAOnlyLines(newListA.length);
        setAuBLines(cleanedAuBList.length);
      } else if (
        caseSensitive &&
        ignoreBeginSpaces &&
        ignoreExtraSpaces &&
        ignoreLeadingZeros
      ) {
        // Make Array
        const listDataAArr = listDataA
          .replace(/\r\n\s/gm, "\n")
          .split("\n")
          .map((el) => el.trim());

        const listDataBArr = listDataB
          .replace(/\r\n\s/gm, "\n")
          .split("\n")
          .map((el) => el.trim());

        // Remove extra spaces
        const listAA = listDataAArr.map((item) =>
          item.replace(/\s{2,}|^0+/g, " ").trim()
        );
        const listBB = listDataBArr.map((item) =>
          item.replace(/\s{2,}|^0+/g, " ").trim()
        );

        // Filter empty values
        const listA = listAA.filter((item) => item.length > 0);
        const listB = listBB.filter((item) => item.length > 0);

        // List data A only
        const listAOnly = listA.filter((val) => !listB.includes(val));
        const newListA = [...new Set(listAOnly)];

        // List data B only
        const listBOnly = listB.filter((val) => !listA.includes(val));
        const newListB = [...new Set(listBOnly)];

        // Check for duplicates
        const duplicates = listA.filter((element) => listB.includes(element));
        const cleanedDups = [...new Set(duplicates)];

        // All items
        const listAuB = listAA.concat(listBB);
        const list = listAuB.filter((listItem) => listItem.length > 0);
        const cleanedAuBList = list.filter(
          (val, index) => listAuB.indexOf(val) === index
        );

        // Sort and Case options
        if (sortOptions === "no-sort" && caseOptions === "capitalize") {
          // List A
          const lowercaseList = newListA.map((el) => el.toLowerCase());
          const capitalizedList = lowercaseList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          const capitalizedAnB = lowercaseAnB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const lowercaseB = newListB.map((el) => el.toLowerCase());
          const capitalizedListB = lowercaseB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());
          const capitalizedAuB = lowercaseAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(capitalizedAnB.join("\n"));
          setListDataBOnly(capitalizedListB.join("\r\n"));
          setListDataAuB(capitalizedAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "uppercase") {
          // List A
          const capitalizedList = newListA.map((el) => el.toUpperCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toUpperCase());
          // List B
          const uppercaseListB = newListB.map((el) => el.toUpperCase());
          // Both list
          const uppercaseAuB = cleanedAuBList.map((el) => el.toUpperCase());

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(uppercaseListB.join("\n"));
          setListDataAuB(uppercaseAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "lowercase") {
          // List A
          const lowercaseListA = newListA.map((el) => el.toLowerCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          // List B
          const lowercaseListB = newListB.map((el) => el.toLowerCase());
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());

          setListDataAOnly(lowercaseListA.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(lowercaseListB.join("\n"));
          setListDataAuB(lowercaseAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "no-change") {
          // List A
          const sortedListA = newListA.sort();
          // List AnB
          const sortedListDups = cleanedDups.sort();
          // List B
          const sortedListB = newListB.sort();
          // Both list
          const sortedListAuB = cleanedAuBList.sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListDups.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "capitalize") {
          // List A
          const sortedList = newListA.map((el) => el.toLowerCase()).sort();
          const capitalizedList = sortedList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const sortedListBCaps = newListB.map((el) => el.toLowerCase()).sort();
          const capitalizedListBCaps = sortedListBCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const sortedListDupsCaps = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          const listDupsCaps = sortedListDupsCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();
          const capitalizedListAuB = sortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(listDupsCaps.join("\n"));
          setListDataBOnly(capitalizedListBCaps.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "uppercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toUpperCase()).sort();
          // List B
          const sortedListB = newListB.map((el) => el.toUpperCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toUpperCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "lowercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toLowerCase()).sort();
          // ListB
          const sortedListB = newListB.map((el) => el.toLowerCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "no-change") {
          // List A
          const descSortedListA = newListA.sort().reverse();
          // List B
          const descSortedListB = newListB.sort().reverse();
          // List Dups
          const descSortedListAnB = cleanedDups.sort().reverse();
          // List AuB
          const descSortedList = cleanedAuBList.sort().reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListAnB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedList.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "capitalize") {
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListA = descSortedListA.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListB = descSortedListB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListDups = descSortedListDups.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListAuB = descSortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          setListDataAOnly(capitalizedListA.join("\n"));
          setListAnBDups(capitalizedListDups.join("\n"));
          setListDataBOnly(capitalizedListB.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "uppercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "lowercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
        } else {
          setListDataAOnly(newListA.join("\n"));
          setListAnBDups(cleanedDups.join("\n"));
          setListDataBOnly(newListB.join("\n"));
          setListDataAuB(cleanedAuBList.join("\r\n"));
        }

        setDuplicatesLines(cleanedDups.length);
        setOnlyBLines(newListB.length);
        setAOnlyLines(newListA.length);
        setAuBLines(cleanedAuBList.length);
      } else if (
        !caseSensitive &&
        ignoreBeginSpaces &&
        ignoreExtraSpaces &&
        ignoreLeadingZeros
      ) {
        // Make Array
        const listDataAArr = listDataA
          .toLowerCase()
          .replace(/\r\n\s/gm, "\n")
          .split("\n")
          .map((el) => el.trim());

        const listDataBArr = listDataB
          .toLowerCase()
          .replace(/\r\n\s/gm, "\n")
          .split("\n")
          .map((el) => el.trim());

        // Remove extra spaces
        const listAA = listDataAArr.map((item) =>
          item.replace(/\s{2,}|^0+/g, " ").trim()
        );
        const listBB = listDataBArr.map((item) =>
          item.replace(/\s{2,}|^0+/g, " ").trim()
        );

        // Filter empty values
        const listA = listAA.filter((item) => item.length > 0);
        const listB = listBB.filter((item) => item.length > 0);

        // List data A only
        const listAOnly = listA.filter((val) => !listB.includes(val));
        const newListA = [...new Set(listAOnly)];

        // List data B only
        const listBOnly = listB.filter((val) => !listA.includes(val));
        const newListB = [...new Set(listBOnly)];

        // Check for duplicates
        const duplicates = listA.filter((element) => listB.includes(element));
        const cleanedDups = [...new Set(duplicates)];

        // All items
        const listAuB = listAA.concat(listBB);
        const list = listAuB.filter((listItem) => listItem.length > 0);
        const cleanedAuBList = list.filter(
          (val, index) => listAuB.indexOf(val) === index
        );

        // Sort and Case options
        if (sortOptions === "no-sort" && caseOptions === "capitalize") {
          // List A
          const lowercaseList = newListA.map((el) => el.toLowerCase());
          const capitalizedList = lowercaseList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          const capitalizedAnB = lowercaseAnB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const lowercaseB = newListB.map((el) => el.toLowerCase());
          const capitalizedListB = lowercaseB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());
          const capitalizedAuB = lowercaseAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(capitalizedAnB.join("\n"));
          setListDataBOnly(capitalizedListB.join("\r\n"));
          setListDataAuB(capitalizedAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "uppercase") {
          // List A
          const capitalizedList = newListA.map((el) => el.toUpperCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toUpperCase());
          // List B
          const uppercaseListB = newListB.map((el) => el.toUpperCase());
          // Both list
          const uppercaseAuB = cleanedAuBList.map((el) => el.toUpperCase());

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(uppercaseListB.join("\n"));
          setListDataAuB(uppercaseAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "lowercase") {
          // List A
          const lowercaseListA = newListA.map((el) => el.toLowerCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          // List B
          const lowercaseListB = newListB.map((el) => el.toLowerCase());
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());

          setListDataAOnly(lowercaseListA.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(lowercaseListB.join("\n"));
          setListDataAuB(lowercaseAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "no-change") {
          // List A
          const sortedListA = newListA.sort();
          // List AnB
          const sortedListDups = cleanedDups.sort();
          // List B
          const sortedListB = newListB.sort();
          // Both list
          const sortedListAuB = cleanedAuBList.sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListDups.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "capitalize") {
          // List A
          const sortedList = newListA.map((el) => el.toLowerCase()).sort();
          const capitalizedList = sortedList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const sortedListBCaps = newListB.map((el) => el.toLowerCase()).sort();
          const capitalizedListBCaps = sortedListBCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const sortedListDupsCaps = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          const listDupsCaps = sortedListDupsCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();
          const capitalizedListAuB = sortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(listDupsCaps.join("\n"));
          setListDataBOnly(capitalizedListBCaps.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "uppercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toUpperCase()).sort();
          // List B
          const sortedListB = newListB.map((el) => el.toUpperCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toUpperCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "lowercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toLowerCase()).sort();
          // ListB
          const sortedListB = newListB.map((el) => el.toLowerCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "no-change") {
          // List A
          const descSortedListA = newListA.sort().reverse();
          // List B
          const descSortedListB = newListB.sort().reverse();
          // List Dups
          const descSortedListAnB = cleanedDups.sort().reverse();
          // List AuB
          const descSortedList = cleanedAuBList.sort().reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListAnB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedList.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "capitalize") {
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListA = descSortedListA.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListB = descSortedListB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListDups = descSortedListDups.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListAuB = descSortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          setListDataAOnly(capitalizedListA.join("\n"));
          setListAnBDups(capitalizedListDups.join("\n"));
          setListDataBOnly(capitalizedListB.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "uppercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "lowercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
        } else {
          setListDataAOnly(newListA.join("\n"));
          setListAnBDups(cleanedDups.join("\n"));
          setListDataBOnly(newListB.join("\n"));
          setListDataAuB(cleanedAuBList.join("\r\n"));
        }

        setDuplicatesLines(cleanedDups.length);
        setOnlyBLines(newListB.length);
        setAOnlyLines(newListA.length);
        setAuBLines(cleanedAuBList.length);
      } else if (
        !caseSensitive &&
        !ignoreBeginSpaces &&
        ignoreExtraSpaces &&
        ignoreLeadingZeros
      ) {
        // Make Array
        const listDataAArr = listDataA
          .toLowerCase()
          .replace(/\r\n\s/gm, "\n")
          .split("\n");

        const listDataBArr = listDataB
          .toLowerCase()
          .replace(/\r\n\s/gm, "\n")
          .split("\n");

        // Remove extra spaces
        const listAA = listDataAArr.map((item) =>
          item.trim().replace(/\s{2,}|^0+/g, " ")
        );
        const listBB = listDataBArr.map((item) =>
          item.trim().replace(/\s{2,}|^0+/g, " ")
        );

        // Filter empty values
        const listA = listAA.filter((item) => item.length > 0);
        const listB = listBB.filter((item) => item.length > 0);

        // List data A only
        const listAOnly = listA.filter((val) => !listB.includes(val));
        const newListA = [...new Set(listAOnly)];

        // List data B only
        const listBOnly = listB.filter((val) => !listA.includes(val));
        const newListB = [...new Set(listBOnly)];

        // Check for duplicates
        const duplicates = listA.filter((element) => listB.includes(element));
        const cleanedDups = [...new Set(duplicates)];

        // All items
        const listAuB = listAA.concat(listBB);
        const list = listAuB.filter((listItem) => listItem.length > 0);
        const cleanedAuBList = list.filter(
          (val, index) => listAuB.indexOf(val) === index
        );

        // Sort and Case options
        if (sortOptions === "no-sort" && caseOptions === "capitalize") {
          // List A
          const lowercaseList = newListA.map((el) => el.toLowerCase());
          const capitalizedList = lowercaseList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          const capitalizedAnB = lowercaseAnB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const lowercaseB = newListB.map((el) => el.toLowerCase());
          const capitalizedListB = lowercaseB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());
          const capitalizedAuB = lowercaseAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(capitalizedAnB.join("\n"));
          setListDataBOnly(capitalizedListB.join("\r\n"));
          setListDataAuB(capitalizedAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "uppercase") {
          // List A
          const capitalizedList = newListA.map((el) => el.toUpperCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toUpperCase());
          // List B
          const uppercaseListB = newListB.map((el) => el.toUpperCase());
          // Both list
          const uppercaseAuB = cleanedAuBList.map((el) => el.toUpperCase());

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(uppercaseListB.join("\n"));
          setListDataAuB(uppercaseAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "lowercase") {
          // List A
          const lowercaseListA = newListA.map((el) => el.toLowerCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          // List B
          const lowercaseListB = newListB.map((el) => el.toLowerCase());
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());

          setListDataAOnly(lowercaseListA.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(lowercaseListB.join("\n"));
          setListDataAuB(lowercaseAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "no-change") {
          // List A
          const sortedListA = newListA.sort();
          // List AnB
          const sortedListDups = cleanedDups.sort();
          // List B
          const sortedListB = newListB.sort();
          // Both list
          const sortedListAuB = cleanedAuBList.sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListDups.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "capitalize") {
          // List A
          const sortedList = newListA.map((el) => el.toLowerCase()).sort();
          const capitalizedList = sortedList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const sortedListBCaps = newListB.map((el) => el.toLowerCase()).sort();
          const capitalizedListBCaps = sortedListBCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const sortedListDupsCaps = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          const listDupsCaps = sortedListDupsCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();
          const capitalizedListAuB = sortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(listDupsCaps.join("\n"));
          setListDataBOnly(capitalizedListBCaps.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "uppercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toUpperCase()).sort();
          // List B
          const sortedListB = newListB.map((el) => el.toUpperCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toUpperCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "lowercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toLowerCase()).sort();
          // ListB
          const sortedListB = newListB.map((el) => el.toLowerCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "no-change") {
          // List A
          const descSortedListA = newListA.sort().reverse();
          // List B
          const descSortedListB = newListB.sort().reverse();
          // List Dups
          const descSortedListAnB = cleanedDups.sort().reverse();
          // List AuB
          const descSortedList = cleanedAuBList.sort().reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListAnB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedList.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "capitalize") {
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListA = descSortedListA.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListB = descSortedListB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListDups = descSortedListDups.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListAuB = descSortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          setListDataAOnly(capitalizedListA.join("\n"));
          setListAnBDups(capitalizedListDups.join("\n"));
          setListDataBOnly(capitalizedListB.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "uppercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "lowercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
        } else {
          setListDataAOnly(newListA.join("\n"));
          setListAnBDups(cleanedDups.join("\n"));
          setListDataBOnly(newListB.join("\n"));
          setListDataAuB(cleanedAuBList.join("\r\n"));
        }

        setDuplicatesLines(cleanedDups.length);
        setOnlyBLines(newListB.length);
        setAOnlyLines(newListA.length);
        setAuBLines(cleanedAuBList.length);
      } else if (
        !caseSensitive &&
        !ignoreBeginSpaces &&
        !ignoreExtraSpaces &&
        ignoreLeadingZeros
      ) {
        // Make Array
        const listDataAArr = listDataA.replace(/\r\n\s/gm, "\n").split("\n");
        const listDataBArr = listDataB.replace(/\r\n\s/gm, "\n").split("\n");

        // Remove extra spaces
        const listAA = listDataAArr.map((item) =>
          item.trim().replace(/^0+/g, " ")
        );
        const listBB = listDataBArr.map((item) =>
          item.trim().replace(/^0+/g, " ")
        );

        // Filter empty values
        const listA = listAA.filter((item) => item.length > 0);
        const listB = listBB.filter((item) => item.length > 0);

        // List data A only
        const listAOnly = listA.filter((val) => !listB.includes(val));
        const newListA = [...new Set(listAOnly)];

        // List data B only
        const listBOnly = listB.filter((val) => !listA.includes(val));
        const newListB = [...new Set(listBOnly)];

        // Check for duplicates
        const duplicates = listA.filter((element) => listB.includes(element));
        const cleanedDups = [...new Set(duplicates)];

        // All items
        const listAuB = listAA.concat(listBB);
        const list = listAuB.filter((listItem) => listItem.length > 0);
        const cleanedAuBList = list.filter(
          (val, index) => listAuB.indexOf(val) === index
        );

        // Sort and Case options
        if (sortOptions === "no-sort" && caseOptions === "capitalize") {
          // List A
          const lowercaseList = newListA.map((el) => el.toLowerCase());
          const capitalizedList = lowercaseList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          const capitalizedAnB = lowercaseAnB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const lowercaseB = newListB.map((el) => el.toLowerCase());
          const capitalizedListB = lowercaseB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());
          const capitalizedAuB = lowercaseAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(capitalizedAnB.join("\n"));
          setListDataBOnly(capitalizedListB.join("\r\n"));
          setListDataAuB(capitalizedAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "uppercase") {
          // List A
          const capitalizedList = newListA.map((el) => el.toUpperCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toUpperCase());
          // List B
          const uppercaseListB = newListB.map((el) => el.toUpperCase());
          // Both list
          const uppercaseAuB = cleanedAuBList.map((el) => el.toUpperCase());

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(uppercaseListB.join("\n"));
          setListDataAuB(uppercaseAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "lowercase") {
          // List A
          const lowercaseListA = newListA.map((el) => el.toLowerCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          // List B
          const lowercaseListB = newListB.map((el) => el.toLowerCase());
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());

          setListDataAOnly(lowercaseListA.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(lowercaseListB.join("\n"));
          setListDataAuB(lowercaseAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "no-change") {
          // List A
          const sortedListA = newListA.sort();
          // List AnB
          const sortedListDups = cleanedDups.sort();
          // List B
          const sortedListB = newListB.sort();
          // Both list
          const sortedListAuB = cleanedAuBList.sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListDups.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "capitalize") {
          // List A
          const sortedList = newListA.map((el) => el.toLowerCase()).sort();
          const capitalizedList = sortedList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const sortedListBCaps = newListB.map((el) => el.toLowerCase()).sort();
          const capitalizedListBCaps = sortedListBCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const sortedListDupsCaps = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          const listDupsCaps = sortedListDupsCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();
          const capitalizedListAuB = sortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(listDupsCaps.join("\n"));
          setListDataBOnly(capitalizedListBCaps.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "uppercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toUpperCase()).sort();
          // List B
          const sortedListB = newListB.map((el) => el.toUpperCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toUpperCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "lowercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toLowerCase()).sort();
          // ListB
          const sortedListB = newListB.map((el) => el.toLowerCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "no-change") {
          // List A
          const descSortedListA = newListA.sort().reverse();
          // List B
          const descSortedListB = newListB.sort().reverse();
          // List Dups
          const descSortedListAnB = cleanedDups.sort().reverse();
          // List AuB
          const descSortedList = cleanedAuBList.sort().reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListAnB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedList.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "capitalize") {
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListA = descSortedListA.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListB = descSortedListB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListDups = descSortedListDups.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListAuB = descSortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          setListDataAOnly(capitalizedListA.join("\n"));
          setListAnBDups(capitalizedListDups.join("\n"));
          setListDataBOnly(capitalizedListB.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "uppercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "lowercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
        } else {
          setListDataAOnly(newListA.join("\n"));
          setListAnBDups(cleanedDups.join("\n"));
          setListDataBOnly(newListB.join("\n"));
          setListDataAuB(cleanedAuBList.join("\r\n"));
        }

        setAuBLines(cleanedAuBList.length);
        setDuplicatesLines(cleanedDups.length);
        setAOnlyLines(newListA.length);
        setOnlyBLines(newListB.length);
      } else if (
        caseSensitive &&
        !ignoreBeginSpaces &&
        !ignoreExtraSpaces &&
        ignoreLeadingZeros
      ) {
        // Make Array
        const listDataAArr = listDataA.replace(/\r\n\s/gm, "\n").split("\n");
        const listDataBArr = listDataB.replace(/\r\n\s/gm, "\n").split("\n");

        // Remove extra spaces
        const listAA = listDataAArr.map((item) =>
          item.trim().replace(/^0+/g, " ")
        );
        const listBB = listDataBArr.map((item) =>
          item.trim().replace(/^0+/g, " ")
        );

        // Filter empty values
        const listA = listAA.filter((item) => item.length > 0);
        const listB = listBB.filter((item) => item.length > 0);

        // List data A only
        const listAOnly = listA.filter((val) => !listB.includes(val));
        const newListA = [...new Set(listAOnly)];

        // List data B only
        const listBOnly = listB.filter((val) => !listA.includes(val));
        const newListB = [...new Set(listBOnly)];

        // Check for duplicates
        const duplicates = listA.filter((element) => listB.includes(element));
        const cleanedDups = [...new Set(duplicates)];

        // All items
        const listAuB = listAA.concat(listBB);
        const list = listAuB.filter((listItem) => listItem.length > 0);
        const cleanedAuBList = list.filter(
          (val, index) => listAuB.indexOf(val) === index
        );

        // Sort and Case options
        if (sortOptions === "no-sort" && caseOptions === "capitalize") {
          // List A
          const lowercaseList = newListA.map((el) => el.toLowerCase());
          const capitalizedList = lowercaseList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          const capitalizedAnB = lowercaseAnB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const lowercaseB = newListB.map((el) => el.toLowerCase());
          const capitalizedListB = lowercaseB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());
          const capitalizedAuB = lowercaseAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(capitalizedAnB.join("\n"));
          setListDataBOnly(capitalizedListB.join("\r\n"));
          setListDataAuB(capitalizedAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "uppercase") {
          // List A
          const capitalizedList = newListA.map((el) => el.toUpperCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toUpperCase());
          // List B
          const uppercaseListB = newListB.map((el) => el.toUpperCase());
          // Both list
          const uppercaseAuB = cleanedAuBList.map((el) => el.toUpperCase());

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(uppercaseListB.join("\n"));
          setListDataAuB(uppercaseAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "lowercase") {
          // List A
          const lowercaseListA = newListA.map((el) => el.toLowerCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          // List B
          const lowercaseListB = newListB.map((el) => el.toLowerCase());
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());

          setListDataAOnly(lowercaseListA.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(lowercaseListB.join("\n"));
          setListDataAuB(lowercaseAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "no-change") {
          // List A
          const sortedListA = newListA.sort();
          // List AnB
          const sortedListDups = cleanedDups.sort();
          // List B
          const sortedListB = newListB.sort();
          // Both list
          const sortedListAuB = cleanedAuBList.sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListDups.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "capitalize") {
          // List A
          const sortedList = newListA.map((el) => el.toLowerCase()).sort();
          const capitalizedList = sortedList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const sortedListBCaps = newListB.map((el) => el.toLowerCase()).sort();
          const capitalizedListBCaps = sortedListBCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const sortedListDupsCaps = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          const listDupsCaps = sortedListDupsCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();
          const capitalizedListAuB = sortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(listDupsCaps.join("\n"));
          setListDataBOnly(capitalizedListBCaps.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "uppercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toUpperCase()).sort();
          // List B
          const sortedListB = newListB.map((el) => el.toUpperCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toUpperCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "lowercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toLowerCase()).sort();
          // ListB
          const sortedListB = newListB.map((el) => el.toLowerCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "no-change") {
          // List A
          const descSortedListA = newListA.sort().reverse();
          // List B
          const descSortedListB = newListB.sort().reverse();
          // List Dups
          const descSortedListAnB = cleanedDups.sort().reverse();
          // List AuB
          const descSortedList = cleanedAuBList.sort().reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListAnB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedList.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "capitalize") {
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListA = descSortedListA.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListB = descSortedListB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListDups = descSortedListDups.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListAuB = descSortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          setListDataAOnly(capitalizedListA.join("\n"));
          setListAnBDups(capitalizedListDups.join("\n"));
          setListDataBOnly(capitalizedListB.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "uppercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "lowercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
        } else {
          setListDataAOnly(newListA.join("\n"));
          setListAnBDups(cleanedDups.join("\n"));
          setListDataBOnly(newListB.join("\n"));
          setListDataAuB(cleanedAuBList.join("\r\n"));
        }

        setAOnlyLines(newListA.length);
        setOnlyBLines(newListB.length);
        setDuplicatesLines(cleanedDups.length);
        setAuBLines(cleanedAuBList.length);
      } else if (
        caseSensitive &&
        ignoreBeginSpaces &&
        !ignoreExtraSpaces &&
        ignoreLeadingZeros
      ) {
        // Make Array
        const listDataAArr = listDataA
          .replace(/\r\n\s/gm, "\n")
          .split("\n")
          .map((el) => el.trim());

        const listDataBArr = listDataB
          .replace(/\r\n\s/gm, "\n")
          .split("\n")
          .map((el) => el.trim());

        // Remove extra spaces
        const listAA = listDataAArr.map((item) =>
          item.replace(/^0+/g, " ").trim()
        );
        const listBB = listDataBArr.map((item) =>
          item.replace(/^0+/g, " ").trim()
        );

        // Filter empty values
        const listA = listAA.filter((item) => item.length > 0);
        const listB = listBB.filter((item) => item.length > 0);

        // List data A only
        const listAOnly = listA.filter((val) => !listB.includes(val));
        const newListA = [...new Set(listAOnly)];

        // List data B only
        const listBOnly = listB.filter((val) => !listA.includes(val));
        const newListB = [...new Set(listBOnly)];

        // Check for duplicates
        const duplicates = listA.filter((element) => listB.includes(element));
        const cleanedDups = [...new Set(duplicates)];

        // All items
        const listAuB = listAA.concat(listBB);
        const list = listAuB.filter((listItem) => listItem.length > 0);
        const cleanedAuBList = list.filter(
          (val, index) => listAuB.indexOf(val) === index
        );

        // Sort and Case options
        if (sortOptions === "no-sort" && caseOptions === "capitalize") {
          // List A
          const lowercaseList = newListA.map((el) => el.toLowerCase());
          const capitalizedList = lowercaseList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          const capitalizedAnB = lowercaseAnB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const lowercaseB = newListB.map((el) => el.toLowerCase());
          const capitalizedListB = lowercaseB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());
          const capitalizedAuB = lowercaseAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(capitalizedAnB.join("\n"));
          setListDataBOnly(capitalizedListB.join("\r\n"));
          setListDataAuB(capitalizedAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "uppercase") {
          // List A
          const capitalizedList = newListA.map((el) => el.toUpperCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toUpperCase());
          // List B
          const uppercaseListB = newListB.map((el) => el.toUpperCase());
          // Both list
          const uppercaseAuB = cleanedAuBList.map((el) => el.toUpperCase());

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(uppercaseListB.join("\n"));
          setListDataAuB(uppercaseAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "lowercase") {
          // List A
          const lowercaseListA = newListA.map((el) => el.toLowerCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          // List B
          const lowercaseListB = newListB.map((el) => el.toLowerCase());
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());

          setListDataAOnly(lowercaseListA.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(lowercaseListB.join("\n"));
          setListDataAuB(lowercaseAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "no-change") {
          // List A
          const sortedListA = newListA.sort();
          // List AnB
          const sortedListDups = cleanedDups.sort();
          // List B
          const sortedListB = newListB.sort();
          // Both list
          const sortedListAuB = cleanedAuBList.sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListDups.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "capitalize") {
          // List A
          const sortedList = newListA.map((el) => el.toLowerCase()).sort();
          const capitalizedList = sortedList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const sortedListBCaps = newListB.map((el) => el.toLowerCase()).sort();
          const capitalizedListBCaps = sortedListBCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const sortedListDupsCaps = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          const listDupsCaps = sortedListDupsCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();
          const capitalizedListAuB = sortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(listDupsCaps.join("\n"));
          setListDataBOnly(capitalizedListBCaps.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "uppercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toUpperCase()).sort();
          // List B
          const sortedListB = newListB.map((el) => el.toUpperCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toUpperCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "lowercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toLowerCase()).sort();
          // ListB
          const sortedListB = newListB.map((el) => el.toLowerCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "no-change") {
          // List A
          const descSortedListA = newListA.sort().reverse();
          // List B
          const descSortedListB = newListB.sort().reverse();
          // List Dups
          const descSortedListAnB = cleanedDups.sort().reverse();
          // List AuB
          const descSortedList = cleanedAuBList.sort().reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListAnB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedList.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "capitalize") {
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListA = descSortedListA.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListB = descSortedListB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListDups = descSortedListDups.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListAuB = descSortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          setListDataAOnly(capitalizedListA.join("\n"));
          setListAnBDups(capitalizedListDups.join("\n"));
          setListDataBOnly(capitalizedListB.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "uppercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "lowercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
        } else {
          setListDataAOnly(newListA.join("\n"));
          setListAnBDups(cleanedDups.join("\n"));
          setListDataBOnly(newListB.join("\n"));
          setListDataAuB(cleanedAuBList.join("\r\n"));
        }

        setAOnlyLines(newListA.length);
        setOnlyBLines(newListB.length);
        setDuplicatesLines(cleanedDups.length);
        setAuBLines(cleanedAuBList.length);
      } else if (
        !caseSensitive &&
        ignoreBeginSpaces &&
        !ignoreExtraSpaces &&
        ignoreLeadingZeros
      ) {
        // Make Array
        const listDataAArr = listDataA
          .toLowerCase()
          .replace(/\r\n\s/gm, "\n")
          .split("\n")
          .map((el) => el.trim());

        const listDataBArr = listDataB
          .toLowerCase()
          .replace(/\r\n\s/gm, "\n")
          .split("\n")
          .map((el) => el.trim());

        // Remove extra spaces
        const listAA = listDataAArr.map((item) =>
          item.replace(/^0+/g, " ").trim()
        );
        const listBB = listDataBArr.map((item) =>
          item.replace(/^0+/g, " ").trim()
        );

        // Filter empty values
        const listA = listAA.filter((item) => item.length > 0);
        const listB = listBB.filter((item) => item.length > 0);

        // List data A only
        const listAOnly = listA.filter((val) => !listB.includes(val));
        const newListA = [...new Set(listAOnly)];

        // List data B only
        const listBOnly = listB.filter((val) => !listA.includes(val));
        const newListB = [...new Set(listBOnly)];

        // Check for duplicates
        const duplicates = listA.filter((element) => listB.includes(element));
        const cleanedDups = [...new Set(duplicates)];

        // All items
        const listAuB = listAA.concat(listBB);
        const list = listAuB.filter((listItem) => listItem.length > 0);
        const cleanedAuBList = list.filter(
          (val, index) => listAuB.indexOf(val) === index
        );

        // Sort and Case options
        if (sortOptions === "no-sort" && caseOptions === "capitalize") {
          // List A
          const lowercaseList = newListA.map((el) => el.toLowerCase());
          const capitalizedList = lowercaseList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          const capitalizedAnB = lowercaseAnB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const lowercaseB = newListB.map((el) => el.toLowerCase());
          const capitalizedListB = lowercaseB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());
          const capitalizedAuB = lowercaseAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(capitalizedAnB.join("\n"));
          setListDataBOnly(capitalizedListB.join("\r\n"));
          setListDataAuB(capitalizedAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "uppercase") {
          // List A
          const capitalizedList = newListA.map((el) => el.toUpperCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toUpperCase());
          // List B
          const uppercaseListB = newListB.map((el) => el.toUpperCase());
          // Both list
          const uppercaseAuB = cleanedAuBList.map((el) => el.toUpperCase());

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(uppercaseListB.join("\n"));
          setListDataAuB(uppercaseAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "lowercase") {
          // List A
          const lowercaseListA = newListA.map((el) => el.toLowerCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          // List B
          const lowercaseListB = newListB.map((el) => el.toLowerCase());
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());

          setListDataAOnly(lowercaseListA.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(lowercaseListB.join("\n"));
          setListDataAuB(lowercaseAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "no-change") {
          // List A
          const sortedListA = newListA.sort();
          // List AnB
          const sortedListDups = cleanedDups.sort();
          // List B
          const sortedListB = newListB.sort();
          // Both list
          const sortedListAuB = cleanedAuBList.sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListDups.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "capitalize") {
          // List A
          const sortedList = newListA.map((el) => el.toLowerCase()).sort();
          const capitalizedList = sortedList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const sortedListBCaps = newListB.map((el) => el.toLowerCase()).sort();
          const capitalizedListBCaps = sortedListBCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const sortedListDupsCaps = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          const listDupsCaps = sortedListDupsCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();
          const capitalizedListAuB = sortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(listDupsCaps.join("\n"));
          setListDataBOnly(capitalizedListBCaps.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "uppercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toUpperCase()).sort();
          // List B
          const sortedListB = newListB.map((el) => el.toUpperCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toUpperCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "lowercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toLowerCase()).sort();
          // ListB
          const sortedListB = newListB.map((el) => el.toLowerCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "no-change") {
          // List A
          const descSortedListA = newListA.sort().reverse();
          // List B
          const descSortedListB = newListB.sort().reverse();
          // List Dups
          const descSortedListAnB = cleanedDups.sort().reverse();
          // List AuB
          const descSortedList = cleanedAuBList.sort().reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListAnB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedList.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "capitalize") {
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListA = descSortedListA.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListB = descSortedListB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListDups = descSortedListDups.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListAuB = descSortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          setListDataAOnly(capitalizedListA.join("\n"));
          setListAnBDups(capitalizedListDups.join("\n"));
          setListDataBOnly(capitalizedListB.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "uppercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "lowercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
        } else {
          setListDataAOnly(newListA.join("\n"));
          setListAnBDups(cleanedDups.join("\n"));
          setListDataBOnly(newListB.join("\n"));
          setListDataAuB(cleanedAuBList.join("\r\n"));
        }

        setAOnlyLines(newListA.length);
        setOnlyBLines(newListB.length);
        setDuplicatesLines(cleanedDups.length);
        setAuBLines(cleanedAuBList.length);
      } else if (
        caseSensitive &&
        !ignoreBeginSpaces &&
        ignoreExtraSpaces &&
        ignoreLeadingZeros
      ) {
        // Make Array
        const listDataAArr = listDataA.replace(/\r\n\s/gm, "\n").split("\n");

        const listDataBArr = listDataB.replace(/\r\n\s/gm, "\n").split("\n");

        // Remove extra spaces
        const listAA = listDataAArr.map((item) =>
          item.trim().replace(/^0+/g, " ")
        );
        const listBB = listDataBArr.map((item) =>
          item.trim().replace(/^0+/g, " ")
        );

        // Filter empty values
        const listA = listAA.filter((item) => item.length > 0);
        const listB = listBB.filter((item) => item.length > 0);

        // List data A only
        const listAOnly = listA.filter((val) => !listB.includes(val));
        const newListA = [...new Set(listAOnly)];

        // List data B only
        const listBOnly = listB.filter((val) => !listA.includes(val));
        const newListB = [...new Set(listBOnly)];

        // Check for duplicates
        const duplicates = listA.filter((element) => listB.includes(element));
        const cleanedDups = [...new Set(duplicates)];

        // All items
        const listAuB = listAA.concat(listBB);
        const list = listAuB.filter((listItem) => listItem.length > 0);
        const cleanedAuBList = list.filter(
          (val, index) => listAuB.indexOf(val) === index
        );

        // Sort and Case options
        if (sortOptions === "no-sort" && caseOptions === "capitalize") {
          // List A
          const lowercaseList = newListA.map((el) => el.toLowerCase());
          const capitalizedList = lowercaseList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          const capitalizedAnB = lowercaseAnB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const lowercaseB = newListB.map((el) => el.toLowerCase());
          const capitalizedListB = lowercaseB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());
          const capitalizedAuB = lowercaseAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(capitalizedAnB.join("\n"));
          setListDataBOnly(capitalizedListB.join("\r\n"));
          setListDataAuB(capitalizedAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "uppercase") {
          // List A
          const capitalizedList = newListA.map((el) => el.toUpperCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toUpperCase());
          // List B
          const uppercaseListB = newListB.map((el) => el.toUpperCase());
          // Both list
          const uppercaseAuB = cleanedAuBList.map((el) => el.toUpperCase());

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(uppercaseListB.join("\n"));
          setListDataAuB(uppercaseAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "lowercase") {
          // List A
          const lowercaseListA = newListA.map((el) => el.toLowerCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          // List B
          const lowercaseListB = newListB.map((el) => el.toLowerCase());
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());

          setListDataAOnly(lowercaseListA.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(lowercaseListB.join("\n"));
          setListDataAuB(lowercaseAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "no-change") {
          // List A
          const sortedListA = newListA.sort();
          // List AnB
          const sortedListDups = cleanedDups.sort();
          // List B
          const sortedListB = newListB.sort();
          // Both list
          const sortedListAuB = cleanedAuBList.sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListDups.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "capitalize") {
          // List A
          const sortedList = newListA.map((el) => el.toLowerCase()).sort();
          const capitalizedList = sortedList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const sortedListBCaps = newListB.map((el) => el.toLowerCase()).sort();
          const capitalizedListBCaps = sortedListBCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const sortedListDupsCaps = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          const listDupsCaps = sortedListDupsCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();
          const capitalizedListAuB = sortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(listDupsCaps.join("\n"));
          setListDataBOnly(capitalizedListBCaps.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "uppercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toUpperCase()).sort();
          // List B
          const sortedListB = newListB.map((el) => el.toUpperCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toUpperCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "lowercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toLowerCase()).sort();
          // ListB
          const sortedListB = newListB.map((el) => el.toLowerCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "no-change") {
          // List A
          const descSortedListA = newListA.sort().reverse();
          // List B
          const descSortedListB = newListB.sort().reverse();
          // List Dups
          const descSortedListAnB = cleanedDups.sort().reverse();
          // List AuB
          const descSortedList = cleanedAuBList.sort().reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListAnB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedList.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "capitalize") {
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListA = descSortedListA.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListB = descSortedListB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListDups = descSortedListDups.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListAuB = descSortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          setListDataAOnly(capitalizedListA.join("\n"));
          setListAnBDups(capitalizedListDups.join("\n"));
          setListDataBOnly(capitalizedListB.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "uppercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "lowercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
        } else {
          setListDataAOnly(newListA.join("\n"));
          setListAnBDups(cleanedDups.join("\n"));
          setListDataBOnly(newListB.join("\n"));
          setListDataAuB(cleanedAuBList.join("\r\n"));
        }

        setAOnlyLines(newListA.length);
        setOnlyBLines(newListB.length);
        setDuplicatesLines(cleanedDups.length);
        setAuBLines(cleanedAuBList.length);
      } else if (
        caseSensitive &&
        !ignoreBeginSpaces &&
        ignoreExtraSpaces &&
        ignoreLeadingZeros &&
        lineNumbered
      ) {
        // Make Array
        const listDataAArr = listDataA
          .replace(/\r\n\s/gm, "\n")
          .split("\n")
          .map((el) => el.trim());

        const listDataBArr = listDataB
          .replace(/\r\n\s/gm, "\n")
          .split("\n")
          .map((el) => el.trim());

        // Remove extra spaces
        const listAA = listDataAArr.map((item) =>
          item.trim().replace(/^0+/g, " ")
        );
        const listBB = listDataBArr.map((item) =>
          item.trim().replace(/^0+/g, " ")
        );

        // Filter empty values
        const listA = listAA.filter((item) => item.length > 0);
        const listB = listBB.filter((item) => item.length > 0);

        // List data A only
        const listAOnly = listA.filter((val) => !listB.includes(val));
        const newListA = [...new Set(listAOnly)];

        // List data B only
        const listBOnly = listB.filter((val) => !listA.includes(val));
        const newListB = [...new Set(listBOnly)];

        // Check for duplicates
        const duplicates = listA.filter((el) => listB.includes(el));
        const cleanedDups = [...new Set(duplicates)];

        // All items
        const listAuB = listAA.concat(listBB);
        const list = listAuB.filter((listItem) => listItem.length > 0);
        const cleanedAuBList = list.filter(
          (val, index) => listAuB.indexOf(val) === index
        );

        // Sort and Case options
        if (sortOptions === "no-sort" && caseOptions === "capitalize") {
          // List A
          const lowercaseList = newListA.map((el) => el.toLowerCase());
          const capitalizedList = lowercaseList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          const capitalizedAnB = lowercaseAnB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const lowercaseB = newListB.map((el) => el.toLowerCase());
          const capitalizedListB = lowercaseB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());
          const capitalizedAuB = lowercaseAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(capitalizedAnB.join("\n"));
          setListDataBOnly(capitalizedListB.join("\r\n"));
          setListDataAuB(capitalizedAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "uppercase") {
          // List A
          const capitalizedList = newListA.map((el) => el.toUpperCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toUpperCase());
          // List B
          const uppercaseListB = newListB.map((el) => el.toUpperCase());
          // Both list
          const uppercaseAuB = cleanedAuBList.map((el) => el.toUpperCase());

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(uppercaseListB.join("\n"));
          setListDataAuB(uppercaseAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "lowercase") {
          // List A
          const lowercaseListA = newListA.map((el) => el.toLowerCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          // List B
          const lowercaseListB = newListB.map((el) => el.toLowerCase());
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());

          setListDataAOnly(lowercaseListA.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(lowercaseListB.join("\n"));
          setListDataAuB(lowercaseAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "no-change") {
          // List A
          const sortedListA = newListA.sort();
          // List AnB
          const sortedListDups = cleanedDups.sort();
          // List B
          const sortedListB = newListB.sort();
          // Both list
          const sortedListAuB = cleanedAuBList.sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListDups.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "capitalize") {
          // List A
          const sortedList = newListA.map((el) => el.toLowerCase()).sort();
          const capitalizedList = sortedList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const sortedListBCaps = newListB.map((el) => el.toLowerCase()).sort();
          const capitalizedListBCaps = sortedListBCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const sortedListDupsCaps = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          const listDupsCaps = sortedListDupsCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();
          const capitalizedListAuB = sortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(listDupsCaps.join("\n"));
          setListDataBOnly(capitalizedListBCaps.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "uppercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toUpperCase()).sort();
          // List B
          const sortedListB = newListB.map((el) => el.toUpperCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toUpperCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "lowercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toLowerCase()).sort();
          // ListB
          const sortedListB = newListB.map((el) => el.toLowerCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "no-change") {
          // List A
          const descSortedListA = newListA.sort().reverse();
          // List B
          const descSortedListB = newListB.sort().reverse();
          // List Dups
          const descSortedListAnB = cleanedDups.sort().reverse();
          // List AuB
          const descSortedList = cleanedAuBList.sort().reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListAnB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedList.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "capitalize") {
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListA = descSortedListA.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListB = descSortedListB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListDups = descSortedListDups.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListAuB = descSortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          setListDataAOnly(capitalizedListA.join("\n"));
          setListAnBDups(capitalizedListDups.join("\n"));
          setListDataBOnly(capitalizedListB.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "uppercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "lowercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
        } else {
          setListDataAOnly(newListA.join("\n"));
          setListAnBDups(cleanedDups.join("\n"));
          setListDataBOnly(newListB.join("\n"));
          setListDataAuB(cleanedAuBList.join("\r\n"));
        }

        setAOnlyLines(newListA.length);
        setOnlyBLines(newListB.length);
        setDuplicatesLines(cleanedDups.length);
        setAuBLines(cleanedAuBList.length);
      } else {
        // Make Array
        const listDataAArr = listDataA
          .toLowerCase()
          .replace(/\r\n/gm, "\n")
          .split("\n");

        const listDataBArr = listDataB
          .toLowerCase()
          .replace(/\r\n/gm, "\n")
          .split("\n");

        // Filter empty values
        const listA = listDataAArr.filter((item) => item.length > 0);
        const listB = listDataBArr.filter((item) => item.length > 0);

        // List data A only
        const listAOnly = listA.filter((val) => !listB.includes(val));
        const newListA = [...new Set(listAOnly)];

        // List data B only
        const listBOnly = listB.filter((val) => !listA.includes(val));
        const newListB = [...new Set(listBOnly)];

        // Check for duplicates
        const duplicates = listA.filter((element) => listB.includes(element));
        const cleanedDups = [...new Set(duplicates)];

        // All items
        const listAuB = listDataAArr.concat(listDataBArr);
        const list = listAuB.filter((listItem) => listItem.length > 0);
        const cleanedAuBList = list.filter(
          (val, index) => listAuB.indexOf(val) === index
        );
        // Sort and Case options
        if (sortOptions === "no-sort" && caseOptions === "capitalize") {
          // List A
          const lowercaseList = newListA.map((el) => el.toLowerCase());
          const capitalizedList = lowercaseList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          const capitalizedAnB = lowercaseAnB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const lowercaseB = newListB.map((el) => el.toLowerCase());
          const capitalizedListB = lowercaseB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());
          const capitalizedAuB = lowercaseAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(capitalizedAnB.join("\n"));
          setListDataBOnly(capitalizedListB.join("\r\n"));
          setListDataAuB(capitalizedAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "uppercase") {
          // List A
          const capitalizedList = newListA.map((el) => el.toUpperCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toUpperCase());
          // List B
          const uppercaseListB = newListB.map((el) => el.toUpperCase());
          // Both list
          const uppercaseAuB = cleanedAuBList.map((el) => el.toUpperCase());

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(uppercaseListB.join("\n"));
          setListDataAuB(uppercaseAuB.join("\n"));
        } else if (sortOptions === "no-sort" && caseOptions === "lowercase") {
          // List A
          const lowercaseListA = newListA.map((el) => el.toLowerCase());
          // List AnB
          const lowercaseAnB = cleanedDups.map((el) => el.toLowerCase());
          // List B
          const lowercaseListB = newListB.map((el) => el.toLowerCase());
          // Both list
          const lowercaseAuB = cleanedAuBList.map((el) => el.toLowerCase());

          setListDataAOnly(lowercaseListA.join("\n"));
          setListAnBDups(lowercaseAnB.join("\n"));
          setListDataBOnly(lowercaseListB.join("\n"));
          setListDataAuB(lowercaseAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "no-change") {
          // List A
          const sortedListA = newListA.sort();
          // List AnB
          const sortedListDups = cleanedDups.sort();
          // List B
          const sortedListB = newListB.sort();
          // Both list
          const sortedListAuB = cleanedAuBList.sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListDups.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "capitalize") {
          // List A
          const sortedList = newListA.map((el) => el.toLowerCase()).sort();
          const capitalizedList = sortedList.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const sortedListBCaps = newListB.map((el) => el.toLowerCase()).sort();
          const capitalizedListBCaps = sortedListBCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AnB
          const sortedListDupsCaps = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          const listDupsCaps = sortedListDupsCaps.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();
          const capitalizedListAuB = sortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );

          setListDataAOnly(capitalizedList.join("\n"));
          setListAnBDups(listDupsCaps.join("\n"));
          setListDataBOnly(capitalizedListBCaps.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "uppercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toUpperCase()).sort();
          // List B
          const sortedListB = newListB.map((el) => el.toUpperCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toUpperCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "az" && caseOptions === "lowercase") {
          // List A
          const sortedListA = newListA.map((el) => el.toLowerCase()).sort();
          // ListB
          const sortedListB = newListB.map((el) => el.toLowerCase()).sort();
          // List AnB
          const sortedListAnB = cleanedDups
            .map((el) => el.toLowerCase())
            .sort();
          // List Aub
          const sortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort();

          setListDataAOnly(sortedListA.join("\n"));
          setListAnBDups(sortedListAnB.join("\n"));
          setListDataBOnly(sortedListB.join("\n"));
          setListDataAuB(sortedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "no-change") {
          // List A
          const descSortedListA = newListA.sort().reverse();
          // List B
          const descSortedListB = newListB.sort().reverse();
          // List Dups
          const descSortedListAnB = cleanedDups.sort().reverse();
          // List AuB
          const descSortedList = cleanedAuBList.sort().reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListAnB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedList.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "capitalize") {
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListA = descSortedListA.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListB = descSortedListB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListDups = descSortedListDups.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          const capitalizedListAuB = descSortedListAuB.map(
            (el) => el.charAt(0).toUpperCase() + el.slice(1)
          );
          setListDataAOnly(capitalizedListA.join("\n"));
          setListAnBDups(capitalizedListDups.join("\n"));
          setListDataBOnly(capitalizedListB.join("\n"));
          setListDataAuB(capitalizedListAuB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "uppercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toUpperCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
        } else if (sortOptions === "za" && caseOptions === "lowercase") {
          // List A
          const descSortedListA = newListA
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List B
          const descSortedListB = newListB
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List Dups
          const descSortedListDups = cleanedDups
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();
          // List AuB
          const descSortedListAuB = cleanedAuBList
            .map((el) => el.toLowerCase())
            .sort()
            .reverse();

          setListDataAOnly(descSortedListA.join("\n"));
          setListAnBDups(descSortedListDups.join("\n"));
          setListDataBOnly(descSortedListB.join("\n"));
          setListDataAuB(descSortedListAuB.join("\n"));
        } else {
          setListDataAOnly(newListA.join("\n"));
          setListAnBDups(cleanedDups.join("\n"));
          setListDataBOnly(newListB.join("\n"));
          setListDataAuB(cleanedAuBList.join("\r\n"));
        }

        setAOnlyLines(newListA.length);
        setOnlyBLines(newListB.length);
        setDuplicatesLines(cleanedDups.length);
        setAuBLines(cleanedAuBList.length);
      }
    }
  };

  // Move A value to B
  const moveAValueToB = () => {
    if (listDataA) {
      let data = listDataA.split("\n");
      let dupCounts = {};

      if (data[data.length - 1] === "") {
        data.length--;
      } else {
        let linesA = data.filter((e) => e.replace(/(\r\n|\n|\r)/gm, ""));
        let count = linesA.length;
        setLinesB(count);
      }

      // Find dups
      let linesA = data.filter((e) => e.replace(/(\r\n|\n|\r)/gm, ""));
      linesA.forEach((dup) => {
        dupCounts[dup] = (dupCounts[dup] || 0) + 1;
        let dups = Object.keys(dupCounts).filter((e) => {
          return dupCounts[e] > 1;
        });
        setListBDuplicates(dups.length);
      });
      setListDataB(listDataA);
      setListDataA("");
      setListALines(0);
      setListADuplicates(0);
    }
  };

  // Move B value to a
  const moveBValueToA = () => {
    if (listDataB) {
      let data = listDataB.split("\n");
      let dupCounts = {};

      if (data[data.length - 1] === "") {
        data.length--;
      } else {
        let linesA = data.filter((e) => e.replace(/(\r\n|\n|\r)/gm, ""));
        let count = linesA.length;
        setListALines(count);
      }

      // Find dups
      let linesA = data.filter((e) => e.replace(/(\r\n|\n|\r)/gm, ""));
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

  // Split List A
  const splitCsv = () => {
    if (listDataA) {
      let data = listDataA;
      let dupCounts = {};

      // Make array
      let cldList = data.replace(/\n\s\t|[,;:]/gm, "\n").split("\n");
      let trimmedList = cldList
        .map((el) => el.trim())
        .filter((item) => item.length > 0);

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
      setListALines(trimmedList.length);
    }
  };

  // Split List B data func
  const splitListBData = () => {
    if (listDataB) {
      let data = listDataB;
      let dupCounts = {};

      // Make array
      let cldList = data.replace(/\n\s\t|[,;:]/gm, "\n").split("\n");

      // Trim list
      let trimmedList = cldList
        .map((el) => el.trim())
        .filter((item) => item.length > 0);

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
      let data = listDataA.split("\n");
      // Filter dups
      const filteredList = data
        .filter((el) => el.length > 0)
        .map((el) => el.trim());
      const newList = [...new Set(filteredList)];
      setListDataA(newList.join("\n"));
      setListALines(newList.length);
      setListADuplicates(0);
    }
  };

  // Trim list B duplicates and white spaces
  const trimBDuplicatesWhiteSpaces = () => {
    if (listDataB) {
      let data = listDataB.split("\n");

      // Filter dups
      const filteredList = data
        .filter((el) => el.length > 0)
        .map((el) => el.trim());
      const newList = [...new Set(filteredList)];
      setListDataB(newList.join("\n"));
      setLinesB(newList.length);
      setListBDuplicates(0);
    }
  };

  // Sort List A to A - z
  const sortData = () => {
    if (listDataA) {
      let data = listDataA.split("\n").sort();
      setListDataA(data.join("\n"));
    }
  };

  // Reverse order List A
  const reverseOrder = () => {
    if (listDataA) {
      const data = listDataA.split("\n").reverse();
      setListDataA(data.join("\n"));
    }
  };

  // Sort List B to A - z
  const sortListBData = () => {
    if (listDataB) {
      let data = listDataB.split("\n").sort();
      setListDataB(data.join("\n"));
    }
  };

  // Reverse order List B
  const reverseOrderListBData = () => {
    if (listDataB) {
      const data = listDataB.split("\n").reverse();
      setListDataB(data.join("\n"));
    }
  };

  // Clear lists
  const clearListB = () => {
    setListDataB("");
    setLinesB(0);
    setListBDuplicates(0);
  };

  // Clear lists
  const clearListA = () => {
    setListDataA("");
    setListALines(0);
    setListADuplicates(0);
  };

  // Trim A Only Dups And Spaces
  const trimAOnlyDupsSpaces = () => {
    if (listDataAOnly) {
      let data = listDataAOnly.split("\n");
      // Filter dups
      const filteredList = data
        .filter((el) => el.length > 0)
        .map((el) => el.trim());
      const newList = [...new Set(filteredList)];
      setListDataAOnly(newList.join("\n"));
      setAOnlyLines(newList.length);
    }
  };

  // Trim A and B Dups and Spaces
  const trimABDupsSpaces = () => {
    if (listAnBDups) {
      let data = listAnBDups.split("\n");
      // Filter dups
      const filteredList = data
        .filter((el) => el.length > 0)
        .map((el) => el.trim());
      const newList = [...new Set(filteredList)];
      setListAnBDups(newList.join("\n"));
      setDuplicatesLines(newList.length);
    }
  };

  // Trim B Only Dups and Spaces
  const trimBOnlyDupsSpaces = () => {
    if (listDataBOnly) {
      let data = listDataBOnly.split("\n");
      // Filter dups
      const filteredList = data
        .filter((el) => el.length > 0)
        .map((el) => el.trim());
      const newList = [...new Set(filteredList)];
      setListDataBOnly(newList.join("\n"));
      setOnlyBLines(newList.length);
    }
  };

  // Trim B Only Dups and Spaces
  const trimAuBDupsSpaces = () => {
    if (listDataAuB) {
      let data = listDataAuB.split("\n");
      // Filter dups
      const filteredList = data
        .filter((el) => el.length > 0)
        .map((el) => el.trim());
      const newList = [...new Set(filteredList)];
      setListDataAuB(newList.join("\n"));
      setAuBLines(newList.length);
    }
  };

  // Sort List A only
  const sortListAOnly = () => {
    if (listDataAOnly) {
      const data = listDataAOnly.split("\n").sort();
      setListDataAOnly(data.join("\n"));
    }
  };

  // Sort List A and B
  const sortListAnB = () => {
    if (listAnBDups) {
      const data = listAnBDups.split("\n").sort();
      setListAnBDups(data.join("\n"));
    }
  };

  // Sort List B
  const sortListBOnly = () => {
    if (listDataBOnly) {
      const data = listDataBOnly.split("\n").sort();
      setListDataBOnly(data.join("\n"));
    }
  };

  // Sort List AuB
  const sortListAuB = () => {
    if (listDataAuB) {
      const data = listDataAuB.split("\n").sort();
      setListDataAuB(data.join("\n"));
    }
  };

  // Reverse List A only
  const reverseListAOnly = () => {
    if (listDataAOnly) {
      const data = listDataAOnly.split("\n").reverse();
      setListDataAOnly(data.join("\n"));
    }
  };

  // Reverse List B only
  const reverseListBOnly = () => {
    if (listDataBOnly) {
      const data = listDataBOnly.split("\n").reverse();
      setListDataBOnly(data.join("\n"));
    }
  };

  // Reverse List AnB
  const reverseListAnB = () => {
    if (listAnBDups) {
      const data = listAnBDups.split("\n").reverse();
      setListAnBDups(data.join("\n"));
    }
  };

  // Reverse List AuB
  const reverseListAuB = () => {
    if (listDataAuB) {
      const data = listDataAuB.split("\n").reverse();
      setListDataAuB(data.join("\n"));
    }
  };

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center main-content-container  "
    >
      <Form className="compare-lists-form w-100">
        <Row className="d-flex flex-md-row flex-sm-column gap-2 mb-5 ">
          <Col className={screenSize ? "col-12" : "col-width" }>
            <FormInputCard
              cardStyles="green-shades-border-color card-width"
              headerBarClassName="w-100 d-inline-flex justify-content-between p-3 green-shades-header-panel text-success"
              listTitle="List A"
              linesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold px-2 py-1 green-shades-lines "
              duplicatesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold px-2 py-1 green-shades-duplicates "
              lines={listALines}
              duplicates={listADuplicates}
              readOnlyTextareaStyles="d-none"
              textareaRows="10"
              textareaStyles={"p-2 lists-textarea"}
              data={listDataA}
              onChange={handleChange}
              buttonGroupStyles="w-100 d-flex justify-content-between flex-wrap p-2 gap-2"
              fileInputStyles="d-none "
              columnsInputStyle="d-none"
              vLookupColumnsInputStyle="d-none"
              vLookCheckboxStyles="d-none"
              moveBtn={
                <ButtonComponent
                  btnTip="Move A To B"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="fs-6 btns move-btn"
                  text="A "
                  icon={<BsArrowRight className="mb-3 fw-bold fs-5" />}
                  text2=" B"
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
                  onClick={sortData}
                />
              }
              reverseOrderBtn={
                <ButtonComponent
                  btnTip="Reverse Order"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="fs-6 btns"
                  icon={<LuArrowUpDown className="fs-5" />}
                  onClick={reverseOrder}
                />
              }
              copyBtn={
                <CopyToClipboard text={listDataA}>
                  <ButtonComponent
                    btnTip="Copy"
                    toolTipStyles="tip-style rounded"
                    btnStyleClass="fs-6 btns"
                    icon={<MdContentCopy className="fs-5" />}
                  />
                </CopyToClipboard>
              }
              deleteBtn={
                <ButtonComponent
                  btnTip="Clear"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="fs-6 btns"
                  icon={<RiDeleteBin5Line className="fs-5" />}
                  onClick={clearListA}
                />
              }
            />
          </Col>
          <Col className={screenSize ? "col-12" : "col-width"}>
            <FormInputCard
              cardStyles="green-shades-border-color card-width"
              headerBarClassName="w-100 d-inline-flex justify-content-between p-3 green-shades-header-panel text-success"
              listTitle="List B"
              linesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold px-2 py-1 green-shades-lines "
              duplicatesStyles="d-flex align-items-center justify-content-center rounded-3 fw-bold px-2 py-1 green-shades-duplicates "
              lines={linesB}
              duplicates={listBDuplicates}
              readOnlyTextareaStyles="d-none"
              textareaRows="10"
              textareaStyles="p-2 lists-textarea"
              data={listDataB}
              onChange={handleChangeB}
              buttonGroupStyles="w-100 d-flex justify-content-between flex-wrap p-2 gap-2"
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
                  onClick={sortListBData}
                />
              }
              reverseOrderBtn={
                <ButtonComponent
                  btnTip="Reverse Order"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="fs-6 btns"
                  icon={<LuArrowUpDown className="fs-5" />}
                  onClick={reverseOrderListBData}
                />
              }
              copyBtn={
                <CopyToClipboard text={listDataB}>
                  <ButtonComponent
                    btnTip="Copy"
                    toolTipStyles="tip-style rounded"
                    btnStyleClass="fs-6 btns"
                    icon={<MdContentCopy className="fs-5" />}
                  />
                </CopyToClipboard>
              }
              deleteBtn={
                <ButtonComponent
                  btnTip="Clear"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="fs-6 btns"
                  icon={<RiDeleteBin5Line className="fs-5" />}
                  onClick={clearListB}
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
              onClick={() => setShowOptions(!showOptions)}
            />

            <ButtonComponent
              btnTip="Switch Desktop / Laptop View"
              toolTipStyles="tip-style rounded"
              btnStyleClass="btns "
              icon={
                !screenSize ? (
                  <LuLaptop2 className="fs-5" />
                ) : (
                  <MdOutlineDesktopWindows className="fs-5" />
                )
              }
              onClick={() => setScreenSize(!screenSize)}
            />
          </Col>
        </Row>

        {showOptions && (
          <Row className="mb-5 check-inputs-wrapper p-5">
            <Col className="d-flex flex-md-row flex-column ">
              <div className=" d-flex flex-column mb-3 col-md-3 col-sm-8">
                <Form.Check
                  type="checkbox"
                  label="Case Sensitive"
                  checked={caseSensitive}
                  value={caseSensitive}
                  className="d-inline-flex align-items-center gap-2"
                  onChange={(e) => setCaseSensitive(e.currentTarget.checked)}
                />
                <Form.Check
                  checked={ignoreBeginSpaces}
                  type="checkbox"
                  label="Ignore Begin End Spaces"
                  className="d-inline-flex align-items-center gap-2"
                  value={ignoreBeginSpaces}
                  onChange={(e) =>
                    setIgnoreBeginSpaces(e.currentTarget.checked)
                  }
                />
                <Form.Check
                  type="checkbox"
                  label="Ignore Extra Spaces"
                  className="d-inline-flex align-items-center gap-2"
                  checked={ignoreExtraSpaces}
                  value={ignoreExtraSpaces}
                  onChange={(e) =>
                    setIgnoreExtraSpaces(e.currentTarget.checked)
                  }
                />
              </div>

              {/* Checkbox */}
              <div className="d-flex flex-column col-md-3 col-sm-8 px-2 mb-3">
                <div className="d-flex flex-column mb-1">
                  <Form.Check
                    type="checkbox"
                    className="d-inline-flex align-items-center gap-2 "
                    label="Ignore Leading Zeroes"
                    checked={ignoreLeadingZeros}
                    value={ignoreLeadingZeros}
                    onChange={(e) =>
                      setIgnoreLeadingZeros(e.currentTarget.checked)
                    }
                  />
                </div>

                {/* Line Numbered */}
                <div className="d-flex flex-column mb-2">
                  <Form.Check
                    type="checkbox"
                    label="Line Numbered"
                    className="d-inline-flex align-items-center gap-2"
                    checked={lineNumbered}
                    value={lineNumbered}
                    onChange={(e) => setLineNumbered(e.currentTarget.checked)}
                  />
                </div>
              </div>

              {/* Dropdowns */}
              <div className="col-md-3 col-sm-12 mb-3 ">
                <div className="ps-4 bg-body-secondary rounded border border-secondary-subtle border-2">
                  <Form.Select
                    onChange={(e) => setSortOptions(e.target.value)}
                    className="p-2 rounded-0"
                    // defaultValue={sortOptions}
                  >
                    <option value="no-sort">No Sort</option>
                    <option value="az">Sort A - z </option>
                    <option value="za">Sort Z - a </option>
                  </Form.Select>
                </div>

                <div className="ps-4 bg-body-secondary rounded border border-secondary-subtle border-2">
                  <Form.Select
                    onChange={(e) => setCaseOptions(e.target.value)}
                    className="p-2 rounded-0"
                  >
                    <option value="no-change">No Change</option>
                    <option value="capitalize">Capitalize</option>
                    <option value="uppercase">Uppercase</option>
                    <option value="lowercase">Lowercase</option>
                  </Form.Select>
                </div>
              </div>
            </Col>
          </Row>
        )}

        {/* Only  */}

        <Row className="d-flex align-items-center justify-content-between  gap-4 mb-5 only-wrapper">
          <Col className={screenSize ? "col-12 mb-3" : "mb-3"}>
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
              onChange={handleChangeAOnly}
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
                  onClick={trimAOnlyDupsSpaces}
                />
              }
              sortBtn={
                <ButtonComponent
                  btnTip="Sort"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns "
                  icon={<MdOutlineSort className="text-dark fs-4" />}
                  onClick={sortListAOnly}
                />
              }
              reverseOrderBtn={
                <ButtonComponent
                  btnTip="Reverse Order"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns "
                  icon={<LuArrowUpDown className="fs-5" />}
                  onClick={reverseListAOnly}
                />
              }
              copyBtn={
                <CopyToClipboard text={listDataAOnly}>
                  <ButtonComponent
                    btnTip="Copy"
                    toolTipStyles="tip-style rounded"
                    btnStyleClass="btns "
                    icon={<MdContentCopy className="fs-5" />}
                  />
                </CopyToClipboard>
              }
            />
          </Col>
          <Col className={screenSize ? "col-12 mb-3" : "mb-3"}>
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
              data={listAnBDups}
              onChange={handleChangeDups}
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
                  onClick={trimABDupsSpaces}
                />
              }
              sortBtn={
                <ButtonComponent
                  btnTip="Sort"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns "
                  icon={<MdOutlineSort className="text-dark fs-4" />}
                  onClick={sortListAnB}
                />
              }
              reverseOrderBtn={
                <ButtonComponent
                  btnTip="Reverse Order"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns "
                  icon={<LuArrowUpDown className="fs-5" />}
                  onClick={reverseListAnB}
                />
              }
              copyBtn={
                <CopyToClipboard text={listAnBDups}>
                  <ButtonComponent
                    btnTip="Copy"
                    toolTipStyles="tip-style rounded"
                    btnStyleClass="btns "
                    icon={<MdContentCopy className="fs-5" />}
                  />
                </CopyToClipboard>
              }
            />
          </Col>
          <Col className={screenSize ? "col-12 mb-3" : "mb-3"}>
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
              onChange={handleChangeBOnly}
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
                  onClick={trimBOnlyDupsSpaces}
                />
              }
              sortBtn={
                <ButtonComponent
                  btnTip="Sort"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns "
                  icon={<MdOutlineSort className="text-dark fs-4" />}
                  onClick={sortListBOnly}
                />
              }
              reverseOrderBtn={
                <ButtonComponent
                  btnTip="Reverse Order"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns "
                  icon={<LuArrowUpDown className="fs-5" />}
                  onClick={reverseListBOnly}
                />
              }
              copyBtn={
                <CopyToClipboard text={listDataBOnly}>
                  <ButtonComponent
                    btnTip="Copy"
                    toolTipStyles="tip-style rounded"
                    btnStyleClass="btns "
                    icon={<MdContentCopy className="fs-5" />}
                  />
                </CopyToClipboard>
              }
            />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col className="d-flex align-items-center justify-content-center">
            <FormInputCard
              cardStyles={
                screenSize
                  ? "bottom-only-card only-cards  green-shades-border-color w-100"
                  : "bottom-only-card only-cards  green-shades-border-color "
              }
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
              onChange={handleChangeAuB}
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
                  onClick={trimAuBDupsSpaces}
                />
              }
              sortBtn={
                <ButtonComponent
                  btnTip="Sort"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns "
                  icon={<MdOutlineSort className="text-dark fs-4" />}
                  onClick={sortListAuB}
                />
              }
              reverseOrderBtn={
                <ButtonComponent
                  btnTip="Reverse Order"
                  toolTipStyles="tip-style rounded"
                  btnStyleClass="btns "
                  icon={<LuArrowUpDown className="fs-5" />}
                  onClick={reverseListAuB}
                />
              }
              copyBtn={
                <CopyToClipboard text={listDataAuB}>
                  <ButtonComponent
                    btnTip="Copy"
                    toolTipStyles="tip-style rounded"
                    btnStyleClass="btns "
                    icon={<MdContentCopy className="fs-5" />}
                  />
                </CopyToClipboard>
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
