import dicoding from "../assets/Dicoding.png";
import kp from "../assets/KP.png";
import uiux from "../assets/UIUX.png";
import LED_wifi from "../assets/LED_wifi.png";

export const dummyProjects = [
  {
    id: 1, // Sesuaikan ID ini dengan urutan project di portofolio Anda
    Img: dicoding, // Pastikan variabel gambar di-import di bagian atas file
    Title: "Project Analsis data - Dicoding",
    Description:
      "Menentukan pertanyaan, Bagaimana pola jumlah polutan setiap tahun & Kota mana yang memiliki kualiatas polutan tertinggi",
    Link: "/",
    Github: "https://github.com/GilarSumilar/Dicoding-Project",
    detailLink: "/project/1",
    TechStack: ["Python", "Pandas", "NumPy", "Matplotlib"],
    Features: [
      "🌡️ Maximum Temperature: Menampilkan suhu tertinggi yang tercatat, yaitu 41.6°C.",
      "🌧️ Maximum Rain Volume: Informasi curah hujan maksimum, sebesar 72.5 mm.",
      "🌬️ Kecepatan Angin: Data kecepatan angin tertinggi, yaitu 13.2 m/s.",
      "🏭 Kadar Polutan Tertinggi: Menunjukkan konsentrasi polutan paling tinggi, sebesar 319.4 ppm.",
      "📊 Dashboard Visualisasi: Semua data ditampilkan dalam format dashboard interaktif untuk analisis kualitas udara.",
    ],
  },

  {
    id: 2,
    Img: kp,
    Title: "Website Katalog Pemesanan Produk",
    Description:
      "Website katalog product dengan fitur keranjang dan pemesanan melalui WA yang dibuat untuk memenuhi kebutuhan tugas akhir kuliah saya. Website ini menampilkan katalog produk dengan fitur keranjang belanja sederhana, memungkinkan pengguna untuk memilih produk dan langsung menghubungi penjual melalui WhatsApp untuk melakukan pemesanan. Proyek ini dirancang untuk memberikan pengalaman pengguna yang mudah dan cepat dalam proses pemesanan online.",
    Link: "/",
    Github: "https://github.com/GilarSumilar/WEB_Katalog_pemesanan",
    detailLink: "/project/2",
    TechStack: ["HTML", "JavaScript", "CSS", "Bootstrap"],
    Features: [
      "🛒 Katalog Produk: Menampilkan daftar produk yang tersedia.",
      "📦 Keranjang Belanja: Pengguna bisa menambahkan produk ke keranjang sebelum checkout.",
      "📲 Integrasi WhatsApp: Pemesanan dilakukan langsung melalui WhatsApp untuk memudahkan komunikasi.",
    ],
  },
  {
    id: 3, // Sesuaikan dengan urutan id Anda
    Img: uiux, // Sesuaikan dengan nama variabel gambar yang Anda import
    Title: "Design WEB Joki - Platform Request Tugas & Project",
    Description:
      "Sebuah platform layanan digital interaktif yang dirancang dengan tren visual Neobrutalism untuk memfasilitasi kolaborasi pengerjaan proyek web dan tugas IT. Sistem ini dilengkapi dengan antarmuka yang dinamis, sistem manajemen tugas yang kasual namun terstruktur, serta fitur komunikasi real-time antar pengguna dan penyedia layanan.",
    Link: "/", // Ganti dengan link deploy (jika ada)
    Github: "/", // Ganti dengan link repo github Anda (jika ada)
    detailLink: "/project/3", // Sesuaikan dengan id
    TechStack: ["Figma"],
    Features: ["Desain UI/UX Neobrutalism"],
  },

  {
    id: 4, // Sesuaikan ID ini dengan urutan project di portofolio Anda
    Img: LED_wifi, // Import gambar di bagian atas file portofolio Anda
    Title: "Project IOT - Sistem Kontrol LED Berbasis WiFi",
    Description:
      "Sistem kontrol LED berbasis WiFi yang memungkinkan pengendalian jarak jauh terhadap pencahayaan di berbagai area. Sistem ini dirancang untuk memberikan kemudahan dalam mengelola pencahayaan secara efisien dan ramah lingkungan.",
    Link: "/",
    Github: "/",
    detailLink: "/project/4",
    TechStack: ["JavaScript", "Arduino", "Socket.IO", "ESP8266"],
    Features: [
      "Pengendalian Jarak Jauh",
      "Efisiensi Energi",
      "Integrasi dengan Sensor Lingkungan",
    ],
  },
];
