import {
  Activity,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Code2,
  Flame,
  GitBranch,
  Laptop,
  Settings2,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

const fallbackQuestions = [
  {
    id: 1,
    category: "DSA",
    difficulty: "Medium",
    status: "Completed",
    title: "LRU Cache Implementation",
    description:
      "Design data structure with O(1) get and put using doubly linked list and hash map.",
    date: "Oct 24, 2024",
  },
  {
    id: 2,
    category: "Git",
    difficulty: "Easy",
    status: "Completed",
    title: "Interactive Git Rebase & Squashing",
    description:
      "Cleaning commit history via rebase and squashing commits.",
    date: "Oct 23, 2024",
  },
  {
    id: 3,
    category: "Technical",
    difficulty: "Hard",
    status: "In Progress",
    title: "React Virtual DOM vs Fiber Architecture",
    description:
      "Deep dive into React rendering and reconciliation.",
    date: "Oct 22, 2024",
  },
  {
    id: 4,
    category: "DSA",
    difficulty: "Medium",
    status: "Pending",
    title: "Course Schedule",
    description:
      "Detect directed graph cycles using topological sorting.",
    date: "Oct 20, 2024",
  },
  {
    id: 5,
    category: "Technical",
    difficulty: "Medium",
    status: "Completed",
    title: "Event Loop & Microtask Queue Timing",
    description:
      "Understand Promise, microtask and timer execution.",
    date: "Oct 19, 2024",
  },
];

const Dashboard = () => {
  const [questions, setQuestions] = useState(() => {
    const savedQuestions = localStorage.getItem(
      "interview_questions"
    );

    if (savedQuestions) {
      return JSON.parse(savedQuestions);
    }

    return fallbackQuestions;
  });

  useEffect(() => {
    const loadQuestions = () => {
      const savedQuestions = localStorage.getItem(
        "interview_questions"
      );

      if (savedQuestions) {
        setQuestions(JSON.parse(savedQuestions));
      }
    };

    window.addEventListener("questionsUpdated", loadQuestions);

    return () => {
      window.removeEventListener(
        "questionsUpdated",
        loadQuestions
      );
    };
  }, []);

  /* =========================================================
     BASIC COUNTS
  ========================================================= */

  const totalQuestions = questions.length;

  const completedQuestions = questions.filter(
    (question) => question.status === "Completed"
  ).length;

  const completedDSA = questions.filter(
    (question) =>
      question.category === "DSA" &&
      question.status === "Completed"
  ).length;

  const totalDSA = questions.filter(
    (question) => question.category === "DSA"
  ).length;

  const completedGit = questions.filter(
    (question) =>
      (question.category === "Git" ||
        question.category === "Git & GitHub") &&
      question.status === "Completed"
  ).length;

  const totalGit = questions.filter(
    (question) =>
      question.category === "Git" ||
      question.category === "Git & GitHub"
  ).length;

  const completedTechnical = questions.filter(
    (question) =>
      question.category === "Technical" &&
      question.status === "Completed"
  ).length;

  const totalTechnical = questions.filter(
    (question) => question.category === "Technical"
  ).length;

  const completedInterviewQuestions =
    completedGit + completedTechnical;

  const totalInterviewQuestions =
    totalGit + totalTechnical;

  /* =========================================================
     PROGRESS
  ========================================================= */

  const overallProgress =
    totalQuestions > 0
      ? Math.round(
          (completedQuestions / totalQuestions) * 100
        )
      : 0;

  const dsaProgress =
    totalDSA > 0
      ? Math.round((completedDSA / totalDSA) * 100)
      : 0;

  const gitProgress =
    totalGit > 0
      ? Math.round((completedGit / totalGit) * 100)
      : 0;

  const technicalProgress =
    totalTechnical > 0
      ? Math.round(
          (completedTechnical / totalTechnical) * 100
        )
      : 0;

  /* =========================================================
     STATS
  ========================================================= */

  const stats = [
    {
      title: "Total Practiced",
      value: totalQuestions,
      icon: Activity,
      extra: `${completedQuestions} completed`,
      extraIcon: TrendingUp,
    },
    {
      title: "DSA Solved",
      value: completedDSA,
      icon: GitBranch,
      extra:
        totalDSA > 0
          ? `${dsaProgress}% completed`
          : "No DSA questions",
    },
    {
      title: "Interview Questions",
      value: completedInterviewQuestions,
      icon: BookOpen,
      extra:
        totalInterviewQuestions > 0
          ? `${totalInterviewQuestions} total`
          : "No questions",
    },
    {
      title: "Machine Coding",
      value: "1 / 3",
      icon: Laptop,
      extra: "1 In Progress",
    },
  ];

  /* =========================================================
     CATEGORY DATA
  ========================================================= */

  const categories = [
    {
      title: "Data Structures & Algorithms",
      icon: Code2,
      percentage: dsaProgress,
      solved: `${completedDSA}/${totalDSA} completed`,
      tags: ["Arrays", "Trees", "Graphs", "DP"],
    },
    {
      title: "Git & Version Control",
      icon: GitBranch,
      percentage: gitProgress,
      solved: `${completedGit}/${totalGit} completed`,
      tags: ["Rebase", "Conflicts", "Branches"],
    },
    {
      title: "Technical & JS Internals",
      icon: Settings2,
      percentage: technicalProgress,
      solved: `${completedTechnical}/${totalTechnical} completed`,
      tags: ["JavaScript", "React", "API"],
    },
    {
      title: "Machine Coding Projects",
      icon: Laptop,
      percentage: 33,
      solved: "1/3 built",
      tags: ["Tracker App", "Kanban UI"],
    },
  ];

  /* =========================================================
     RECENT ACTIVITY
  ========================================================= */

  const recentActivity = questions
    .filter((question) => question.status === "Completed")
    .slice(0, 3)
    .map((question) => ({
      title: question.title,
      difficulty: question.difficulty,
      category: question.category,
      date: question.date,
    }));

  return (
    <div className="space-y-6">

      {/* =====================================================
          WELCOME
      ====================================================== */}

      <section className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Welcome back 👋
          </h1>

          <p className="mt-1 font-mono text-xs text-[var(--primary)] sm:text-sm">
            Interview Preparation Tracker
          </p>

          <p className="font-mono text-xs text-[var(--primary)] sm:text-sm">
            Keep practicing and stay consistent.
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
              Status
            </p>

            <p className="font-mono text-xs font-semibold text-[var(--success)]">
              Active
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          STREAK
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
                  Keep Your Streak!
                </h2>

                <span
                  className="
                    rounded px-2 py-1
                    bg-[var(--success)]/20
                    font-mono text-[10px]
                    text-[var(--success)]
                  "
                >
                  Practice Mode
                </span>

              </div>

              <p className="text-xs text-[var(--text-muted)]">
                Consistency is the key to interview preparation.
              </p>

            </div>
          </div>

          <div className="sm:text-right">

            <p className="text-sm font-semibold">
              {completedQuestions}
              <span className="text-xs text-[var(--text-muted)]">
                /{totalQuestions}
              </span>
            </p>

            <p className="font-mono text-[10px] text-[var(--secondary)]">
              Completed
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
            <div
              key={`${day}-${index}`}
              className="space-y-2"
            >

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

                {stat.extra}

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
              Based on completed questions
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

            {overallProgress >= 70
              ? "On Track"
              : "Keep Practicing"}
          </span>

        </div>

        <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row">

          {/* Circular Progress */}

          <div
            className="
              relative flex h-32 w-32 shrink-0
              items-center justify-center
              rounded-full
            "
            style={{
              background: `conic-gradient(
                var(--primary) ${overallProgress}%,
                var(--surface-hover) ${overallProgress}%
              )`,
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
                {overallProgress}%
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

                {completedQuestions}

                <span className="text-[var(--text-muted)]">
                  {" "}
                  / {totalQuestions} Questions
                </span>

              </p>

            </div>

            <div>

              <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                Remaining
              </p>

              <p className="text-sm font-semibold text-[var(--secondary)]">
                {Math.max(
                  totalQuestions - completedQuestions,
                  0
                )}{" "}
                Questions
              </p>

              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[var(--surface-hover)]">

                <div
                  className="h-full rounded-full bg-[var(--primary)]"
                  style={{
                    width: `${overallProgress}%`,
                  }}
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

          {recentActivity.length > 0 ? (
            recentActivity.map((activity) => {

              const difficultyClass = {
                Easy:
                  "bg-[var(--success)]/15 text-[var(--success)]",

                Medium:
                  "bg-[var(--secondary)]/15 text-[var(--secondary)]",

                Hard:
                  "bg-red-500/15 text-red-400",
              };

              return (
                <div
                  key={activity.id || activity.title}
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
                      bg-[var(--success)]/15
                      text-[var(--success)]
                    "
                  >
                    <CheckCircle2 size={17} />
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
                          ${
                            difficultyClass[
                              activity.difficulty
                            ] ||
                            "bg-[var(--surface-hover)] text-[var(--text-muted)]"
                          }
                        `}
                      >
                        {activity.difficulty}
                      </span>

                      <span className="font-mono text-[9px] text-[var(--text-muted)]">
                        {activity.category}
                      </span>

                    </div>

                  </div>

                  <span className="hidden shrink-0 font-mono text-[10px] text-[var(--text-muted)] sm:block">
                    {activity.date}
                  </span>

                </div>
              );
            })
          ) : (
            <div
              className="
                rounded-xl
                border border-[var(--border)]
                bg-[var(--surface)]
                px-4 py-8
                text-center
              "
            >
              <p className="text-sm text-[var(--text-muted)]">
                No completed questions yet.
              </p>
            </div>
          )}

        </div>

      </section>

    </div>
  );
};

export default Dashboard;