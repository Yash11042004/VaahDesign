// components/Logo.jsx

const Logo = ({ dark = false }) => {
  return (
    <div className="flex flex-col items-center leading-tight">
      <span
        className={`font-poppins text-2xl md:text-3xl font-light tracking-[0.3em] text-center ${
          dark ? "text-[#4a2f2f]" : "text-white"
        }`}
      >
        VAAH
      </span>

      <span
        className={`text-[10px] md:text-xs tracking-[0.35em] font-poppins font-light uppercase text-center mt-1 ${
          dark ? "text-[#4a2f2f]/70" : "text-white/70"
        }`}
      >
        Design
      </span>
    </div>
  );
};

export default Logo;
