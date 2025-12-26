"use client";

import { css } from "../../styled-system/css";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const contacts = [
  {
    label: "Email",
    value: "lsg970@naver.com",
    href: "mailto:lsg970@naver.com",
    icon: "@",
  },
  {
    label: "GitHub",
    value: "github.com/seulgi97",
    href: "https://github.com/seulgi97",
    icon: "GH",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className={css({
        padding: { base: "80px 0", md: "120px 0" },
        position: "relative",
      })}
    >
      {/* Background decoration */}
      <div
        className={css({
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        })}
      />

      <ScrollReveal>
        <h2
          className={css({
            fontSize: { base: "32px", md: "44px" },
            fontWeight: "bold",
            marginBottom: { base: "16px", md: "20px" },
            textAlign: "center",
          })}
        >
          <span
            className={css({
              background: "linear-gradient(135deg, #9333ea 0%, #c084fc 50%, #e879f9 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            })}
          >
            Contact
          </span>
        </h2>
        <p
          className={css({
            textAlign: "center",
            color: "text.muted",
            fontSize: { base: "15px", md: "17px" },
            maxWidth: "500px",
            margin: "0 auto",
            marginBottom: { base: "40px", md: "60px" },
            lineHeight: "1.8",
          })}
        >
          새로운 기회와 협업에 열려있습니다.
          <br />
          언제든 연락 주세요!
        </p>
      </ScrollReveal>

      <div
        className={css({
          display: "flex",
          flexDirection: { base: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { base: "20px", md: "32px" },
          maxWidth: "600px",
          margin: "0 auto",
        })}
      >
        {contacts.map((contact, index) => (
          <ScrollReveal key={contact.label} delay={index * 0.15}>
            <motion.a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={css({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: { base: "32px 40px", md: "40px 56px" },
                background: "white",
                borderRadius: "24px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                border: "1px solid",
                borderColor: "gray.200",
                textDecoration: "none",
                width: { base: "100%", md: "auto" },
                minWidth: { md: "220px" },
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s",
                _hover: {
                  boxShadow: "0 25px 50px rgba(147, 51, 234, 0.15)",
                  borderColor: "primary.400",
                },
              })}
            >
              {/* Glow background */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className={css({
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(147, 51, 234, 0.03), rgba(192, 132, 252, 0.03))",
                  pointerEvents: "none",
                })}
              />

              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className={css({
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #9333ea, #c084fc)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "white",
                  boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)",
                })}
              >
                {contact.icon}
              </motion.div>

              <span
                className={css({
                  fontSize: "14px",
                  background: "linear-gradient(135deg, #9333ea, #c084fc)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "700",
                  marginBottom: "8px",
                })}
              >
                {contact.label}
              </span>
              <span
                className={css({
                  fontSize: { base: "14px", md: "15px" },
                  color: "text.muted",
                })}
              >
                {contact.value}
              </span>
            </motion.a>
          </ScrollReveal>
        ))}
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={css({
          marginTop: { base: "80px", md: "120px" },
          paddingTop: "32px",
          borderTop: "1px solid",
          borderTopColor: "gray.200",
          textAlign: "center",
        })}
      >
        <motion.p
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className={css({
            fontSize: "14px",
            background: "linear-gradient(90deg, #9333ea, #c084fc, #e879f9, #c084fc, #9333ea)",
            backgroundSize: "200% auto",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "500",
          })}
        >
          © 2025 이슬기. Built with Next.js & Panda CSS
        </motion.p>
      </motion.footer>
    </section>
  );
}
