import React, { useState } from 'react';
import { Button, Modal, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { VideoPlayer } from './VideoPlayer';

const App = () => {
    const [visible, setVisible] = useState(false);
    const [start, setStart] = useState(0);
    const hideModal = () => setVisible(false);

    const play = (from: number) => {
        setStart(from);
        setVisible(true);
    };

    return (
        <SafeAreaView>
            <View style={{ marginTop: '40%' }}>
                <Button title="PLAY (start)" onPress={() => play(0)} />
                <Button title="PLAY (1 second in)" onPress={() => play(1)} />
            </View>
            <Modal
                visible={visible}
                animationType="fade"
                onDismiss={hideModal}
                onRequestClose={hideModal}
                presentationStyle={'overFullScreen'}>
                <View style={styles.outter}>
                    <StatusBar hidden />
                    <View style={styles.inner}>
                        <VideoPlayer start={start} onFinished={hideModal} />
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    outter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    inner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default App;
