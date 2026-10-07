import {
  Activity,
  BarChart3,
  BookOpen,
  Brain,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Code2,
  Gauge,
  GitBranch,
  Layers3,
  Lightbulb,
  Play,
  Target,
  Terminal,
  TrendingUp,
  Zap,
} from "lucide-react";

const ProgressAnalytics = () => {
  const weeklyRhythm = [
    { day: "M", value: 3 },
    { day: "T", value: 1 },
    { day: "W", value: 5 },
    { day: "T", value: 2 },
    { day: "F", value: 6 },
    { day: "S", value: 4 },
    { day: "S", value: 0 },
  ];

  const domains = [
    {
      title: "Data Structures & Algorithms",
      subtitle: "Arrays, Trees, Graphs, Dynamic Prog",
      percentage: 70,
      solved: "42/60 Solved",
      icon: Layers3,
      color: "primary",
      easy: "18 / 18",
      medium: "20 / 30",
      hard: "4 / 12",
      easyPercent: "100%",
      mediumPercent: "66%",
      hardPercent: "33%",
    },
    {
      title: "Git & GitHub Workflows",
      subtitle: "Version control & release hygiene",
      percentage: 93,
      solved: "14/15 Solved",
      icon: GitBranch,
      color: "success",
      tags: ["Merging & Rebasing", "Hooks", "Submodules"],
    },
    {
      title: "Technical Interview Concepts",
      subtitle: "Architecture, protocols & scaling",
      percentage: 75,
      solved: "15/20 Solved",
      icon: Brain,
      color: "secondary",
      tags: ["System Design Fundamentals", "Web Security", "Performance"],
    },
    {
      title: "Machine Coding Challenges",
      subtitle: "Time-boxed implementation tasks",
      percentage: 33,
      solved: "1/3 Projects",
      icon: Terminal,
      color: "primary",
      tags: ["1 Done", "1 Building", "1 Queued"],
    },
  ];

  return (
    <div className="space-y-5">

      {/* =====================================================
          HEADER
      ====================================================== */}
      <section className="flex items-start justify-between gap-3">

        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--primary)]">
            Performance Radar
          </p>

          <h1 className="mt-1 text-xl font-bold tracking-tight sm:text-2xl">
            Progress & Mastery Analytics
          </h1>
        </div>

        <button
          type="button"
          className="
            flex h-10 w-10 shrink-0
            items-center justify-center
            rounded-xl
            bg-[var(--surface)]
            text-[var(--text-muted)]
            transition
            hover:bg-[var(--surface-hover)]
            hover:text-[var(--text)]
          "
        >
          <BarChart3 size={18} />
        </button>
      </section>

      {/* =====================================================
          TIME FILTER
      ====================================================== */}
      <div className="grid grid-cols-3 gap-1 rounded-lg bg-[var(--surface)] p-1">

        {["All Time", "This Month", "This Week"].map(
          (item, index) => (
            <button
              key={item}
              type="button"
              className={`
                rounded-md px-3 py-2
                font-mono text-[10px]
                transition

                ${
                  index === 0
                    ? "bg-[var(--surface-hover)] text-[var(--text)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }
              `}
            >
              {item}
            </button>
          )
        )}
      </div>

      {/* =====================================================
          FOCUS RECOMMENDATION
      ====================================================== */}
      <section
        className="
          rounded-xl
          border border-[var(--border)]
          bg-[var(--surface)]
          p-3
        "
      >
        <div className="flex gap-3">

          <div
            className="
              flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-lg
              bg-[var(--surface-hover)]
              text-[var(--secondary)]
            "
          >
            <Lightbulb size={18} />
          </div>

          <div className="min-w-0 flex-1">

            <div className="flex flex-wrap items-center gap-2">

              <span
                className="
                  rounded
                  bg-[var(--secondary)]/15
                  px-2 py-1
                  font-mono text-[9px]
                  font-semibold
                  text-[var(--secondary)]
                "
              >
                FOCUS RECOMMENDED
              </span>

              <span className="font-mono text-[9px] text-[var(--text-muted)]">
                Next Gap
              </span>
            </div>

            <h2 className="mt-1 text-sm font-semibold">
              Hard Graph & System Design Scaling
            </h2>

            <p className="mt-1 text-[10px] leading-relaxed text-[var(--text-muted)]">
              Target 3 problems this week to balance weak
              algorithmic edge cases.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          MASTERY GAUGE
      ====================================================== */}
      <section
        className="
          rounded-xl
          border border-[var(--border)]
          bg-[var(--surface)]
          p-4
        "
      >
        <div className="flex items-center justify-between">

          <p className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-muted)]">
            Mastery Gauge
          </p>

          <span
            className="
              rounded-full
              bg-[var(--success)]/15
              px-2.5 py-1
              font-mono text-[9px]
              text-[var(--success)]
            "
          >
            Target: 80% L6
          </span>
        </div>

        <div className="mt-4 flex items-center gap-4">

          {/* Circular progress */}
          <div
            className="
              relative flex h-28 w-28 shrink-0
              items-center justify-center
              rounded-full
            "
            style={{
              background:
                "conic-gradient(var(--primary) 68%, var(--surface-hover) 68%)",
            }}
          >
            <div
              className="
                absolute inset-[9px]
                flex flex-col
                items-center justify-center
                rounded-full
                bg-[var(--surface)]
              "
            >
              <span className="text-xl font-bold">
                68%
              </span>

              <span className="font-mono text-[8px] text-[var(--text-muted)]">
                Solved
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="min-w-0 flex-1">

            <div className="flex items-end gap-1">
              <span className="text-2xl font-bold">
                57
              </span>

              <span className="mb-1 font-mono text-[10px] text-[var(--text-muted)]">
                / 84 total
              </span>
            </div>

            <p className="mt-0.5 text-[9px] text-[var(--text-muted)]">
              Pacing ahead of 84% of senior candidate benchmarks.
            </p>

            <p className="mt-2 flex items-center gap-1 font-mono text-[9px] text-[var(--success)]">
              <TrendingUp size={11} />
              Interview ready trajectory
            </p>
          </div>
        </div>

        {/* Gauge stats */}
        <div className="mt-5 grid grid-cols-3 border-t border-[var(--border)] pt-4">

          <Metric
            icon={Activity}
            label="Avg Time"
            value="24m"
            extra="-3m vs avg"
          />

          <Metric
            icon={Target}
            label="Retention"
            value="92%"
            extra="SRC cycle 3"
          />

          <Metric
            icon={Zap}
            label="Velocity"
            value="+14"
            extra="This week"
          />

        </div>
      </section>

      {/* =====================================================
          WEEKLY RHYTHM
      ====================================================== */}
      <section
        className="
          rounded-xl
          border border-[var(--border)]
          bg-[var(--surface)]
          p-4
        "
      >
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">
            <CalendarDays
              size={16}
              className="text-[var(--text-muted)]"
            />

            <h2 className="text-sm font-semibold">
              Weekly Rhythm
            </h2>
          </div>

          <span className="font-mono text-[9px] text-[var(--text-muted)]">
            Mon - Sun
          </span>
        </div>

        <div className="mt-4 grid grid-cols-7 gap-2">

          {weeklyRhythm.map((item, index) => {
            const max = 6;
            const height = Math.max(
              10,
              (item.value / max) * 100
            );

            return (
              <div
                key={`${item.day}-${index}`}
                className="flex flex-col items-center gap-2"
              >
                <div className="flex h-20 items-end">

                  <div
                    className={`
                      flex w-7
                      items-center justify-center
                      rounded-md
                      font-mono text-[8px]
                      ${
                        index === 4
                          ? "bg-[var(--primary)] text-[var(--bg)]"
                          : "bg-[var(--surface-hover)] text-[var(--text-muted)]"
                      }
                    `}
                    style={{
                      height: `${height}%`,
                    }}
                  >
                    {item.value}
                  </div>
                </div>

                <span className="font-mono text-[9px] text-[var(--text-muted)]">
                  {item.day}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-3 flex justify-end gap-3 font-mono text-[8px] text-[var(--text-muted)]">
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
            Unbroken streak
          </span>

          <span>Less</span>

          <span>More</span>
        </div>
      </section>

      {/* =====================================================
          DOMAIN BREAKDOWN HEADER
      ====================================================== */}
      <section>

        <div className="mb-3 flex items-center justify-between">

          <h2 className="text-base font-semibold">
            Domain Breakdown
          </h2>

          <span className="font-mono text-[9px] text-[var(--text-muted)]">
            4 Tracks Active
          </span>
        </div>

        <div className="space-y-3">

          {domains.map((domain) => (
            <DomainCard
              key={domain.title}
              domain={domain}
            />
          ))}

        </div>
      </section>

      {/* =====================================================
          NEXT IN QUEUE
      ====================================================== */}
      <section
        className="
          flex items-center gap-3
          rounded-xl
          border border-[var(--border)]
          bg-[var(--surface)]
          p-3
        "
      >
        <div
          className="
            flex h-9 w-9 shrink-0
            items-center justify-center
            rounded-lg
            bg-[var(--primary)]
            text-[var(--bg)]
          "
        >
          <Play size={17} fill="currentColor" />
        </div>

        <div className="min-w-0 flex-1">

          <p className="font-mono text-[8px] uppercase tracking-wider text-[var(--text-muted)]">
            Next in Queue
          </p>

          <h3 className="truncate text-sm font-semibold">
            Alien Dictionary (Topological Sort)
          </h3>
        </div>

        <button
          type="button"
          className="
            shrink-0
            rounded-lg
            bg-[var(--primary)]
            px-3 py-2
            font-mono text-[9px]
            font-semibold
            text-[var(--bg)]
            transition
            hover:opacity-90
          "
        >
          Solve
        </button>
      </section>

    </div>
  );
};


/* =========================================================
   METRIC
========================================================= */

const Metric = ({
  icon: Icon,
  label,
  value,
  extra,
}) => {
  return (
    <div className="text-center">

      <div className="flex items-center justify-center gap-1">
        <Icon
          size={10}
          className="text-[var(--secondary)]"
        />

        <p className="font-mono text-[8px] text-[var(--text-muted)]">
          {label}
        </p>
      </div>

      <p className="mt-1 text-sm font-bold">
        {value}
      </p>

      <p className="font-mono text-[7px] text-[var(--success)]">
        {extra}
      </p>
    </div>
  );
};


/* =========================================================
   DOMAIN CARD
========================================================= */

const DomainCard = ({ domain }) => {
  const Icon = domain.icon;

  const progressColor = {
    primary: "bg-[var(--primary)]",
    success: "bg-[var(--success)]",
    secondary: "bg-[var(--secondary)]",
  };

  const iconColor = {
    primary: "text-[var(--primary)] bg-[var(--primary)]/15",
    success: "text-[var(--success)] bg-[var(--success)]/15",
    secondary: "text-[var(--secondary)] bg-[var(--secondary)]/15",
  };

  return (
    <div
      className="
        rounded-xl
        border border-[var(--border)]
        bg-[var(--surface)]
        p-4
      "
    >
      {/* Header */}
      <div className="flex items-start gap-3">

        <div
          className={`
            flex h-9 w-9 shrink-0
            items-center justify-center
            rounded-lg
            ${iconColor[domain.color]}
          `}
        >
          <Icon size={17} />
        </div>

        <div className="min-w-0 flex-1">

          <div className="flex items-start justify-between gap-3">

            <div>
              <h3 className="text-sm font-semibold">
                {domain.title}
              </h3>

              <p className="mt-0.5 text-[9px] text-[var(--text-muted)]">
                {domain.subtitle}
              </p>
            </div>

            <div className="shrink-0 text-right">

              <p className="text-lg font-bold">
                {domain.percentage}%
              </p>

              <p className="font-mono text-[8px] text-[var(--text-muted)]">
                {domain.solved}
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[var(--surface-hover)]">
        <div
          className={`h-full rounded-full ${progressColor[domain.color]}`}
          style={{
            width: `${domain.percentage}%`,
          }}
        />
      </div>

      {/* DSA stats */}
      {domain.easy && (
        <div className="mt-3 grid grid-cols-3 gap-2">

          <SmallProgress
            label="Easy"
            value={domain.easy}
            percentage={domain.easyPercent}
            color="text-[var(--success)]"
          />

          <SmallProgress
            label="Medium"
            value={domain.medium}
            percentage={domain.mediumPercent}
            color="text-[var(--secondary)]"
          />

          <SmallProgress
            label="Hard"
            value={domain.hard}
            percentage={domain.hardPercent}
            color="text-red-300"
          />

        </div>
      )}

      {/* Tags */}
      {domain.tags && (
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2">

          {domain.tags.map((tag) => (
            <span
              key={tag}
              className="
                flex items-center gap-1
                font-mono text-[8px]
                text-[var(--text-muted)]
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
              {tag}
            </span>
          ))}

        </div>
      )}
    </div>
  );
};


/* =========================================================
   SMALL PROGRESS
========================================================= */

const SmallProgress = ({
  label,
  value,
  percentage,
  color,
}) => {
  return (
    <div
      className="
        rounded-lg
        bg-[var(--bg)]
        p-2
      "
    >
      <div className="flex items-center justify-between">

        <span className={`font-mono text-[8px] ${color}`}>
          {label}
        </span>

        <span className={`font-mono text-[8px] ${color}`}>
          {percentage}
        </span>
      </div>

      <p className="mt-1 font-mono text-[8px] text-[var(--text-muted)]">
        {value}
      </p>
    </div>
  );
};

export default ProgressAnalytics;