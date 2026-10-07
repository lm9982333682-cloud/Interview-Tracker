import { useState } from "react";
import {
  Camera,
  CheckCircle2,
  Cloud,
  Database,
  Download,
  FileDown,
  FileUp,
  HardDrive,
  Save,
  Settings as SettingsIcon,
  ShieldCheck,
  SlidersHorizontal,
  Trash2,
  Upload,
  UserRound,
} from "lucide-react";

const Settings = () => {
  const [displayName, setDisplayName] = useState("Alex Chen");
  const [email, setEmail] = useState("alex.chen@dev.io");
  const [targetRole, setTargetRole] = useState(
    "Full-Stack SWE @ Series B+"
  );
  const [targetDate, setTargetDate] = useState("2025-05-30");

  const [defaultStatus, setDefaultStatus] = useState("In Progress (Active)");
  const [questionsPerPage, setQuestionsPerPage] = useState(
    "25 entries (Recommended)"
  );
  const [difficulty, setDifficulty] = useState("Medium (Standard)");
  const [category, setCategory] = useState(
    "DSA (Data Structures & Algorithms)"
  );

  const handleSaveChanges = () => {
    console.log("Profile changes saved");
  };

  const handleSavePreferences = () => {
    console.log("Preferences saved");
  };

  return (
    <div className="space-y-6">
      {/* Page Heading */}
      <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
            Configuration Engine
            <span className="text-[var(--text-muted)]">/</span>
            <span className="text-[var(--text-muted)]">CONFIG.SYS.LOCAL</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            Settings
          </h1>

          <p className="mt-2 max-w-3xl text-sm text-[var(--text-muted)] sm:text-base">
            Manage your profile credentials, question tracker parameters,
            persistence quota, and system snapshots.
          </p>
        </div>

        {/* Runtime Status */}
        <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--surface-hover)] text-[var(--success)]">
            <Cloud size={19} />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--success)]">
              Runtime Offline-First
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              IndexedDB & LocalStorage Active
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.7fr)_minmax(320px,0.9fr)]">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          {/* Profile Settings */}
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--surface-hover)] text-[var(--primary)]">
                  <UserRound size={19} />
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-[var(--text)]">
                    Profile Settings
                  </h2>

                  <p className="mt-1 max-w-2xl text-sm text-[var(--text-muted)]">
                    Maintain identity context for portfolio sync and
                    personalized target mock interviews.
                  </p>
                </div>
              </div>

              <span className="hidden rounded-md bg-[var(--surface-hover)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--primary)] sm:block">
                Synced
              </span>
            </div>

            {/* Profile Preview */}
            <div className="mt-6 rounded-xl bg-[var(--bg)] p-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-hover)] text-2xl font-bold text-[var(--primary)]">
                    AC
                  </div>

                  <button
                    type="button"
                    className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--primary)] text-[var(--bg)] transition hover:opacity-90"
                  >
                    <Camera size={16} />
                  </button>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)]">
                    Alex Chen
                  </h3>

                  <p className="text-sm text-[var(--text-muted)]">
                    Targeting Senior SWE & Tech Lead Roles
                  </p>

                  <div className="mt-2 flex gap-2">
                    <button
                      type="button"
                      className="rounded-md bg-[var(--surface-hover)] px-3 py-1.5 text-xs font-semibold text-[var(--text)] transition hover:bg-[var(--border)]"
                    >
                      Replace Image
                    </button>

                    <button
                      type="button"
                      className="px-2 py-1.5 text-xs font-semibold text-[var(--success)]"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Form */}
            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              <FormField
                label="Display Name"
                meta="string"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />

              <FormField
                label="Email Address"
                meta="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <FormField
                label="Target Role"
                meta="position"
                value={targetRole}
                onChange={(e) => setTargetRole(e.target.value)}
              />

              <FormField
                label="Target / Offer Target Date"
                meta="iso-8601"
                type="date"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
              />
            </div>

            <div className="mt-6 flex flex-col gap-4 border-t border-[var(--border)] pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--success)]">
                <CheckCircle2 size={18} />
                All changes saved to system
              </div>

              <button
                type="button"
                onClick={handleSaveChanges}
                className="flex items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-6 py-3 text-sm font-bold text-[var(--bg)] transition hover:opacity-90"
              >
                <Save size={17} />
                Save Changes
              </button>
            </div>
          </section>

          {/* Tracker Preferences */}
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--surface-hover)] text-[var(--secondary)]">
                  <SlidersHorizontal size={19} />
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-[var(--text)]">
                    Tracker Preferences
                  </h2>

                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    Set system defaults for newly spawned problem sessions
                    and list telemetry.
                  </p>
                </div>
              </div>

              <div className="rounded-md bg-[var(--surface-hover)] px-3 py-2 text-xs font-bold uppercase tracking-wider text-[var(--secondary)]">
                ENV: PREFS_V1
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              <SelectField
                label="Default Question Status"
                value={defaultStatus}
                onChange={(e) => setDefaultStatus(e.target.value)}
                options={[
                  "Pending",
                  "In Queue",
                  "In Progress (Active)",
                  "Done",
                  "Solved",
                ]}
              />

              <SelectField
                label="Questions Per Page"
                value={questionsPerPage}
                onChange={(e) => setQuestionsPerPage(e.target.value)}
                options={[
                  "10 entries",
                  "25 entries (Recommended)",
                  "50 entries",
                  "100 entries",
                ]}
              />
            </div>

            {/* Difficulty */}
            <div className="mt-6">
              <div className="mb-3 flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--text)]">
                  Default Difficulty Preset
                </label>
              </div>

              <div className="grid grid-cols-1 gap-2 rounded-xl bg-[var(--bg)] p-2 sm:grid-cols-3">
                {[
                  "Easy (Tier 1)",
                  "Medium (Standard)",
                  "Hard (Advanced)",
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setDifficulty(item)}
                    className={`rounded-lg px-3 py-3 text-sm font-semibold transition ${
                      difficulty === item
                        ? "bg-[var(--surface-hover)] text-[var(--text)]"
                        : "text-[var(--text-muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Category */}
            <div className="mt-6">
              <SelectField
                label="Default Category Filter"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                options={[
                  "DSA (Data Structures & Algorithms)",
                  "Git & GitHub",
                  "Technical Interview",
                  "Machine Coding",
                ]}
              />
            </div>

            <div className="mt-6 flex justify-end border-t border-[var(--border)] pt-5">
              <button
                type="button"
                onClick={handleSavePreferences}
                className="flex items-center gap-2 rounded-lg bg-[var(--surface-hover)] px-5 py-3 text-sm font-bold text-[var(--text)] transition hover:bg-[var(--border)]"
              >
                <SlidersHorizontal size={17} />
                Save Preferences
              </button>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          {/* Storage Status */}
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Database className="text-[var(--secondary)]" size={21} />

                <h2 className="text-xl font-semibold text-[var(--text)]">
                  Local Storage Status
                </h2>
              </div>

              <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--success)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
                Synchronized
              </span>
            </div>

            {/* Quota */}
            <div className="mt-6 rounded-xl bg-[var(--bg)] p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  Quota Allocation
                </span>

                <span className="font-mono text-sm font-bold text-[var(--success)]">
                  142 KB / 5.0 MB (2.8%)
                </span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-[var(--surface-hover)]">
                <div className="h-full w-[3%] rounded-full bg-[var(--success)]" />
              </div>

              <div className="mt-3 flex justify-between text-xs text-[var(--text-muted)]">
                <span>Allocated: IndexedDB Base</span>
                <span>Available: ~4,980 KB</span>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <StorageRow
                icon={<HardDrive size={16} />}
                label="Storage Engine"
                value="Browser LocalStorage (Offline First)"
              />

              <StorageRow
                icon={<Database size={16} />}
                label="Indexed Records"
                value="84 questions logged"
              />

              <StorageRow
                icon={<CheckCircle2 size={16} />}
                label="Last Snapshot"
                value="Today at 04:12 PM"
              />

              <StorageRow
                icon={<SettingsIcon size={16} />}
                label="Schema Revision"
                value="v2.4.0 (Compatible)"
                success
              />
            </div>

            <div className="mt-5 flex flex-col gap-3 border-t border-[var(--border)] pt-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="flex items-center gap-2 text-xs text-[var(--success)]">
                <CheckCircle2 size={15} />
                Hash: SHA-256 Validated
              </span>

              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-lg bg-[var(--surface-hover)] px-4 py-2 text-xs font-bold text-[var(--text)] transition hover:bg-[var(--border)]"
              >
                <ShieldCheck size={15} />
                Verify Integrity
              </button>
            </div>
          </section>

          {/* Data Management */}
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
            <div className="flex gap-3">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--surface-hover)] text-[var(--primary)]">
                <HardDrive size={19} />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--text)]">
                  Data Management
                </h2>

                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  Self-sovereign offline backups, migrations, and storage
                  lifecycle.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {/* Export */}
              <DataAction
                icon={<Download size={20} />}
                title="Export Questions"
                description="Export all 84 questions as structured JSON or CSV format"
                buttonText="Export (.json)"
              />

              {/* Import */}
              <DataAction
                icon={<Upload size={20} />}
                title="Import Questions"
                description="Restore records from previous JSON export file"
                buttonText="Restore"
                secondary
              />

              {/* Clear */}
              <div className="rounded-xl border border-transparent bg-[var(--bg)] p-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--surface-hover)] text-[var(--text)]">
                      <Trash2 size={19} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-[var(--text)]">
                        Clear All Questions
                      </h3>

                      <p className="mt-1 max-w-xs text-xs text-[var(--text-muted)]">
                        Permanently erase all logged questions from browser
                        storage
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="rounded-lg bg-[var(--surface-hover)] px-4 py-2.5 text-xs font-bold text-[var(--text)] transition hover:bg-[var(--border)]"
                  >
                    Erase Data
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------- */
/* Reusable Components */
/* -------------------------------- */

const FormField = ({
  label,
  meta,
  value,
  onChange,
  type = "text",
}) => {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <label className="text-xs font-bold uppercase tracking-wider text-[var(--text)]">
          {label}
        </label>

        <span className="text-[10px] font-mono text-[var(--text-muted)]">
          {meta}
        </span>
      </div>

      <input
        type={type}
        value={value}
        onChange={onChange}
        className="h-11 w-full rounded-lg border border-transparent bg-[var(--bg)] px-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--primary)]"
      />
    </div>
  );
};

const SelectField = ({
  label,
  value,
  onChange,
  options,
}) => {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[var(--text)]">
        {label}
      </label>

      <select
        value={value}
        onChange={onChange}
        className="h-11 w-full rounded-lg border border-transparent bg-[var(--bg)] px-4 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary)]"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const StorageRow = ({
  icon,
  label,
  value,
  success = false,
}) => {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg bg-[var(--bg)] px-3 py-3">
      <div className="flex min-w-0 items-center gap-2 text-sm text-[var(--text-muted)]">
        {icon}
        <span>{label}</span>
      </div>

      <span
        className={`max-w-[55%] text-right text-sm font-semibold ${
          success
            ? "text-[var(--success)]"
            : "text-[var(--text)]"
        }`}
      >
        {value}
      </span>
    </div>
  );
};

const DataAction = ({
  icon,
  title,
  description,
  buttonText,
  secondary = false,
}) => {
  return (
    <div className="rounded-xl bg-[var(--bg)] p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--surface-hover)] text-[var(--primary)]">
            {icon}
          </div>

          <div>
            <h3 className="font-semibold text-[var(--text)]">
              {title}
            </h3>

            <p className="mt-1 max-w-xs text-xs text-[var(--text-muted)]">
              {description}
            </p>
          </div>
        </div>

        <button
          type="button"
          className={`rounded-lg px-4 py-2.5 text-xs font-bold transition ${
            secondary
              ? "bg-[var(--surface-hover)] text-[var(--text)] hover:bg-[var(--border)]"
              : "bg-[var(--surface-hover)] text-[var(--text)] hover:bg-[var(--border)]"
          }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Settings;