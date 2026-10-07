import {
  CheckCircle2,
  Circle,
  Code2,
  GitBranch,
  Laptop,
  Search,
  Target,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const MachineCoding = () => {
  const [questions, setQuestions] = useState(() => {
    const savedQuestions = localStorage.getItem(
      "interview_questions"
    );

    return savedQuestions ? JSON.parse(savedQuestions) : [];
  });

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

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

  /* =========================================================
     CATEGORY DATA
  ========================================================= */

  const getCategoryData = (category) => {
    const categoryQuestions = questions.filter(
      (question) => question.category === category
    );

    const completed = categoryQuestions.filter(
      (question) => question.status === "Completed"
    ).length;

    const inProgress = categoryQuestions.filter(
      (question) => question.status === "In Progress"
    ).length;

    const pending = categoryQuestions.filter(
      (question) => question.status === "Pending"
    ).length;

    const total = categoryQuestions.length;

    const percentage =
      total > 0
        ? Math.round((completed / total) * 100)
        : 0;

    return {
      total,
      completed,
      inProgress,
      pending,
      percentage,
    };
  };

  const dsa = getCategoryData("DSA");

  const git = getCategoryData("Git");

  const technical = getCategoryData("Technical");

  /* =========================================================
     SEARCH + FILTER
  ========================================================= */

  const filteredQuestions = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    return questions.filter((question) => {
      const matchesSearch =
        question.title
          .toLowerCase()
          .includes(searchText) ||
        question.description
          ?.toLowerCase()
          .includes(searchText) ||
        question.category
          .toLowerCase()
          .includes(searchText);

      const matchesCategory =
        selectedCategory === "All" ||
        question.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [questions, search, selectedCategory]);

  /* =========================================================
     TOTALS
  ========================================================= */

  const totalQuestions = questions.length;

  const completedQuestions = questions.filter(
    (question) => question.status === "Completed"
  ).length;

  const inProgressQuestions = questions.filter(
    (question) => question.status === "In Progress"
  ).length;

  const pendingQuestions = questions.filter(
    (question) => question.status === "Pending"
  ).length;

  const overallProgress =
    totalQuestions > 0
      ? Math.round(
          (completedQuestions / totalQuestions) * 100
        )
      : 0;

  /* =========================================================
     PROJECT DATA
  ========================================================= */

  const projects = [
    {
      title: "Interview Practice Tracker",
      description:
        "Build a responsive interview preparation tracker using React and LocalStorage.",
      status: "In Progress",
      icon: Laptop,
      progress: 70,
      tags: ["React", "LocalStorage", "Tailwind"],
    },
    {
      title: "Kanban Interview Board",
      description:
        "Practice machine coding by building a drag-and-drop style task board.",
      status: "Pending",
      icon: Code2,
      progress: 0,
      tags: ["React", "UI", "State"],
    },
    {
      title: "Git Workflow Simulator",
      description:
        "Practice Git branching, conflicts and pull request workflow concepts.",
      status: "Pending",
      icon: GitBranch,
      progress: 0,
      tags: ["Git", "GitHub", "Workflow"],
    },
  ];

  return (
    <div className="space-y-6">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <section>

        <div className="flex items-start justify-between gap-4">

          <div>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Machine Coding
            </h1>

            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Practice real-world frontend coding problems.
            </p>

          </div>

          <div
            className="
              hidden
              items-center gap-2
              rounded-full
              bg-[var(--surface)]
              px-4 py-2
              sm:flex
            "
          >

            <Target
              size={15}
              className="text-[var(--primary)]"
            />

            <span className="font-mono text-[10px] text-[var(--text-muted)]">
              {overallProgress}% Complete
            </span>

          </div>

        </div>

      </section>

      {/* =====================================================
          MACHINE CODING PROJECTS
      ====================================================== */}

      <section>

        <div className="mb-3 flex items-center justify-between">

          <h2 className="text-lg font-semibold">
            Projects
          </h2>

          <span className="font-mono text-[10px] text-[var(--text-muted)]">
            1 / {projects.length} In Progress
          </span>

        </div>

        <div className="grid gap-4 lg:grid-cols-3">

          {projects.map((project) => {

            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className="
                  rounded-2xl
                  border border-[var(--border)]
                  bg-[var(--surface)]
                  p-5
                "
              >

                {/* TOP */}

                <div className="flex items-start justify-between gap-3">

                  <div
                    className="
                      flex h-10 w-10
                      items-center justify-center
                      rounded-xl
                      bg-[var(--surface-hover)]
                      text-[var(--primary)]
                    "
                  >
                    <Icon size={20} />
                  </div>

                  <span
                    className={`
                      rounded-full
                      px-2.5 py-1
                      font-mono text-[9px]

                      ${
                        project.status === "In Progress"
                          ? `
                            bg-[var(--secondary)]/15
                            text-[var(--secondary)]
                          `
                          : `
                            bg-[var(--surface-hover)]
                            text-[var(--text-muted)]
                          `
                      }
                    `}
                  >
                    {project.status}
                  </span>

                </div>

                {/* TITLE */}

                <h3 className="mt-4 text-base font-semibold">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}

                <p className="mt-2 min-h-[40px] text-xs leading-relaxed text-[var(--text-muted)]">
                  {project.description}
                </p>

                {/* TAGS */}

                <div className="mt-4 flex flex-wrap gap-1.5">

                  {project.tags.map((tag) => (
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

                {/* PROGRESS */}

                <div className="mt-5">

                  <div className="mb-1.5 flex items-center justify-between">

                    <span className="font-mono text-[9px] text-[var(--text-muted)]">
                      Progress
                    </span>

                    <span className="font-mono text-[9px] text-[var(--text)]">
                      {project.progress}%
                    </span>

                  </div>

                  <div className="h-1.5 overflow-hidden rounded-full bg-[var(--surface-hover)]">

                    <div
                      className="h-full rounded-full bg-[var(--primary)]"
                      style={{
                        width: `${project.progress}%`,
                      }}
                    />

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </section>

      {/* =====================================================
          QUESTION STATS
      ====================================================== */}

      <section>

        <h2 className="mb-3 text-lg font-semibold">
          Preparation Status
        </h2>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">

          <StatCard
            title="Total"
            value={totalQuestions}
            icon={Target}
          />

          <StatCard
            title="Completed"
            value={completedQuestions}
            icon={CheckCircle2}
            className="text-[var(--success)]"
          />

          <StatCard
            title="In Progress"
            value={inProgressQuestions}
            icon={Circle}
            className="text-[var(--secondary)]"
          />

          <StatCard
            title="Pending"
            value={pendingQuestions}
            icon={Circle}
            className="text-[var(--text-muted)]"
          />

        </div>

      </section>

      {/* =====================================================
          CATEGORY PROGRESS
      ====================================================== */}

      <section>

        <h2 className="mb-3 text-lg font-semibold">
          Category Progress
        </h2>

        <div className="grid gap-4 md:grid-cols-3">

          <CategoryCard
            title="DSA"
            icon={Code2}
            data={dsa}
          />

          <CategoryCard
            title="Git & GitHub"
            icon={GitBranch}
            data={git}
          />

          <CategoryCard
            title="Technical"
            icon={Laptop}
            data={technical}
          />

        </div>

      </section>

      {/* =====================================================
          SEARCH
      ====================================================== */}

      <section>

        <div className="mb-3 flex items-center justify-between">

          <h2 className="text-lg font-semibold">
            Practice Questions
          </h2>

          <span className="font-mono text-[10px] text-[var(--text-muted)]">
            {filteredQuestions.length} results
          </span>

        </div>

        <div
          className="
            flex flex-col gap-3
            sm:flex-row
          "
        >

          {/* SEARCH */}

          <div
            className="
              flex flex-1
              items-center gap-3
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions..."
              className="
                min-w-0 flex-1
                bg-transparent
                text-sm
                outline-none
                placeholder:text-[var(--text-muted)]
              "
            />

          </div>

          {/* CATEGORY */}

          <select
            value={selectedCategory}
            onChange={(e) =>
              setSelectedCategory(e.target.value)
            }
            className="
              rounded-xl
              border border-[var(--border)]
              bg-[var(--surface)]
              px-4 py-3
              text-sm
              text-[var(--text)]
              outline-none
            "
          >

            <option value="All">
              All Categories
            </option>

            <option value="DSA">
              DSA
            </option>

            <option value="Git">
              Git
            </option>

            <option value="Technical">
              Technical
            </option>

          </select>

        </div>

      </section>

      {/* =====================================================
          QUESTION LIST
      ====================================================== */}

      <section className="space-y-3">

        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((question) => (
            <QuestionRow
              key={question.id}
              question={question}
            />
          ))
        ) : (
          <div
            className="
              rounded-2xl
              border border-[var(--border)]
              bg-[var(--surface)]
              px-5 py-12
              text-center
            "
          >

            <Search
              size={32}
              className="mx-auto text-[var(--text-muted)]"
            />

            <h3 className="mt-3 font-semibold">
              No questions found
            </h3>

            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Try changing your search or category.
            </p>

          </div>
        )}

      </section>

    </div>
  );
};


/* =========================================================
   STAT CARD
========================================================= */

const StatCard = ({
  title,
  value,
  icon: Icon,
  className = "text-[var(--primary)]",
}) => {
  return (
    <div
      className="
        rounded-xl
        border border-[var(--border)]
        bg-[var(--surface)]
        p-4
      "
    >

      <div className="flex items-center justify-between">

        <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-muted)]">
          {title}
        </span>

        <Icon
          size={17}
          className={className}
        />

      </div>

      <p className="mt-3 text-2xl font-bold">
        {value}
      </p>

    </div>
  );
};


/* =========================================================
   CATEGORY CARD
========================================================= */

const CategoryCard = ({
  title,
  icon: Icon,
  data,
}) => {
  return (
    <div
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
              flex h-9 w-9
              items-center justify-center
              rounded-lg
              bg-[var(--surface-hover)]
              text-[var(--primary)]
            "
          >
            <Icon size={18} />
          </div>

          <h3 className="font-semibold">
            {title}
          </h3>

        </div>

        <span className="font-mono text-xs text-[var(--success)]">
          {data.percentage}%
        </span>

      </div>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-[var(--surface-hover)]">

        <div
          className="h-full rounded-full bg-[var(--primary)] transition-all"
          style={{
            width: `${data.percentage}%`,
          }}
        />

      </div>

      <div className="mt-3 flex items-center justify-between">

        <span className="font-mono text-[9px] text-[var(--text-muted)]">
          {data.completed} completed
        </span>

        <span className="font-mono text-[9px] text-[var(--text-muted)]">
          {data.total} total
        </span>

      </div>

    </div>
  );
};


/* =========================================================
   QUESTION ROW
========================================================= */

const QuestionRow = ({ question }) => {

  const statusClass = {
    Completed:
      "bg-[var(--success)]/15 text-[var(--success)]",

    "In Progress":
      "bg-[var(--secondary)]/15 text-[var(--secondary)]",

    Pending:
      "bg-[var(--surface-hover)] text-[var(--text-muted)]",
  };

  return (
    <div
      className="
        flex flex-col gap-3
        rounded-xl
        border border-[var(--border)]
        bg-[var(--surface)]
        p-4
        sm:flex-row
        sm:items-center
      "
    >

      <div
        className="
          flex h-9 w-9
          shrink-0
          items-center justify-center
          rounded-lg
          bg-[var(--surface-hover)]
        "
      >

        {question.status === "Completed" ? (
          <CheckCircle2
            size={18}
            className="text-[var(--success)]"
          />
        ) : (
          <Circle
            size={18}
            className="text-[var(--text-muted)]"
          />
        )}

      </div>

      <div className="min-w-0 flex-1">

        <h3 className="truncate text-sm font-semibold">
          {question.title}
        </h3>

        <p className="mt-1 truncate text-xs text-[var(--text-muted)]">
          {question.description}
        </p>

      </div>

      <div className="flex items-center gap-2">

        <span
          className="
            rounded
            bg-[var(--surface-hover)]
            px-2 py-1
            font-mono text-[9px]
            text-[var(--text-muted)]
          "
        >
          {question.category}
        </span>

        <span
          className={`
            rounded
            px-2 py-1
            font-mono text-[9px]
            ${statusClass[question.status]}
          `}
        >
          {question.status}
        </span>

      </div>

    </div>
  );
};

export default MachineCoding;