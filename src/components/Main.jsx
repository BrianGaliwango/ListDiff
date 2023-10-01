import React from "react";
import FormInputCard from "./FormInputCard";
import { Container } from "react-bootstrap";

const Main = () => {
  return (
    <Container fluid className="p-5 d-flex justify-content-center  ">
      <div className="d-md-flex gap-5 ">
        <FormInputCard headerBarClassName="w-100 d-inline-flex justify-content-between p-2 bg-info fs-2" listTitle="List A" lines="0" duplicates="0"  />
        <FormInputCard headerBarClassName="w-100 d-inline-flex justify-content-between p-2 bg-success fs-2" listTitle="Output B" lines="0" duplicates="0"/>
      </div>
    </Container>
  );
};

export default Main;
