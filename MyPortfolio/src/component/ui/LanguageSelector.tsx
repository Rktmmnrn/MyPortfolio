import { useEffect, useRef, useState } from "react";
import { Language } from "../../data/i18n";
import ReactCountryFlag from "react-country-flag";

type LanguageSelectorProps = {
  lang: Language;
  setLang: (lang: Language) => void;
};

const languages = [
  { code: "en", country: "GB" },
  { code: "fr", country: "FR" },
  { code: "mg", country: "MG" },
] as const;

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
  });

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
        <div className="absolute right-0 mt-1 flex flex-col overflow-hidden z-50 bg-[var(--bg)]">
          {languages
            .filter(({ code }) => code !== lang)
            .map(({ code, country }) => (
              <button
                key={code}
                onClick={() => { setLang(code as Language); setOpen(false); }}
                className="uppercase hover:bg-white/10 transition flex gap-1"
              >
                <ReactCountryFlag
                  countryCode={country}
                  svg
                  style={{
                    width: "1.5em",
                    height: "1.5em",
                  }}
                />
                {code.toUpperCase()}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;