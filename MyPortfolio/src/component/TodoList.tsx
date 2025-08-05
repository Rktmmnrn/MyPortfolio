import { useState } from 'react';

import Btn from './boutton'

const TodoList = () => {
  const [showList, setShowList] = useState(false);

  const todos = [
    "Add dark and clear mode",
    "Add chat box",
    "Improved the section skills",
    "Add some details for skills",
    "Add traduction instead of google trad",
    "Improved the interface",
    "Optimize the performances"
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-fit">
      <Btn
        className="rounded hover:bg-[#a00000] transition-all flex-col bg-[#800000] text-white"
        onClick={() => setShowList(!showList)}
      >
        <span>Improvement to come</span>
        <span className='font-black'>{showList ? "Hide" : "Show"}</span>
      </Btn>

      {showList && (
        <ul className="list-disc pl-6 mt-4 text-gray-700">
          {todos.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
