import {
    Form
} from "antd";
import React from "react";
// import { Mutation } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
// import { toast } from 'react-toastify';
// import routes from "../../routes";
import AddCounselingPresenter from "./AddCounselorPresenter";
// import { ADD_Counseling } from "./AddCounselingQueries";
/*
interface IState {
}
*/

interface IProps extends RouteComponentProps<any> {
    form: any;
}

class AddCounselorContainer extends React.Component<IProps> {
    constructor(props) {
        super(props);
    }

    public render() {

        
        return (
            <AddCounselingPresenter
                form={this.props.form}
                handleSubmit={this.handleSubmit}
                normFile={this.normFile}
            />
        )    
    }

    public handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    public normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }
}

export default Form.create()(AddCounselorContainer);