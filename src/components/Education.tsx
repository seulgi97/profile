"use client";

import { css } from "../../styled-system/css";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import GradientText from "./GradientText";

const educations = [
  {
    school: "한양사이버대학교",
    location: "서울",
    major: "해킹보안학과",
    status: "졸업예정",
    period: "2020.03 ~ 현재",
    icon: "🎓",
    color: "#9333ea",
  },
  {
    school: "수원과학대학교",
    location: "경기",
    major: "정보통신학과",
    status: "졸업",
    period: "2018.03 ~ 2020.02",
    icon: "📚",
    color: "#c084fc",
  },
  {
    school: "대진여자고등학교",
    location: "서울",
    major: null,
    status: "졸업",
    period: "2013.08 ~ 2016.02",
    icon: "🏫",
    color: "#e879f9",
  },
  {
    school: "양주고등학교",
    location: "경기",
    major: null,
    status: "전학",
    period: "2013.03 ~ 2013.08",
    icon: "📖",
    color: "#f3e8ff",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className={css({
        padding: { base: "80px 0", md: "120px 0" },
        position: "relative",
      })}
    >
      {/* Background decoration */}
      <div
        className={css({
          position: "absolute",
          top: "30%",
          right: "5%",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.06) 0%, transparent 70%)",
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
          <GradientText>Education</GradientText>
        </h2>
        <p
          className={css({
            textAlign: "center",
            color: "text.muted",
            fontSize: { base: "15px", md: "17px" },
            marginBottom: { base: "40px", md: "60px" },
          })}
        >
          끊임없는 배움의 여정
        </p>
      </ScrollReveal>

      <div
        className={css({
          maxWidth: "800px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: { base: "1fr", md: "1fr 1fr" },
          gap: { base: "20px", md: "24px" },
        })}
      >
        {educations.map((edu, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={css({
                padding: { base: "24px", md: "28px" },
                background: "white",
                borderRadius: "20px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                border: "1px solid",
                borderColor: "gray.200",
                position: "relative",
                overflow: "hidden",
                height: "100%",
                _hover: {
                  boxShadow: "0 20px 40px rgba(147, 51, 234, 0.1)",
                  borderColor: "primary.300",
                },
              })}
            >
              {/* Accent bar */}
              <div
                className={css({
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                })}
                style={{ background: edu.color }}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={css({
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                  fontSize: "24px",
                })}
                style={{ background: `${edu.color}20` }}
              >
                {edu.icon}
              </motion.div>

              {/* School name */}
              <h3
                className={css({
                  fontSize: { base: "18px", md: "20px" },
                  fontWeight: "700",
                  color: "text",
                  marginBottom: "4px",
                })}
              >
                {edu.school}
                <span
                  className={css({
                    fontSize: "14px",
                    color: "text.subtle",
                    fontWeight: "500",
                    marginLeft: "8px",
                  })}
                >
                  ({edu.location})
                </span>
              </h3>

              {/* Major if exists */}
              {edu.major && (
                <p
                  className={css({
                    fontSize: { base: "14px", md: "15px" },
                    marginBottom: "8px",
                  })}
                >
                  <GradientText>{edu.major}</GradientText>
                </p>
              )}

              {/* Period and Status */}
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginTop: "12px",
                })}
              >
                <span
                  className={css({
                    fontSize: "12px",
                    padding: "4px 10px",
                    background: "gray.100",
                    color: "text.muted",
                    borderRadius: "20px",
                    fontWeight: "500",
                  })}
                >
                  {edu.period}
                </span>
                <span
                  className={css({
                    fontSize: "12px",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontWeight: "600",
                    color: "white",
                  })}
                  style={{ background: edu.color }}
                >
                  {edu.status}
                </span>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
