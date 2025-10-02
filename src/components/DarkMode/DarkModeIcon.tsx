import * as motion from "motion/react-client";

type Props = {
  isDark: boolean;
};

function DarkModeIcon({ isDark }: Props) {
  const mainPath = {
    sun: "M32.003 48.006C40.8401 48.006 48.004 40.8421 48.004 32.005C48.004 23.1679 40.8401 16.004 32.003 16.004C23.1659 16.004 16.002 23.1679 16.002 32.005C16.002 40.8421 23.1659 48.006 32.003 48.006Z",
    moon: "M32 61C48.0163 61 61 48.0163 61 32C31.0819 43.9103 19.004 30.0811 32 3C15.9837 3 3 15.9837 3 32C3 48.0163 15.9837 61 32 61Z",
  };

  return (
    <div className="relative h-full aspect-square">
      <svg
        viewBox="0 0 64 64"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute h-full aspect-square"
      >
        <motion.path
          initial={{
            d: isDark ? mainPath.moon : mainPath.sun,
            rotate: isDark ? 0 : 90,
            fill: isDark ? "#ffffff" : "#000000",
          }}
          animate={{
            d: isDark ? mainPath.moon : mainPath.sun,
            rotate: isDark ? 0 : 90,
            fill: isDark ? "#ffffff" : "#000000",
            transition: { rotate: { duration: 0.6 } },
          }}
          transition={{ duration: 0.4 }}
        />
        <motion.g
          animate={{
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0 : 1,
            rotate: isDark ? 90 : 0,
            transition: { rotate: { duration: 0.6 } },
          }}
          transition={{ duration: 0.4 }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.001 31.997C12.001 29.786 10.212 27.997 8.001 27.997H4C1.789 27.997 0 29.786 0 31.997C0 34.208 1.789 35.997 4 35.997H8C10.212 35.997 12.001 34.208 12.001 31.997Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.204 46.139L9.372 48.972C7.809 50.534 7.809 53.066 9.372 54.628C10.934 56.19 13.466 56.19 15.029 54.628L17.862 51.796C19.424 50.234 19.424 47.701 17.862 46.139C16.298 44.576 13.767 44.576 12.204 46.139Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.003 51.999C29.792 51.999 28.003 53.788 28.003 55.999V60C28.003 62.211 29.792 64 32.003 64C34.214 64 36.003 62.211 36.003 60L35.999 55.999C36.003 53.788 34.21 51.999 32.003 51.999Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M51.798 46.143C50.239 44.577 47.707 44.577 46.145 46.139C44.583 47.701 44.583 50.234 46.145 51.796L48.974 54.624C50.536 56.194 53.068 56.186 54.63 54.624C56.192 53.062 56.196 50.534 54.63 48.968L51.798 46.143Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M60.006 27.997L55.997 28.005C53.794 27.997 52.005 29.786 52.005 31.997C51.997 34.208 53.794 35.997 55.997 35.997H59.998C62.217 36.005 63.998 34.208 63.998 31.997C64.002 29.79 62.217 27.997 60.006 27.997Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M51.798 17.859L54.626 15.03C56.2 13.464 56.188 10.936 54.626 9.373C53.067 7.806 50.536 7.806 48.974 9.369L46.145 12.205C44.583 13.76 44.583 16.291 46.145 17.854C47.699 19.426 50.239 19.418 51.798 17.859Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.003 11.995C34.21 12.011 36.003 10.206 36.003 8.003V4.003C36.003 1.784 34.214 0.003 32.003 0.003C29.792 -0.005 28.003 1.784 28.003 3.996L28.011 8.004C28.003 10.206 29.792 11.995 32.003 11.995Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.212 17.855C13.767 19.417 16.291 19.417 17.858 17.851C19.432 16.3 19.424 13.761 17.866 12.202L15.037 9.374C13.467 7.803 10.943 7.815 9.38 9.374C7.805 10.933 7.805 13.464 9.368 15.027L12.212 17.855Z"
            fill="black"
          />
        </motion.g>
      </svg>
    </div>
  );
}

export default DarkModeIcon;
