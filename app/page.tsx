"use client";

import { motion } from "framer-motion";
import Sticker from "@/components/Sticker";
import GroovyButton from "@/components/GroovyButton";
import Sparkle from "@/components/Sparkle";

export default function Home() {
  const sparkles = Array.from({ length: 30 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
  }));

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      {/* Sparkle Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {sparkles.map((sparkle, i) => (
          <Sparkle key={i} x={sparkle.x} y={sparkle.y} delay={sparkle.delay} />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 z-10">
        {/* Floating Stickers - MySpace Style */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-5 md:left-20">
            <Sticker delay={0.2} size="lg">
              <span className="text-7xl">⭐</span>
            </Sticker>
          </div>
          <div className="absolute top-32 right-8 md:right-24">
            <Sticker delay={0.4} size="md">
              <span className="text-5xl">💖</span>
            </Sticker>
          </div>
          <div className="absolute bottom-32 left-12 md:left-32">
            <Sticker delay={0.6} size="md">
              <span className="text-5xl">⚡</span>
            </Sticker>
          </div>
          <div className="absolute bottom-16 right-12 md:right-32">
            <Sticker delay={0.8} size="lg">
              <span className="text-7xl">✨</span>
            </Sticker>
          </div>
          <div className="absolute top-1/2 left-4 md:left-12">
            <Sticker delay={1} size="sm">
              <span className="text-4xl">🌸</span>
            </Sticker>
          </div>
          <div className="absolute top-1/3 right-4 md:right-12">
            <Sticker delay={1.2} size="sm">
              <span className="text-4xl">💫</span>
            </Sticker>
          </div>
          <div className="absolute top-20 right-1/3">
            <Sticker delay={1.4} size="sm">
              <span className="text-4xl">🌈</span>
            </Sticker>
          </div>
          <div className="absolute bottom-1/3 left-1/4">
            <Sticker delay={1.6} size="sm">
              <span className="text-4xl">🦄</span>
            </Sticker>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="max-w-7xl mx-auto w-full relative z-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block mb-6 px-5 py-2 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #FF69B4 0%, #9370DB 50%, #40E0D0 100%)",
                  border: "3px solid #FFD700",
                  boxShadow: "0 0 20px rgba(255, 105, 180, 0.5)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span className="text-base font-bold text-white">✨ NEW COLLECTION 2024 ✨</span>
              </motion.div>
              
              <div className="relative inline-block mb-4">
                {/* Glow effect behind */}
                <motion.h1
                  className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-bold opacity-50 blur-2xl"
                  style={{
                    background: "linear-gradient(135deg, #FF69B4 0%, #9370DB 30%, #40E0D0 60%, #FFD700 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "var(--font-bungee)",
                    zIndex: 0,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ delay: 0.3 }}
                >
                  SLUMBA
                </motion.h1>
                {/* Sharp text on top */}
                <motion.h1
                  className="relative text-6xl md:text-8xl lg:text-9xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, #FF69B4 0%, #9370DB 30%, #40E0D0 60%, #FFD700 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "var(--font-bungee)",
                    zIndex: 1,
                    textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ 
                    delay: 0.3, 
                    duration: 0.8,
                    scale: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  }}
                >
                  SLUMBA
                </motion.h1>
              </div>
              
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-6"
                style={{ 
                  color: "#9370DB",
                  fontFamily: "var(--font-bungee)",
                  textShadow: "2px 2px 0px #FFD700, 4px 4px 0px rgba(147, 112, 219, 0.3)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                LONDON 💕
              </motion.h2>
              
              <motion.p
                className="text-xl md:text-2xl mb-8 font-semibold leading-relaxed"
                style={{ 
                  color: "#FF69B4",
                  textShadow: "1px 1px 2px rgba(255, 105, 180, 0.3)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Groovy Pajamas for Gen Z! 🌈✨<br />
                <span className="text-lg md:text-xl" style={{ color: "#40E0D0" }}>
                  Where Y2K vibes meet ultimate comfort! 💤
                </span>
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <GroovyButton href="#shop">
                  SHOP NOW 🛍️
                </GroovyButton>
                <motion.a
                  href="#about"
                  className="px-8 py-4 rounded-full font-bold text-lg shadow-lg border-4 border-purple-400 bg-white/90 backdrop-blur-sm"
                  style={{ color: "#9370DB" }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LEARN MORE 💫
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right: Image/Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full opacity-60 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-300 rounded-full opacity-60 blur-xl"></div>
                
                <motion.div
                  className="relative bg-white rounded-3xl p-12 shadow-2xl border-4"
                  style={{
                    borderImage: "linear-gradient(135deg, #FF69B4, #9370DB, #40E0D0, #FFD700) 1",
                    background: "linear-gradient(135deg, #FFE4E1 0%, #E0F7FA 50%, #F3E5F5 100%)",
                  }}
                  whileHover={{ rotate: 2, scale: 1.02 }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <motion.div
                      className="text-9xl"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      👕
                    </motion.div>
                  </div>
                  {/* Corner stickers */}
                  <div className="absolute -top-6 -left-6 text-4xl">⭐</div>
                  <div className="absolute -top-6 -right-6 text-4xl">💖</div>
                  <div className="absolute -bottom-6 -left-6 text-4xl">✨</div>
                  <div className="absolute -bottom-6 -right-6 text-4xl">🌈</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative py-24 px-4 z-10"
        style={{
          background: "linear-gradient(135deg, rgba(255, 228, 225, 0.9) 0%, rgba(224, 247, 250, 0.9) 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-16 shadow-2xl border-4"
            style={{
              borderColor: "#FF69B4",
              boxShadow: "0 20px 60px rgba(255, 105, 180, 0.4), inset 0 0 30px rgba(255, 215, 0, 0.1)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative Stickers */}
            <div className="absolute -top-8 -left-8">
              <Sticker size="lg">
                <span className="text-6xl">💕</span>
              </Sticker>
            </div>
            <div className="absolute -top-8 -right-8">
              <Sticker size="lg">
                <span className="text-6xl">🌟</span>
              </Sticker>
            </div>
            <div className="absolute -bottom-8 -left-8">
              <Sticker size="lg">
                <span className="text-6xl">🎀</span>
              </Sticker>
            </div>
            <div className="absolute -bottom-8 -right-8">
              <Sticker size="lg">
                <span className="text-6xl">🦄</span>
              </Sticker>
            </div>

            <motion.h2
              className="text-5xl md:text-7xl font-bold mb-8 text-center"
              style={{
                background: "linear-gradient(135deg, #FF69B4 0%, #9370DB 50%, #40E0D0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "var(--font-bungee)",
                textShadow: "0 0 30px rgba(255, 105, 180, 0.3)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              About Us 💖
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl leading-relaxed text-center text-gray-800 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Welcome to <strong style={{ color: "#FF69B4", fontSize: "1.2em" }}>Slumba London</strong> - where Y2K vibes meet ultimate comfort! 🌈
              <br /><br />
              We're all about bringing back that early-2000s internet energy with our groovy pajama designs.
              Think bold colors, playful patterns, and that iconic <strong style={{ color: "#9370DB" }}>MySpace aesthetic</strong> - but make it sleepwear! 💤
              <br /><br />
              Our pajamas are designed for Gen Z who want to express themselves even in their dreams.
              From turquoise to hot pink, from stars to lightning bolts - we've got the vibes you need! ✨⚡💫
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Product/CTA Section */}
      <section
        id="shop"
        className="relative py-24 px-4 z-10"
        style={{
          background: "linear-gradient(135deg, #F3E5F5 0%, #E0F7FA 50%, #FFE4E1 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-16 text-center"
            style={{
              background: "linear-gradient(135deg, #FF69B4 0%, #9370DB 50%, #40E0D0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "var(--font-bungee)",
              textShadow: "0 0 30px rgba(255, 105, 180, 0.3)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Shop the Groove 🛍️✨
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                emoji: "👕", 
                name: "Classic PJs", 
                description: "Groovy designs that bring the Y2K energy! ✨",
                color: "#FF69B4",
                bgGradient: "from-pink-200 to-pink-300"
              },
              { 
                emoji: "🩱", 
                name: "Night Sets", 
                description: "Coordinated sets for the perfect vibe! 💫",
                color: "#9370DB",
                bgGradient: "from-purple-200 to-purple-300"
              },
              { 
                emoji: "🧦", 
                name: "Accessories", 
                description: "Complete your sleepwear collection! 🌈",
                color: "#40E0D0",
                bgGradient: "from-cyan-200 to-cyan-300"
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-3xl p-8 shadow-2xl border-4 overflow-hidden"
                style={{
                  borderColor: item.color,
                  boxShadow: `0 20px 40px ${item.color}40, inset 0 0 20px rgba(255, 215, 0, 0.1)`,
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotate: 2, y: -8 }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.bgGradient} opacity-30 rounded-full blur-3xl`}></div>
                <div className="relative z-10 text-center">
                  <motion.div
                    className="text-7xl mb-4"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  >
                    {item.emoji}
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4" style={{ color: item.color, fontFamily: "var(--font-bungee)" }}>
                    {item.name}
                  </h3>
                  <p className="text-gray-700 mb-6 text-lg">
                    {item.description}
                  </p>
                  <GroovyButton className="w-full">
                    Shop Now 🛍️
                  </GroovyButton>
                </div>
                {/* Corner decorations */}
                <div className="absolute top-2 right-2 text-2xl">⭐</div>
                <div className="absolute top-2 left-2 text-2xl">💖</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community/Vibes Section */}
      <section
        className="relative py-24 px-4 z-10"
        style={{
          background: "linear-gradient(135deg, #FFE4E1 0%, #F3E5F5 50%, #E0F7FA 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-12"
            style={{
              background: "linear-gradient(135deg, #FF69B4 0%, #9370DB 50%, #40E0D0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "var(--font-bungee)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Join the Vibe 🌈✨
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {["⭐", "💖", "⚡", "✨", "🌸", "💫", "🎀", "🦄", "🌈", "💕", "🌟", "🎨", "💜", "🩷", "💙"].map((emoji, i) => (
              <motion.div
                key={i}
                className="text-5xl md:text-6xl"
                whileHover={{ scale: 1.4, rotate: 20, zIndex: 10 }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  y: {
                    duration: 2 + i * 0.15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  },
                  rotate: {
                    duration: 3 + i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.15,
                  },
                }}
              >
                {emoji}
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="text-2xl md:text-3xl font-bold mb-10"
            style={{ 
              color: "#FF69B4",
              textShadow: "2px 2px 0px #FFD700",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Follow us for daily groovy content! 📱✨
          </motion.p>

          <motion.div
            className="flex justify-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            {[
              { icon: "📸", name: "Instagram", color: "#E4405F" },
              { icon: "🎵", name: "TikTok", color: "#000000" },
              { icon: "💬", name: "Twitter", color: "#1DA1F2" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href="#"
                className="w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-2xl border-4 border-white"
                style={{
                  background: `linear-gradient(135deg, ${social.color} 0%, ${social.color}dd 100%)`,
                  borderColor: "#FFD700",
                }}
                whileHover={{ scale: 1.2, rotate: 15, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative py-12 px-4 text-center z-10 border-t-4"
        style={{
          background: "linear-gradient(135deg, #9370DB 0%, #FF69B4 50%, #40E0D0 100%)",
          borderColor: "#FFD700",
          color: "white",
        }}
      >
        <motion.p
          className="text-3xl font-bold mb-4"
          style={{ fontFamily: "var(--font-bungee)", textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          SLUMBA LONDON ✨
        </motion.p>
        <motion.p
          className="text-lg md:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Groovy Pajamas for the Gen Z Dreamers 🌈💤💖
        </motion.p>
      </footer>
    </div>
  );
}
