import React from "react";
import styled from "../../typed-components";
/*
const Container = styled.input`
    background-color: white;
    border-radius: 5px;
    -webkit-appearance: none;
    z-index: 2;
    width: 100%;
    max-width: 600;
    border: 0;
    font-size: 16px;
    padding: 15px 10px;
    box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);
    margin: auto;
    top: 10px;
    left: 0;
    right: 0;
    height: auto; 
`;
*/
const Container = styled.input`
    max-width: 215px;
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    background-color: #fafafa;
    font-size: 14px; 
    font-weight: 300;
    margin-left: 60px;
    z-index: 2;
    &::placeholder{
        color: $dark-grey;
    }
    &:focus{
        outline: none;
        background-color: white; 
    }
`;

interface IProps {
    value: string;
    onBlur: any;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.SFC<IProps> = ({
    value,
    onBlur,
    name,
    onChange
}) => (
    <Container
        value={value}
        onBlur={onBlur}
        onSubmit={onBlur}
        onChange={onChange}
        placeholder={"🔎"}
        name={name}
    />
);

export default SearchBar;