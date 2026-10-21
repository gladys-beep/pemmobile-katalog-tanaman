import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Header from './components/Header';
import KartuProduk from './components/KartuProduk';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header dengan judul Katalog Mini Tanaman Hias */}
      <Header title="Katalog Mini Tanaman Hias" />
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <KartuProduk
          judul="Monstera Deliciosa"
          keterangan="Siram 3 hari sekali. Letakkan di tempat teduh dengan cahaya tidak langsung."
          label="Segar & Berakar"
          gambar={{ uri: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400' }}
        />
        <KartuProduk
          judul="Lidah Mertua (Sansevieria)"
          keterangan="Sangat tahan kering, cukup disiram seminggu sekali. Bagus untuk sirkulasi..."
          label="Ready Stock"
          gambar={{ uri: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' }}
        />
        <KartuProduk
          judul="Sirih Gading (Golden Pothos)"
          keterangan="Cocok untuk tanaman gantung indoor. Siram saat media tanam mulai menge..."
          label="Best Seller"
          gambar={require('./assets/sirih.jpg')}
        />
        <KartuProduk
          judul="Kaktus Mini"
          keterangan="Minimal penyiraman, butuh banyak sinar matahari langsung agar tidak ce..."
          label="Stok Terbatas"
          gambar={{ uri: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400' }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    paddingVertical: 8,
  },
});