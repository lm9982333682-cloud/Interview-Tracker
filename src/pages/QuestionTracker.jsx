import {
  Bookmark,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Circle,
  MoreVertical,
  Search,
  X,
} from "lucide-react";
import { useState } from "react";
import AddQuestionModal from "../components/AddQuestionModal";

const QuestionTracker = () => {
  const [isAddQuestionOpen, setIsAddQuestionOpen] = useState(false);
  const questions = [
    {
      category: "DSA",
      difficulty: "Medium",
      status: "Completed",
      title: "LRU Cache Implementation",
      description:
        "Design data structure with O(1) get and put using doubly linked list and hash map.",
      date: "Oct 24, 2024",
      result: "98ms · 44.2 MB",
      type: "success",
    },
    {
      category: "Git",
      difficulty: "Easy",
      status: "Completed",
      title: "Interactive Git Rebase & Squashing",
      description:
        "Cleaning commit history via rebase -i, resolving conflicts and squashing commits.",
      date: "Oct 23, 2024",
      result: "Passed 1st Try",
      type: "success",
    },
    {
      category: "Technical",
      difficulty: "Hard",
      status: "In Progress",
      title: "React Virtual DOM vs Fiber Architecture",
      description:
        "Deep dive into concurrent scheduling, reconciliation and React rendering.",
      date: "Oct 22, 2024",
      result: "Draft Notes (4)",
      type: "info",
    },
    {
      category: "DSA",
      difficulty: "Medium",
      status: "Pending",
      title: "Course Schedule (Topological Sort)",
      description:
        "Detect directed graph cycles using Kahn algorithm (BFS) and topological sorting.",
      date: "Oct 20, 2024",
      result: "Priority: High",
      type: "pending",
    },
    {
      category: "Technical",
      difficulty: "Medium",
      status: "Completed",
      title: "Event Loop & Microtask Queue Timing",
      description:
        "Predict execution sequence across Promise.then, process.nextTick and timers.",
      date: "Oct 19, 2024",
      result: "100% Score",
      type: "success",
    },
  ];

  const categoryFilters = [
    { label: "All", count: 84 },
    { label: "DSA", count: 50 },
    { label: "Git & GitHub", count: 15 },
    { label: "Technical", count: 19 },
  ];

  console.log(isAddQuestionOpen)


  return (
    <>
  
    <div className="space-y-5">

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}
      <section className="flex items-start justify-between gap-4">

        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Question Tracker
          </h1>

          <div className="mt-1 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--success)]" />

            <span className="font-mono text-xs text-[var(--text-muted)]">
              84 questions total
            </span>
          </div>
        </div>

        {/* New button */}
        <button

         onClick={() => setIsAddQuestionOpen(true)}
          type="button"
          className="
            flex shrink-0 items-center gap-2
            rounded-xl
            bg-[var(--primary)]
            px-4 py-3
            text-sm font-semibold
            text-[var(--bg)]
            transition
            hover:opacity-90
            active:scale-95
            sm:px-5
            cursor-pointer
          "
        >
          <span className="text-xl leading-none">+</span>
          <span className="hidden sm:inline">New</span>
        </button>
      </section>

      {/* =====================================================
          SEARCH
      ====================================================== */}
      <section
        className="
          flex items-center gap-3
          rounded-xl
          border border-[var(--border)]
          bg-[var(--surface)]
          px-4
          py-3
        "
      >
        <Search
          size={21}
          className="shrink-0 text-[var(--text-muted)]"
        />

        <input
          type="text"
          placeholder="Search questions, tags, topics..."
          className="
            min-w-0 flex-1
            bg-transparent
            text-sm
            text-[var(--text)]
            outline-none
            placeholder:text-[var(--text-muted)]
          "
        />

        <button
          type="button"
          className="
            hidden
            h-7 w-7
            items-center justify-center
            rounded-md
            text-[var(--text-muted)]
            hover:bg-[var(--surface-hover)]
            sm:flex
          "
        >
          <X size={18} />
        </button>

        <kbd
          className="
            hidden sm:flex
            h-7 min-w-7
            items-center justify-center
            rounded-md
            bg-[var(--bg)]
            px-2
            font-mono text-[11px]
            text-[var(--text-muted)]
          "
        >
          /
        </kbd>
      </section>

      {/* =====================================================
          CATEGORY FILTERS
      ====================================================== */}
      <div className="overflow-x-auto scrollbar-none">
        <div className="flex min-w-max gap-2">

          {categoryFilters.map((filter, index) => (
            <button
              key={filter.label}
              type="button"
              className={`
                rounded-full
                px-4 py-2
                font-mono text-xs
                transition

                ${
                  index === 0
                    ? `
                      bg-[var(--primary)]
                      text-[var(--bg)]
                    `
                    : `
                      bg-[var(--surface)]
                      text-[var(--text-muted)]
                      hover:bg-[var(--surface-hover)]
                      hover:text-[var(--text)]
                    `
                }
              `}
            >
              {filter.label}
              <span className="ml-1">({filter.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* =====================================================
          DIFFICULTY FILTER
      ====================================================== */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">

        <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
          Tier:
        </span>

        <button
          type="button"
          className="
            shrink-0 rounded-full
            bg-[var(--surface-hover)]
            px-4 py-2
            font-mono text-xs
            text-[var(--text)]
          "
        >
          All
        </button>

        <button
          type="button"
          className="
            flex shrink-0 items-center gap-1.5
            rounded-full
            bg-[var(--surface)]
            px-4 py-2
            font-mono text-xs
            text-[var(--success)]
          "
        >
          <span className="h-2 w-2 rounded-full bg-[var(--success)]" />
          Easy (28)
        </button>

        <button
          type="button"
          className="
            flex shrink-0 items-center gap-1.5
            rounded-full
            bg-[var(--surface)]
            px-4 py-2
            font-mono text-xs
            text-[var(--secondary)]
          "
        >
          <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" />
          Med (42)
        </button>

        <button
          type="button"
          className="
            flex shrink-0 items-center gap-1.5
            rounded-full
            bg-[var(--surface)]
            px-4 py-2
            font-mono text-xs
            text-red-300
          "
        >
          <span className="h-2 w-2 rounded-full bg-red-300" />
          Hard (14)
        </button>
      </div>

      {/* =====================================================
          QUESTIONS
      ====================================================== */}
      <section className="space-y-3">

        {questions.map((question) => (
          <QuestionCard
            key={question.title}
            question={question}
          />
        ))}

      </section>

      {/* =====================================================
          LOAD MORE INFO
      ====================================================== */}
      <section className="flex items-center gap-3 px-1">

        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[var(--surface)]">
          <div
            className="h-full w-[8%] rounded-full bg-[var(--primary)]"
          />
        </div>

        <span className="shrink-0 font-mono text-[11px] text-[var(--text-muted)]">
          Showing 5 of 84 questions
        </span>
      </section>

      {/* =====================================================
          LOAD MORE BUTTON
      ====================================================== */}
      <button
        type="button"
        className="
          flex w-full items-center justify-center gap-2
          rounded-xl
          border border-[var(--border)]
          bg-[var(--surface)]
          px-5 py-4
          text-base font-semibold
          text-[var(--text)]
          transition
          hover:bg-[var(--surface-hover)]
        "
      >
        Load More Questions
        <ChevronDown size={19} />
      </button>
    </div> 

    <AddQuestionModal
  isOpen={isAddQuestionOpen}
  onClose={() => setIsAddQuestionOpen(false)}
  onSave={(data) => {
    console.log("New Question:", data);
  }}
/>
    
     </>
  );
};


/* =========================================================
   QUESTION CARD
========================================================= */

const QuestionCard = ({ question }) => {
  const isCompleted = question.status === "Completed";
  const isInProgress = question.status === "In Progress";

  const difficultyStyle = {
    Easy: "bg-[var(--success)]/15 text-[var(--success)]",
    Medium: "bg-[var(--secondary)]/15 text-[var(--secondary)]",
    Hard: "bg-red-400/15 text-red-300",
  };

  const statusStyle = {
    Completed:
      "bg-[var(--success)]/15 text-[var(--success)]",
    "In Progress":
      "bg-[var(--secondary)]/15 text-[var(--secondary)]",
    Pending:
      "bg-[var(--surface-hover)] text-[var(--text-muted)]",
  };

  return (
    <article
      className="
        rounded-2xl
        border border-[var(--border)]
        bg-[var(--surface)]
        p-4
        sm:p-5
      "
    >
      {/* Top */}
      <div className="flex items-start justify-between gap-3">

        {/* Tags */}
        <div className="flex min-w-0 flex-wrap items-center gap-2">

          <span
            className="
              rounded
              bg-[var(--bg)]
              px-2.5 py-1
              font-mono text-[10px]
              text-[var(--text)]
            "
          >
            {question.category}
          </span>

          <span
            className={`
              rounded
              px-2.5 py-1
              font-mono text-[10px]
              ${difficultyStyle[question.difficulty]}
            `}
          >
            {question.difficulty}
          </span>

          <span
            className={`
              flex items-center gap-1
              rounded
              px-2.5 py-1
              font-mono text-[10px]
              ${statusStyle[question.status]}
            `}
          >
            {isCompleted && <CheckCircle2 size={12} />}
            {isInProgress && <Circle size={11} />}
            {question.status}
          </span>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-1">

          <button
            type="button"
            aria-label="Bookmark"
            className="
              flex h-8 w-8
              items-center justify-center
              rounded-lg
              text-[var(--text-muted)]
              transition
              hover:bg-[var(--surface-hover)]
              hover:text-[var(--text)]
            "
          >
            <Bookmark size={19} />
          </button>

          <button
            type="button"
            aria-label="Status"
            className={`
              flex h-8 w-8
              items-center justify-center
              rounded-lg
              transition
              hover:bg-[var(--surface-hover)]

              ${
                isCompleted
                  ? "text-[var(--success)]"
                  : "text-[var(--text-muted)]"
              }
            `}
          >
            {isCompleted ? (
              <CheckCircle2 size={21} />
            ) : (
              <Circle size={20} />
            )}
          </button>

          <button
            type="button"
            aria-label="More"
            className="
              flex h-8 w-8
              items-center justify-center
              rounded-lg
              text-[var(--text-muted)]
              transition
              hover:bg-[var(--surface-hover)]
              hover:text-[var(--text)]
            "
          >
            <MoreVertical size={19} />
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="mt-4 text-lg font-semibold leading-snug sm:text-xl">
        {question.title}
      </h2>

      {/* Description */}
      <p className="mt-1 line-clamp-1 text-sm text-[var(--text-muted)]">
        {question.description}
      </p>

      {/* Bottom */}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-2">
          <CalendarDays
            size={15}
            className="text-[var(--text-muted)]"
          />

          <span className="font-mono text-xs text-[var(--text-muted)]">
            {question.date}
          </span>
        </div>

        <span
          className={`
            font-mono text-xs

            ${
              question.type === "success"
                ? "text-[var(--success)]"
                : question.type === "info"
                ? "text-[var(--secondary)]"
                : "text-[var(--text-muted)]"
            }
          `}
        >
          {question.result}
        </span>
      </div>
    </article>
  );
};

export default QuestionTracker;