// components/SimpleAudioPlayer.tsx
'use client'

import { useState, useRef } from 'react';

const SimpleAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    // Pastikan elemen audio ada
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Coba putar audio, dan tangkap jika ada error
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
          alert("Gagal memutar audio. Mungkin browser memblokir autoplay. Silakan klik tombolnya lagi.");
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    // Div ini akan melayang di pojok kanan bawah
    <div className="fixed bottom-5 right-5 z-50 p-3 bg-red-600 text-white rounded-lg shadow-xl">
      {/* Elemen audio disembunyikan, kita kontrol dengan tombol */}
      <audio ref={audioRef} src="/musik.mp3" loop />
      
      {/* Tombol Play/Pause yang sangat sederhana */}
      <button onClick={togglePlayPause} className="font-bold">
        {isPlaying ? 'PAUSE' : 'PLAY'}
      </button>
    </div>
  );
};

export default SimpleAudioPlayer;