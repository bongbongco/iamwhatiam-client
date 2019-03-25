import moment from "moment";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import GetCounselorPresenter from "./GetCounselorPresenter";

interface IState {
    comments: any;
    submitting: boolean;
    value: string;
}

interface IProps extends RouteComponentProps<any> {
}


class GetCounselorContainer extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
           comments: [],
           submitting: false,
           value: '',
        };
    }

    public render() {
        const { comments, submitting, value } = this.state;
        
        return (
            <GetCounselorPresenter
                comments={comments}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                submitting={submitting}
                value={value}
            />
        )    
    }

    public handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
      }

    public handleSubmit = () => {
        if (!this.state.value) {
          return;
        }
    
        this.setState({
          submitting: true,
        });

        setTimeout(() => {
            this.setState({
                comments: [
                    {
                        author: 'Han Solo',
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        content: <p>{this.state.value}</p>,
                        datetime: moment().fromNow(),
                    },
                    ...this.state.comments,
                ],
                submitting: false,
                value: '',
            });
          }, 1000);
    }
    
}

export default GetCounselorContainer;