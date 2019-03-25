import React from "react";
import { Mutation } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { toast } from 'react-toastify';
import { LOG_USER_IN } from "../../sharedQueries.local";
import {
    verifyPhone,
    verifyPhoneVariables
} from "../../types/api";
import VerifyPhonePresenter from "./VerifyPhonePresenter";
import { VERIFY_PHONE } from "./VerifyPhoneQueries";

interface IState {
    verificationKey: string;
    phoneNumber: string;
}

interface IProps extends RouteComponentProps<any> {}

class VerifyMutation extends Mutation<verifyPhone, verifyPhoneVariables> {}

class VerifyPhoneContainer extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        if(!props.location.state) {
            props.history.push("/");
        }
        this.state = {
            phoneNumber: props.location.state.phone,
            verificationKey: ""
        };
    }

    public render() {
        const { verificationKey, phoneNumber } = this.state;
        return (
            <Mutation mutation={LOG_USER_IN}>
                {logUserIn => (
                    <VerifyMutation
                        mutation={VERIFY_PHONE}
                        variables={{
                            key: verificationKey,
                            phoneNumber
                        }}
                        onCompleted={data => {
                            const { CompletePhoneVerification } = data;
                            if (CompletePhoneVerification.ok) {
                                if (CompletePhoneVerification.token) {
                                    logUserIn({
                                        variables: {
                                            token: CompletePhoneVerification.token
                                        }
                                    });
                                }
                                toast.success("인증되었습니다");
                            } else {
                                    if (CompletePhoneVerification.error === "Verification key not valid ") {
                                        toast.error("인증번호를 다시 확인해주세요");
                                    } else {
                                        toast.error(CompletePhoneVerification.error);
                                    }
                            }
                        }}
                    >
                        {(mutation, { loading }) => (
                            <VerifyPhonePresenter 
                                onSubmit={mutation}
                                onChange={this.onInputChange} 
                                verificationKey={verificationKey} 
                                loading={loading}
                            />
                        )}
                    </VerifyMutation>
                )}
            </Mutation>
            
        );
    }

    public onInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        const {
            target: {name, value}
        } = event;
        this.setState({
            [name]: value
        } as any);
    };
}

export default VerifyPhoneContainer;