"use client";

import { useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  function toggle() {
    const v = videoRef.current;
    if (!v) return;
    if (playing) {
      v.pause();
    } else {
      v.play();
    }
    setPlaying(!playing);
  }

  return (
    <div style={{ position: "relative", borderRadius: 22, overflow: "hidden", boxShadow: "0 40px 80px -40px rgba(20,40,32,.4)" }}>
      <video
        ref={videoRef}
        src="/hero2.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ width: "100%", height: 540, objectFit: "cover", display: "block" }}
      />
      <button
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
        style={{
          position: "absolute",
          bottom: 16,
          right: 16,
          width: 38,
          height: 38,
          borderRadius: "50%",
          background: "rgba(0,0,0,0.42)",
          border: "1px solid rgba(255,255,255,0.18)",
          backdropFilter: "blur(6px)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          opacity: 0.72,
          transition: "opacity .15s",
          padding: 0,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.72")}
      >
        {playing ? (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <rect x="5" y="4" width="4.5" height="16" rx="1" />
            <rect x="14.5" y="4" width="4.5" height="16" rx="1" />
          </svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 5v14l12-7z" />
          </svg>
        )}
      </button>
    </div>
  );
}
