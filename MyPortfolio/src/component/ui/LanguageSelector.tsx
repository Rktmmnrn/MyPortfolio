import { useEffect, useRef, useState } from "react";
import { Language } from "../../data/i18n";

type LanguageSelectorProps = {
  lang: Language;
  setLang: (lang: Language) => void;
};

const LanguageSelector = ({
  lang,
  setLang,
}: LanguageSelectorProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  })

  return (
    <div
      ref={ref}
      className="relative group"
    >
      <button
        onClick={() => setOpen(!open)}
        className="uppercase text-[11px] text-[var(--text-3)] cursor-pointer gap-1 flex"
      >
        {lang}
        <span
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""
            }`}
        >
          ▼
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-1 flex flex-col overflow-hidden z-50">
          {(["en", "fr", "mg"] as Language[])
            .filter((l) => l !== lang)
            .map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setOpen(false); }}
                className="px-4 py-2 text-left uppercase hover:bg-white/10 transition"
              >
                {l}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;