import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is CareerForge AI free to use?",
    answer:
      "Yes. You can create an account and use the basic resume analysis features for free. Additional premium features may be introduced in the future.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "Currently CareerForge AI supports PDF resumes. Support for DOC and DOCX will be added in future updates.",
  },
  {
    question: "How accurate is the ATS score?",
    answer:
      "Our ATS analysis follows modern resume screening principles, including keyword optimization, formatting, readability, and content quality. While no ATS score can guarantee interview success, it provides valuable guidance for improvement.",
  },
  {
    question: "Is my resume stored securely?",
    answer:
      "Yes. Your uploaded resumes are securely stored, and your data is never shared with third parties without your permission.",
  },
  {
    question: "Can I analyze multiple resumes?",
    answer:
      "Absolutely. You can upload and manage multiple resumes from your dashboard after signing in.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-28">
      <div className="container-page mx-auto max-w-4xl">

        <div className="text-center">

          <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Everything you need to know before getting started with CareerForge AI.
          </p>

        </div>

        <div className="mt-14 space-y-4">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
              >

                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >

                  <span className="text-lg font-medium text-white">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown />
                  </motion.div>

                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden px-6 pb-6"
                    >
                      <p className="leading-7 text-zinc-400">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default FAQ;