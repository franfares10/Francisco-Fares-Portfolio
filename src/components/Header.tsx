"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import useMediaQuery from "./hooks/useMediaQuery"
import { ModeToggle } from "./mode-toggle"
import { useTheme } from "next-themes"
import clsx from "clsx"
import links from "./data/links"
import { m, motion, stagger, useAnimate } from "framer-motion"
import { useActiveSectionContext } from "@/lib/providers/active-section-context"
import { Label } from "./ui/label"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"


export function NavigationMenuDemo() {
  const { isMobile } = useMediaQuery();
  const { setTheme } = useTheme()
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [isOpen, setOpen] = useState(false);

  if (isMobile) {
    if (isOpen) {
      return (
        <header className="z-[999] fixed">
          <motion.div
            className="flex fixed left-1/2 border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] h-screen w-full rounded-none dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
          >
            <nav className="flex fixed left-1/2 -translate-x-1/2 h-full items-center justify-center">
              <ul className="flex flex-col items-center justify-center gap-y-1 text-[0.9rem] h-1/2 font-medium text-gray-500 w-[initial] flex-nowrap">
                {links.map((link) => (
                  <motion.li
                    className="h-3/4 flex items-center justify-center relative"
                    key={link.hash}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    <Link
                      className={clsx(
                        "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                        {
                          "text-gray-950 dark:text-gray-200":
                            activeSection === link.name,
                        }
                      )}
                      href={link.hash}
                      onClick={() => {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                        setOpen(false);
                      }}
                    >
                      {link.name}

                      {link.name === activeSection && (
                        <motion.span
                          className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                          layoutId="activeSection"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        ></motion.span>
                      )}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  className="h-3/4 flex items-center justify-center relative"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  onClick={() => {
                    setTimeOfLastClick(Date.now());
                    setOpen(false);
                  }}>
                  <ModeToggle/>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        </header>
      )
    }
    return (
      <header className="z-[999] relative">
        <motion.div
          className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        > 
        <nav className="flex items-center justify-between h-full w-full p-6 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <p className="font-medium text-xl">Portfolio.</p>
          <Button className="rounded-full p-2" onClick={() => setOpen(true)}><MenuIcon /></Button>
          </nav>
          </motion.div>
      </header>
    )
  }
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <ModeToggle />
          </motion.li>
        </ul>
      </nav>
    </header>
  )
}