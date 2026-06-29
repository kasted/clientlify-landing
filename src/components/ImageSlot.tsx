import { CSSProperties } from "react";

const GRADIENTS = [
  "linear-gradient(135deg, #163020 0%, #0d2319 50%, #163020 100%)",
  "linear-gradient(135deg, #1a3520 0%, #163325 60%, #0b3d2e 100%)",
  "linear-gradient(135deg, #1e3829 0%, #2a4a3a 50%, #12422e 100%)",
  "linear-gradient(135deg, #0f2d24 0%, #1d3d2f 60%, #183520 100%)",
  "linear-gradient(135deg, #1c3830 0%, #0e2920 50%, #243f32 100%)",
];

let counter = 0;

interface ImageSlotProps {
  placeholder?: string;
  style?: CSSProperties;
  height?: number | string;
  width?: number | string;
  borderRadius?: number | string;
  gradient?: number;
}

export default function ImageSlot({
  placeholder,
  style,
  height = 420,
  width = "100%",
  borderRadius = 20,
  gradient = 0,
}: ImageSlotProps) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius,
        background: GRADIENTS[gradient % GRADIENTS.length],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        fontWeight: 500,
        color: "rgba(255,255,255,.45)",
        textAlign: "center",
        padding: "0 24px",
        ...style,
      }}
    >
      {placeholder}
    </div>
  );
}
