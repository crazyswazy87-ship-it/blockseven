import React, { useMemo, useState } from "react";
import dtheme from "../../../public/assets/images/pc.jpg"
import ltheme from "../../../public/assets/images/pz.png"

/* ----------------------------------------------------------------------- */
/* Types                                                                    */
/* ----------------------------------------------------------------------- */

interface Person {
  id: string;
  avatarUrl: string;
}

type CardVariant = "create" | "standard" | "insights" | "screenshare";

interface RoomCardData {
  id: string;
  title: string;
  subtitle: string;
  variant: CardVariant;
  participants?: Person[];
  participantCount?: number;
  live?: boolean;
  thumbnails?: string[];
  timer?: string;
}

type ViewTab = "dashboard" | "rooms";

interface StarSpec {
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
}

interface CloudSpec {
  top: number;
  left: number;
  scale: number;
  duration: number;
  delay: number;
}

/* ----------------------------------------------------------------------- */
/* Static data                                                             */
/* ----------------------------------------------------------------------- */

const person = (id: string, img: number): Person => ({
  id,
  avatarUrl: `https://i.pravatar.cc/64?img=${img}`,
});

const ROOMS: RoomCardData[] = [
  {
    id: "create",
    title: "Create a room",
    subtitle: "",
    variant: "create",
  },
  {
    id: "subscription-growth",
    title: "Subscription Growth Experiments",
    subtitle: "Sprint Retrospective",
    variant: "standard",
    participants: [person("p1", 5), person("p2", 9), person("p3", 21)],
    participantCount: 9,
  },
  {
    id: "weekly-insights",
    title: "Weekly Insights",
    subtitle: "",
    variant: "insights",
    participants: [person("p4", 32), person("p5", 12)],
  },
  {
    id: "product-strategy",
    title: "Product Strategy 2023",
    subtitle: "No upcoming meetings",
    variant: "standard",
    participants: [person("p6", 44)],
    participantCount: 32,
  },
  {
    id: "user-onboarding",
    title: "User Onboarding Team",
    subtitle: "Sprint Planning",
    variant: "standard",
    participants: [person("p7", 15), person("p8", 25), person("p9", 36)],
    participantCount: 3,
  },
  {
    id: "user-market-research",
    title: "User & Market Research",
    subtitle: "No upcoming meetings",
    variant: "standard",
    participants: [person("p10", 47)],
    participantCount: 6,
  },
  {
    id: "core-product",
    title: "Core Product Team",
    subtitle: "Core Product Team",
    variant: "standard",
    participants: [person("p11", 27), person("p12", 8)],
    participantCount: 2,
    live: true,
  },
  {
    id: "screen-share",
    title: "Screen Share",
    subtitle: "",
    variant: "screenshare",
    thumbnails: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&q=60",
      "https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?w=200&q=60",
    ],
    timer: "0:30",
    participants: [person("p13", 33), person("p14", 41)],
    participantCount: 8,
  },
];

const WAVEFORM: number[] = [
  8, 14, 20, 26, 32, 38, 30, 44, 50, 40, 55, 62, 48, 58, 66, 52, 60, 46, 38,
  30, 24, 18, 12, 20, 28, 16, 22, 30, 18, 24, 14, 20, 12, 16, 10, 14, 8, 12,
  9, 11,
];
const WAVEFORM_ACTIVE_COUNT = 18;

/* ----------------------------------------------------------------------- */
/* Subcomponents                                                           */
/* ----------------------------------------------------------------------- */

interface AvatarStackProps {
  people: Person[];
  extraCount?: number;
  size?: number;
}

const AvatarStack: React.FC<AvatarStackProps> = ({
  people,
  extraCount,
  size = 28,
}) => {
  return (
    <div className="hd-avatar-stack">
      {people.map((p) => (
        <img
          key={p.id}
          src={p.avatarUrl}
          alt=""
          className="hd-avatar"
          style={{ width: size, height: size }}
        />
      ))}
      {typeof extraCount === "number" && (
        <span
          className="hd-avatar hd-avatar-count"
          style={{ width: size, height: size, lineHeight: `${size}px` }}
        >
          {extraCount}
        </span>
      )}
    </div>
  );
};

interface ToggleSwitchProps {
  checked: boolean;
  onToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onToggle }) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label="Toggle dark mode"
      className={`hd-theme-toggle ${checked ? "is-dark" : "is-light"}`}
      onClick={onToggle}
    >
      <span className="hd-theme-toggle-track">
        <span className="hd-theme-toggle-icon hd-theme-toggle-sun">☀</span>
        <span className="hd-theme-toggle-icon hd-theme-toggle-moon">☾</span>
      </span>
      <span className="hd-theme-toggle-knob" />
    </button>
  );
};

interface WaveformProps {
  values: number[];
  activeCount: number;
}

const Waveform: React.FC<WaveformProps> = ({ values, activeCount }) => {
  return (
    <div className="hd-waveform">
      {values.map((v, i) => (
        <span
          key={i}
          className={`hd-waveform-bar ${i < activeCount ? "is-active" : ""}`}
          style={{ height: `${v}px` }}
        />
      ))}
    </div>
  );
};

interface RoomCardProps {
  data: RoomCardData;
}

const RoomCard: React.FC<RoomCardProps> = ({ data }) => {
  if (data.variant === "create") {
    return (
      <div className="hd-card hd-card-create">
        <span className="hd-create-plus">+</span>
        <span className="hd-create-label">Create a room</span>
      </div>
    );
  }

  if (data.variant === "insights") {
    return (
      <div className="hd-card hd-card-insights">
        <div className="hd-card-header">
          <h3 className="hd-card-title">{data.title}</h3>
        </div>
        <Waveform values={WAVEFORM} activeCount={WAVEFORM_ACTIVE_COUNT} />
        <div className="hd-card-footer">
          {data.participants && (
            <AvatarStack people={data.participants} size={30} />
          )}
          <button
            type="button"
            className="hd-play-btn"
            aria-label="Play weekly insights"
          >
            ▶
          </button>
        </div>
      </div>
    );
  }

  if (data.variant === "screenshare") {
    return (
      <div className="hd-card hd-card-screenshare">
        <div className="hd-screenshare-top">
          <span className="hd-pill hd-pill-blue">Screen Share</span>
          <span className="hd-pill hd-pill-timer">{data.timer}</span>
        </div>
        <div className="hd-screenshare-thumbs">
          {data.thumbnails?.map((t, i) => (
            <img key={i} src={t} alt="" className="hd-thumb" />
          ))}
        </div>
        <div className="hd-card-footer">
          {data.participants && (
            <AvatarStack people={data.participants} size={26} />
          )}
          {typeof data.participantCount === "number" && (
            <span className="hd-count-chip">{data.participantCount}</span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="hd-card hd-card-standard">
      <div className="hd-card-header">
        <h3 className="hd-card-title">{data.title}</h3>
        {data.live && (
          <span className="hd-live-icon" aria-hidden="true">
            ⏻
          </span>
        )}
      </div>
      <p className="hd-card-subtitle">{data.subtitle}</p>
      <div className="hd-card-footer">
        {data.participants && <AvatarStack people={data.participants} />}
        {typeof data.participantCount === "number" && (
          <span className="hd-count-chip">{data.participantCount}</span>
        )}
      </div>
    </div>
  );
};

/* ----------------------------------------------------------------------- */
/* Main component                                                          */
/* ----------------------------------------------------------------------- */

const BlockPc: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<ViewTab>("rooms");
  const [meetingVisible, setMeetingVisible] = useState<boolean>(true);

  const stars: StarSpec[] = useMemo(() => {
    return Array.from({ length: 90 }).map((_, i) => {
      const seed = i * 47.13;
      return {
        top: Math.abs(Math.sin(seed) * 100),
        left: Math.abs(Math.cos(seed * 1.7) * 100),
        size: 1 + (i % 3),
        delay: (i % 10) * 0.35,
        duration: 2.5 + (i % 5) * 0.6,
      };
    });
  }, []);

  const clouds: CloudSpec[] = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => ({
      top: 6 + i * 9,
      left: (i * 23) % 90,
      scale: 0.7 + (i % 3) * 0.25,
      duration: 40 + i * 12,
      delay: i * 3,
    }));
  }, []);

  return (
    <div className={`hd-root ${isDark ? "hd-dark" : "hd-light"}`}>
      <style>{`
        .hd-light {
           background-image: url(${dtheme})
        }
        .hd-dark {
           background-image: url(${ltheme})
        }
        .hd-root {
          --hd-radius-lg: 26px;
          --hd-radius-md: 20px;
          --hd-radius-full: 999px;
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text",
            "Inter", "Segoe UI", Roboto, sans-serif;
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          isolation: isolate;
          transition: background 0.7s ease;
          padding-bottom: 96px;
          box-sizing: border-box;
        }
        .hd-root * { box-sizing: border-box; }

        /* ---------- Theme surfaces ---------- */
        .hd-theme-light {
          background: linear-gradient(
            180deg,
            #8fc7ef 0%,
            #a9d8f2 30%,
            #cdeaba 62%,
            #8fc76a 100%
          );
          --hd-glass-bg: rgba(255, 255, 255, 0.5);
          --hd-glass-bg-strong: rgba(255, 255, 255, 0.72);
          --hd-glass-border: rgba(255, 255, 255, 0.85);
          --hd-glass-blur: blur(18px) saturate(180%);
          --hd-text-primary: #16210f;
          --hd-text-secondary: rgba(22, 33, 15, 0.62);
          --hd-shadow: 0 8px 30px rgba(20, 40, 10, 0.14);
        }
        .hd-theme-dark {
          background: linear-gradient(
            180deg,
            #030512 0%,
            #0a1230 32%,
            #101a34 60%,
            #16241c 100%
          );
          --hd-glass-bg: rgba(22, 24, 36, 0.42);
          --hd-glass-bg-strong: rgba(18, 20, 32, 0.6);
          --hd-glass-border: rgba(255, 255, 255, 0.14);
          --hd-glass-blur: blur(26px) saturate(140%) brightness(0.92);
          --hd-text-primary: #f3f5fb;
          --hd-text-secondary: rgba(243, 245, 251, 0.62);
          --hd-shadow: 0 10px 40px rgba(0, 0, 0, 0.45);
        }

        /* ---------- Sky decoration ---------- */
        .hd-sky { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
        .hd-star {
          position: absolute;
          border-radius: 50%;
          background: #fff;
          opacity: 0;
        }
        .hd-theme-dark .hd-star {
          animation: hd-twinkle linear infinite;
        }
        @keyframes hd-twinkle {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.95; }
        }
        .hd-cloud {
          position: absolute;
          width: 140px;
          height: 40px;
          background: rgba(255, 255, 255, 0.75);
          border-radius: 999px;
          filter: blur(6px);
          opacity: 0;
        }
        .hd-theme-light .hd-cloud {
          opacity: 0.85;
          animation: hd-drift linear infinite;
        }
        @keyframes hd-drift {
          0% { transform: translateX(-10vw); }
          100% { transform: translateX(110vw); }
        }
        .hd-hills { position: absolute; bottom: 0; left: 0; width: 100%; z-index: 1; }

        /* ---------- Layout shell ---------- */
        .hd-header {
          position: relative;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          padding: 22px 28px 0 28px;
        }
        .hd-header-left { display: flex; align-items: center; gap: 12px; }
        .hd-header-right {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-left: auto;
        }
        .hd-header-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--hd-glass-border);
          box-shadow: var(--hd-shadow);
        }

        /* ---------- Glass building block ---------- */
        .hd-glass {
          background: var(--hd-glass-bg);
          -webkit-backdrop-filter: var(--hd-glass-blur);
          backdrop-filter: var(--hd-glass-blur);
          border: 1px solid var(--hd-glass-border);
          box-shadow: var(--hd-shadow);
        }

        .hd-pill-btn {
          height: 42px;
          padding: 0 20px;
          border-radius: var(--hd-radius-full);
          border: none;
          font-size: 14px;
          font-weight: 600;
          color: var(--hd-text-primary);
          cursor: pointer;
          transition: transform 0.15s ease, background 0.3s ease;
        }
        .hd-pill-btn:hover { transform: translateY(-1px); }
        .hd-pill-btn:active { transform: translateY(0); }

        /* ---------- Theme toggle (signature element) ---------- */
        .hd-theme-toggle {
          position: relative;
          width: 60px;
          height: 34px;
          border-radius: var(--hd-radius-full);
          border: 1px solid var(--hd-glass-border);
          padding: 0;
          cursor: pointer;
          background: linear-gradient(90deg, #6bb7ea, #3f8fd6);
          box-shadow: var(--hd-shadow);
          transition: background 0.5s ease;
        }
        .hd-theme-toggle.is-dark {
          background: linear-gradient(90deg, #1b2140, #2a2f5c);
        }
        .hd-theme-toggle-track {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 8px;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.85);
        }
        .hd-theme-toggle-knob {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
          transition: transform 0.35s cubic-bezier(0.65, 0, 0.35, 1),
            background 0.35s ease;
        }
        .hd-theme-toggle.is-dark .hd-theme-toggle-knob {
          transform: translateX(26px);
          background: #dfe3f5;
        }

        /* ---------- Meeting notice pill ---------- */
        .hd-meeting-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          height: 42px;
          padding: 0 10px 0 6px;
          border-radius: var(--hd-radius-full);
          flex: 1 1 260px;
          max-width: 340px;
          margin: 0 auto;
        }
        .hd-meeting-avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          object-fit: cover;
        }
        .hd-meeting-text {
          font-size: 13px;
          font-weight: 600;
          color: var(--hd-text-primary);
          white-space: nowrap;
        }
        .hd-meeting-timer {
          font-size: 13px;
          color: var(--hd-text-secondary);
          font-variant-numeric: tabular-nums;
        }
        .hd-meeting-close {
          margin-left: auto;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: none;
          background: rgba(120, 120, 120, 0.18);
          color: var(--hd-text-secondary);
          cursor: pointer;
          font-size: 12px;
          line-height: 1;
        }

        /* ---------- Segmented tab control ---------- */
        .hd-tabs {
          position: relative;
          display: flex;
          border-radius: var(--hd-radius-full);
          padding: 4px;
          gap: 2px;
        }
        .hd-tab-btn {
          position: relative;
          z-index: 1;
          border: none;
          background: transparent;
          padding: 8px 18px;
          border-radius: var(--hd-radius-full);
          font-size: 13px;
          font-weight: 600;
          color: var(--hd-text-secondary);
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .hd-tab-btn.is-active {
          color: var(--hd-text-primary);
          background: var(--hd-glass-bg-strong);
          box-shadow: var(--hd-shadow);
        }

        /* ---------- Room grid ---------- */
        .hd-grid {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
          padding: 28px;
        }
        @media (max-width: 980px) {
          .hd-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 560px) {
          .hd-grid { grid-template-columns: 1fr; padding: 18px; }
          .hd-header { padding: 18px 18px 0 18px; }
        }

        .hd-card {
          border-radius: var(--hd-radius-lg);
          padding: 18px;
          min-height: 190px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: var(--hd-glass-bg);
          -webkit-backdrop-filter: var(--hd-glass-blur);
          backdrop-filter: var(--hd-glass-blur);
          border: 1px solid var(--hd-glass-border);
          box-shadow: var(--hd-shadow);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .hd-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
        }

        .hd-card-create {
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-style: dashed;
          border-width: 2px;
          cursor: pointer;
          color: var(--hd-text-secondary);
        }
        .hd-create-plus {
          font-size: 30px;
          font-weight: 300;
          line-height: 1;
        }
        .hd-create-label { font-size: 13px; font-weight: 600; }

        .hd-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 8px;
        }
        .hd-card-title {
          margin: 0;
          font-size: 15px;
          font-weight: 700;
          color: var(--hd-text-primary);
          line-height: 1.25;
        }
        .hd-card-subtitle {
          margin: 4px 0 0 0;
          font-size: 12.5px;
          color: var(--hd-text-secondary);
        }
        .hd-live-icon {
          font-size: 14px;
          color: var(--hd-text-secondary);
        }

        .hd-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .hd-avatar-stack { display: flex; align-items: center; }
        .hd-avatar {
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--hd-glass-bg-strong);
          margin-left: -8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hd-avatar:first-child { margin-left: 0; }
        .hd-avatar-count {
          background: rgba(120, 120, 120, 0.35);
          color: var(--hd-text-primary);
          font-size: 11px;
          font-weight: 700;
          text-align: center;
        }

        .hd-count-chip {
          min-width: 26px;
          height: 26px;
          padding: 0 8px;
          border-radius: var(--hd-radius-full);
          background: rgba(120, 120, 120, 0.25);
          color: var(--hd-text-primary);
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ---------- Weekly Insights card ---------- */
        .hd-waveform {
          display: flex;
          align-items: flex-end;
          gap: 2.5px;
          height: 66px;
          margin: 10px 0;
        }
        .hd-waveform-bar {
          width: 4px;
          border-radius: 3px;
          background: rgba(150, 150, 150, 0.35);
        }
        .hd-waveform-bar.is-active { background: #4a90e2; }
        .hd-play-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: none;
          background: rgba(120, 120, 120, 0.25);
          color: var(--hd-text-primary);
          cursor: pointer;
          font-size: 13px;
        }

        /* ---------- Screen share card ---------- */
        .hd-screenshare-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .hd-pill {
          font-size: 11px;
          font-weight: 700;
          padding: 5px 10px;
          border-radius: var(--hd-radius-full);
        }
        .hd-pill-blue { background: rgba(74, 144, 226, 0.22); color: #4a90e2; }
        .hd-pill-timer {
          background: rgba(120, 120, 120, 0.25);
          color: var(--hd-text-primary);
          font-variant-numeric: tabular-nums;
        }
        .hd-screenshare-thumbs {
          display: flex;
          gap: 8px;
          margin: 10px 0;
          flex: 1;
        }
        .hd-thumb {
          flex: 1;
          height: 64px;
          object-fit: cover;
          border-radius: 12px;
        }

        /* ---------- Bottom dock ---------- */
        .hd-dock {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 20px;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 28px;
          pointer-events: none;
        }
        .hd-dock > * { pointer-events: auto; }
        .hd-dock-cluster {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 6px 10px;
          border-radius: var(--hd-radius-full);
        }
        .hd-dock-center {
          padding: 6px 14px;
        }
        .hd-camera-btn {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: none;
          background: var(--hd-glass-bg-strong);
          -webkit-backdrop-filter: var(--hd-glass-blur);
          backdrop-filter: var(--hd-glass-blur);
          border: 1px solid var(--hd-glass-border);
          box-shadow: var(--hd-shadow);
          color: var(--hd-text-primary);
          font-size: 18px;
          cursor: pointer;
        }
        @media (max-width: 560px) {
          .hd-dock { padding: 0 14px; }
        }
      `}</style>


      {/* header */}
      <header className="hd-header">
        <div className="hd-header-left">
          <img
            src="https://i.pravatar.cc/80?img=47"
            alt="Your profile"
            className="hd-header-avatar"
          />
          <ToggleSwitch checked={isDark} onToggle={() => setIsDark((d) => !d)} />
          <button type="button" className="hd-pill-btn hd-glass">
            Settings
          </button>
        </div>

        {meetingVisible && (
          <div className="hd-meeting-pill hd-glass">
            <img
              src="https://i.pravatar.cc/60?img=13"
              alt=""
              className="hd-meeting-avatar"
            />
            <span className="hd-meeting-text">Meeting is about to start</span>
            <span className="hd-meeting-timer">-5:23</span>
            <button
              type="button"
              className="hd-meeting-close"
              aria-label="Dismiss meeting notice"
              onClick={() => setMeetingVisible(false)}
            >
              ✕
            </button>
          </div>
        )}

        <div className="hd-header-right">
          <div className="hd-tabs hd-glass">
            <button
              type="button"
              className={`hd-tab-btn ${activeTab === "dashboard" ? "is-active" : ""}`}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </button>
            <button
              type="button"
              className={`hd-tab-btn ${activeTab === "rooms" ? "is-active" : ""}`}
              onClick={() => setActiveTab("rooms")}
            >
              Rooms
            </button>
          </div>
        </div>
      </header>

      {/* room grid */}
      <main className="hd-grid">
        {ROOMS.map((room) => (
          <RoomCard key={room.id} data={room} />
        ))}
      </main>

      {/* bottom dock */}
      <div className="hd-dock">
        <div className="hd-dock-cluster hd-glass">
          <AvatarStack
            people={[person("d1", 2), person("d2", 19)]}
            extraCount={2}
            size={30}
          />
        </div>

        <div className="hd-dock-cluster hd-dock-center hd-glass">
          <AvatarStack
            people={[
              person("d3", 6),
              person("d4", 11),
              person("d5", 22),
              person("d6", 34),
            ]}
            extraCount={17}
            size={30}
          />
        </div>

        <button type="button" className="hd-camera-btn" aria-label="Start camera">
          🎥
        </button>
      </div>
    </div>
  );
};

export default BlockPc;