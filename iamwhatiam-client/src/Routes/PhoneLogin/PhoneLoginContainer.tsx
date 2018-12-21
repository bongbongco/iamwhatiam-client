import React from "react";
import { Mutation, MutationFn } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import routes from "../../routes";
import { 
    startPhoneVerification, 
    startPhoneVerificationVariables 
} from '../../types/api';
import PhoneLoginPresenter from "./PhoneLoginPresenter";
import { PHONE_SIGN_IN } from "./PhoneQueries";

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
    public phoneMutation: MutationFn;
    public state = {
        countryCode: "+82",
        phoneNumber: ""
    }

    public render() {
        const { history } = this.props;
        const {countryCode, phoneNumber} = this.state;
        const phone = this.mergeCountryCodePhoneNumber(countryCode, phoneNumber);
        return (
            <PhoneSignInMutation
                mutation={PHONE_SIGN_IN}
                variables={{
                    phoneNumber: phone
                }}
                onCompleted={data => {
                    const { StartPhoneVerification } = data;
                    if(StartPhoneVerification.ok) {
                        toast.success("인증번호를 전송하였습니다");
                        setTimeout(() => {
                            history.push({
                                pathname: routes.verifyPhone,
                                state: {
                                    phone
                                }
                            });
                        }, 2000);
                    } else {
                        toast.error(StartPhoneVerification.error);
                    }
                }}
            >
                {(phoneMutation, {loading}) => {
                    this.phoneMutation = phoneMutation;
                    return (
                        <PhoneLoginPresenter 
                            countryCode={countryCode} 
                            phoneNumber={phoneNumber} 
                            onInputChange={this.onInputChange}
                            onSubmit={this.onSubmit}
                            loading={loading}
                        />
                    );
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

    public onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
        event.preventDefault();
        const { countryCode, phoneNumber } = this.state;
        const phone = this.mergeCountryCodePhoneNumber(countryCode, phoneNumber);
                        
        const isValid = /^\+[1-9]{1}[0-9]{7,11}$/.test(phone);
        if (isValid) {
            this.phoneMutation();
        } else {
            toast.error("전화번호를 다시 확인해주세요 😔");
        }
    }

    public mergeCountryCodePhoneNumber(countryCode, phoneNumber) {
        let phone = ""; 
        if(countryCode === "+82" ) {
            if(phoneNumber.indexOf("010", 0) === 0) {
                phone = `${countryCode}${phoneNumber.substring(1)}`;
            } else {
                phone = `${countryCode}${phoneNumber}`;
            }
        }
        return phone;
    }
}

export default PhoneLoginContainer;