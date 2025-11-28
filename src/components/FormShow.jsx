
import React, { useEffect, useState } from "react";

const LOCAL_KEY = "institute_reviews_v1";

const FormShow = () => {
  const [items, setItems] = useState([]);

  const load = () => {
    try {
      const raw = localStorage.getItem(LOCAL_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      setItems(Array.isArray(arr) ? arr : []);
    } catch (err) {
      console.error("Failed to parse localStorage", err);
      setItems([]);
    }
  };

  useEffect(() => {
    load();
    const onUpdate = () => load();
    window.addEventListener("reviews-updated", onUpdate);
    window.addEventListener("storage", onUpdate);
    return () => {
      window.removeEventListener("reviews-updated", onUpdate);
      window.removeEventListener("storage", onUpdate);
    };
  }, []);

  if (!items.length) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center py-12">
          <div className="inline-block bg-gradient-to-r from-violet-400 to-indigo-500 text-white px-6 py-4 rounded-2xl shadow-2xl">
            <h3 className="text-lg font-semibold">No reviews yet</h3>
            <p className="text-sm opacity-90">Submit a review from the form to see the saved data here.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
    <div className="px-6 py-8 flex flex-col items-center space-y-6">
      {items.map((it) => (
        <article
          key={it.id}
          className="w-full max-w-3xl overflow-hidden rounded-3xl p-8 shadow-2xl bg-gradient-to-br from-white to-slate-50"
        >
         
          <div className="space-y-4">
            <header>
              <h2 className="text-2xl font-extrabold text-gray-900">{it.instituteName || "Unnamed Institute"}</h2>
              {it.address ? <p className="mt-1 text-sm text-gray-600">{it.address}</p> : null}
            </header>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3 items-center">
                  <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm">
                    {it.syllabus ? "Syllabus ✓" : "Syllabus —"}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm">
                    {it.recentTech ? "Recent Tech ✓" : "Recent Tech —"}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
                    {it.infrastructure || "Infrastructure —"}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm text-gray-500">Institute Phone</h4>
                  <div className="text-md font-medium text-gray-700">{it.institutePhone || "—"}</div>
                </div>

                <div>
                  <h4 className="text-sm text-gray-500">Overall Review</h4>
                  <p className="mt-1 text-gray-700">{it.overallReview || <em className="text-gray-400">No review text provided.</em>}</p>
                </div>
              </div>

              <aside className="space-y-4">
                <div>
                  <h4 className="text-sm text-gray-500">Reviewer</h4>
                  <div className="mt-1">
                    <div className="text-md font-semibold text-gray-800">{it.reviewerName || "Anonymous"}</div>
                    <div className="text-sm text-gray-600 mt-1">{it.reviewerEmail || it.reviewerMobile || "—"}</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm text-gray-500">Contact</h4>
                  <div className="mt-1 text-gray-700">
                    <div>Phone: {it.reviewerMobile || "—"}</div>
                    <div className="mt-1">Email: {it.reviewerEmail || "—"}</div>
                  </div>
                </div>

               
              </aside>
            </div>
          </div>
        </article>
      ))}
    </div>
    </>
  );
};

export default FormShow;
