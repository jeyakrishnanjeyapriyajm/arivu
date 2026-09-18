import { motion } from "framer-motion";

export default function HeroScene() {
  return (
    <div className="relative hidden h-full w-full overflow-hidden md:block">
      {/* Large decorative circle */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 4, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute left-1/2 top-1/2
          h-[300px] w-[300px]
          sm:h-[360px] sm:w-[360px]
          md:h-[420px] md:w-[420px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          border border-[#c9a45c]/30
        "
      />

      {/* Second ring */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute left-1/2 top-1/2
          h-[370px] w-[370px]
          sm:h-[450px] sm:w-[450px]
          md:h-[520px] md:w-[520px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          border border-dashed border-[#6e1f2a]/20
        "
      />

      {/* Main visual */}
      <motion.div
        animate={{
          y: [0, -18, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute left-1/2 top-1/2
          flex
          h-[200px] w-[200px]
          sm:h-[240px] sm:w-[240px]
          md:h-[280px] md:w-[280px]
          -translate-x-1/2 -translate-y-1/2
          items-center justify-center
          rounded-[45%]
          bg-gradient-to-br
          from-[#6e1f2a]
          via-[#7e2b38]
          to-[#46121a]
          shadow-[0_40px_100px_rgba(70,18,26,0.3)]
        "
      >
        {/* Inner circle */}
        <div
          className="
            flex
            h-[150px] w-[150px]
            sm:h-[180px] sm:w-[180px]
            md:h-[210px] md:w-[210px]
            items-center justify-center
            rounded-full
            border border-[#e7d2a1]/40
            bg-[#46121a]/50
          "
        >
          <div className="text-center text-white">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                font-tamil
                text-5xl
                sm:text-6xl
                md:text-7xl
              "
            >
              அ
            </motion.div>

            <div
              className="
                mt-2
                text-[8px]
                sm:text-[9px]
                md:text-[10px]
                uppercase
                tracking-[0.3em]
                md:tracking-[0.4em]
                text-[#e7d2a1]
              "
            >
              Arivu
            </div>
          </div>
        </div>
      </motion.div>

      {/* Gold decorative dot */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[10%] top-[18%]
          h-3 w-3
          sm:left-[15%] sm:top-[20%]
          sm:h-4 sm:w-4
          md:left-[18%] md:top-[20%]
          md:h-5 md:w-5
          rounded-full
          bg-[#c9a45c]
          shadow-lg
        "
      />

      {/* Small maroon dot */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[15%] right-[10%]
          h-2 w-2
          sm:bottom-[18%] sm:right-[12%]
          sm:h-3 sm:w-3
          md:bottom-[20%] md:right-[15%]
        "
      />

      {/* Small gold ring */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          bottom-[22%] left-[10%]
          h-9 w-9
          sm:bottom-[25%] sm:left-[15%]
          sm:h-10 sm:w-10
          md:bottom-[27%] md:left-[18%]
          md:h-12 md:w-12
          rounded-full
          border border-[#c9a45c]/60
        "
      />

      {/* Floating Tamil characters */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.45, 0.8, 0.45],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          font-tamil
          absolute
          right-[8%] top-[15%]
          text-xl
          sm:right-[12%] sm:top-[17%]
          sm:text-2xl
          md:right-[15%] md:top-[18%]
          md:text-3xl
          text-[#6e1f2a]/30
        "
      >
        தமிழ்
      </motion.div>
    </div>
  );
}
