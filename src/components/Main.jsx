import React from "react";
import FormInputCard from "./FormInputCard";
import { Container } from "react-bootstrap";
import ButtonComponent from "./ButtonComponent";
import {
  MdLinkOff,
  MdLink,
  MdPlaylistRemove,
  MdOutlineSort,
  MdContentCopy,
} from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsArrowLeft } from "react-icons/bs";

const Main = () => {
  return (
    <Container fluid className="p-5 d-flex justify-content-center  ">
      <div className="d-md-flex gap-5 ">
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
      </div>
    </Container>
  );
};

export default Main;
