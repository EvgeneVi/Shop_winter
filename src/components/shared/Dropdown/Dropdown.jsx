import { useState } from "react";

export default function Dropdown({ children, Btn }) {
  const [isOpen, setIsOpen] = useState(false);
  const setIsOpenAction = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div className="dropdown" onClick={setIsOpenAction}>
        {Btn}
      </div>
      {isOpen && children}
    </>
  );
}
