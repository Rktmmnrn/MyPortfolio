import { useState, useEffect, useRef } from 'react';
import { translations, Language } from '../../data/i18n';

import Btn from '../ui/boutton'

type TodoListProps = {
  lang: Language;
};

const TodoList = ({ lang, }: TodoListProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  })

  const todos = [
    translations[lang].todo1,
    translations[lang].todo2,
    translations[lang].todo3,
    translations[lang].todo4
  ];

  return (
    <div className="bg-[var(--bg-card)] p-2 border border-[var(--border)] w-fit" style={{ fontFamily: 'var(--sans)' }}>
      <Btn
        className="rounded hover:bg-[#a00000] transition-all flex-col bg-[#800000] text-[white]"
        style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '1px' } as React.CSSProperties}
        onClick={() => { setShowList(!showList), setOpen(!open) }}
      >
        <span>{translations[lang].todoTitle}</span>
        <span className='font-black'>{showList ? translations[lang].todoHide : translations[lang].todoShow}</span>
        <span
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""
            }`}
        >
          ▼
        </span>
      </Btn>

      {showList && (
        <ul className="list-disc pl-6 mt-4 text-[var(--text-2)]" style={{ fontFamily: 'var(--mono)', fontSize: '12px' }}>
          {todos.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
