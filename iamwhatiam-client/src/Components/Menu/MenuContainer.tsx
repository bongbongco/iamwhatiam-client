import React from "react";
import { Mutation, Query } from "react-apollo";
import { toast } from 'react-toastify';
import { USER_PROFILE } from "../../sharedQueries";
import { toggleDriving, userProfile } from "../../types/api";
import MenuPresenter from "./MenuPresenter";
import { TOGGLE_DRIVING } from './MenuQueries';

class ProfileQuery extends Query<userProfile> {}

class ToggleDrivingMutation extends Mutation<toggleDriving>{}

class MenuContainer extends React.Component {
    public render() {
        return (
            <ToggleDrivingMutation 
                mutation={TOGGLE_DRIVING}
                update={(cache, {data}) => {
                    if (data) {
                        const  { ToggleDrivingMode } = data;
                        if (ToggleDrivingMode.ok) {
                            toast.success("상태가 변경되었습니다");
                        }
                        else if (ToggleDrivingMode.error) {
                            toast.error(ToggleDrivingMode.error);
                            return;
                        }
                        const query: userProfile | null = cache.readQuery({ 
                            query: USER_PROFILE 
                        });
                        if (query) {
                            query.GetMyProfile.user!.isDriving = !query.GetMyProfile.user!.isDriving;
                        }
                        cache.writeQuery({ query: USER_PROFILE, data: query });
                    }
                }}
            >
                {toggleDrivingFn => (
                    <ProfileQuery query={USER_PROFILE}>
                        {({ data, loading }) => (
                            <MenuPresenter 
                                data={data} 
                                loading={loading}
                                toggleDrivingFn={toggleDrivingFn} 
                            />
                        )} 
                    </ProfileQuery>
                )}
            </ToggleDrivingMutation>
        );
    }
}

export default MenuContainer;