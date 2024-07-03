
import styled from 'styled-components';

export const InputCover = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    z-index: 1000;
`;

export const SearchInput = styled.input`
    padding: 10px;
    background: #fff;
    border: 1px solid transparent;
    outline: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px;
    border-radius: 5px;
    outline: none;
    width: 100%;
    height: 45px;
    padding: 0 10px 0 40px;
`;

export const ClearSearch = styled.span`
    margin-left: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #333;
    position: absolute;
    right: 12px;
    top: 10px;
`;
export const SearchIcon = styled.span`
    margin-left: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #333;
    position: absolute;
    top: 10px;
`;