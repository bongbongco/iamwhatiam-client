import React from "react";
import { Mutation } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import { startPhoneVerification, startPhoneVerificationVariables } from '../../types/api';
import PhoneLoginPresenter from "./PhoneLoginPresenter";
import { PHONE_SIGN_IN } from "./PhoneQueries.queries";

interface IState {
    countryCode: string;
    phoneNumber: string;
}

class PhoneSignInMutation extends Mutation<startPhoneVerification, 
    startPhoneVerificationVariables
> {}

class PhoneLoginContainer extends React.Component<
    RouteComponentProps<any>,
    IState
> {
    public state = {
        countryCode: "+82",
        phoneNumber: ""
    }

    public render() {
        const { history } = this.props;
        const {countryCode, phoneNumber} = this.state;
        return (
            <PhoneSignInMutation
                mutation={PHONE_SIGN_IN}
                variables={{
                    phoneNumber: `${countryCode}${phoneNumber}` 
                }}
                onCompleted={data => {
                    const { StartPhoneVerification } = data;
                    if(StartPhoneVerification.ok) {
                        return;
                    } else {
                        toast.error(StartPhoneVerification.error);
                    }
                }}
            >
                {(mutation, {loading}) => {
                    const onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
                        event.preventDefault();
                        const isValid = /^\+[1-9]{1}[0-9]{7,11}$/.test(
                            `${countryCode}${phoneNumber}`
                        );
                        if (isValid) {
                            // mutation();
                            history.push({
                                pathname: "/verify-phone"
                            });
                        } else {
                            toast.error("전화번호를 다시 확인해주세요");
                        }
                    }
                    return (
                        <PhoneLoginPresenter 
                            countryCode={countryCode} 
                            phoneNumber={phoneNumber} 
                            onInputChange={this.onInputChange}
                            onSubmit={onSubmit}
                            loading={loading}
                        />
                    )
                }}
            </PhoneSignInMutation>
        );
    }

    public onInputChange: React.ChangeEventHandler<
        HTMLInputElement | HTMLSelectElement
    > = event => {
        const {
            target: { name, value }
        } = event;
        this.setState({
            [name]: value
        } as any);
    }
}

export default PhoneLoginContainer;