import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import TodoList from "@/components/TodoList";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Simple Todo App</title>
        <meta name="description" content="A simple todo app built with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable} ${styles.main}`}
      >
        <h1 className={styles.title}>
          Todo app
        </h1>
        <TodoList />
      </main>
    </>
  );
}
