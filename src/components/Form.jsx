import { useState } from "react";

const LOCAL_KEY = "institute_reviews_v1";

const emptyForm = {
  instituteName: "",
  address: "",
  institutePhone: "",
  syllabus: false,
  recentTech: false,
  infrastructure: "",
  overallReview: "",
  reviewerName: "",
  reviewerEmail: "",
  reviewerMobile: "",
};

const Form = () => {
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const validate = () => {
    if (!form.instituteName.trim()) return "Institute name is required.";
    if (!form.reviewerName.trim()) return "Reviewer name is required.";

    if (form.institutePhone && !/^\d{7,15}$/.test(form.institutePhone.trim()))
      return "Institute phone should be digits (7-15).";

    if (form.reviewerEmail && !/^\S+@\S+\.\S+$/.test(form.reviewerEmail))
      return "Reviewer email is invalid.";

    if (form.reviewerMobile && !/^\d{7,15}$/.test(form.reviewerMobile))
      return "Reviewer mobile should be digits (7-15).";

    return null;
  };


  const onSubmit = (e) => {
    e.preventDefault();

    const err = validate();
    if (err) {
      alert(err);
      return;
    }

    setSaving(true);

    try {
      const prev = JSON.parse(localStorage.getItem(LOCAL_KEY) || "[]");
      const id = Date.now().toString();

      const entry = {
        id,
        ...form,
        createdAt: new Date().toISOString(),
      };

      prev.unshift(entry);
      localStorage.setItem(LOCAL_KEY, JSON.stringify(prev));

      alert("Saved ✓");

      setForm({
        ...form,
        institutePhone: "",
        overallReview: "",
        reviewerName: "",
        reviewerEmail: "",
        reviewerMobile: "",
      });

      window.dispatchEvent(new Event("reviews-updated"));
    } catch (err) {
      console.error(err);
      alert("Could not save — check console.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <div className="w-full max-w-xl">
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Add Institute Review
          </h2>

          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">
                  Institute name *
                </span>
                <input
                  name="instituteName"
                  value={form.instituteName}
                  onChange={onChange}
                  className="mt-1 p-2 border rounded bg-gray-50"
                  placeholder="e.g. IIT Madras"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">
                  Institute phone
                </span>
                <input
                  name="institutePhone"
                  value={form.institutePhone}
                  onChange={onChange}
                  className="mt-1 p-2 border rounded bg-gray-50"
                  placeholder="digits only (optional)"
                />
              </label>

              <label className="flex flex-col md:col-span-2">
                <span className="text-sm font-medium text-gray-700">
                  Address
                </span>
                <input
                  name="address"
                  value={form.address}
                  onChange={onChange}
                  className="mt-1 p-2 border rounded bg-gray-50"
                  placeholder="Street, City, State..."
                />
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="syllabus"
                  checked={form.syllabus}
                  onChange={onChange}
                />
                <span className="text-sm text-gray-700">
                  Syllabus available
                </span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="recentTech"
                  checked={form.recentTech}
                  onChange={onChange}
                />
                <span className="text-sm text-gray-700">
                  Uses recent technologies
                </span>
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">
                  Infrastructure (short)
                </span>
                <input
                  name="infrastructure"
                  value={form.infrastructure}
                  onChange={onChange}
                  className="mt-1 p-2 border rounded bg-gray-50"
                />
              </label>

              <label className="flex flex-col md:col-span-2">
                <span className="text-sm font-medium text-gray-700">
                  Overall review
                </span>
                <textarea
                  name="overallReview"
                  value={form.overallReview}
                  onChange={onChange}
                  rows={3}
                  className="mt-1 p-2 border rounded bg-gray-50"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">
                  Reviewer name *
                </span>
                <input
                  name="reviewerName"
                  value={form.reviewerName}
                  onChange={onChange}
                  className="mt-1 p-2 border rounded bg-gray-50"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">
                  Reviewer email
                </span>
                <input
                  name="reviewerEmail"
                  value={form.reviewerEmail}
                  onChange={onChange}
                  className="mt-1 p-2 border rounded bg-gray-50"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">
                  Reviewer mobile
                </span>
                <input
                  name="reviewerMobile"
                  value={form.reviewerMobile}
                  onChange={onChange}
                  className="mt-1 p-2 border rounded bg-gray-50"
                />
              </label>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:scale-105 transition transform"
                disabled={saving}
              >
                {saving ? "Saving..." : "Register"}
              </button>

              <button
                type="button"
                className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
                onClick={() => setForm(emptyForm)}
              >
                Reset
              </button>

              <div className="ml-auto text-sm text-gray-500">
                Fields marked * are required
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
