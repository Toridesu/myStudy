import styled from "styled-components"

export const Input = (props) => {
  const { placeholder = "" } = props;
  return <SInput type="text" placeholder={placeholder}/>;
} 

const SInput = styled.input`
  padding: 8px 16px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 9999px;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #4a90e2;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }

  &::placeholder {
    color: #999;
  }
`