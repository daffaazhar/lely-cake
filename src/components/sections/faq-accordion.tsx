"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import type { Faq } from "@/types/content";

type FaqAccordionProps = {
  faqs: Faq[];
};

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (faqs.length === 0) {
    return null;
  }

  return (
    <div className="divide-y divide-(--color-border-soft) rounded-(--radius-md) border border-(--color-border-soft) bg-(--color-surface-white)">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const contentId = `faq-answer-${index}`;

        return (
          <section key={faq.question}>
            <Button
              aria-controls={contentId}
              aria-expanded={isOpen}
              className="flex min-h-12 w-full items-center justify-between gap-4 rounded-none px-5 py-4 text-left text-base text-(--color-brand-brown)"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              variant="text"
            >
              <span>{faq.question}</span>
              <span aria-hidden="true" className="text-xl">
                {isOpen ? "−" : "+"}
              </span>
            </Button>
            {isOpen ? (
              <div className="px-5 pb-5 text-base text-(--color-text-secondary)" id={contentId}>
                {faq.answer}
              </div>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}
