import { FC } from "react";
import { StandardTextFieldProps } from "@mui/material/TextField";
import { StyledTextField } from "./styles";

// interface IProps extends StandardTextFieldProps {}

const TextField: FC<StandardTextFieldProps> = (props) => {
  return <StyledTextField {...props} />;
};

export default TextField;
