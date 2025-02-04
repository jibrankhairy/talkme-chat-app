"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo1.png";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Animasi untuk pengumuman Talkme */}
      <motion.div
        className="mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="text-sm font-semibold text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Talkme is officially here!
        </motion.p>
      </motion.div>

      {/* Animasi untuk header */}
      <motion.h1
        className="max-w-4xl text-4xl font-bold md:text-6xl lg:text-7xl leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Stay Connected. Chat Anytime on{" "}
        <span className="text-blue-600">Talkme</span>
      </motion.h1>

      {/* Animasi untuk deskripsi */}
      <motion.p
        className="mt-5 max-w-lg text-zinc-700 sm:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Talkme is a chat app that lets you stay connected with friends anytime,
        anywhere. Share moments, send messages, and keep the conversation going
        effortlessly.
      </motion.p>

      {/* Tombol login dengan SignInButton */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <SignedIn>
          {/* Jika sudah login, langsung redirect ke halaman chat */}
          <Link href="/chat/conversations">
            <Button className="mt-8 px-6 py-6 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105">
              Go to Chat
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </SignedIn>

        <SignedOut>
          {/* Jika belum login, tampilkan tombol Sign In */}
          <SignInButton mode="modal">
            <Button className="mt-8 px-6 py-6 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105">
              Get Started
            </Button>
          </SignInButton>
        </SignedOut>
      </motion.div>
      <div className="sm:mt-16 md:mt-20 lg:mt-10 flex justify-center ">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="rounded-xl p-2"
        >
          <Image
            src={logo}
            alt="Landing Page Image"
            width={400}
            height={400}
            className="sm:w-[300px] md:w-[400px] lg:w-[500px] mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}
