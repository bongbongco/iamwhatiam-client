import React from "react";
import styled from "../../typed-components";

const Container = styled.input`
    max-width: 400px;
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
    &:focus{
        outline: none;
        background-color: white; 
        box-shadow: 10px 10px 10px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);
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
        placeholder={"검색하기"}
        name={name}
    />
);

export default SearchBar;