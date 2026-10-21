import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Lencana from './Lencana';

export default function KartuProduk({ judul, keterangan, gambar, label }) {
  return (
    <View style={styles.kartu}>
      <Image source={gambar} style={styles.gambar} />
      <View style={styles.info}>
        <Text style={styles.judul}>{judul}</Text>
        <Lencana label={label} />
        <Text style={styles.keterangan} numberOfLines={2}>
          {keterangan}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  kartu: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    marginHorizontal: 16,
    elevation: 3, // Bayangan untuk Android
    shadowColor: '#000', // Bayangan untuk iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  gambar: {
    width: 72,
    height: 72,
    borderRadius: 12,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  judul: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  keterangan: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});