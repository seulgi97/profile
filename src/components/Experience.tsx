"use client";

import { css } from "../../styled-system/css";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    company: "Episode",
    position: "창업자(대표) · 단독 개발",
    period: "2025 - 현재",
    highlight: "2025 예비창업패키지 선정",
    description: [
      '"마침" 서비스 기획 → 설계 → 개발 → 배포 → 운영 전 과정 단독 수행',
      "백엔드/API 및 운영 인프라 구성 (배포 자동화/운영 안정화)",
      "사용자 흐름에 맞춘 기능 정의 및 반복 개선",
    ],
    color: "#9333ea",
  },
  {
    company: "Emotionwave",
    position: "뮤타셀 개발 선임 · 백엔드/DevOps",
    period: "2024.06 - 2025.06",
    description: [
      "모바일 게임 백엔드 서버 구성",
      "SaaS OAuth 서비스 구성 (소셜 로그인 기반 인증/인가)",
      "GitHub Actions 기반 CI/CD 구성 및 AWS ECS 배포",
      "음원 AI 서비스 구축 및 배포",
    ],
    color: "#c084fc",
  },
  {
    company: "메타빌드",
    position: "음원AI팀 DevOps 매니저",
    period: "2024.01 - 2024.03",
    highlight: "인프라 비용 약 70% 절감",
    description: [
      "NCP → Azure 클라우드 마이그레이션",
      "온프레미스 음원 생성 AI 엔진 구축",
      "Azure DevOps + AKS 기반 CI/CD 구축",
    ],
    color: "#7c3aed",
  },
  {
    company: "칠로엔",
    position: "개발팀 DevOps 매니저",
    period: "2023.08 - 2024.01",
    description: [
      "음원 AI 서비스 Naver Cloud 환경 구축",
      "Kubernetes 기반 MSA 마이그레이션",
      "SaaS 과제 완수 (클라우드 인증)",
    ],
    color: "#a855f7",
  },
  {
    company: "시오익스지안",
    position: "개발팀 대리",
    period: "2022.11 - 2023.04",
    description: [
      "시그널 거래소 유지보수 및 운영",
      "Django 기반 결제 서비스 개발",
      "거래소 성능 최적화 및 보안 점검",
    ],
    color: "#d8b4fe",
  },
  {
    company: "엔에프이엑스",
    position: "개발팀 대리",
    period: "2022.07 - 2022.11",
    description: [
      "카자흐스탄 거래소 개발",
      "AWS 기반 거래소 인프라 구축 및 운영",
    ],
    color: "#e9d5ff",
  },
  {
    company: "에아이스톤",
    position: "분산스토리지 솔루션 본부 주임",
    period: "2021.12 - 2022.06",
    description: [
      "파일코인(Filecoin) 채굴 솔루션 개발",
      "채굴 장비 운영 및 실시간 모니터링 체계 구축",
    ],
    color: "#f3e8ff",
  },
  {
    company: "아임에버",
    position: "국내광통신망 사원",
    period: "2020.01 - 2021.12",
    description: [
      "삼성 사내망 장비 운영 및 인프라 유지보수",
      "모니터링 기반 사전 대응 및 야간 점검",
    ],
    color: "#faf5ff",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
          <span
            className={css({
              background: "linear-gradient(135deg, #9333ea 0%, #c084fc 50%, #e879f9 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            })}
          >
            Experience
          </span>
        </h2>
        <p
          className={css({
            textAlign: "center",
            color: "text.muted",
            fontSize: { base: "15px", md: "17px" },
            marginBottom: { base: "40px", md: "60px" },
          })}
        >
          5년간의 성장 여정
        </p>
      </ScrollReveal>

      <div
        className={css({
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
        })}
      >
        {/* Timeline line */}
        <div
          className={css({
            position: "absolute",
            left: "20px",
            top: 0,
            bottom: 0,
            width: "2px",
            background: "linear-gradient(180deg, #9333ea, #c084fc, #e879f9, #f3e8ff)",
            display: { base: "block", md: "none" },
          })}
        />

        {experiences.map((exp, index) => (
          <ScrollReveal
            key={index}
            delay={index * 0.1}
            direction="up"
          >
            <div
              className={css({
                display: "flex",
                justifyContent: "flex-start",
                paddingLeft: { base: "50px", md: "0" },
                marginBottom: "24px",
                position: "relative",
              })}
            >
              {/* Timeline dot - mobile only */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className={css({
                  position: "absolute",
                  left: "12px",
                  top: "24px",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: "white",
                  border: "4px solid",
                  borderColor: "primary.500",
                  zIndex: 1,
                  boxShadow: "0 0 20px rgba(147, 51, 234, 0.4)",
                  display: { base: "block", md: "none" },
                })}
              />

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={css({
                  width: "100%",
                  padding: { base: "24px", md: "28px" },
                  background: "white",
                  borderRadius: "20px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                  border: "1px solid",
                  borderColor: "gray.200",
                  position: "relative",
                  overflow: "hidden",
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
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "4px",
                  })}
                  style={{ background: exp.color }}
                />

                <div
                  className={css({
                    display: "flex",
                    flexDirection: { base: "column", md: "row" },
                    justifyContent: "space-between",
                    alignItems: { base: "flex-start", md: "center" },
                    marginBottom: "12px",
                    gap: "8px",
                  })}
                >
                  <div>
                    <h3
                      className={css({
                        fontSize: { base: "18px", md: "20px" },
                        fontWeight: "700",
                        color: "text",
                      })}
                    >
                      {exp.company}
                    </h3>
                    <p
                      className={css({
                        fontSize: { base: "14px", md: "15px" },
                        background: "linear-gradient(135deg, #9333ea, #c084fc)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: "600",
                      })}
                    >
                      {exp.position}
                    </p>
                  </div>
                  <span
                    className={css({
                      fontSize: "13px",
                      color: "text.subtle",
                      background: "gray.100",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontWeight: "500",
                    })}
                  >
                    {exp.period}
                  </span>
                </div>

                {exp.highlight && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className={css({
                      display: "inline-block",
                      fontSize: "12px",
                      padding: "5px 12px",
                      background: "linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(192, 132, 252, 0.1))",
                      color: "accent",
                      borderRadius: "20px",
                      fontWeight: "600",
                      marginBottom: "12px",
                      border: "1px solid",
                      borderColor: "primary.200",
                    })}
                  >
                    ✨ {exp.highlight}
                  </motion.span>
                )}

                <ul
                  className={css({
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  })}
                >
                  {exp.description.map((desc, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={css({
                        fontSize: { base: "13px", md: "14px" },
                        color: "text.muted",
                        lineHeight: "1.6",
                        paddingLeft: "16px",
                        position: "relative",
                        _before: {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          top: "8px",
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #9333ea, #c084fc)",
                        },
                      })}
                    >
                      {desc}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
