"use client";

import { Send } from "lucide-react";
import { useState } from "react";

import { createWhatsAppUrl } from "@/lib/whatsapp";

type ContactFormState = {
  name: string;
  phone: string;
  eventDate: string;
  note: string;
};

const initialState: ContactFormState = {
  name: "",
  phone: "",
  eventDate: "",
  note: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);

  function updateField(field: keyof ContactFormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = `Halo Lely Cake, saya ingin menanyakan pesanan.\n\nNama: ${form.name}\nNomor telepon: ${form.phone}\nTanggal acara: ${form.eventDate || "Belum ditentukan"}\nPesan atau catatan: ${form.note}\n\nMohon bantuannya. Terima kasih.`;
    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-6 md:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-sm font-bold tracking-[0.1em] text-(--color-brand-brown) uppercase">Nama lengkap</span>
          <input
            className="min-h-12 w-full rounded-(--radius-sm) border border-(--color-border-soft) bg-(--color-surface-white) px-4 py-3 text-base transition outline-none placeholder:text-[color:rgb(111_98_90_/_0.7)] focus:border-(--color-brand-gold) focus:ring-2 focus:ring-[color:rgb(123_88_11_/_0.2)]"
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Masukkan nama Anda"
            required
            type="text"
            value={form.name}
          />
        </label>
        <label className="block space-y-2">
          <span className="text-sm font-bold tracking-[0.1em] text-(--color-brand-brown) uppercase">Nomor telepon</span>
          <input
            className="min-h-12 w-full rounded-(--radius-sm) border border-(--color-border-soft) bg-(--color-surface-white) px-4 py-3 text-base transition outline-none placeholder:text-[color:rgb(111_98_90_/_0.7)] focus:border-(--color-brand-gold) focus:ring-2 focus:ring-[color:rgb(123_88_11_/_0.2)]"
            inputMode="tel"
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="08xx-xxxx-xxxx"
            required
            type="tel"
            value={form.phone}
          />
        </label>
      </div>
      <label className="block space-y-2">
        <span className="text-sm font-bold tracking-[0.1em] text-(--color-brand-brown) uppercase">Tanggal acara</span>
        <input
          className="min-h-12 w-full rounded-(--radius-sm) border border-(--color-border-soft) bg-(--color-surface-white) px-4 py-3 text-base transition outline-none focus:border-(--color-brand-gold) focus:ring-2 focus:ring-[color:rgb(123_88_11_/_0.2)]"
          onChange={(event) => updateField("eventDate", event.target.value)}
          type="date"
          value={form.eventDate}
        />
      </label>
      <label className="block space-y-2">
        <span className="text-sm font-bold tracking-[0.1em] text-(--color-brand-brown) uppercase">
          Pesan atau catatan
        </span>
        <textarea
          className="min-h-32 w-full resize-y rounded-(--radius-sm) border border-(--color-border-soft) bg-(--color-surface-white) px-4 py-3 text-base transition outline-none placeholder:text-[color:rgb(111_98_90_/_0.7)] focus:border-(--color-brand-gold) focus:ring-2 focus:ring-[color:rgb(123_88_11_/_0.2)]"
          onChange={(event) => updateField("note", event.target.value)}
          placeholder="Jelaskan detail kue atau acara yang Anda inginkan..."
          required
          rows={4}
          value={form.note}
        />
      </label>
      <button
        className="button button-primary w-full gap-2 rounded-(--radius-sm) py-5 shadow-(--shadow-soft) transition-transform hover:-translate-y-1 motion-reduce:transform-none"
        type="submit"
      >
        <Send aria-hidden="true" className="size-5" />
        Kirim pesan
      </button>
    </form>
  );
}
