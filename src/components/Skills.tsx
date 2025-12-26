"use client";

import { css } from "../../styled-system/css";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { MouseEvent } from "react";

const skillCategories = [
  {
    title: "Languages",
    icon: "{ }",
    skills: ["JavaScript", "TypeScript", "Python"],
    color: "#f7df1e",
  },
  {
    title: "Backend",
    icon: "< >",
    skills: ["NestJS", "ExpressJS", "Django", "Node.js"],
    color: "#68a063",
  },
  {
    title: "Database",
    icon: "DB",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "ElasticSearch"],
    color: "#336791",
  },
  {
    title: "Infra / DevOps",
    icon: "K8s",
    skills: ["Kubernetes", "Docker", "GitHub Actions", "Docker Compose"],
    color: "#326ce5",
  },
  {
    title: "Cloud",
    icon: "☁️",
    skills: ["AWS (ECS/EC2/ELB)", "Azure (AKS)", "NCP"],
    color: "#ff9900",
  },
  {
    title: "Tools",
    icon: "⚙️",
    skills: ["GitHub", "Notion", "Azure DevOps"],
    color: "#9333ea",
  },
];

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
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
          perspective: "1000px",
          cursor: "pointer",
        })}
      >
        <div
          className={css({
            padding: { base: "28px", md: "36px" },
            background: "white",
            borderRadius: "20px",
            border: "1px solid",
            borderColor: "gray.200",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
            transition: "all 0.3s",
            position: "relative",
            overflow: "hidden",
            _hover: {
              boxShadow: "0 20px 40px rgba(147, 51, 234, 0.15)",
              borderColor: "primary.300",
            },
          })}
          style={{ transform: "translateZ(30px)" }}
        >
          {/* Gradient background accent */}
          <div
            className={css({
              position: "absolute",
              top: 0,
              right: 0,
              width: "100px",
              height: "100px",
              background: `linear-gradient(135deg, ${category.color}20, transparent)`,
              borderRadius: "0 20px 0 100px",
            })}
          />

          {/* Icon */}
          <div
            className={css({
              width: "50px",
              height: "50px",
              borderRadius: "12px",
              background: `linear-gradient(135deg, ${category.color}30, ${category.color}10)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
              fontSize: "20px",
              fontWeight: "bold",
            })}
            style={{ color: category.color }}
          >
            {category.icon}
          </div>

          <h3
            className={css({
              fontSize: { base: "18px", md: "20px" },
              fontWeight: "700",
              marginBottom: "20px",
              background: "linear-gradient(135deg, #9333ea, #c084fc)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            })}
          >
            {category.title}
          </h3>

          <ul
            className={css({
              listStyle: "none",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            })}
          >
            {category.skills.map((skill, i) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={css({
                  fontSize: { base: "14px", md: "15px" },
                  color: "text.muted",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                })}
              >
                <span
                  className={css({
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #9333ea, #c084fc)",
                  })}
                />
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className={css({
        padding: { base: "80px 0", md: "120px 0" },
        position: "relative",
      })}
    >
      {/* Background decoration */}
      <div
        className={css({
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
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
          <span
            className={css({
              background: "linear-gradient(135deg, #9333ea 0%, #c084fc 50%, #e879f9 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            })}
          >
            Tech Stack
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
          다양한 기술 스택으로 문제를 해결합니다
        </p>
      </ScrollReveal>

      <div
        className={css({
          display: "grid",
          gridTemplateColumns: { base: "1fr", sm: "1fr 1fr", lg: "repeat(3, 1fr)" },
          gap: { base: "20px", md: "28px" },
        })}
      >
        {skillCategories.map((category, index) => (
          <SkillCard key={category.title} category={category} index={index} />
        ))}
      </div>
    </section>
  );
}
