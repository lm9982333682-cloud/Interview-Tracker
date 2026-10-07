import {
  Bell,
  Code2,
  Search,
  UserCircle,
} from "lucide-react";

const Header = ({ title = "Dashboard" }) => {
  return (
    <header
      className="
        fixed top-0 right-0 z-50
        h-16
        w-full lg:w-[calc(100%-240px)]
        border-b border-[var(--border)]
        bg-[var(--bg)]/90
        backdrop-blur-xl
      "
    >
      <div className="flex h-full items-center justify-between px-4 lg:px-6">

        {/* Left */}
        <div className="flex min-w-0 items-center gap-3">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="
                flex h-8 w-8 items-center justify-center
                rounded-lg
                bg-[var(--primary)]
                text-[var(--bg)]
              "
            >
              <Code2 size={18} strokeWidth={2.5} />
            </div>

            <div className="hidden sm:block">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--primary)]">
                PrepTracker
              </p>

              <h1 className="max-w-[150px] truncate text-base font-semibold text-[var(--text)]">
                {title}
              </h1>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-1">

          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="
              flex h-10 w-10 items-center justify-center
              rounded-lg
              text-[var(--text-muted)]
              transition
              hover:bg-[var(--surface)]
              hover:text-[var(--text)]
            "
          >
            <Search size={21} />
          </button>

          {/* Notification */}
          <button
            type="button"
            aria-label="Notifications"
            className="
              relative flex h-10 w-10 items-center justify-center
              rounded-lg
              text-[var(--text-muted)]
              transition
              hover:bg-[var(--surface)]
              hover:text-[var(--text)]
            "
          >
            <Bell size={21} />

            {/* Notification dot */}
            <span
              className="
                absolute right-2.5 top-2
                h-2 w-2
                rounded-full
                bg-[var(--success)]
                ring-2 ring-[var(--bg)]
              "
            />
          </button>

          {/* Profile */}
          <button
            type="button"
            className="
              ml-1 flex h-10 w-10 items-center justify-center
              rounded-full
              overflow-hidden
            "
          >
            <UserCircle
              size={32}
              strokeWidth={1.5}
              className="text-[var(--text-muted)]"
            />
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;