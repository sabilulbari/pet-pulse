import { PawPrint } from "lucide-react";
import React from "react";

const NoRequestAnimetion = () => {
  return (
    <div className="flex justify-center items-center min-h-[40vh] mt-10 px-4">
      <style>{`
    @keyframes pet-twinkle {
      0%, 100% { opacity: 0.2; transform: scale(0.6) rotate(0deg); }
      50% { opacity: 1; transform: scale(1.1) rotate(20deg); }
    }
    @keyframes pet-blink {
      0%, 92%, 100% { transform: scaleY(1); }
      96% { transform: scaleY(0.1); }
    }
    @keyframes pet-wag {
      0%, 100% { transform: rotate(-12deg); }
      50% { transform: rotate(18deg); }
    }
    @keyframes pet-paw {
      0%, 100% { transform: translateY(0); opacity: 0.5; }
      50% { transform: translateY(-6px); opacity: 1; }
    }
    @keyframes pet-heart {
      0% { transform: translateY(0) scale(0.6); opacity: 0; }
      30% { opacity: 1; }
      100% { transform: translateY(-40px) scale(1.1); opacity: 0; }
    }

    /* 1) Walk in from the left with little hops */
    @keyframes pet-enter {
      0% { transform: translateX(-240px); opacity: 0; }
      12% { opacity: 1; }
      100% { transform: translateX(0); opacity: 1; }
    }
    @keyframes pet-hop {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      25% { transform: translateY(-8px) rotate(-3deg); }
      50% { transform: translateY(-14px) rotate(0deg); }
      75% { transform: translateY(-8px) rotate(3deg); }
    }

    /* 2) Turn around (flip) */
    @keyframes pet-flip-out {
      0% { transform: scaleX(1); opacity: 1; }
      99% { transform: scaleX(0); opacity: 1; }
      100% { transform: scaleX(0); opacity: 0; }
    }
    @keyframes pet-flip-back {
      0% { transform: scaleX(0); opacity: 1; }
      10% { transform: scaleX(1); opacity: 1; }
      90% { transform: scaleX(1); opacity: 1; }
      99% { transform: scaleX(0); opacity: 1; }
      100% { transform: scaleX(0); opacity: 0; }
    }
    @keyframes pet-flip-in {
      0% { transform: scaleX(0); opacity: 1; }
      100% { transform: scaleX(1); opacity: 1; }
    }

    /* 3) Butt wiggle */
    @keyframes pet-butt {
      0%, 100% { transform: rotate(-6deg); }
      50% { transform: rotate(6deg); }
    }

    /* 4) Sit down + idle */
    @keyframes pet-settle {
      0% { transform: scale(1.06, 0.88); }
      40% { transform: scale(0.96, 1.07); }
      70% { transform: scale(1.02, 0.98); }
      100% { transform: scale(1, 1); }
    }
    @keyframes pet-tail-sway {
      0%, 100% { transform: rotate(-5deg); }
      50% { transform: rotate(8deg); }
    }
    @keyframes pet-ear {
      0%, 88%, 100% { transform: rotate(0deg); }
      93% { transform: rotate(-10deg); }
    }

    .pet-twinkle { animation: pet-twinkle 2.4s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
    .pet-blink { animation: pet-blink 4s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
    .pet-tail { animation: pet-wag 0.9s ease-in-out infinite; transform-box: fill-box; transform-origin: 10% 90%; }
    .pet-paw { animation: pet-paw 2s ease-in-out infinite; }
    .pet-heart { opacity: 0; animation: pet-heart 2.8s ease-out infinite; }

    .pet-enter { animation: pet-enter 2.2s ease-out both; }
    .pet-hop { animation: pet-hop 0.44s ease-in-out 5; transform-box: view-box; transform-origin: 100px 180px; }

    .pet-view-front { animation: pet-flip-out 0.35s ease-in 2.2s forwards; transform-box: view-box; transform-origin: 100px 100px; }
    .pet-view-back { opacity: 0; animation: pet-flip-back 3.4s linear 2.55s forwards; transform-box: view-box; transform-origin: 100px 100px; }
    .pet-view-sit { opacity: 0; animation: pet-flip-in 0.35s ease-out 5.95s forwards; transform-box: view-box; transform-origin: 100px 100px; }

    .pet-butt { animation: pet-butt 0.5s ease-in-out infinite; transform-box: view-box; transform-origin: 100px 182px; }
    .pet-back-tail { animation: pet-wag 0.5s ease-in-out infinite; transform-box: view-box; transform-origin: 100px 168px; }

    .pet-settle { animation: pet-settle 0.7s ease-out 6.2s both; transform-box: view-box; transform-origin: 100px 182px; }
    .pet-tail-sit { animation: pet-tail-sway 2.4s ease-in-out infinite; transform-box: view-box; transform-origin: 126px 168px; }
    .pet-ear-sit { animation: pet-ear 5s ease-in-out infinite; transform-box: fill-box; transform-origin: 80% 100%; }
  `}</style>

      <div className="relative w-full overflow-hidden rounded-[2rem] border border-indigo-100 bg-linear-to-br from-indigo-50 via-white to-pink-50 p-8 text-center shadow-xl shadow-indigo-100/60">
        {/* Soft glow blobs */}
        <div className="pointer-events-none absolute -top-16 -left-16 h-48 w-full rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-full rounded-full bg-pink-200/50 blur-3xl" />

        {/* Illustration */}
        <div className="relative mx-auto mb-4 h-52 w-52">
          <svg viewBox="0 0 200 200" className="h-full w-full overflow-visible">
            {/* Sparkles */}
            <g className="pet-twinkle" style={{ animationDelay: "0s" }}>
              <path d="M30 40 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3z" fill="#facc15" />
            </g>
            <g className="pet-twinkle" style={{ animationDelay: "0.8s" }}>
              <path d="M170 55 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5z" fill="#f472b6" />
            </g>
            <g className="pet-twinkle" style={{ animationDelay: "1.5s" }}>
              <path d="M160 130 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z" fill="#818cf8" />
            </g>
            <g className="pet-twinkle" style={{ animationDelay: "0.4s" }}>
              <circle cx="40" cy="120" r="3" fill="#a5b4fc" />
            </g>

            {/* Whole cat walks in */}
            <g className="pet-enter">
              {/* Shadow */}
              <ellipse cx="100" cy="182" rx="42" ry="7" fill="#6366f1" opacity="0.2" />

              {/* ===== VIEW 1: FRONT (hopping in) ===== */}
              <g className="pet-hop">
                <g className="pet-view-front">
                  {/* Tail */}
                  <g className="pet-tail">
                    <path d="M138 140 Q175 125 165 95" stroke="#fbbf24" strokeWidth="11" strokeLinecap="round" fill="none" />
                  </g>
                  {/* Body */}
                  <ellipse cx="100" cy="140" rx="42" ry="34" fill="#fde68a" />
                  <ellipse cx="100" cy="148" rx="24" ry="22" fill="#fffbeb" />
                  {/* Front paws */}
                  <ellipse cx="82" cy="170" rx="11" ry="8" fill="#fcd34d" />
                  <ellipse cx="118" cy="170" rx="11" ry="8" fill="#fcd34d" />
                  {/* Ears */}
                  <path d="M58 70 Q50 30 78 48 Z" fill="#fbbf24" />
                  <path d="M142 70 Q150 30 122 48 Z" fill="#fbbf24" />
                  <path d="M62 64 Q58 44 74 54 Z" fill="#fda4af" />
                  <path d="M138 64 Q142 44 126 54 Z" fill="#fda4af" />
                  {/* Head */}
                  <ellipse cx="100" cy="85" rx="48" ry="42" fill="#fde68a" />
                  <ellipse cx="68" cy="98" rx="9" ry="6" fill="#fda4af" opacity="0.7" />
                  <ellipse cx="132" cy="98" rx="9" ry="6" fill="#fda4af" opacity="0.7" />
                  {/* Eyes */}
                  <g className="pet-blink">
                    <ellipse cx="80" cy="82" rx="7" ry="9" fill="#1e293b" />
                    <ellipse cx="120" cy="82" rx="7" ry="9" fill="#1e293b" />
                    <circle cx="82.5" cy="78" r="2.6" fill="#fff" />
                    <circle cx="122.5" cy="78" r="2.6" fill="#fff" />
                    <circle cx="78" cy="86" r="1.2" fill="#fff" />
                    <circle cx="118" cy="86" r="1.2" fill="#fff" />
                  </g>
                  {/* Nose + mouth */}
                  <path d="M95 94 Q100 100 105 94 Q100 90 95 94 Z" fill="#f43f5e" />
                  <path d="M100 98 Q100 106 92 106 M100 98 Q100 106 108 106" stroke="#78350f" strokeWidth="2" strokeLinecap="round" fill="none" />
                  {/* Whiskers */}
                  <path d="M55 92 L36 88 M55 98 L36 100 M145 92 L164 88 M145 98 L164 100" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
                </g>
              </g>

              {/* ===== VIEW 2: BACK (butt wiggle + tail wag) ===== */}
              <g className="pet-view-back">
                <g className="pet-butt">
                  {/* Body */}
                  <ellipse cx="100" cy="142" rx="44" ry="36" fill="#fde68a" />
                  <path d="M78 128 Q84 134 80 144 M122 128 Q116 134 120 144 M100 122 L100 138" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" fill="none" />
                  {/* Hind feet */}
                  <ellipse cx="78" cy="174" rx="13" ry="8" fill="#fcd34d" />
                  <ellipse cx="122" cy="174" rx="13" ry="8" fill="#fcd34d" />
                  {/* Tail (wagging) */}
                  <g className="pet-back-tail">
                    <path d="M100 168 Q148 165 138 112" stroke="#fbbf24" strokeWidth="11" strokeLinecap="round" fill="none" />
                    <circle cx="138" cy="112" r="6.5" fill="#fffbeb" />
                  </g>
                </g>
                {/* Ears (back side) */}
                <path d="M58 70 Q50 30 78 48 Z" fill="#fbbf24" />
                <path d="M142 70 Q150 30 122 48 Z" fill="#fbbf24" />
                {/* Back of head */}
                <ellipse cx="100" cy="85" rx="48" ry="42" fill="#fde68a" />
                <path d="M100 46 L100 62 M87 49 L90 62 M113 49 L110 62" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" fill="none" />
              </g>

              {/* ===== VIEW 3: SITTING (front, calm idle) ===== */}
              <g className="pet-view-sit">
                <g className="pet-settle">
                  {/* Curled tail */}
                  <g className="pet-tail-sit">
                    <path d="M126 168 Q172 176 166 138 Q164 124 152 128" stroke="#fbbf24" strokeWidth="11" strokeLinecap="round" fill="none" />
                  </g>
                  {/* Haunches */}
                  <ellipse cx="70" cy="158" rx="24" ry="22" fill="#fde68a" />
                  <ellipse cx="130" cy="158" rx="24" ry="22" fill="#fde68a" />
                  {/* Body */}
                  <ellipse cx="100" cy="138" rx="36" ry="42" fill="#fde68a" />
                  <ellipse cx="100" cy="148" rx="20" ry="30" fill="#fffbeb" />
                  {/* Front legs + paws */}
                  <rect x="79" y="142" width="14" height="32" rx="7" fill="#fde68a" />
                  <rect x="107" y="142" width="14" height="32" rx="7" fill="#fde68a" />
                  <ellipse cx="86" cy="175" rx="11" ry="7.5" fill="#fcd34d" />
                  <ellipse cx="114" cy="175" rx="11" ry="7.5" fill="#fcd34d" />
                  {/* Ears */}
                  <g className="pet-ear-sit">
                    <path d="M58 70 Q50 30 78 48 Z" fill="#fbbf24" />
                    <path d="M62 64 Q58 44 74 54 Z" fill="#fda4af" />
                  </g>
                  <path d="M142 70 Q150 30 122 48 Z" fill="#fbbf24" />
                  <path d="M138 64 Q142 44 126 54 Z" fill="#fda4af" />
                  {/* Head */}
                  <ellipse cx="100" cy="85" rx="48" ry="42" fill="#fde68a" />
                  <ellipse cx="68" cy="98" rx="9" ry="6" fill="#fda4af" opacity="0.7" />
                  <ellipse cx="132" cy="98" rx="9" ry="6" fill="#fda4af" opacity="0.7" />
                  {/* Eyes */}
                  <g className="pet-blink">
                    <ellipse cx="80" cy="82" rx="7" ry="9" fill="#1e293b" />
                    <ellipse cx="120" cy="82" rx="7" ry="9" fill="#1e293b" />
                    <circle cx="82.5" cy="78" r="2.6" fill="#fff" />
                    <circle cx="122.5" cy="78" r="2.6" fill="#fff" />
                    <circle cx="78" cy="86" r="1.2" fill="#fff" />
                    <circle cx="118" cy="86" r="1.2" fill="#fff" />
                  </g>
                  {/* Nose + mouth */}
                  <path d="M95 94 Q100 100 105 94 Q100 90 95 94 Z" fill="#f43f5e" />
                  <path d="M100 98 Q100 106 92 106 M100 98 Q100 106 108 106" stroke="#78350f" strokeWidth="2" strokeLinecap="round" fill="none" />
                  {/* Whiskers */}
                  <path d="M55 92 L36 88 M55 98 L36 100 M145 92 L164 88 M145 98 L164 100" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
                </g>
              </g>
            </g>

            {/* Floating hearts (start after the cat sits) */}
            <g className="pet-heart" style={{ animationDelay: "6.6s" }}>
              <path d="M148 60 c-3 -5 -10 -1 -6 5 l6 6 6 -6 c4 -6 -3 -10 -6 -5z" fill="#f472b6" />
            </g>
            <g className="pet-heart" style={{ animationDelay: "8s" }}>
              <path d="M52 62 c-2.5 -4 -8 -1 -5 4 l5 5 5 -5 c3 -5 -2.5 -8 -5 -4z" fill="#fb7185" />
            </g>
          </svg>
        </div>

        {/* Text */}
        <h2 className="relative text-xl font-extrabold tracking-tight text-slate-800">No Adoption Request Found</h2>
        <p className="relative mx-auto mt-2 max-w-xs text-sm font-medium text-slate-500">You have no request for any pets yet. Please stay together to get request!</p>

        {/* Paw trail */}
        <div className="relative mt-5 flex items-center justify-center gap-3">
          {[0, 0.25, 0.5, 0.75].map((d, i) => (
            <PawPrint key={i} className="pet-paw h-5 w-5 text-indigo-400 fill-indigo-100" style={{ animationDelay: `${d}s`, transform: `rotate(${i % 2 ? 15 : -15}deg)` }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoRequestAnimetion;
