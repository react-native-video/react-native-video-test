import React from 'react';
import { ActivityIndicator } from 'react-native';

interface Props {
    loading: boolean;
}

export const LoadingIndicator: React.FC<Props> = ({ loading }) => {
    if (!loading) {
        return null;
    }

    return (
        <ActivityIndicator
            size={'large'}
            style={{
                flex: 1,
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: '#000000'
            }}
            color={'#ffffff'}
        />
    );
};
