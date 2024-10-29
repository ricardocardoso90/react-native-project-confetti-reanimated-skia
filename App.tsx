import { useRef } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Confetti, ConfettiMethods } from 'react-native-fast-confetti';

export default function App() {
  const confettiRef = useRef<ConfettiMethods>(null);

  return (
    <View style={styles.container}>
      <Confetti
        autoplay={false}
        ref={confettiRef}
        colors={['#FF0000', '#0000FF']}
        fadeOutOnEnd
      />

      <Button
        title='Iniciar'
        onPress={() => confettiRef.current?.restart()}
      />

      <Button
        title='Pausar'
        onPress={() => confettiRef.current?.pause()}
      />

      <Button
        title='Continuar'
        onPress={() => confettiRef.current?.resume()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
