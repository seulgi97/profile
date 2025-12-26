"use client";

import { css } from "../../styled-system/css";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import GradientText from "./GradientText";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "8", label: "Companies" },
  { value: "6+", label: "Major Projects" },
  { value: "70%", label: "Cost Reduction" },
];

const coreSkills = [
  {
    icon: "K8s",
    title: "Kubernetes",
    desc: "클러스터 구축/운영, 네트워크/보안",
  },
  {
    icon: "CI",
    title: "CI/CD",
    desc: "GitHub Actions, 배포 자동화",
  },
  {
    icon: "AI",
    title: "AI Service",
    desc: "음원/오디오 AI 상용 배포",
  },
  {
    icon: "E2E",
    title: "End-to-End",
    desc: "기획부터 운영까지 단독 개발",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className={css({
        padding: { base: "80px 0", md: "120px 0" },
        position: "relative",
      })}
    >
      <ScrollReveal>
        <h2
          className={css({
            fontSize: { base: "32px", md: "44px" },
            fontWeight: "bold",
            marginBottom: { base: "16px", md: "20px" },
            textAlign: "center",
          })}
        >
          About <GradientText>Me</GradientText>
        </h2>
        <p
          className={css({
            textAlign: "center",
            color: "text.muted",
            fontSize: { base: "15px", md: "17px" },
            maxWidth: "600px",
            margin: "0 auto",
            marginBottom: { base: "40px", md: "60px" },
          })}
        >
          인프라부터 백엔드까지, 제품의 모든 레이어를 이해하는 엔지니어
        </p>
      </ScrollReveal>

      {/* Stats */}
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: { base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
          gap: { base: "16px", md: "24px" },
          marginBottom: { base: "60px", md: "80px" },
        })}
      >
        {stats.map((stat, index) => (
          <ScrollReveal key={stat.label} delay={index * 0.1}>
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className={css({
                textAlign: "center",
                padding: { base: "24px 16px", md: "32px 24px" },
                background: "white",
                borderRadius: "20px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                border: "1px solid",
                borderColor: "gray.200",
                cursor: "pointer",
                transition: "all 0.3s",
                _hover: {
                  boxShadow: "0 20px 40px rgba(147, 51, 234, 0.1)",
                  borderColor: "primary.300",
                },
              })}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                className={css({
                  fontSize: { base: "36px", md: "48px" },
                  fontWeight: "800",
                  marginBottom: "8px",
                })}
              >
                <GradientText>{stat.value}</GradientText>
              </motion.div>
              <div
                className={css({
                  fontSize: { base: "12px", md: "14px" },
                  color: "text.muted",
                  fontWeight: "500",
                })}
              >
                {stat.label}
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      {/* Core Skills */}
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: { base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
          gap: { base: "16px", md: "20px" },
        })}
      >
        {coreSkills.map((skill, index) => (
          <ScrollReveal key={skill.title} delay={index * 0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={css({
                padding: { base: "24px", md: "28px" },
                background: "white",
                borderRadius: "20px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                border: "1px solid",
                borderColor: "gray.200",
                textAlign: "center",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                _hover: {
                  boxShadow: "0 20px 40px rgba(147, 51, 234, 0.15)",
                  borderColor: "primary.400",
                },
              })}
            >
              {/* Glow effect */}
              <div
                className={css({
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100px",
                  height: "100px",
                  background: "radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)",
                  pointerEvents: "none",
                })}
              />

              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={css({
                  width: "56px",
                  height: "56px",
                  margin: "0 auto 16px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(192, 132, 252, 0.1))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: "800",
                  border: "2px solid",
                  borderColor: "primary.200",
                })}
              >
                <GradientText>{skill.icon}</GradientText>
              </motion.div>

              <h3
                className={css({
                  fontSize: { base: "16px", md: "18px" },
                  fontWeight: "700",
                  color: "text",
                  marginBottom: "8px",
                })}
              >
                {skill.title}
              </h3>
              <p
                className={css({
                  fontSize: { base: "13px", md: "14px" },
                  color: "text.muted",
                  lineHeight: "1.5",
                })}
              >
                {skill.desc}
              </p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
