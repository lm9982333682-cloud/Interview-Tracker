import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Code2,
  ExternalLink,
  Filter,
  FolderCode,
  GitBranch,
  MoreVertical,
  Play,
  Plus,
  Search,
  Terminal,
  Timer,
  Trophy,
  Users,
  X,
} from "lucide-react";

const MachineCoding = () => {
  const projects = [
    {
      title: "Interview Practice Tracker",
      description:
        "Build a complete interview preparation dashboard with question tracking and analytics.",
      status: "In Progress",
      progress: 68,
      difficulty: "Hard",
      duration: "3h 00m",
      date: "Oct 26, 2024",
      category: "Frontend + State",
      tags: ["React", "Tailwind", "Charts"],
      color: "primary",
    },
    {
      title: "Kanban Task Manager",
      description:
        "Create a drag-and-drop task management application with filtering and persistent state.",
      status: "Completed",
      progress: 100,
      difficulty: "Medium",
      duration: "2h 30m",
      date: "Oct 21, 2024",
      category: "Frontend",
      tags: ["React", "DnD", "LocalStorage"],
      color: "success",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Build a real-time chat interface with rooms, online users and message history.",
      status: "Queued",
      progress: 0,
      difficulty: "Hard",
      duration: "3h 00m",
      date: "Oct 28, 2024",
      category: "Full Stack",
      tags: ["Node", "Socket.io", "MongoDB"],
      color: "secondary",
    },
  ];

  const stats = [
    {
      label: "Projects",
      value: "3",
      icon: FolderCode,
    },
    {
      label: "Completed",
      value: "1",
      icon: CheckCircle2,
    },
    {
      label: "Avg. Time",
      value: "2h 42m",
      icon: Clock3,
    },
    {
      label: "Success Rate",
      value: "92%",
      icon: Trophy,
    },
  ];

  return (
    <div className="space-y-6">

      {/* =====================================================
          HEADER
      ====================================================== */}
      <section className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

        <div>
          <div className="flex items-center gap-2">
            <Terminal
              size={17}
              className="text-[var(--primary)]"
            />

            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--primary)]">
              Machine Coding Lab
            </p>
          </div>

          <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Machine Coding
          </h1>

          <p className="mt-1 max-w-xl text-sm text-[var(--text-muted)]">
            Practice building production-ready interfaces under
            real interview time constraints.
          </p>
        </div>

        <button
          type="button"
          className="
            flex w-fit items-center gap-2
            rounded-xl
            bg-[var(--primary)]
            px-4 py-3
            text-sm font-semibold
            text-[var(--bg)]
            transition
            hover:opacity-90
            active:scale-95
          "
        >
          <Plus size={18} />
          New Challenge
        </button>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}
      <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="
                rounded-xl
                border border-[var(--border)]
                bg-[var(--surface)]
                p-4
              "
            >
              <div className="flex items-center justify-between">

                <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                  {stat.label}
                </p>

                <Icon
                  size={17}
                  className="text-[var(--secondary)]"
                />
              </div>

              <p className="mt-3 text-xl font-bold sm:text-2xl">
                {stat.value}
              </p>
            </div>
          );
        })}
      </section>

      {/* =====================================================
          ACTIVE CHALLENGE
      ====================================================== */}
      <section
        className="
          overflow-hidden
          rounded-2xl
          border border-[var(--border)]
          bg-[var(--surface)]
        "
      >
        <div className="border-b border-[var(--border)] p-4 sm:p-5">

          <div className="flex items-center justify-between gap-3">

            <div className="flex items-center gap-2">

              <span
                className="
                  flex h-8 w-8
                  items-center justify-center
                  rounded-lg
                  bg-[var(--primary)]/15
                  text-[var(--primary)]
                "
              >
                <Play size={15} fill="currentColor" />
              </span>

              <div>
                <p className="font-mono text-[9px] uppercase tracking-wider text-[var(--primary)]">
                  Active Challenge
                </p>

                <h2 className="text-sm font-semibold">
                  Interview Practice Tracker
                </h2>
              </div>
            </div>

            <span
              className="
                rounded-full
                bg-[var(--secondary)]/15
                px-2.5 py-1
                font-mono text-[9px]
                text-[var(--secondary)]
              "
            >
              01:42:18
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5">

          <div className="flex flex-col gap-5 lg:flex-row">

            <div className="min-w-0 flex-1">

              <div className="flex flex-wrap gap-2">
                <span
                  className="
                    rounded
                    bg-[var(--primary)]/15
                    px-2.5 py-1
                    font-mono text-[9px]
                    text-[var(--primary)]
                  "
                >
                  React
                </span>

                <span
                  className="
                    rounded
                    bg-[var(--surface-hover)]
                    px-2.5 py-1
                    font-mono text-[9px]
                    text-[var(--text-muted)]
                  "
                >
                  Tailwind
                </span>

                <span
                  className="
                    rounded
                    bg-red-400/15
                    px-2.5 py-1
                    font-mono text-[9px]
                    text-red-300
                  "
                >
                  Hard
                </span>
              </div>

              <h3 className="mt-3 text-xl font-bold">
                Build an Interview Practice Tracker
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
                Create a responsive dashboard where candidates can
                track DSA questions, Git tasks, technical concepts
                and machine coding challenges.
              </p>

              {/* Progress */}
              <div className="mt-5">

                <div className="mb-2 flex items-center justify-between">

                  <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-muted)]">
                    Implementation Progress
                  </span>

                  <span className="font-mono text-xs font-semibold text-[var(--primary)]">
                    68%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-[var(--surface-hover)]">
                  <div
                    className="h-full rounded-full bg-[var(--primary)]"
                    style={{ width: "68%" }}
                  />
                </div>
              </div>

              {/* Metadata */}
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">

                <span className="flex items-center gap-1.5 font-mono text-[9px] text-[var(--text-muted)]">
                  <Timer size={12} />
                  3 hour limit
                </span>

                <span className="flex items-center gap-1.5 font-mono text-[9px] text-[var(--text-muted)]">
                  <GitBranch size={12} />
                  4 commits
                </span>

                <span className="flex items-center gap-1.5 font-mono text-[9px] text-[var(--text-muted)]">
                  <Users size={12} />
                  Solo
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex shrink-0 flex-row gap-2 lg:flex-col">

              <button
                type="button"
                className="
                  flex flex-1 items-center justify-center gap-2
                  rounded-xl
                  bg-[var(--primary)]
                  px-4 py-3
                  text-xs font-semibold
                  text-[var(--bg)]
                  transition
                  hover:opacity-90
                  lg:flex-none
                "
              >
                <Play size={15} fill="currentColor" />
                Continue
              </button>

              <button
                type="button"
                className="
                  flex flex-1 items-center justify-center gap-2
                  rounded-xl
                  border border-[var(--border)]
                  bg-[var(--bg)]
                  px-4 py-3
                  text-xs font-medium
                  text-[var(--text)]
                  transition
                  hover:bg-[var(--surface-hover)]
                  lg:flex-none
                "
              >
                <ExternalLink size={14} />
                Open Project
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEARCH + FILTER
      ====================================================== */}
      <section className="flex flex-col gap-3 sm:flex-row">

        <div
          className="
            flex flex-1 items-center gap-3
            rounded-xl
            border border-[var(--border)]
            bg-[var(--surface)]
            px-4 py-3
          "
        >
          <Search
            size={18}
            className="text-[var(--text-muted)]"
          />

          <input
            type="text"
            placeholder="Search coding challenges..."
            className="
              min-w-0 flex-1
              bg-transparent
              text-sm
              outline-none
              placeholder:text-[var(--text-muted)]
            "
          />

          <kbd
            className="
              hidden sm:flex
              h-6 min-w-6
              items-center justify-center
              rounded
              bg-[var(--bg)]
              px-1.5
              font-mono text-[9px]
              text-[var(--text-muted)]
            "
          >
            /
          </kbd>
        </div>

        <button
          type="button"
          className="
            flex items-center justify-center gap-2
            rounded-xl
            border border-[var(--border)]
            bg-[var(--surface)]
            px-4 py-3
            font-mono text-xs
            text-[var(--text-muted)]
            transition
            hover:bg-[var(--surface-hover)]
            hover:text-[var(--text)]
          "
        >
          <Filter size={15} />
          Filter
        </button>
      </section>

      {/* =====================================================
          CHALLENGES
      ====================================================== */}
      <section>

        <div className="mb-3 flex items-center justify-between">

          <div>
            <h2 className="text-base font-semibold">
              Coding Challenges
            </h2>

            <p className="font-mono text-[9px] text-[var(--text-muted)]">
              3 challenges in your queue
            </p>
          </div>

          <button
            type="button"
            className="
              font-mono text-[10px]
              text-[var(--primary)]
            "
          >
            View All
          </button>
        </div>

        <div className="space-y-3">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}

        </div>
      </section>

      {/* =====================================================
          INTERVIEW TIPS
      ====================================================== */}
      <section
        className="
          rounded-xl
          border border-[var(--border)]
          bg-[var(--surface)]
          p-4
        "
      >
        <div className="flex gap-3">

          <div
            className="
              flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-lg
              bg-[var(--secondary)]/15
              text-[var(--secondary)]
            "
          >
            <Code2 size={17} />
          </div>

          <div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-[var(--secondary)]">
              Interview Mode
            </p>

            <h3 className="mt-1 text-sm font-semibold">
              Practice like the real interview
            </h3>

            <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">
              Start the timer before coding. Avoid looking at
              solutions and explain your approach before
              implementation.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};


/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({ project }) => {
  const statusClasses = {
    "In Progress":
      "bg-[var(--secondary)]/15 text-[var(--secondary)]",

    Completed:
      "bg-[var(--success)]/15 text-[var(--success)]",

    Queued:
      "bg-[var(--surface-hover)] text-[var(--text-muted)]",
  };

  const progressColor = {
    primary: "bg-[var(--primary)]",
    success: "bg-[var(--success)]",
    secondary: "bg-[var(--secondary)]",
  };

  return (
    <article
      className="
        rounded-xl
        border border-[var(--border)]
        bg-[var(--surface)]
        p-4
        sm:p-5
      "
    >
      {/* Top */}
      <div className="flex items-start justify-between gap-3">

        <div className="flex min-w-0 items-start gap-3">

          <div
            className="
              flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-lg
              bg-[var(--surface-hover)]
              text-[var(--primary)]
            "
          >
            <FolderCode size={19} />
          </div>

          <div className="min-w-0">

            <div className="flex flex-wrap items-center gap-2">

              <h3 className="text-sm font-semibold">
                {project.title}
              </h3>

              <span
                className={`
                  rounded-full
                  px-2 py-0.5
                  font-mono text-[8px]
                  ${statusClasses[project.status]}
                `}
              >
                {project.status}
              </span>
            </div>

            <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">
              {project.description}
            </p>
          </div>
        </div>

        <button
          type="button"
          className="
            flex h-8 w-8 shrink-0
            items-center justify-center
            rounded-lg
            text-[var(--text-muted)]
            hover:bg-[var(--surface-hover)]
          "
        >
          <MoreVertical size={17} />
        </button>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-1.5">

        <span
          className="
            rounded
            bg-[var(--bg)]
            px-2 py-1
            font-mono text-[8px]
            text-[var(--text-muted)]
          "
        >
          {project.category}
        </span>

        {project.tags.map((tag) => (
          <span
            key={tag}
            className="
              rounded
              bg-[var(--bg)]
              px-2 py-1
              font-mono text-[8px]
              text-[var(--text-muted)]
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Progress */}
      <div className="mt-4">

        <div className="mb-1.5 flex items-center justify-between">

          <span className="font-mono text-[9px] text-[var(--text-muted)]">
            Progress
          </span>

          <span className="font-mono text-[9px] font-semibold">
            {project.progress}%
          </span>
        </div>

        <div className="h-1.5 overflow-hidden rounded-full bg-[var(--surface-hover)]">
          <div
            className={`h-full rounded-full ${progressColor[project.color]}`}
            style={{
              width: `${project.progress}%`,
            }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 flex flex-col gap-3 border-t border-[var(--border)] pt-3 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex flex-wrap items-center gap-4">

          <span className="flex items-center gap-1.5 font-mono text-[9px] text-[var(--text-muted)]">
            <Clock3 size={12} />
            {project.duration}
          </span>

          <span className="flex items-center gap-1.5 font-mono text-[9px] text-[var(--text-muted)]">
            <CalendarDays size={12} />
            {project.date}
          </span>
        </div>

        <button
          type="button"
          className="
            flex items-center gap-1
            font-mono text-[9px]
            text-[var(--primary)]
            transition
            hover:text-[var(--secondary)]
          "
        >
          {project.status === "Completed"
            ? "Review Project"
            : project.status === "Queued"
            ? "Start Challenge"
            : "Continue Coding"}

          <ArrowUpRight size={12} />
        </button>
      </div>
    </article>
  );
};

export default MachineCoding;