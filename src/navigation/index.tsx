import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottonTabs } from './BottonTabs';
import { Login } from '../Login/screen/Login';

export const AppNavigation = () => {
    const [isLogged, setIsLogged] = useState<boolean>(false);

    useEffect(() => {
    }, [isLogged])

    const hanledToValidatelogin = (isValid: boolean) => setIsLogged(isValid);

    return (
        <NavigationContainer>
            {isLogged ?
                <BottonTabs />
                :
                <Login
                    onPress={hanledToValidatelogin}
                />
            }
        </NavigationContainer>
    );
}
