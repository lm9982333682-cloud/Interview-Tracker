import { useState } from "react";
import {
  X,
  Link as LinkIcon,
  Tag,
  FileText,
  ChevronDown,
} from "lucide-react";

const AddQuestionModal = ({ isOpen, onClose, onSave }) => {
 
 
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "DSA",
    difficulty: "Medium",
    status: "Pending",
    tags: "",
    referenceLink: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      return;
    }

    if (onSave) {
      onSave(formData);
    }

    setFormData({
      title: "",
      description: "",
      category: "DSA",
      difficulty: "Medium",
      status: "Pending",
      tags: "",
      referenceLink: "",
      notes: "",
    });

    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div onClick={onClose} className="fixed  inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm">
      {/* Modal */}
      <div onClick={e=>e.stopPropagation()} className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[var(--border)] px-5 py-4 sm:px-6">
          <div>
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
              Question Database
            </p>

            <h2 className="text-xl font-bold text-[var(--text)] sm:text-2xl">
              Add New Question
            </h2>

            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Add a new question to your interview preparation tracker.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 cursor-pointer w-9 shrink-0 items-center justify-center rounded-lg text-[var(--text-muted)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <form
          onSubmit={handleSubmit}
          className="overflow-y-auto px-5 py-5 sm:px-6"
        >
          <div className="space-y-5">
            {/* Question Title */}
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[var(--text)]">
                Question Title
                <span className="ml-1 text-[var(--secondary)]">*</span>
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Two Sum"
                className="h-11 w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--primary)]"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[var(--text)]">
                Concise Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                placeholder="Briefly describe the problem or interview concept..."
                className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--primary)]"
              />
            </div>

            {/* Category + Difficulty */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Category */}
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[var(--text)]">
                  Category
                  <span className="ml-1 text-[var(--secondary)]">*</span>
                </label>

                <div className="relative">
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="h-11 w-full appearance-none rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 pr-10 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary)]"
                  >
                    <option value="DSA">DSA</option>
                    <option value="Git & GitHub">Git & GitHub</option>
                    <option value="Technical Interview">
                      Technical Interview
                    </option>
                    <option value="Machine Coding">Machine Coding</option>
                  </select>

                  <ChevronDown
                    size={17}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
                  />
                </div>
              </div>

              {/* Difficulty */}
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[var(--text)]">
                  Difficulty
                  <span className="ml-1 text-[var(--secondary)]">*</span>
                </label>

                <div className="relative">
                  <select
                    name="difficulty"
                    value={formData.difficulty}
                    onChange={handleChange}
                    className="h-11 w-full appearance-none rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 pr-10 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary)]"
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>

                  <ChevronDown
                    size={17}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
                  />
                </div>
              </div>
            </div>

            {/* Status */}
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[var(--text)]">
                Current Status
              </label>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                {[
                  "Pending",
                  "In Queue",
                  "Active",
                  "Working",
                  "Done",
                ].map((status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        status,
                      }))
                    }
                    className={`rounded-lg border px-3 py-2.5 text-xs font-semibold transition ${
                      formData.status === status
                        ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--bg)]"
                        : "border-[var(--border)] bg-[var(--bg)] text-[var(--text-muted)] hover:border-[var(--primary)] hover:text-[var(--text)]"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[var(--text)]">
                Topic Tags
              </label>

              <div className="relative">
                <Tag
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
                />

                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="array, hashmap, two-pointer"
                  className="h-11 w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] pl-10 pr-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--primary)]"
                />
              </div>

              <p className="mt-1.5 text-[11px] text-[var(--text-muted)]">
                Separate multiple tags with commas.
              </p>
            </div>

            {/* Reference Link */}
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[var(--text)]">
                Reference Link
              </label>

              <div className="relative">
                <LinkIcon
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
                />

                <input
                  type="url"
                  name="referenceLink"
                  value={formData.referenceLink}
                  onChange={handleChange}
                  placeholder="https://leetcode.com/problems/..."
                  className="h-11 w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] pl-10 pr-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--primary)]"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[var(--text)]">
                Notes
              </label>

              <div className="relative">
                <FileText
                  size={17}
                  className="absolute left-3 top-3 text-[var(--text-muted)]"
                />

                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Add your approach, mistakes, or interview notes..."
                  className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--bg)] py-3 pl-10 pr-4 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--primary)]"
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex flex-col-reverse gap-3 border-t border-[var(--border)] pt-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)] px-5 py-2.5 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--primary)]"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-[var(--primary)] px-6 py-2.5 text-sm font-bold text-[var(--bg)] transition hover:opacity-90"
            >
              Save Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQuestionModal;