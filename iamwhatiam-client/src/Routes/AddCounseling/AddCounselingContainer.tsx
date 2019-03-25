import React from "react";
// import { Mutation } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
// import { toast } from 'react-toastify';
// import routes from "../../routes";
import AddCounselingPresenter from "./AddCounselingPresenter";
// import { ADD_Counseling } from "./AddCounselingQueries";

interface IState {
    collapsed: boolean;
    current: number;
    text: string;
}

interface IProps extends RouteComponentProps<any> {
}

class AddCounselingContainer extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
           collapsed : true,
           current: 0,
           text: ""
        };
        this.handleChange = this.handleChange.bind(this)
    }

    public render() {
        const { current, collapsed, text } = this.state;
        
        return (
            <AddCounselingPresenter
                collapsed={collapsed}
                current={current}
                onCollapse={this.onCollapse}
                handleChange={this.handleChange}
                prev={this.prev}
                next={this.next}
                text={text}
            />
        )    
    }

    public onCollapse = (collapsed: boolean) => {
        this.setState({
            collapsed
        });
    }

    public onInputChange: React.ChangeEventHandler<
        any
    > = async event => {
        const {
            target: { name, value }
        } = event;
        this.setState({
            [name]: value
        } as any);
    };

    public handleChange(value) {
        this.setState({ text: value })
      }

    public next = () => {
        const current = this.state.current + 1;
        this.setState({ current });
      }
    
    public prev = () => {
        const current = this.state.current - 1;
        this.setState({ current });
      }

}

export default AddCounselingContainer;