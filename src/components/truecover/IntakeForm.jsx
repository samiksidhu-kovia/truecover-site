import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { CheckCircle2, Loader2 } from "lucide-react";

const initialForm = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  date_of_birth: "",
  gender: "",
  coverage_type: "",
  has_existing_coverage: "",
  notes: "",
};

export default function IntakeForm() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const set = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const validate = () => {
    const errs = {};
    if (!form.first_name.trim()) errs.first_name = "Required";
    if (!form.last_name.trim()) errs.last_name = "Required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Valid email required";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10)
      errs.phone = "Valid phone required";
    if (!form.date_of_birth) errs.date_of_birth = "Required";
    if (!form.gender) errs.gender = "Required";
    if (!form.coverage_type) errs.coverage_type = "Required";
    if (!form.has_existing_coverage) errs.has_existing_coverage = "Required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await base44.entities.Inquiry.create(form);
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="get-covered" className="bg-navy py-20 md:py-28">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-10 md:p-14">
            <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-green" />
            </div>
            <h3 className="font-poppins font-semibold text-2xl text-navy mb-3">
              Thank You!
            </h3>
            <p className="font-inter text-base text-navy/60">
              We've received your information. A member of the TrueCover team will reach out to you shortly to discuss your coverage options.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const inputBase =
    "w-full bg-light-gray border border-gray-200 rounded-lg px-4 py-3 font-inter text-base text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-green/40 focus:border-green transition-colors";
  const labelBase = "block font-inter text-sm font-medium text-navy mb-1.5";
  const errorBase = "font-inter text-xs text-red-500 mt-1";

  return (
    <section id="get-covered" className="bg-navy py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white">
            Ready to Get Covered?
          </h2>
          <p className="mt-4 font-inter text-base md:text-lg text-white/60">
            Fill out the form below and we'll reach out to discuss your coverage options. No obligations, no pressure.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
          {/* Row 1 */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={labelBase}>First Name</label>
              <input value={form.first_name} onChange={set("first_name")} className={inputBase} placeholder="John" />
              {errors.first_name && <p className={errorBase}>{errors.first_name}</p>}
            </div>
            <div>
              <label className={labelBase}>Last Name</label>
              <input value={form.last_name} onChange={set("last_name")} className={inputBase} placeholder="Doe" />
              {errors.last_name && <p className={errorBase}>{errors.last_name}</p>}
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid sm:grid-cols-2 gap-5 mt-5">
            <div>
              <label className={labelBase}>Email Address</label>
              <input type="email" value={form.email} onChange={set("email")} className={inputBase} placeholder="john@example.com" />
              {errors.email && <p className={errorBase}>{errors.email}</p>}
            </div>
            <div>
              <label className={labelBase}>Phone Number</label>
              <input type="tel" value={form.phone} onChange={set("phone")} className={inputBase} placeholder="(555) 123-4567" />
              {errors.phone && <p className={errorBase}>{errors.phone}</p>}
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid sm:grid-cols-2 gap-5 mt-5">
            <div>
              <label className={labelBase}>Date of Birth</label>
              <input type="date" value={form.date_of_birth} onChange={set("date_of_birth")} className={inputBase} />
              {errors.date_of_birth && <p className={errorBase}>{errors.date_of_birth}</p>}
            </div>
            <div>
              <label className={labelBase}>Gender</label>
              <select value={form.gender} onChange={set("gender")} className={inputBase}>
                <option value="">Select...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && <p className={errorBase}>{errors.gender}</p>}
            </div>
          </div>

          {/* Row 4 */}
          <div className="mt-5">
            <label className={labelBase}>What type of coverage are you interested in?</label>
            <select value={form.coverage_type} onChange={set("coverage_type")} className={inputBase}>
              <option value="">Select...</option>
              <option value="Life Insurance">Life Insurance</option>
              <option value="Property & Casualty">Property & Casualty</option>
              <option value="Financial Planning">Financial Planning</option>
              <option value="Not Sure / Tell Me More">Not Sure / Tell Me More</option>
            </select>
            {errors.coverage_type && <p className={errorBase}>{errors.coverage_type}</p>}
          </div>

          {/* Row 5 */}
          <div className="mt-5">
            <label className={labelBase}>Do you currently have any life insurance coverage?</label>
            <select value={form.has_existing_coverage} onChange={set("has_existing_coverage")} className={inputBase}>
              <option value="">Select...</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not Sure">Not Sure</option>
            </select>
            {errors.has_existing_coverage && <p className={errorBase}>{errors.has_existing_coverage}</p>}
          </div>

          {/* Row 6 */}
          <div className="mt-5">
            <label className={labelBase}>Anything else we should know? <span className="text-navy/40 font-normal">(optional)</span></label>
            <textarea
              value={form.notes}
              onChange={set("notes")}
              rows={3}
              className={inputBase + " resize-none"}
              placeholder="Tell us anything that might help us serve you better..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-8 font-inter font-semibold text-base bg-green text-white py-4 rounded-lg hover:bg-green/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {submitting && <Loader2 className="w-5 h-5 animate-spin" />}
            {submitting ? "Submitting..." : "Submit My Information"}
          </button>

          <p className="mt-4 font-inter text-xs text-navy/40 text-center">
            Your information is secure and will only be used to discuss coverage options with you.
          </p>
        </form>
      </div>
    </section>
  );
}