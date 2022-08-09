import styled from 'styled-components';
import { shade } from 'polished';

export const CommentFormDiv = styled.div`
  margin-top: 20px;
  max-width: 700px;
  display: flex;
  flex-direction:column;
  align-items: center;
  
  h1 {
    color: #3d3d4d;
    margin-bottom: 10px;
  }
  input {
    margin-bottom: 5px;
    height: 30px;
    width: 357px;
    padding: 8px;
    border-radius: 5px;
    color: #3a3a3a;
    border: 2px solid whitesmoke;

    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 210px;
    height: 60px;
    background: #ff0000;
    border-radius: 5px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2;
    &:hover {
      background: ${shade(0.2, '#ff2400')};
    }
  }
  textarea {
    padding: 8px;
    border-radius: 5px;
    border: 2px solid whitesmoke;
    margin-bottom: 5px;

    &::placeholder {
      color: #a8a8b3;
    }
`;
