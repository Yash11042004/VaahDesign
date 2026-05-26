import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { Send, MapPin, Phone, Mail } from "lucide-react";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z
    .string()
    .trim()
    .max(20, "Phone must be less than 20 characters")
    .optional()
    .or(z.literal("")),
  projectType: z.string().min(1, "Please select a project type"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);

    toast.success("Thank you! We'll be in touch shortly.", {
      description: `We received your enquiry, ${data.name}.`,
    });

    reset();
  };

  return (
    <section
      id="contact"
      className="py-32 px-8 md:px-16 bg-white border-t border-neutral-200"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-neutral-500 font-body font-light mb-4">
            Create your Signature Space with us
          </p>

          <h2 className="font-display text-3xl md:text-5xl font-light text-neutral-900 mb-6">
            Where your Vision takes Form
          </h2>

          <p className="text-sm text-neutral-600 font-body font-light max-w-xl mx-auto">
            From bespoke interiors to refined architectural experiences, we
            create timeless spaces defined by precision, elegance, and
            distinction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-10"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-rose-500 mt-1 shrink-0" />
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 font-body font-light mb-2">
                  Studio
                </p>
                <p className="text-sm text-neutral-600 font-body font-light leading-relaxed">
                  Venus Colony 2nd Street
                  <br />
                  POES Garden, Chennai 600018
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-rose-500 mt-1 shrink-0" />
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 font-body font-light mb-2">
                  Phone
                </p>
                <a
                  href="tel:+919600143286"
                  className="text-sm text-neutral-600 font-body font-light hover:text-rose-500 transition-colors"
                >
                  +91 9600143286
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-rose-500 mt-1 shrink-0" />
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-500 font-body font-light mb-2">
                  Email
                </p>
                <a
                  href="mailto:create@vaahdesign.com"
                  className="text-sm text-neutral-600 font-body font-light hover:text-rose-500 transition-colors"
                >
                  create@vaahdesign.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-3 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  {...register("name")}
                  placeholder="Full Name *"
                  className="w-full bg-transparent border-b border-neutral-300 pb-3 text-sm text-neutral-900 font-body font-light placeholder:text-neutral-400 focus:outline-none focus:border-rose-500 transition-colors duration-300"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-2 font-body">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email Address *"
                  className="w-full bg-transparent border-b border-neutral-300 pb-3 text-sm text-neutral-900 font-body font-light placeholder:text-neutral-400 focus:outline-none focus:border-rose-500 transition-colors duration-300"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-2 font-body">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                {...register("phone")}
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-transparent border-b border-neutral-300 pb-3 text-sm text-neutral-900 font-body font-light placeholder:text-neutral-400 focus:outline-none focus:border-rose-500 transition-colors duration-300"
              />

              <select
                {...register("projectType")}
                className="w-full bg-transparent border-b border-neutral-300 pb-3 text-sm text-neutral-900 font-body font-light focus:outline-none focus:border-rose-500 transition-colors duration-300 appearance-none cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled className="bg-white text-neutral-900">
                  Project Type *
                </option>
                <option
                  value="Commercial"
                  className="bg-white text-neutral-900"
                >
                  Commercial
                </option>
                <option value="F&B" className="bg-white text-neutral-900">
                  F&B
                </option>
                <option
                  value="Hospitality"
                  className="bg-white text-neutral-900"
                >
                  Hospitality
                </option>
                <option value="Education" className="bg-white text-neutral-900">
                  Education
                </option>
                <option
                  value="Residential"
                  className="bg-white text-neutral-900"
                >
                  Residential
                </option>
                <option
                  value="Healthcare"
                  className="bg-white text-neutral-900"
                >
                  Healthcare
                </option>
                <option value="Retail" className="bg-white text-neutral-900">
                  Retail
                </option>
                <option value="Product" className="bg-white text-neutral-900">
                  Product
                </option>
              </select>
            </div>

            <textarea
              {...register("message")}
              placeholder="Tell us about your project *"
              rows={4}
              className="w-full bg-transparent border-b border-neutral-300 pb-3 text-sm text-neutral-900 font-body font-light placeholder:text-neutral-400 focus:outline-none focus:border-rose-500 transition-colors duration-300 resize-none"
            />

            {errors.message && (
              <p className="text-xs text-red-500 mt-2 font-body">
                {errors.message.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-3 px-10 py-4 border border-rose-500 text-rose-500 text-xs tracking-[0.3em] uppercase font-body font-light hover:bg-rose-500 hover:text-white transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Enquire <Send size={14} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
