import { useState } from 'react';

import Btn from './boutton'

const TodoList = () => {
  const [showList, setShowList] = useState(false);

  const todos = [
    "Add clear mode",
    "Add chat box",
    "Improved the section skills",
    "Add some details for skills",
    "Improved the interface",
    "Optimize the performances"
  ];

  return (
    <div className="bg-[#131313] border border-[rgba(180,20,20,0.18)] p-4 rounded shadow-md w-fit text-[#e2e2e2]" style={{ fontFamily: 'var(--sans)' }}>
      <Btn
        className="rounded hover:bg-[#a00000] transition-all flex-col bg-[#800000] text-white"
        style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '1px' } as React.CSSProperties}
        onClick={() => setShowList(!showList)}
      >
        <span>Improvement to come</span>
        <span className='font-black'>{showList ? "Hide" : "Show"}</span>
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
