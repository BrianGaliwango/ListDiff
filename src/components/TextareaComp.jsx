import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const TextareaComp = ({
  readOnlyAttr,
  textareaRows,
  textareaStyles,
  textAreaPlaceholder,
  data,
  onChange,
  onClick,
}) => {
  return (
    <Form.Control
      readOnly={readOnlyAttr}
      as="textarea"
      rows={textareaRows}
      className={textareaStyles}
      placeholder={textAreaPlaceholder}
      value={data}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

TextareaComp.propTypes = {
  value: PropTypes.string,
  // onValueChange: (value: PropTypes.string),
  placeholder: PropTypes.string,
  name: PropTypes.string,
  
}

export default TextareaComp;
