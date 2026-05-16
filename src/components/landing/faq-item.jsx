import { useId, useState } from "react";

export function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        className="flex w-full justify-between items-center gap-4 py-lg cursor-pointer text-left"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <h3 className="font-headline-md text-[20px] text-white uppercase">{question}</h3>
        <span
          className={`material-symbols-outlined shrink-0 text-primary transition-transform duration-500 ease-in-out ${open ? "rotate-45" : ""}`}
        >
          add
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-500 ease-in-out motion-reduce:transition-none ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="min-h-0 overflow-hidden">
          <p
            className={`pb-lg text-on-surface-variant transition-opacity duration-500 ease-in-out motion-reduce:transition-none ${open ? "opacity-70" : "opacity-0"}`}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
