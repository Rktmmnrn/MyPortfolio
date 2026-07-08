import { useState, useEffect, useRef } from 'react';

import Btn from '../ui/boutton'

const TodoList = () => {
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
    "Add clear mode",
    "Add chat box",
    "Improved the section skills",
    "Add some details for skills",
    "Improved the interface",
    "Optimize the performances"
  ];

  return (
    <div className="bg-[#131313] p-2 border border-[var(--border)] w-fit text-[#e2e2e2]" style={{ fontFamily: 'var(--sans)' }}>
      <Btn
        className="rounded hover:bg-[#a00000] transition-all flex-col bg-[#800000] text-white"
        style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '1px' } as React.CSSProperties}
        onClick={() => { setShowList(!showList), setOpen(!open) }}
      >
        <span>Improvement to come</span>
        <span className='font-black'>{showList ? "Hide" : "Show"}</span>
        <span
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""
            }`}
        >
          ▼
        </span>
      </Btn>

      {showList && (
        <ul className="list-disc pl-6 mt-4 text-[#9a9a9a]" style={{ fontFamily: 'var(--mono)', fontSize: '12px' }}>
          {todos.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
