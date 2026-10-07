import {
  CheckCircle2,
  Circle,
  Code2,
  GitBranch,
  Laptop,
  Target,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";

const Progress = () => {
  const [questions, setQuestions] = useState(() => {
    const savedQuestions = localStorage.getItem(
      "interview_questions"
    );

    return savedQuestions ? JSON.parse(savedQuestions) : [];
  });

  useEffect(() => {
    const updateQuestions = () => {
      const savedQuestions = localStorage.getItem(
        "interview_questions"
      );

      setQuestions(savedQuestions ? JSON.parse(savedQuestions) : []);
    };

    window.addEventListener("questionsUpdated", updateQuestions);

    return () => {
      window.removeEventListener(
        "questionsUpdated",
        updateQuestions
      );
    };
  }, []);

  /* =========================
     OVERALL
  ========================= */

  const totalQuestions = questions.length;

  const completedQuestions = questions.filter(
    (question) => question.status === "Completed"
  ).length;

  const pendingQuestions = questions.filter(
    (question) => question.status === "Pending"
  ).length;

  const inProgressQuestions = questions.filter(
    (question) => question.status === "In Progress"
  ).length;

  const overallProgress =
    totalQuestions > 0
      ? Math.round(
          (completedQuestions / totalQuestions) * 100
        )
      : 0;

  /* =========================
     CATEGORY PROGRESS
  ========================= */

  const getCategoryProgress = (category) => {
    const categoryQuestions = questions.filter(
      (question) => question.category === category
    );

    const completed = categoryQuestions.filter(
      (question) => question.status === "Completed"
    ).length;

    const total = categoryQuestions.length;

    const percentage =
      total > 0
        ? Math.round((completed / total) * 100)
        : 0;

    return {
      total,
      completed,
      percentage,
    };
  };

  const dsa = getCategoryProgress("DSA");
  const git = getCategoryProgress("Git");
  const technical = getCategoryProgress("Technical");

  /* =========================
     DIFFICULTY
  ========================= */

  const easyTotal = questions.filter(
    (question) => question.difficulty === "Easy"
  ).length;

  const mediumTotal = questions.filter(
    (question) => question.difficulty === "Medium"
  ).length;

  const hardTotal = questions.filter(
    (question) => question.difficulty === "Hard"
  ).length;

  const easyCompleted = questions.filter(
    (question) =>
      question.difficulty === "Easy" &&
      question.status === "Completed"
  ).length;

  const mediumCompleted = questions.filter(
    (question) =>
      question.difficulty === "Medium" &&
      question.status === "Completed"
  ).length;

  const hardCompleted = questions.filter(
    (question) =>
      question.difficulty === "Hard" &&
      question.status === "Completed"
  ).length;

  /* =========================
     CATEGORY CARD
  ========================= */

  const categoryCards = [
    {
      title: "DSA",
      subtitle: "Data Structures & Algorithms",
      icon: Code2,
      completed: dsa.completed,
      total: dsa.total,
      percentage: dsa.percentage,
    },
    {
      title: "Git",
      subtitle: "Git & GitHub",
      icon: GitBranch,
      completed: git.completed,
      total: git.total,
      percentage: git.percentage,
    },
    {
      title: "Technical",
      subtitle: "Full Stack Technical",
      icon: Laptop,
      completed: technical.completed,
      total: technical.total,
      percentage: technical.percentage,
    },
  ];

  return (
    <div className="space-y-6">

      {/* =========================
          HEADER
      ========================= */}

      <section>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Progress
        </h1>

        <p className="mt-1 text-sm text-[var(--text-muted)]">
          Track your interview preparation progress.
        </p>
      </section>

      {/* =========================
          OVERALL PROGRESS
      ========================= */}

      <section
        className="
          rounded-2xl
          border border-[var(--border)]
          bg-[var(--surface)]
          p-5
          sm:p-6
        "
      >

        <div className="flex flex-col items-center gap-6 sm:flex-row">

          {/* CIRCLE */}

          <div
            className="
              relative
              flex h-40 w-40
              shrink-0
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
                absolute inset-[10px]
                flex flex-col
                items-center justify-center
                rounded-full
                bg-[var(--surface)]
              "
            >

              <span className="text-3xl font-bold">
                {overallProgress}%
              </span>

              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                Overall
              </span>

            </div>

          </div>

          {/* INFO */}

          <div className="flex-1 text-center sm:text-left">

            <div className="flex items-center justify-center gap-2 sm:justify-start">

              <Target
                size={20}
                className="text-[var(--primary)]"
              />

              <h2 className="text-xl font-bold">
                Interview Preparation
              </h2>

            </div>

            <p className="mt-2 text-sm text-[var(--text-muted)]">
              You have completed{" "}
              <span className="font-semibold text-[var(--text)]">
                {completedQuestions}
              </span>{" "}
              out of{" "}
              <span className="font-semibold text-[var(--text)]">
                {totalQuestions}
              </span>{" "}
              questions.
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-3 sm:justify-start">

              <div className="rounded-lg bg-[var(--success)]/10 px-3 py-2">
                <p className="font-mono text-[10px] text-[var(--text-muted)]">
                  COMPLETED
                </p>

                <p className="text-lg font-bold text-[var(--success)]">
                  {completedQuestions}
                </p>
              </div>

              <div className="rounded-lg bg-[var(--secondary)]/10 px-3 py-2">
                <p className="font-mono text-[10px] text-[var(--text-muted)]">
                  IN PROGRESS
                </p>

                <p className="text-lg font-bold text-[var(--secondary)]">
                  {inProgressQuestions}
                </p>
              </div>

              <div className="rounded-lg bg-[var(--surface-hover)] px-3 py-2">
                <p className="font-mono text-[10px] text-[var(--text-muted)]">
                  PENDING
                </p>

                <p className="text-lg font-bold">
                  {pendingQuestions}
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          CATEGORY PROGRESS
      ========================= */}

      <section>

        <div className="mb-3 flex items-center gap-2">
          <TrendingUp
            size={18}
            className="text-[var(--primary)]"
          />

          <h2 className="text-lg font-semibold">
            Category Progress
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">

          {categoryCards.map((category) => {

            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="
                  rounded-2xl
                  border border-[var(--border)]
                  bg-[var(--surface)]
                  p-5
                "
              >

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        flex h-10 w-10
                        items-center justify-center
                        rounded-xl
                        bg-[var(--surface-hover)]
                        text-[var(--primary)]
                      "
                    >
                      <Icon size={19} />
                    </div>

                    <div>

                      <h3 className="font-semibold">
                        {category.title}
                      </h3>

                      <p className="font-mono text-[9px] text-[var(--text-muted)]">
                        {category.subtitle}
                      </p>

                    </div>

                  </div>

                  <span className="font-mono text-sm font-bold text-[var(--success)]">
                    {category.percentage}%
                  </span>

                </div>

                {/* PROGRESS BAR */}

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-[var(--surface-hover)]">

                  <div
                    className="h-full rounded-full bg-[var(--primary)] transition-all duration-500"
                    style={{
                      width: `${category.percentage}%`,
                    }}
                  />

                </div>

                <div className="mt-3 flex items-center justify-between">

                  <span className="font-mono text-[10px] text-[var(--text-muted)]">
                    {category.completed} completed
                  </span>

                  <span className="font-mono text-[10px] text-[var(--text-muted)]">
                    {category.total} total
                  </span>

                </div>

              </div>
            );
          })}

        </div>

      </section>

      {/* =========================
          DIFFICULTY PROGRESS
      ========================= */}

      <section
        className="
          rounded-2xl
          border border-[var(--border)]
          bg-[var(--surface)]
          p-5
          sm:p-6
        "
      >

        <h2 className="text-lg font-semibold">
          Difficulty Progress
        </h2>

        <div className="mt-5 space-y-5">

          {/* EASY */}

          <ProgressRow
            label="Easy"
            completed={easyCompleted}
            total={easyTotal}
            percentage={
              easyTotal > 0
                ? Math.round(
                    (easyCompleted / easyTotal) * 100
                  )
                : 0
            }
            dotClass="bg-[var(--success)]"
            textClass="text-[var(--success)]"
          />

          {/* MEDIUM */}

          <ProgressRow
            label="Medium"
            completed={mediumCompleted}
            total={mediumTotal}
            percentage={
              mediumTotal > 0
                ? Math.round(
                    (mediumCompleted / mediumTotal) * 100
                  )
                : 0
            }
            dotClass="bg-[var(--secondary)]"
            textClass="text-[var(--secondary)]"
          />

          {/* HARD */}

          <ProgressRow
            label="Hard"
            completed={hardCompleted}
            total={hardTotal}
            percentage={
              hardTotal > 0
                ? Math.round(
                    (hardCompleted / hardTotal) * 100
                  )
                : 0
            }
            dotClass="bg-red-400"
            textClass="text-red-400"
          />

        </div>

      </section>

      {/* =========================
          STATUS
      ========================= */}

      <section>

        <h2 className="mb-3 text-lg font-semibold">
          Question Status
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

          <StatusCard
            title="Completed"
            value={completedQuestions}
            icon={CheckCircle2}
            className="text-[var(--success)]"
          />

          <StatusCard
            title="In Progress"
            value={inProgressQuestions}
            icon={Circle}
            className="text-[var(--secondary)]"
          />

          <StatusCard
            title="Pending"
            value={pendingQuestions}
            icon={Circle}
            className="text-[var(--text-muted)]"
          />

        </div>

      </section>

    </div>
  );
};


/* =========================================================
   PROGRESS ROW
========================================================= */

const ProgressRow = ({
  label,
  completed,
  total,
  percentage,
  dotClass,
  textClass,
}) => {
  return (
    <div>

      <div className="mb-2 flex items-center justify-between">

        <div className="flex items-center gap-2">

          <span
            className={`h-2.5 w-2.5 rounded-full ${dotClass}`}
          />

          <span className="text-sm font-medium">
            {label}
          </span>

        </div>

        <span
          className={`font-mono text-xs font-semibold ${textClass}`}
        >
          {completed}/{total}
        </span>

      </div>

      <div className="h-2 overflow-hidden rounded-full bg-[var(--surface-hover)]">

        <div
          className={`h-full rounded-full ${dotClass} transition-all duration-500`}
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <p className="mt-1 font-mono text-[9px] text-[var(--text-muted)]">
        {percentage}% completed
      </p>

    </div>
  );
};


/* =========================================================
   STATUS CARD
========================================================= */

const StatusCard = ({
  title,
  value,
  icon: Icon,
  className,
}) => {
  return (
    <div
      className="
        flex items-center gap-3
        rounded-xl
        border border-[var(--border)]
        bg-[var(--surface)]
        p-4
      "
    >

      <div
        className={`
          flex h-10 w-10
          items-center justify-center
          rounded-lg
          bg-[var(--surface-hover)]
          ${className}
        `}
      >
        <Icon size={19} />
      </div>

      <div>

        <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
          {title}
        </p>

        <p className="text-xl font-bold">
          {value}
        </p>

      </div>

    </div>
  );
};

export default Progress;