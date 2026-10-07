import { useEffect, useState } from "react";
import {
  User,
  Bell,
  Moon,
  Sun,
  Trash2,
  Save,
  RotateCcw,
} from "lucide-react";

const Settings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedSettings = JSON.parse(
      localStorage.getItem("interview_settings")
    );

    if (savedSettings) {
      setName(savedSettings.name || "");
      setEmail(savedSettings.email || "");
      setNotifications(savedSettings.notifications ?? true);
      setDarkMode(savedSettings.darkMode ?? true);
    }
  }, []);

  const handleSave = () => {
    const settings = {
      name,
      email,
      notifications,
      darkMode,
    };

    localStorage.setItem("interview_settings", JSON.stringify(settings));

    setMessage("Settings saved successfully!");

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setNotifications(true);
    setDarkMode(true);

    localStorage.removeItem("interview_settings");

    setMessage("Settings reset successfully!");

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const handleClearQuestions = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete all questions?"
    );

    if (!confirmDelete) return;

    localStorage.removeItem("interview_questions");

    window.dispatchEvent(new Event("questionsUpdated"));

    setMessage("All questions deleted successfully!");

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[var(--text)]">
          Settings
        </h1>

        <p className="mt-1 text-sm text-[var(--text-muted)]">
          Manage your profile and application preferences
        </p>
      </div>

      {/* Success Message */}
      {message && (
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--success)]">
          {message}
        </div>
      )}

      {/* Profile Settings */}
      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)]">
        <div className="flex items-center gap-3 border-b border-[var(--border)] p-5">
          <div className="rounded-lg bg-[var(--surface-hover)] p-2">
            <User size={20} className="text-[var(--primary)]" />
          </div>

          <div>
            <h2 className="font-semibold text-[var(--text)]">
              Profile
            </h2>

            <p className="text-sm text-[var(--text-muted)]">
              Update your personal information
            </p>
          </div>
        </div>

        <div className="grid gap-5 p-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--text)]">
              Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary)]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--text)]">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary)]"
            />
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)]">
        <div className="flex items-center gap-3 border-b border-[var(--border)] p-5">
          <div className="rounded-lg bg-[var(--surface-hover)] p-2">
            <Bell size={20} className="text-[var(--primary)]" />
          </div>

          <div>
            <h2 className="font-semibold text-[var(--text)]">
              Preferences
            </h2>

            <p className="text-sm text-[var(--text-muted)]">
              Manage your application preferences
            </p>
          </div>
        </div>

        <div className="divide-y divide-[var(--border)]">
          {/* Notifications */}
          <div className="flex items-center justify-between gap-4 p-5">
            <div className="flex items-center gap-3">
              <Bell
                size={19}
                className="text-[var(--text-muted)]"
              />

              <div>
                <p className="font-medium text-[var(--text)]">
                  Notifications
                </p>

                <p className="text-sm text-[var(--text-muted)]">
                  Receive reminders and progress notifications
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setNotifications(!notifications)}
              className={`relative h-6 w-11 rounded-full transition ${
                notifications
                  ? "bg-[var(--primary)]"
                  : "bg-[var(--surface-hover)]"
              }`}
            >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                  notifications ? "left-6" : "left-1"
                }`}
              />
            </button>
          </div>

          {/* Dark Mode */}
          <div className="flex items-center justify-between gap-4 p-5">
            <div className="flex items-center gap-3">
              {darkMode ? (
                <Moon
                  size={19}
                  className="text-[var(--text-muted)]"
                />
              ) : (
                <Sun
                  size={19}
                  className="text-[var(--text-muted)]"
                />
              )}

              <div>
                <p className="font-medium text-[var(--text)]">
                  Dark Mode
                </p>

                <p className="text-sm text-[var(--text-muted)]">
                  Use dark theme for the application
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`relative h-6 w-11 rounded-full transition ${
                darkMode
                  ? "bg-[var(--primary)]"
                  : "bg-[var(--surface-hover)]"
              }`}
            >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                  darkMode ? "left-6" : "left-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)]">
        <div className="flex items-center gap-3 border-b border-[var(--border)] p-5">
          <div className="rounded-lg bg-[var(--surface-hover)] p-2">
            <Trash2 size={20} className="text-[var(--text-muted)]" />
          </div>

          <div>
            <h2 className="font-semibold text-[var(--text)]">
              Data Management
            </h2>

            <p className="text-sm text-[var(--text-muted)]">
              Manage your stored interview data
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-[var(--text)]">
              Clear All Questions
            </p>

            <p className="text-sm text-[var(--text-muted)]">
              Permanently remove all saved interview questions
            </p>
          </div>

          <button
            type="button"
            onClick={handleClearQuestions}
            className="flex items-center justify-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--surface-hover)]"
          >
            <Trash2 size={16} />
            Clear Questions
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-end gap-3">
        <button
          type="button"
          onClick={handleReset}
          className="flex items-center gap-2 rounded-lg border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--surface-hover)]"
        >
          <RotateCcw size={16} />
          Reset
        </button>

        <button
          type="button"
          onClick={handleSave}
          className="flex items-center gap-2 rounded-lg bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
        >
          <Save size={16} />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;