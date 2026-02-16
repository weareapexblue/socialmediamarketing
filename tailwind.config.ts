import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        skyMint: "#ddf5ff",
        cloud: "#f8fbff",
        coral: "#ff8566",
        sunshine: "#ffd76b",
        ocean: "#1d73c8",
        leaf: "#20a171",
        ink: "#1b2b3d"
      },
      boxShadow: {
        card: "0 18px 45px rgba(19, 80, 126, 0.12)",
        soft: "0 10px 28px rgba(19, 80, 126, 0.09)"
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at 15% 20%, rgba(255, 215, 107, 0.45), transparent 45%), radial-gradient(circle at 85% 10%, rgba(32, 161, 113, 0.22), transparent 45%), linear-gradient(150deg, #f8fbff 0%, #ddf5ff 48%, #f4f9ff 100%)"
      }
    }
  },
  plugins: []
};

export default config;
