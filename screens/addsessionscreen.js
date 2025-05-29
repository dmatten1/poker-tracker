import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { supabase } from '../supabase';

export default function AddSessionScreen() {
  const [gameType, setGameType] = useState('cash');
  const [stakes, setStakes] = useState('');
  const [buyIn, setBuyIn] = useState('');
  const [cashOut, setCashOut] = useState('');
  const [location, setLocation] = useState('');

  const handleSave = async () => {
    const session = {
      game_type: gameType,
      buy_in: parseFloat(buyIn),
      cash_out: parseFloat(cashOut),
      location,
      stakes: gameType === 'cash' ? stakes : null,
    };

    const { error } = await supabase.from('sessions').insert([session]);
    if (error) console.error(error);
    else {
      alert('Session saved!');
      setBuyIn('');
      setCashOut('');
      setLocation('');
      setStakes('');
      setGameType('cash');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Game Type</Text>
      <Picker selectedValue={gameType} onValueChange={setGameType} style={styles.input}>
        <Picker.Item label="Cash Game" value="cash" />
        <Picker.Item label="Tournament" value="tournament" />
      </Picker>

      {gameType === 'cash' && (
        <TextInput
          placeholder="Stakes (e.g. 1/2)"
          value={stakes}
          onChangeText={setStakes}
          style={styles.input}
        />
      )}

      <TextInput placeholder="Buy-In" keyboardType="numeric" value={buyIn} onChangeText={setBuyIn} style={styles.input} />
      <TextInput placeholder="Cash-Out" keyboardType="numeric" value={cashOut} onChangeText={setCashOut} style={styles.input} />
      <TextInput placeholder="Location" value={location} onChangeText={setLocation} style={styles.input} />
      <Button title="Save Session" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 15, padding: 10 },
  label: { fontWeight: 'bold', marginBottom: 5 },
});
