import styled from "styled-components";
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
`;

export const InputContainer = styled.div`
  margin: 20px;
  input {
    padding: 8px;
    font-size: 16px;
    border: 2px solid #ddd;
    border-radius: 4px;
    margin-right: 10px;
  }
  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const TaskListsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
`;

export const Column = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  width: 30%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  h2 {
    text-align: center;
    color: #333;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    background-color: #fff;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  button {
    background-color: #28a745;
    border: none;
    padding: 5px 10px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
  button.move {
    background-color: #ffc107;
  }
  button.delete {
    background-color: #dc3545;
  }
`;
