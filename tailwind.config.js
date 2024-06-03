/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        zigzag: "zigzagAnimation 5s ease-in infinite",
        "shake-plus": "shakeEffectPlus 5s ease-in infinite",
        "cube-rotate": "cubeRotate 3s infinite",
        dots: "dotsAnimation 5s infinite",
        circle: "circleAnimation 5s infinite",
      },
      keyframes: {
        dotsAnimation: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        zigzagAnimation: {
          "0%, 100%": { left: "-0.3rem", top: "1.5rem" },
          "50%": { left: "5%", top: "2%" },
        },
        shakeEffectPlus: {
          "0%, 100%": { top: "-0.8rem", left: "50%" },
          "50%": { top: "3%", left: "48%" },
        },
        cubeRotate: {
          "0%": { transform: "translateY(0px) rotateY(0deg)" },
          "50%": { transform: "translateY(-12px) rotateY(180deg)" },
          "100%": { transform: "translateY(0px) rotateY(360deg)" },
        },
        circleAnimation: {
          "0%, 100%": { transform: "translateX(0) rotate(0deg)" },
          "50%": { transform: "translateX(50px) rotate(180deg)" },
        },
      },
      textShadow: {
        "outline-white":
          "1px 1px 0 white, -1px -1px 0 white, -1px 1px 0 white, 1px -1px 0 white, 1px 0 0 white, 0 1px 0 white, -1px 0 0 white, 0 -1px 0 white",
      },
    },
  },
  variants: {
    textShadow: ["responsive"],
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-outline-white": {
          textShadow:
            "1px 1px 0 white, -1px -1px 0 white, -1px 1px 0 white, 1px -1px 0 white, 1px 0 0 white, 0 1px 0 white, -1px 0 0 white, 0 -1px 0 white",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
