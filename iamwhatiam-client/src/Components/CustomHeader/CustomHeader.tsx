import {
    Input,
    Layout, 
    Menu,
} from "antd";
import React from "react";
// import styled from "../../typed-components";

const { Header } = Layout;
const Search = Input.Search;

interface IProps {
    title: string;
    backTo: string;
}

const CustomHeader: React.SFC<IProps> = ({ title, backTo }) => (
    <Header
        style={{
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '100%',
        }} 
    >
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    width: '100%'
                }} 
            >
                <div 
                    className="logo"
                    style={{ 
                        alignItems: 'center',
                        display: 'flex',
                    }}
                >
                    <img 
                        src="https://res.cloudinary.com/df1z6ncoy/image/upload/v1551569859/%E1%84%86%E1%85%A9%E1%84%86%E1%85%A9%E1%84%8F%E1%85%B5%E1%84%8E%E1%85%B5%E1%86%AB_%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%E1%86%AB%E1%84%90%E1%85%B3_%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%91%E1%85%A1_%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8_%E1%84%86%E1%85%B5%E1%86%BE_%E1%84%86%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3_%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8.png" 
                        height="38px"
                    />
                </div>
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ 
                        maxWidth: 450,
                        minWidth: 100,
                        paddingLeft: '15px',
                        width: '100%' 
                    }}
                />
            </div>
        <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ 
                display: 'flex',
                justifyContent: 'flex-end',
                lineHeight: '64px',
                width: '100%',
            }}
        >
            <Menu.Item key="1">Dandi</Menu.Item>
            <Menu.Item key="2">Counseling</Menu.Item>
            <Menu.Item key="3">My Page</Menu.Item>
        </Menu>
    </Header>
);

export default CustomHeader;