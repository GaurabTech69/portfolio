import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>GaurabTech69 | Coder & Trader</title>
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-black via-indigo-900 to-black text-white p-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Hi, I'm GaurabTech69
          </h1>
          <p className="text-xl mt-4 text-gray-300">
            Full Stack Developer 🚀 | Algo Trader 📊
          </p>
          <p className="mt-6 max-w-xl mx-auto text-gray-400">
            Building the future with code, AI, and smart trading strategies. Passionate about Web3, automation, and clean design.
          </p>
        </motion.div>
      </main>
    </>
  );
}
