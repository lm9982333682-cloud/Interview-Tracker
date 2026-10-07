import {
  Activity,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Code2,
  Flame,
  GitBranch,
  Laptop,
  Layers3,
  Play,
  Settings2,
  Terminal,
  TrendingUp,
  Trophy,
  Zap,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Practiced",
      value: "84",
      icon: Activity,
      extra: "+12 this week",
      extraIcon: TrendingUp,
    },
    {
      title: "DSA Solved",
      value: "42",
      icon: GitBranch,
      extra: "50% completed",
    },
    {
      title: "System & Beh.",
      value: "28",
      icon: BookOpen,
      extra: "Tech & Arch",
    },
    {
      title: "Machine Coding",
      value: "2 / 3",
      icon: Laptop,
      extra: "1 In Progress",
    },
  ];

  const categories = [
    {
      title: "Data Structures & Algorithms",
      icon: Code2,
      percentage: 70,
      solved: "42/60 solved",
      tags: ["Arrays", "Trees", "Graphs", "DP"],
    },
    {
      title: "Git & Version Control",
      icon: GitBranch,
      percentage: 93,
      solved: "14/15 solved",
      tags: ["Rebase", "Cherry-pick", "Conflicts"],
    },
    {
      title: "Technical & JS Internals",
      icon: Settings2,
      percentage: 75,
      solved: "15/20 solved",
      tags: ["JS Internals", "Web APIs", "Lifecycle"],
    },
    {
      title: "Machine Coding Projects",
      icon: Terminal,
      percentage: 33,
      solved: "1/3 built",
      tags: ["Tracker App", "Kanban UI"],
    },
  ];

  const recentActivity = [
    {
      title: "LRU Cache Implementation",
      difficulty: "Hard",
      time: "2 hours ago",
      detail: "12ms · O(1)",
      icon: CheckCircle2,
      type: "hard",
    },
    {
      title: "Custom Debounce & Throttle",
      difficulty: "Medium",
      time: "5 hours ago",
      detail: "JS Closure",
      icon: CheckCircle2,
      type: "medium",
    },
    {
      title: "Invert Binary Tree",
      difficulty: "Easy",
      time: "Yesterday",
      detail: "DFS Recursion",
      icon: CheckCircle2,
      type: "easy",
    },
  ];

  return (
    <div className="space-y-6">

      {/* =====================================================
          WELCOME SECTION
      ====================================================== */}
      <section className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Welcome back, Alex 👋
          </h1>

          <p className="mt-1 font-mono text-xs text-[var(--primary)] sm:text-sm">
            Target: Full-Stack SWE @ Series B+ ·
          </p>

          <p className="font-mono text-xs text-[var(--primary)] sm:text-sm">
            Week 4 of 8
          </p>
        </div>

        <div
          className="
            flex w-fit items-center gap-2
            rounded-full
            bg-[var(--surface)]
            px-4 py-2
          "
        >
          <span className="h-2 w-2 rounded-full bg-[var(--success)]" />

          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
              Sprint
            </p>

            <p className="font-mono text-xs font-semibold text-[var(--success)]">
              Active
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          STREAK CARD
      ====================================================== */}
      <section
        className="
          rounded-2xl
          border border-[var(--border)]
          bg-[var(--surface)]
          p-4
          sm:p-5
        "
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

          <div className="flex min-w-0 flex-1 items-center gap-3">

            <div
              className="
                flex h-10 w-10 shrink-0 items-center justify-center
                rounded-lg
                bg-[var(--surface-hover)]
                text-[var(--secondary)]
              "
            >
              <Flame size={21} />
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-base font-semibold">
                  6-Day Streak!
                </h2>

                <span
                  className="
                    rounded px-2 py-1
                    bg-[var(--success)]/20
                    font-mono text-[10px]
                    text-[var(--success)]
                  "
                >
                  High Velocity
                </span>
              </div>

              <p className="text-xs text-[var(--text-muted)]">
                Top 5% consistency this cohort
              </p>
            </div>
          </div>

          <div className="sm:text-right">
            <p className="text-sm font-semibold">
              18<span className="text-xs text-[var(--text-muted)]">/25</span>
            </p>

            <p className="font-mono text-[10px] text-[var(--secondary)]">
              Target Met
            </p>
          </div>
        </div>

        {/* Days */}
        <div className="mt-5 grid grid-cols-7 gap-2">

          {[
            ["M", true],
            ["T", true],
            ["W", true],
            ["T", true],
            ["F", true],
            ["S", true],
            ["S", false],
          ].map(([day, active], index) => (
            <div key={index} className="space-y-2">

              <p className="text-center font-mono text-[9px] text-[var(--text-muted)]">
                {day}
              </p>

              <div
                className={`
                  h-2 rounded-full
                  ${
                    active
                      ? index === 5
                        ? "bg-[var(--secondary)]"
                        : "bg-[var(--success)]"
                      : "bg-[var(--surface-hover)]"
                  }
                `}
              />
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}
      <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">

        {stats.map((stat) => {
          const Icon = stat.icon;
          const ExtraIcon = stat.extraIcon;

          return (
            <div
              key={stat.title}
              className="
                rounded-xl
                border border-[var(--border)]
                bg-[var(--surface)]
                p-4
              "
            >
              <div className="flex items-center justify-between">

                <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                  {stat.title}
                </p>

                <div
                  className="
                    flex h-8 w-8 items-center justify-center
                    rounded-lg
                    bg-[var(--surface-hover)]
                    text-[var(--secondary)]
                  "
                >
                  <Icon size={16} />
                </div>
              </div>

              <p className="mt-3 text-2xl font-bold">
                {stat.value}
              </p>

              <p className="mt-1 flex items-center gap-1 font-mono text-[10px] text-[var(--text-muted)]">
                {ExtraIcon && (
                  <ExtraIcon
                    size={11}
                    className="text-[var(--success)]"
                  />
                )}

                <span
                  className={
                    stat.extra.includes("+")
                      ? "text-[var(--success)]"
                      : ""
                  }
                >
                  {stat.extra}
                </span>
              </p>
            </div>
          );
        })}
      </section>

      {/* =====================================================
          OVERALL PREP
      ====================================================== */}
      <section
        className="
          rounded-2xl
          border border-[var(--border)]
          bg-[var(--surface)]
          p-5
          sm:p-6
        "
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

          <div>
            <h2 className="text-xl font-bold">
              Overall Prep
            </h2>

            <p className="text-xs text-[var(--text-muted)]">
              Combined readiness benchmark
            </p>
          </div>

          <span
            className="
              flex w-fit items-center gap-1.5
              rounded-full
              bg-[var(--success)]/15
              px-3 py-1
              font-mono text-[10px]
              text-[var(--success)]
            "
          >
            <Zap size={12} />
            On Track
          </span>
        </div>

        <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row">

          {/* Circular progress */}
          <div
            className="
              relative flex h-32 w-32 shrink-0
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
                flex flex-col items-center justify-center
                rounded-full
                bg-[var(--surface)]
              "
            >
              <span className="text-2xl font-bold">
                68%
              </span>

              <span className="font-mono text-[9px] text-[var(--text-muted)]">
                READY
              </span>
            </div>
          </div>

          {/* Volume */}
          <div className="flex-1 space-y-4">

            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                Completed Volume
              </p>

              <p className="text-sm font-semibold">
                57
                <span className="text-[var(--text-muted)]">
                  {" "}
                  / 84 Problems
                </span>
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                Remaining to Target
              </p>

              <p className="text-sm font-semibold text-[var(--secondary)]">
                27 Problems
              </p>

              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[var(--surface-hover)]">
                <div
                  className="h-full rounded-full bg-[var(--primary)]"
                  style={{ width: "68%" }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          TRACK CATEGORIES
      ====================================================== */}
      <section>

        <div className="mb-3 flex items-center justify-between px-1">
          <h2 className="text-base font-semibold">
            Track Categories
          </h2>

          <button
            type="button"
            className="
              font-mono text-[10px]
              text-[var(--primary)]
              transition
              hover:text-[var(--secondary)]
            "
          >
            All Modules
          </button>
        </div>

        <div className="space-y-3">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="
                  rounded-xl
                  border border-[var(--border)]
                  bg-[var(--surface)]
                  p-4
                "
              >
                <div className="flex items-center justify-between gap-3">

                  <div className="flex min-w-0 items-center gap-2">

                    <Icon
                      size={17}
                      className="shrink-0 text-[var(--secondary)]"
                    />

                    <h3 className="truncate text-sm font-medium">
                      {category.title}
                    </h3>
                  </div>

                  <span className="shrink-0 font-mono text-[10px] font-semibold text-[var(--success)]">
                    {category.percentage}%
                  </span>
                </div>

                {/* Progress */}
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[var(--surface-hover)]">
                  <div
                    className="h-full rounded-full bg-[var(--secondary)]"
                    style={{
                      width: `${category.percentage}%`,
                    }}
                  />
                </div>

                <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                  <div className="flex flex-wrap gap-1.5">
                    {category.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded
                          bg-[var(--surface-hover)]
                          px-2 py-1
                          font-mono text-[9px]
                          text-[var(--text-muted)]
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="font-mono text-[10px] text-[var(--text-muted)]">
                    {category.solved}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          RECENT ACTIVITY
      ====================================================== */}
      <section>

        <div className="mb-3 flex items-center justify-between px-1">

          <h2 className="text-base font-semibold">
            Recent Activity
          </h2>

          <button
            type="button"
            className="
              flex items-center gap-1
              font-mono text-[10px]
              text-[var(--primary)]
            "
          >
            Full Log
            <ChevronRight size={13} />
          </button>
        </div>

        <div className="space-y-2">

          {recentActivity.map((activity) => {
            const Icon = activity.icon;

            const typeClasses = {
              hard: "bg-red-500/15 text-red-400",
              medium: "bg-[var(--secondary)]/15 text-[var(--secondary)]",
              easy: "bg-[var(--success)]/15 text-[var(--success)]",
            };

            return (
              <div
                key={activity.title}
                className="
                  flex items-center gap-3
                  rounded-xl
                  border border-[var(--border)]
                  bg-[var(--surface)]
                  p-3
                "
              >
                <div
                  className={`
                    flex h-9 w-9 shrink-0 items-center justify-center
                    rounded-lg
                    ${typeClasses[activity.type]}
                  `}
                >
                  <Icon size={17} />
                </div>

                <div className="min-w-0 flex-1">

                  <p className="truncate text-sm font-medium">
                    {activity.title}
                  </p>

                  <div className="mt-1 flex items-center gap-2">

                    <span
                      className={`
                        rounded-full
                        px-2 py-0.5
                        font-mono text-[9px]
                        ${typeClasses[activity.type]}
                      `}
                    >
                      {activity.difficulty}
                    </span>

                    <span className="font-mono text-[9px] text-[var(--text-muted)]">
                      {activity.time}
                    </span>
                  </div>
                </div>

                <span className="hidden shrink-0 font-mono text-[10px] text-[var(--text-muted)] sm:block">
                  {activity.detail}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          CONTINUE BUTTON
      ====================================================== */}
      <button
        type="button"
        className="
          flex w-full items-center justify-center gap-2
          rounded-xl
          bg-[var(--primary)]
          px-5 py-4
          text-sm font-medium
          text-[var(--bg)]
          shadow-lg
          transition
          hover:opacity-90
          active:scale-[0.99]
        "
      >
        <Play size={17} fill="currentColor" />
        Continue Daily Coding Session
      </button>

    </div>
  );
};

export default Dashboard;