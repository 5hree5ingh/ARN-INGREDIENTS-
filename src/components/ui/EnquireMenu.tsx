"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowRightIcon,
  MailIcon,
  PhoneIcon,
  WhatsappIcon,
} from "@/components/icons";
import { company, whatsappLink } from "@/data/company";

const phoneDisplay = "+91 88408 04180";

export const enquiryChannels = [
  {
    key: "call",
    Icon: PhoneIcon,
    title: "Call",
    detail: phoneDisplay,
    href: `tel:+${company.whatsapp}`,
    external: false,
  },
  {
    key: "email",
    Icon: MailIcon,
    title: "Email",
    detail: company.email.toLowerCase(),
    href: `mailto:${company.email}?subject=${encodeURIComponent(
      "Enquiry — ARN Ingredients",
    )}`,
    external: false,
  },
  {
    key: "whatsapp",
    Icon: WhatsappIcon,
    title: "WhatsApp",
    detail: "Message us directly",
    href: whatsappLink("Hi, I'd like to make an enquiry about ARN Ingredients."),
    external: true,
  },
];

/** Compact channel rows — shared by the desktop dropdown and mobile drawer. */
export function EnquiryChannelList({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <ul>
      {enquiryChannels.map(({ key, Icon, title, detail, href, external }) => (
        <li key={key} className="border-b border-ink/10 last:border-0">
          <a
            href={href}
            onClick={onNavigate}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            /* Every transition here runs 200ms ease-out so the row moves as
               one piece rather than several parts arriving at once. */
            className="group relative flex cursor-pointer items-center gap-4 px-5 py-4 transition-colors duration-200 ease-out hover:bg-ivory-warm/70 focus-visible:outline-1 focus-visible:-outline-offset-2 focus-visible:outline-gold"
          >
            {/* Gold rail grows from the centre on hover */}
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-px origin-center scale-y-0 bg-gold transition-transform duration-200 ease-out group-hover:scale-y-100"
            />

            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-gold/35 text-gold-deep transition-colors duration-200 ease-out group-hover:border-gold group-hover:bg-gold/15">
              <Icon className="h-4 w-4" />
            </span>

            <span className="min-w-0">
              <span className="tracked block text-[0.58rem] font-medium text-forest">
                {title}
              </span>
              <span className="mt-1 block truncate text-xs font-light text-ink-faint transition-colors duration-200 ease-out group-hover:text-ink-soft">
                {detail}
              </span>
            </span>

            <ArrowRightIcon
              className="ml-auto h-4 w-4 shrink-0 -translate-x-1 text-gold opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Dropdown panel anchored beneath the Enquire button. */
export function EnquireMenu({ open }: { open: boolean }) {
  const reduced = useReducedMotion();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={reduced ? false : { opacity: 0, y: -8 }}
          animate={reduced ? {} : { opacity: 1, y: 0 }}
          exit={reduced ? {} : { opacity: 0, y: -6 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "top right" }}
          className="absolute top-full right-0 z-40 w-72 border border-gold/30 bg-ivory shadow-xl"
        >
          {/* Gold cap, tying the panel to the button above it */}
          <span aria-hidden="true" className="block h-px w-full bg-gold/60" />
          <EnquiryChannelList />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
