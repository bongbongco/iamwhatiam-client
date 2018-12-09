import React from "react";
import { RouteComponentProps } from "react-router-dom";


interface IProps extends RouteComponentProps<any> {
}

const OutHomePresenter: React.SFC<IProps> = () => <span>stuff</span>;

export default OutHomePresenter;