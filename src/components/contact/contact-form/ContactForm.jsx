import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "../../../services/email";

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString(),
        reply_to: formData.email,
      });

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  const inputClasses =
    "w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 " +
    "focus:ring-2 focus:ring-indigo-500 focus:border-transparent " +
    "bg-white dark:bg-gray-700 text-gray-900 dark:text-white";

  const labelClasses =
    "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2";

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="lg:col-span-2"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className={labelClasses}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClasses}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className={labelClasses}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="message" className={labelClasses}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className={inputClasses}
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500
                     text-white font-medium rounded-lg
                     hover:from-indigo-600 hover:to-purple-600
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                     transform hover:scale-[1.02] transition-all duration-300
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {submitStatus && (
            <div
              className={`text-center p-3 rounded-lg ${
                submitStatus === "success"
                  ? "bg-green-100 text-green-700 dark:bg-green-800/30 dark:text-green-400"
                  : "bg-red-100 text-red-700 dark:bg-red-800/30 dark:text-red-400"
              }`}
            >
              {submitStatus === "success"
                ? "Message sent successfully!"
                : "Failed to send message. Please try again."}
            </div>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
