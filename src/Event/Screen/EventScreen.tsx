import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ActivityIndicator, FlatList } from 'react-native';
import api from '../../api/api';
import { EventItem } from '../components/EventItem';
import { Event } from '../interfaces/EventInterface';

import { styles } from '../styles/EventStyles';

interface Props {
    item: Event;
    index: number;
}

export const EventScreen = () => {
    const [event, setEvent] = useState<Event[]>([]);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        api.get('/event').then(response => {
            setEvent(response.data.cont.evento),
                setIsVisible(true)
        }
        );
    }, [])

    const renderItem = ({ item, index }: Props) => (
        <EventItem item={item} index={index} />
    );

    return (
        <SafeAreaView style={[styles.container, !isVisible && styles.horizontal]}>
            {isVisible ?
                <>
                    <Text style={styles.textTitle}>Eventos</Text>
                    <FlatList
                        data={event}
                        renderItem={renderItem}
                        keyExtractor={(_: Event, index: number) => index.toString()}
                    />
                </>
                :
                <ActivityIndicator size='large' color='red' />
            }
        </SafeAreaView>
    );
}
