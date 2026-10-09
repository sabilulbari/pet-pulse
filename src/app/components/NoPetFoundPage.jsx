import { PawPrint } from 'lucide-react';
import React from 'react';

const NoPetFoundPage = () => {
    return (
      <div>
        <div className="flex justify-center items-center min-h-[40vh] mt-10 px-4">
          <style>{`
    /* ---------- 8s master cycle ---------- */
    @keyframes show-calm {
      0%, 43% { opacity: 1; }
      44%, 88% { opacity: 0; }
      89%, 100% { opacity: 1; }
    }
    @keyframes show-angry {
      0%, 43% { opacity: 0; }
      44%, 88% { opacity: 1; }
      89%, 100% { opacity: 0; }
    }
    @keyframes head-shake {
      0%, 43% { transform: translateX(0); }
      45% { transform: translateX(-3px); }
      47% { transform: translateX(3px); }
      49% { transform: translateX(-3px); }
      51% { transform: translateX(3px); }
      53%, 100% { transform: translateX(0); }
    }
    @keyframes puff {
      0%, 43% { transform: scale(1); }
      48%, 86% { transform: scale(1.05); }
      92%, 100% { transform: scale(1); }
    }
    @keyframes ear-l {
      0%, 43% { transform: rotate(0deg); }
      48%, 86% { transform: rotate(-22deg); }
      92%, 100% { transform: rotate(0deg); }
    }
    @keyframes ear-r {
      0%, 43% { transform: rotate(0deg); }
      48%, 86% { transform: rotate(22deg); }
      92%, 100% { transform: rotate(0deg); }
    }
    @keyframes swipe {
      0%, 55% { opacity: 0; transform: rotate(30deg); }
      57% { opacity: 1; transform: rotate(30deg); }
      60% { transform: rotate(-40deg); }
      64% { transform: rotate(30deg); }
      68% { transform: rotate(-40deg); }
      72% { transform: rotate(30deg); }
      76% { transform: rotate(-40deg); }
      80% { transform: rotate(30deg); }
      85% { opacity: 1; transform: rotate(30deg); }
      88%, 100% { opacity: 0; transform: rotate(30deg); }
    }
    @keyframes scratch-1 {
      0%, 59% { opacity: 0; stroke-dashoffset: 1; }
      61% { opacity: 1; stroke-dashoffset: 0; }
      86% { opacity: 1; stroke-dashoffset: 0; }
      91%, 100% { opacity: 0; stroke-dashoffset: 0; }
    }
    @keyframes scratch-2 {
      0%, 67% { opacity: 0; stroke-dashoffset: 1; }
      69% { opacity: 1; stroke-dashoffset: 0; }
      86% { opacity: 1; stroke-dashoffset: 0; }
      91%, 100% { opacity: 0; stroke-dashoffset: 0; }
    }
    @keyframes scratch-3 {
      0%, 75% { opacity: 0; stroke-dashoffset: 1; }
      77% { opacity: 1; stroke-dashoffset: 0; }
      86% { opacity: 1; stroke-dashoffset: 0; }
      91%, 100% { opacity: 0; stroke-dashoffset: 0; }
    }
    @keyframes grr-pop {
      0%, 45% { opacity: 0; transform: scale(0.5) rotate(-8deg); }
      49% { opacity: 1; transform: scale(1.25) rotate(-8deg); }
      53% { opacity: 1; transform: scale(1) rotate(-8deg); }
      85% { opacity: 1; transform: scale(1) rotate(-8deg); }
      89%, 100% { opacity: 0; transform: scale(0.8) rotate(-8deg); }
    }
    @keyframes red-flash {
      0%, 43% { opacity: 0; }
      48%, 86% { opacity: 1; }
      92%, 100% { opacity: 0; }
    }

    /* ---------- small loops ---------- */
    @keyframes pet-twinkle {
      0%, 100% { opacity: 0.2; transform: scale(0.6) rotate(0deg); }
      50% { opacity: 1; transform: scale(1.1) rotate(20deg); }
    }
    @keyframes pet-blink {
      0%, 92%, 100% { transform: scaleY(1); }
      96% { transform: scaleY(0.1); }
    }
    @keyframes tail-calm {
      0%, 100% { transform: rotate(-5deg); }
      50% { transform: rotate(10deg); }
    }
    @keyframes tail-angry {
      0%, 100% { transform: rotate(-18deg); }
      50% { transform: rotate(22deg); }
    }
    @keyframes vein-pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.3); }
    }
    @keyframes pet-paw {
      0%, 100% { transform: translateY(0); opacity: 0.5; }
      50% { transform: translateY(-6px); opacity: 1; }
    }

    .show-calm { animation: show-calm 8s linear infinite; }
    .show-angry { opacity: 0; animation: show-angry 8s linear infinite; }
    .head-shake { animation: head-shake 8s linear infinite; transform-box: view-box; transform-origin: 100px 120px; }
    .puff { animation: puff 8s ease-in-out infinite; transform-box: view-box; transform-origin: 100px 182px; }
    .ear-l { animation: ear-l 8s ease-in-out infinite; transform-box: view-box; transform-origin: 66px 66px; }
    .ear-r { animation: ear-r 8s ease-in-out infinite; transform-box: view-box; transform-origin: 134px 66px; }
    .swipe { opacity: 0; animation: swipe 8s ease-in-out infinite; transform-box: view-box; transform-origin: 120px 150px; }
    .scratch { fill: none; stroke: #ef4444; stroke-width: 3.5; stroke-linecap: round; stroke-dasharray: 1; opacity: 0; filter: drop-shadow(0 0 2px rgba(239,68,68,0.6)); }
    .scratch-1 { animation: scratch-1 8s linear infinite; }
    .scratch-2 { animation: scratch-2 8s linear infinite; }
    .scratch-3 { animation: scratch-3 8s linear infinite; }
    .grr { opacity: 0; animation: grr-pop 8s ease-out infinite; transform-box: fill-box; transform-origin: center; }
    .red-flash { opacity: 0; animation: red-flash 8s ease-in-out infinite; }

    .pet-twinkle { animation: pet-twinkle 2.4s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
    .pet-blink { animation: pet-blink 4s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
    .tail-calm { animation: tail-calm 2.4s ease-in-out infinite; transform-box: fill-box; transform-origin: 10% 90%; }
    .tail-angry { animation: tail-angry 0.25s ease-in-out infinite; transform-box: fill-box; transform-origin: 10% 90%; }
    .vein { animation: vein-pulse 0.4s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
    .pet-paw { animation: pet-paw 2s ease-in-out infinite; }
  `}</style>

          <div className="relative w-full overflow-hidden rounded-[2rem] border border-indigo-100 bg-linear-to-br from-indigo-50 via-white to-pink-50 p-8 text-center shadow-xl shadow-indigo-100/60">
            {/* Soft glow blobs */}
            <div className="pointer-events-none absolute -top-16 -left-16 h-48 w-full rounded-full bg-indigo-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-full rounded-full bg-pink-200/50 blur-3xl" />
            {/* Red tint when the cat is angry */}
            <div className="red-flash pointer-events-none absolute inset-0 bg-red-400/15" />

            {/* Illustration */}
            <div className="relative mx-auto mb-4 h-52 w-52">
              <svg viewBox="0 0 200 200" className="h-full w-full overflow-visible">
                {/* Sparkles */}
                <g className="pet-twinkle" style={{ animationDelay: "0s" }}>
                  <path d="M30 40 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3z" fill="#facc15" />
                </g>
                <g className="pet-twinkle" style={{ animationDelay: "1s" }}>
                  <path d="M170 150 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z" fill="#818cf8" />
                </g>

                {/* Shadow */}
                <ellipse cx="100" cy="182" rx="42" ry="7" fill="#6366f1" opacity="0.2" />

                {/* ===== CAT ===== */}
                <g className="puff">
                  {/* Tails */}
                  <g className="show-calm">
                    <g className="tail-calm">
                      <path d="M138 140 Q175 125 165 95" stroke="#fbbf24" strokeWidth="11" strokeLinecap="round" fill="none" />
                    </g>
                  </g>
                  <g className="show-angry">
                    <g className="tail-angry">
                      <path d="M138 140 Q178 128 168 92" stroke="#f59e0b" strokeWidth="15" strokeLinecap="round" fill="none" />
                    </g>
                  </g>

                  {/* Body */}
                  <ellipse cx="100" cy="140" rx="42" ry="34" fill="#fde68a" />
                  <ellipse cx="100" cy="148" rx="24" ry="22" fill="#fffbeb" />
                  {/* Front paws */}
                  <ellipse cx="82" cy="170" rx="11" ry="8" fill="#fcd34d" />
                  <ellipse cx="118" cy="170" rx="11" ry="8" fill="#fcd34d" />

                  {/* Head (shakes when angry) */}
                  <g className="head-shake">
                    {/* Ears */}
                    <g className="ear-l">
                      <path d="M58 70 Q50 30 78 48 Z" fill="#fbbf24" />
                      <path d="M62 64 Q58 44 74 54 Z" fill="#fda4af" />
                    </g>
                    <g className="ear-r">
                      <path d="M142 70 Q150 30 122 48 Z" fill="#fbbf24" />
                      <path d="M138 64 Q142 44 126 54 Z" fill="#fda4af" />
                    </g>
                    <ellipse cx="100" cy="85" rx="48" ry="42" fill="#fde68a" />

                    {/* --- Calm face --- */}
                    <g className="show-calm">
                      <ellipse cx="68" cy="98" rx="9" ry="6" fill="#fda4af" opacity="0.7" />
                      <ellipse cx="132" cy="98" rx="9" ry="6" fill="#fda4af" opacity="0.7" />
                      <g className="pet-blink">
                        <ellipse cx="80" cy="82" rx="7" ry="9" fill="#1e293b" />
                        <ellipse cx="120" cy="82" rx="7" ry="9" fill="#1e293b" />
                        <circle cx="82.5" cy="78" r="2.6" fill="#fff" />
                        <circle cx="122.5" cy="78" r="2.6" fill="#fff" />
                        <circle cx="78" cy="86" r="1.2" fill="#fff" />
                        <circle cx="118" cy="86" r="1.2" fill="#fff" />
                      </g>
                      <path d="M95 94 Q100 100 105 94 Q100 90 95 94 Z" fill="#f43f5e" />
                      <path d="M100 98 Q100 106 92 106 M100 98 Q100 106 108 106" stroke="#78350f" strokeWidth="2" strokeLinecap="round" fill="none" />
                      <path d="M55 92 L36 88 M55 98 L36 100 M145 92 L164 88 M145 98 L164 100" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
                    </g>

                    {/* --- Angry face --- */}
                    <g className="show-angry">
                      {/* Red face */}
                      <ellipse cx="100" cy="85" rx="48" ry="42" fill="#f87171" opacity="0.4" />
                      <ellipse cx="68" cy="98" rx="10" ry="6.5" fill="#ef4444" opacity="0.55" />
                      <ellipse cx="132" cy="98" rx="10" ry="6.5" fill="#ef4444" opacity="0.55" />
                      {/* Eyes */}
                      <ellipse cx="80" cy="85" rx="6.5" ry="7" fill="#1e293b" />
                      <ellipse cx="120" cy="85" rx="6.5" ry="7" fill="#1e293b" />
                      <circle cx="82" cy="82" r="2" fill="#fff" />
                      <circle cx="122" cy="82" r="2" fill="#fff" />
                      {/* Angry brows */}
                      <path d="M64 66 L93 80 M136 66 L107 80" stroke="#78350f" strokeWidth="5" strokeLinecap="round" fill="none" />
                      {/* Nose */}
                      <path d="M95 94 Q100 100 105 94 Q100 90 95 94 Z" fill="#be123c" />
                      {/* Growl mouth + fangs */}
                      <path d="M88 111 Q100 98 112 111 Z" fill="#7f1d1d" />
                      <path d="M92 105 L95 112 L98 103 Z" fill="#fff" />
                      <path d="M108 105 L105 112 L102 103 Z" fill="#fff" />
                      {/* Bristling whiskers */}
                      <path d="M55 90 L34 80 M55 98 L33 100 M145 90 L166 80 M145 98 L167 100" stroke="#b45309" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                      {/* Anger vein */}
                      <g className="vein">
                        <path
                          d="M138 44 Q144 46 144 52 M156 44 Q150 46 150 52 M138 64 Q144 62 144 56 M156 64 Q150 62 150 56"
                          stroke="#ef4444"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          fill="none"
                        />
                      </g>
                    </g>
                  </g>

                  {/* Scratching paw with claws */}
                  <g className="swipe">
                    <path d="M120 150 L150 100" stroke="#fde68a" strokeWidth="17" strokeLinecap="round" />
                    <ellipse cx="151" cy="97" rx="13" ry="11" fill="#fcd34d" />
                    <path d="M144 90 L141 77 M151 88 L150 74 M158 90 L160 77" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                    <path d="M144 90 L141 77 M151 88 L150 74 M158 90 L160 77" stroke="#fecaca" strokeWidth="1" strokeLinecap="round" />
                  </g>
                </g>

                {/* ===== Scratch marks (appear on swipes) ===== */}
                <g className="scratch-1-wrap">
                  <path className="scratch scratch-1" pathLength={1} d="M30 55 L58 125" />
                  <path className="scratch scratch-1" pathLength={1} d="M42 52 L70 122" />
                  <path className="scratch scratch-1" pathLength={1} d="M54 49 L82 119" />
                </g>
                <g>
                  <path className="scratch scratch-2" pathLength={1} d="M135 30 L163 100" />
                  <path className="scratch scratch-2" pathLength={1} d="M147 27 L175 97" />
                  <path className="scratch scratch-2" pathLength={1} d="M159 24 L187 94" />
                </g>
                <g>
                  <path className="scratch scratch-3" pathLength={1} d="M140 110 L166 165" />
                  <path className="scratch scratch-3" pathLength={1} d="M152 107 L178 162" />
                  <path className="scratch scratch-3" pathLength={1} d="M164 104 L190 159" />
                </g>

                {/* GRRR! */}
                <text className="grr" x="14" y="38" fontSize="22" fontWeight="900" fill="#ef4444" stroke="#fff" strokeWidth="3" paintOrder="stroke">
                  GRRR!
                </text>
              </svg>
            </div>

            {/* Text */}
            <h2 className="relative text-2xl font-extrabold tracking-tight text-slate-800">No Pet Found!</h2>
            <h2 className="relative text-xl font-extrabold tracking-tight text-red-700">I will bit You</h2>
            <p className="relative mx-auto mt-2 max-w-xs text-sm font-medium text-slate-500">You have no pet! I will scratch you, You should have minimum 3 pet</p>

            {/* Paw trail */}
            <div className="relative mt-5 flex items-center justify-center gap-3">
              {[0, 0.25, 0.5, 0.75].map((d, i) => (
                <PawPrint key={i} className="pet-paw h-5 w-5 text-indigo-400 fill-indigo-100" style={{ animationDelay: `${d}s`, transform: `rotate(${i % 2 ? 15 : -15}deg)` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default NoPetFoundPage;