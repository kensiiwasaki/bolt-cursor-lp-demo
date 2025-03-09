"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  Globe,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const artists = [
  {
    name: "YAYOI",
    image:
      "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&q=80",
    specialty: "インタラクティブ・デジタルアート",
    description: "無限の点と線が織りなす没入型体験",
  },
  {
    name: "AKIRA",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&q=80",
    specialty: "ジェネレーティブアート",
    description: "AIが生み出す抽象的な色彩の世界",
  },
  {
    name: "SAKURA",
    image:
      "https://images.unsplash.com/photo-1574169208507-84376144848b?w=800&q=80",
    specialty: "バイオアート",
    description: "自然と技術の融合による新しい生命体の表現",
  },
];

const artworks = [
  {
    title: "Infinite Dreams",
    image:
      "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=800&q=80",
    description: "光と音が織りなす夢幻空間",
  },
  {
    title: "Digital Ecosystem",
    image:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80",
    description: "生命システムを模倣した進化するアート",
  },
  {
    title: "Quantum Reflections",
    image:
      "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&q=80",
    description: "量子の世界を視覚化した立体映像",
  },
  {
    title: "Neural Symphony",
    image:
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80",
    description: "脳波から生成される音と映像のハーモニー",
  },
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Dynamic Background */}
      <div
        className="fixed inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}px ${
            mousePosition.y
          }px, rgba(255,0,255,0.2), transparent 25%),
            radial-gradient(circle at ${mousePosition.x - 400}px ${
            mousePosition.y + 100
          }px, rgba(0,255,255,0.2), transparent 30%),
            radial-gradient(circle at ${mousePosition.x + 200}px ${
            mousePosition.y - 200
          }px, rgba(255,215,0,0.2), transparent 35%),
            radial-gradient(circle at ${mousePosition.x - 300}px ${
            mousePosition.y - 300
          }px, rgba(138,43,226,0.2), transparent 40%)
          `,
        }}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500">
              ABSTRACT
              <br />
              2025
            </h1>
          </motion.div>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            現代アートの境界を超える、没入型デジタルアート展
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 hover:from-purple-600 hover:via-pink-600 hover:to-yellow-600 transform hover:scale-105 transition-all"
          >
            チケットを購入 <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-purple-900/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
          >
            <Sparkles className="w-10 h-10 mb-4 text-yellow-400" />
            <h3 className="text-2xl font-semibold mb-2">没入型体験</h3>
            <p className="text-gray-400">最新技術を駆使した360度の芸術空間</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
          >
            <Globe className="w-10 h-10 mb-4 text-cyan-400" />
            <h3 className="text-2xl font-semibold mb-2">インタラクティブ</h3>
            <p className="text-gray-400">観客と作品が織りなす唯一無二の体験</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
          >
            <Palette className="w-10 h-10 mb-4 text-pink-400" />
            <h3 className="text-2xl font-semibold mb-2">先進技術</h3>
            <p className="text-gray-400">AIとバイオテクノロジーの融合</p>
          </motion.div>
        </div>
      </section>

      {/* Event Info Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-2xl border border-white/10"
          >
            <Calendar className="w-8 h-8 mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2">開催日</h3>
            <p className="text-gray-400">2025年4月1日 - 4月30日</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-pink-500/10 to-yellow-500/10 p-6 rounded-2xl border border-white/10"
          >
            <MapPin className="w-8 h-8 mb-4 text-pink-400" />
            <h3 className="text-xl font-semibold mb-2">会場</h3>
            <p className="text-gray-400">東京デジタルアートセンター</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-yellow-500/10 to-purple-500/10 p-6 rounded-2xl border border-white/10"
          >
            <Clock className="w-8 h-8 mb-4 text-yellow-400" />
            <h3 className="text-xl font-semibold mb-2">開館時間</h3>
            <p className="text-gray-400">10:00 - 20:00（最終入場 19:30）</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500"
          >
            参加アーティスト
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artists.map((artist, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
                  <p className="text-xl text-yellow-400 mb-2">
                    {artist.specialty}
                  </p>
                  <p className="text-gray-300">{artist.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artworks Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          >
            展示作品
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artworks.map((artwork, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 p-1"
              >
                <div className="relative overflow-hidden rounded-xl aspect-[16/9]">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">
                      {artwork.title}
                    </h3>
                    <p className="text-gray-300">{artwork.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
