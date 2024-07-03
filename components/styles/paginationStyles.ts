import styled from 'styled-components';

export const PaginationContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 20%;
  right: 20%;
  background-color: white;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const PaginationButton = styled.button`
  margin: 0 5px;
  border: 1px solid #E6E6E6;
  background-color: #fff;
  height: 30px;
  width: 90px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
`;
export const RightPaginationButton = styled(PaginationButton)`
  right: 0;
`;
export const LeftPaginationButton = styled(PaginationButton)`
  left: 0;
`;
