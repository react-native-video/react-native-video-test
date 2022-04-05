import React, { useState } from 'react';
import { Button, Modal, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { VideoPlayer } from './VideoPlayer';

const App = () => {
    const [visible, setVisible] = useState(false);
    const hideModal = () => setVisible(false);

    return (
        <SafeAreaView>
            <View>
                <Button title="PLAY" onPress={() => setVisible(true)} />
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
                        <VideoPlayer onFinished={hideModal} />
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
