import React from "react";
import LottieView from "lottie-react-native";
import { Spacer } from "../../../components/spacer/spacer.component";

import { 
    AccountBackground, 
    AccountCover,
    AccountContainer,
    AnimationWrapper,
    AuthButton,
    Title,
} from "../components/account.style";

export const AccountScreen = ({ navigation }) => {
    return <AccountBackground>
        <AccountCover/>
        <AnimationWrapper style={{
            transform: [{scaleX: 0.7},{scaleY: 0.7}]
        }}
        >
            <LottieView 
                key="animation"
                autoPlay
                loop
                resizeMode="cover"
                source={require("../../../../assets/hale_logo.json")}
            />
        </AnimationWrapper>
        <AccountContainer>
            <AuthButton 
                icon="lock-open-outline"
                mode="contained"
                color="#fecc47"
                onPress={() => navigation.navigate("Login")}
            >
                Login
            </AuthButton>
            <Spacer size="large">
                <AuthButton 
                    icon="email"
                    mode="contained"
                    color="#fecc47"
                    onPress={() => navigation.navigate("Register")}
                >
                    Register
                </AuthButton>
            </Spacer>
        </AccountContainer>
    </AccountBackground>;
};