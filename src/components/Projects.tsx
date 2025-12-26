"use client";

import { css } from "../../styled-system/css";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import GradientText from "./GradientText";
import { MouseEvent } from "react";

const projects = [
  {
    title: "마침",
    subtitle: "원스톱 폐업 서비스",
    description:
      "창업자로서 기획부터 개발, 배포, 운영까지 전 과정을 단독 수행한 B2C 서비스.",
    tech: ["NestJS", "Next.js", "AWS", "K8s"],
    type: "창업",
    highlight: "2025 예비창업패키지 선정",
    gradient: "linear-gradient(135deg, #9333ea, #c084fc)",
  },
  {
    title: "음원 AI",
    subtitle: "AI 음원 생성 서비스",
    description:
      "음원/오디오 처리 AI 추론 서비스 구축 및 상용 배포. Azure/NCP 클라우드 환경 운영.",
    tech: ["Python", "Django", "K8s", "Azure"],
    type: "AI",
    gradient: "linear-gradient(135deg, #7c3aed, #a855f7)",
  },
  {
    title: "SaaS OAuth",
    subtitle: "인증/인가 서비스",
    description:
      "소셜 로그인 기반 인증/인가 흐름 설계 및 외부 서비스 연동 API 제공.",
    tech: ["NestJS", "TypeScript", "PostgreSQL"],
    type: "SaaS",
    gradient: "linear-gradient(135deg, #c084fc, #e879f9)",
  },
  {
    title: "게임 백엔드",
    subtitle: "모바일 게임 서버",
    description:
      "게임 서비스 운영에 필요한 API/데이터 모델 설계 및 배포 자동화 구축.",
    tech: ["Node.js", "MongoDB", "AWS ECS"],
    type: "게임",
    gradient: "linear-gradient(135deg, #a855f7, #d8b4fe)",
  },
  {
    title: "거래소",
    subtitle: "암호화폐 거래 시스템",
    description:
      "암호화폐 거래소 개발/운영 및 AWS 기반 인프라 구축. 성능 최적화 및 보안 강화.",
    tech: ["Django", "PostgreSQL", "Docker"],
    type: "핀테크",
    gradient: "linear-gradient(135deg, #e879f9, #f3e8ff)",
  },
  {
    title: "클라우드 이전",
    subtitle: "NCP → Azure 마이그레이션",
    description:
      "서비스 무중단 마이그레이션 수행. 인프라 비용 70% 절감 및 배포 주기 단축.",
    tech: ["Azure AKS", "K8s", "DevOps"],
    type: "인프라",
    highlight: "비용 70% 절감",
    gradient: "linear-gradient(135deg, #d8b4fe, #9333ea)",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 90 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 90 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        className={css({
          perspective: "1200px",
          height: "100%",
        })}
      >
        <div
          className={css({
            height: "100%",
            padding: { base: "28px", md: "32px" },
            background: "white",
            borderRadius: "24px",
            border: "1px solid",
            borderColor: "gray.200",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
            transition: "all 0.3s",
            _hover: {
              boxShadow: "0 25px 50px rgba(147, 51, 234, 0.15)",
              borderColor: "primary.300",
            },
          })}
          style={{ transform: "translateZ(40px)" }}
        >
          {/* Top gradient bar */}
          <div
            className={css({
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
            })}
            style={{ background: project.gradient }}
          />

          {/* Background glow */}
          <div
            className={css({
              position: "absolute",
              top: "-50%",
              right: "-50%",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              opacity: 0.1,
              filter: "blur(60px)",
              pointerEvents: "none",
            })}
            style={{ background: project.gradient }}
          />

          {/* Type badge */}
          <div
            className={css({
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "16px",
            })}
          >
            <span
              className={css({
                fontSize: "11px",
                padding: "5px 12px",
                borderRadius: "20px",
                fontWeight: "600",
                color: "white",
              })}
              style={{ background: project.gradient }}
            >
              {project.type}
            </span>
            {project.highlight && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={css({
                  fontSize: "10px",
                  padding: "4px 10px",
                  background: "linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(192, 132, 252, 0.1))",
                  color: "accent",
                  borderRadius: "20px",
                  fontWeight: "600",
                  border: "1px solid",
                  borderColor: "primary.200",
                })}
              >
                ✨ {project.highlight}
              </motion.span>
            )}
          </div>

          {/* Title */}
          <h3
            className={css({
              fontSize: { base: "22px", md: "26px" },
              fontWeight: "800",
              marginBottom: "4px",
            })}
          >
            <GradientText gradient="linear-gradient(135deg, #18181b, #3f3f46)">{project.title}</GradientText>
          </h3>
          <p
            className={css({
              fontSize: { base: "14px", md: "15px" },
              fontWeight: "600",
              marginBottom: "16px",
            })}
          >
            <GradientText>{project.subtitle}</GradientText>
          </p>

          {/* Description */}
          <p
            className={css({
              fontSize: { base: "13px", md: "14px" },
              color: "text.muted",
              lineHeight: "1.7",
              marginBottom: "20px",
              flex: 1,
            })}
          >
            {project.description}
          </p>

          {/* Tech stack */}
          <div
            className={css({
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            })}
          >
            {project.tech.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                className={css({
                  fontSize: "12px",
                  padding: "5px 12px",
                  background: "gray.100",
                  color: "text.muted",
                  borderRadius: "8px",
                  fontWeight: "500",
                })}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className={css({
        padding: { base: "80px 0", md: "120px 0" },
        position: "relative",
      })}
    >
      {/* Background decoration */}
      <div
        className={css({
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.05) 0%, transparent 70%)",
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
          <GradientText>Projects</GradientText>
        </h2>
        <p
          className={css({
            textAlign: "center",
            color: "text.muted",
            fontSize: { base: "15px", md: "17px" },
            marginBottom: { base: "40px", md: "60px" },
          })}
        >
          다양한 도메인에서 만들어낸 결과물
        </p>
      </ScrollReveal>

      <div
        className={css({
          display: "grid",
          gridTemplateColumns: { base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
          gap: { base: "24px", md: "28px" },
        })}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
