import { motion } from "framer-motion";

export type LineType = "cmd" | "out" | "err" | "ok" | "warn" | "comment";

export interface TermLine {
  type: LineType;
  text: string;
}

interface TerminalProps {
  lines: TermLine[];
  title?: string;
  user?: string;
  host?: string;
  cwd?: string;
  /** revela linha por linha ao entrar na tela */
  animate?: boolean;
  className?: string;
}

const OUT_COLOR: Record<LineType, string> = {
  cmd: "text-gray-100",
  out: "text-gray-300",
  err: "text-red-400",
  ok: "text-green-400",
  warn: "text-yellow-400",
  comment: "text-gray-500 italic",
};

// Prompt no estilo Ubuntu: usuario@host verde, caminho azul, $ branco.
function Prompt({ user, host, cwd }: { user: string; host: string; cwd: string }) {
  return (
    <span className="select-none">
      <span className="text-green-400 font-semibold">
        {user}@{host}
      </span>
      <span className="text-gray-400">:</span>
      <span className="text-blue-400 font-semibold">{cwd}</span>
      <span className="text-gray-300">$ </span>
    </span>
  );
}

export function Terminal({
  lines,
  title,
  user = "wallyson",
  host = "ubuntu",
  cwd = "~",
  animate = true,
  className = "",
}: TerminalProps) {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: animate ? 0.12 : 0 } },
  };
  const item = {
    hidden: { opacity: 0, y: 4 },
    show: { opacity: 1, y: 0, transition: { duration: 0.18 } },
  };

  return (
    <div
      className={`my-6 rounded-xl overflow-hidden border border-white/10 bg-[#1b1b1d] shadow-2xl shadow-black/40 ring-1 ring-primary/10 ${className}`}
    >
      {/* barra de título estilo Ptyxis/GNOME */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-b from-[#38343c] to-[#2b2830] border-b border-black/40">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ed6a5e] shadow-inner" />
          <span className="w-3 h-3 rounded-full bg-[#f4bf50] shadow-inner" />
          <span className="w-3 h-3 rounded-full bg-[#61c554] shadow-inner" />
        </div>
        <span className="flex-1 text-center text-xs font-medium text-gray-400 truncate pr-10">
          {title ?? `${user}@${host}: ${cwd}`}
        </span>
      </div>

      {/* corpo */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="p-4 sm:p-5 font-mono text-[13px] leading-relaxed overflow-x-auto"
      >
        {lines.map((line, i) => {
          const isCmd = line.type === "cmd";
          const isLast = i === lines.length - 1;
          return (
            <motion.div
              key={i}
              variants={item}
              className={`whitespace-pre-wrap break-words ${OUT_COLOR[line.type]}`}
            >
              {isCmd && <Prompt user={user} host={host} cwd={cwd} />}
              <span>{line.text}</span>
              {isCmd && isLast && (
                <span className="inline-block w-2 h-4 -mb-0.5 ml-0.5 bg-primary animate-pulse" />
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
