"use client";

import { motion } from "framer-motion";
import GroovyButton from "@/components/GroovyButton";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden relative" style={{ background: "#40E0D0" }}>
      {/* Main Container with padding for wavy borders */}
      <div className="px-12 md:px-16 lg:px-20 py-8">
        
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex flex-col justify-center">
          {/* Stickers */}
          <div className="absolute top-20 left-10 text-3xl">⭐</div>
          <div className="absolute top-32 right-20 text-2xl">⭐</div>
          <div className="absolute top-40 left-1/4 text-xl text-white">●</div>
          <div className="absolute top-24 right-1/3 text-xl text-white">●</div>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto w-full">
            {/* Left: Title Section */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* SLUMBA LONDON Title */}
              <div className="mb-4">
                <motion.h1
                  className="text-7xl md:text-8xl lg:text-9xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-bungee)" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <span className="text-outline-purple-pink">SLUMBA</span>
                </motion.h1>
                <motion.h1
                  className="text-6xl md:text-7xl lg:text-8xl font-bold"
                  style={{ fontFamily: "var(--font-bungee)" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <span className="text-outline-pink-purple">LONDON</span>
                </motion.h1>
              </div>

              {/* COOL PYJAMAS Subtitle */}
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                style={{ fontFamily: "var(--font-bungee)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span className="text-outline-orange-yellow">COOL PYJAMAS</span>
              </motion.h2>

              {/* SHOP NOW Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <GroovyButton href="#shop" className="text-xl px-10 py-5">
                  SHOP NOW
                </GroovyButton>
              </motion.div>
            </motion.div>

            {/* Right: Pajama Model Photo */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Wavy Blue Border Frame */}
                <div className="relative bg-white p-4" style={{ 
                  border: "12px solid #1e9b8a",
                  borderRadius: "20px",
                  boxShadow: "inset 0 0 0 4px #40E0D0, 0 8px 16px rgba(0,0,0,0.2)"
                }}>
                  <div className="w-full aspect-square bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center rounded-lg">
                    <div className="text-8xl">👕</div>
                  </div>
                  {/* Wavy effect overlay */}
                  <div className="absolute inset-0 pointer-events-none" style={{
                    border: "4px solid #1e9b8a",
                    borderRadius: "20px",
                    clipPath: "polygon(0 0, 100% 8%, 100% 18%, 0 28%, 0 38%, 100% 48%, 100% 58%, 0 68%, 0 78%, 100% 88%, 100% 100%, 0 100%)"
                  }}></div>
                </div>
                
                {/* ABOUT Box Below */}
                <motion.div
                  className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg"
                  style={{ fontFamily: "var(--font-bungee)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="font-bold text-lg mb-2">ABOUT</div>
                  <div className="space-y-1">
                    <div className="h-1 bg-white rounded"></div>
                    <div className="h-1 bg-white rounded"></div>
                    <div className="h-1 bg-white rounded w-3/4"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="grid md:grid-cols-2 gap-8 mt-16 mb-8">
          {/* Left: About Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Smiley Sticker */}
            <div className="absolute -left-8 top-4 text-5xl">😊</div>
            <div className="absolute -top-4 left-1/4 text-xl text-white">●</div>

            {/* Yellow Blob Shape */}
            <div className="blob-shape bg-yellow-400 p-8 md:p-10 relative" style={{ border: "6px solid #FF8C00" }}>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-orange-600" style={{ fontFamily: "var(--font-bungee)" }}>
                ABOUT SLUMBA LONDON
              </h3>
              <p className="text-white text-lg md:text-xl font-semibold">
                Fun and comfortable pyjamas designed for the coolest crew around.
              </p>
            </div>
          </motion.div>

          {/* Right: Community Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Heart Sticker */}
            <div className="absolute -right-8 top-4 text-5xl">💖</div>

            {/* Yellow Blob Shape */}
            <div className="blob-shape bg-yellow-400 p-8 md:p-10 relative" style={{ border: "6px solid #FF8C00" }}>
              <h3 className="text-3xl md:text-4xl font-bold text-purple-600" style={{ fontFamily: "var(--font-bungee)" }}>
                JOIN THE SLEEPOVER CLUB
              </h3>
            </div>

            {/* Pajama Model Photo with Yellow Wavy Border */}
            <motion.div
              className="mt-6 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="relative bg-white p-4" style={{ 
                border: "12px solid #FFD700",
                borderRadius: "20px",
                boxShadow: "inset 0 0 0 4px #FFEB3B, 0 8px 16px rgba(0,0,0,0.2)"
              }}>
                <div className="w-full aspect-square bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center rounded-lg">
                  <div className="text-8xl">👕</div>
                </div>
                {/* Wavy effect overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  border: "4px solid #FFD700",
                  borderRadius: "20px",
                  clipPath: "polygon(5% 0, 0 5%, 5% 10%, 0 15%, 5% 20%, 0 25%, 5% 30%, 0 35%, 5% 40%, 0 45%, 5% 50%, 0 55%, 5% 60%, 0 65%, 5% 70%, 0 75%, 5% 80%, 0 85%, 5% 90%, 0 95%, 5% 100%, 100% 95%, 95% 90%, 100% 85%, 95% 80%, 100% 75%, 95% 70%, 100% 65%, 95% 60%, 100% 55%, 95% 50%, 100% 45%, 95% 40%, 100% 35%, 95% 30%, 100% 25%, 95% 20%, 100% 15%, 95% 10%, 100% 5%, 95% 0)"
                }}></div>
                
                {/* Lightning and Flower Stickers */}
                <div className="absolute -top-6 -left-6 text-4xl z-10">⚡</div>
                <div className="absolute -bottom-6 -right-6 text-4xl z-10">🌸</div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
