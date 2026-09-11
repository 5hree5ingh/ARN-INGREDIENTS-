"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Logo } from "./Logo";
import { navLinks } from "@/data/navigation";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  EnquireMenu,
  EnquiryChannelList,
} from "@/components/ui/EnquireMenu";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [enquireOpen, setEnquireOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!enquireOpen) return;
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setEnquireOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [enquireOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-ivory/95 backdrop-blur-md">
      <Container>
        <div className="flex h-24 items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-9">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`tracked group relative inline-flex min-h-11 items-center text-[0.62rem] font-medium transition-colors duration-300 focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-gold ${
                      isActive(link.href)
                        ? "text-forest"
                        : "text-ink-soft hover:text-forest"
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300 ${
                        isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/*
            Opens on hover for pointer users and on click/focus for keyboard
            and touch. The wrapper spans button + panel so moving the cursor
            down into the panel does not dismiss it.
          */}
          <div
            className="relative hidden xl:block"
            onMouseEnter={() => setEnquireOpen(true)}
            onMouseLeave={() => setEnquireOpen(false)}
            onFocus={() => setEnquireOpen(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setEnquireOpen(false);
              }
            }}
          >
            <Button
              onClick={() => setEnquireOpen((v) => !v)}
              aria-expanded={enquireOpen}
              aria-haspopup="true"
              className="px-6 py-3.5 whitespace-nowrap"
            >
              Enquire
            </Button>
            <EnquireMenu open={enquireOpen} />
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center border border-ink/15 text-forest transition-colors duration-300 hover:border-gold hover:text-gold-deep focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-gold xl:hidden"
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            className="overflow-hidden border-t border-ink/10 bg-ivory xl:hidden"
            initial={reduced ? false : { opacity: 0, height: 0 }}
            animate={reduced ? {} : { opacity: 1, height: "auto" }}
            exit={reduced ? {} : { opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Container>
              <ul className="flex flex-col py-6">
                {navLinks.map((link) => (
                  <li key={link.href} className="border-b border-ink/5 last:border-0">
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className={`tracked flex min-h-13 items-center text-[0.68rem] font-medium transition-colors duration-300 focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                        isActive(link.href)
                          ? "text-gold-deep"
                          : "text-ink-soft hover:text-forest"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {/* No hover on touch — show the channels inline instead */}
                <li className="mt-7">
                  <p className="tracked mb-3 text-[0.56rem] font-medium text-gold-deep">
                    Enquire
                  </p>
                  <div className="border border-ink/10">
                    <EnquiryChannelList onNavigate={() => setOpen(false)} />
                  </div>
                </li>
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
