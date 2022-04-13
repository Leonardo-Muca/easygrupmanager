import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    Text,
} from 'react-native';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { MemberItem } from '../components/MemberItem';
import api from '../../api/api';
import { styles } from '../styles/OnboardingStyles'

interface Member {
    id: any;
    age: number;
    email: string;
    experience: string;
    height: number;
    lastNameF: string;
    lastNameM: string;
    name: string;
    number: number;
    sex: string;
}

interface Props {
    item: Member;
    index: number;
}

type MediaType = 'photo' | 'video' | 'mixed';

export const MembersScreen = () => {
    const [members, setMembers] = useState([]);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [image, setImage] = useState('');

    const mediaType: MediaType = 'mixed'

    useEffect(() => {
        api.get('/user').then(response => {
            setMembers(response.data.cont.usuario),
                setIsVisible(true)
        }
        );
    }, [])

    const selectImage = () => {

        const options = {
            title: 'Select Image',
            mediaType,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            }
        }

        launchImageLibrary(options, response => {
            if (response.errorCode) {
                console.log(response.errorMessage);
            } else if (response.didCancel) {
                console.log('Cancelo');
            } else {
                const path = response.assets[0].uri;
                setImage(path);
            }
        })

    };

    const takeImage = () => {

        const options = {
            title: 'Select Image',
            mediaType,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            includeBase64: true,
        }

        launchCamera(options, response => {
            if (response.errorCode) {
                console.log(response.errorMessage);
            } else if (response.didCancel) {
                console.log('Cancelo');
            } else {
                const uri = response.assets[0].uri;
                setImage(uri);
            }
        })

    };

    const renderItem = ({ item, index }: Props) => (
        <MemberItem item={item} index={index} />
    );

    return (
        <SafeAreaView style={[styles.container, !isVisible && styles.horizontal]}>
            {isVisible ?
                <>
                    <Text style={styles.textTitle}>Miembros</Text>
                    <FlatList
                        data={members}
                        renderItem={renderItem}
                        keyExtractor={(_: Member, index: number) => index.toString()}
                    />
                </>
                :
                <ActivityIndicator size='large' color='red' />
            }
        </SafeAreaView>
    )
};
