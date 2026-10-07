import {
  BarChart3,
  Code2,
  LayoutDashboard,
  Settings,
  TerminalSquare,
  BookOpen,
} from "lucide-react";

import { NavLink } from "react-router";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      name: "Questions",
      path: "/questions",
      icon: BookOpen,
    },
    {
      name: "Progress",
      path: "/progress",
      icon: BarChart3,
    },
    {
      name: "Coding",
      path: "/machine-coding",
      icon: TerminalSquare,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside
        className="
          fixed left-0 top-0 z-50
          hidden lg:flex
          h-screen w-[240px]
          flex-col
          border-r border-[var(--border)]
          bg-[var(--bg)]
        "
      >
        {/* Logo */}
        <div className="flex h-16 items-center border-b border-[var(--border)] px-5">

          <div
            className="
              flex h-9 w-9 items-center justify-center
              rounded-lg
              bg-[var(--primary)]
              text-[var(--bg)]
            "
          >
            <Code2 size={20} strokeWidth={2.5} />
          </div>

          <div className="ml-3">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--primary)]">
              PrepTracker
            </p>

            <p className="text-sm font-semibold text-[var(--text)]">
              Interview Tracker
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-5">

          <p className="mb-3 px-3 font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
            Workspace
          </p>

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `
                    group flex items-center gap-3
                    rounded-lg px-3 py-2.5
                    text-sm font-medium
                    transition-all duration-200

                    ${
                      isActive
                        ? `
                          bg-[var(--surface)]
                          text-[var(--primary)]
                        `
                        : `
                          text-[var(--text-muted)]
                          hover:bg-[var(--surface)]
                          hover:text-[var(--text)]
                        `
                    }
                  `
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={19}
                      strokeWidth={isActive ? 2.2 : 1.8}
                    />

                    <span>{item.name}</span>

                    {isActive && (
                      <span
                        className="
                          ml-auto
                          h-1.5 w-1.5
                          rounded-full
                          bg-[var(--success)]
                        "
                      />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="border-t border-[var(--border)] p-3">

          <div
            className="
              rounded-lg
              bg-[var(--surface)]
              px-3 py-3
            "
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
              Current Sprint
            </p>

            <div className="mt-2 flex items-center justify-between">
              <span className="text-xs font-medium text-[var(--text)]">
                Week 4 of 8
              </span>

              <span className="flex items-center gap-1 text-[11px] text-[var(--success)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
                Active
              </span>
            </div>

            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[var(--surface-hover)]">
              <div
                className="h-full rounded-full bg-[var(--primary)]"
                style={{ width: "50%" }}
              />
            </div>
          </div>
        </div>
      </aside>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <nav
        className="
          fixed bottom-0 left-0 right-0 z-50
          flex lg:hidden
          h-[68px]
          border-t border-[var(--border)]
          bg-[var(--bg)]/95
          backdrop-blur-xl
        "
      >
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `
                  flex flex-1
                  flex-col items-center justify-center
                  gap-1
                  text-[10px]
                  font-mono
                  transition

                  ${
                    isActive
                      ? "text-[var(--primary)]"
                      : "text-[var(--text-muted)]"
                  }
                `
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={21}
                    strokeWidth={isActive ? 2.3 : 1.8}
                  />

                  <span>{item.name}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>
    </>
  );
};

export default Sidebar;