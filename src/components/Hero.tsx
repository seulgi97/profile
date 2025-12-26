"use client";

import { css } from "../../styled-system/css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const roles = ["DevOps Engineer", "Backend Developer", "Cloud Architect", "Startup Founder"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      className={css({
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: { base: "40px 20px", md: "80px 40px" },
        position: "relative",
        overflow: "hidden",
      })}
    >
      {/* Animated background gradient orbs */}
      <div
        className={css({
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          zIndex: 0,
        })}
      >
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={css({
            position: "absolute",
            top: "10%",
            left: "10%",
            width: { base: "300px", md: "500px" },
            height: { base: "300px", md: "500px" },
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(147, 51, 234, 0.15) 0%, rgba(192, 132, 252, 0.1) 100%)",
            filter: "blur(80px)",
          })}
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className={css({
            position: "absolute",
            bottom: "20%",
            right: "10%",
            width: { base: "250px", md: "400px" },
            height: { base: "250px", md: "400px" },
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(192, 132, 252, 0.15) 0%, rgba(147, 51, 234, 0.1) 100%)",
            filter: "blur(80px)",
          })}
        />
      </div>

      {/* Profile Photo with 3D effect */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={css({
          position: "relative",
          marginBottom: { base: "32px", md: "40px" },
          zIndex: 1,
        })}
      >
        {/* Outer glow ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={css({
            position: "absolute",
            inset: "-12px",
            borderRadius: "50%",
            background: "conic-gradient(from 0deg, #9333ea, #c084fc, #e879f9, #c084fc, #9333ea)",
            padding: "3px",
            zIndex: -1,
          })}
        >
          <div
            className={css({
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "white",
            })}
          />
        </motion.div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className={css({
              position: "absolute",
              width: { base: "6px", md: "8px" },
              height: { base: "6px", md: "8px" },
              borderRadius: "50%",
              background: "linear-gradient(135deg, #9333ea, #c084fc)",
              boxShadow: "0 0 10px rgba(147, 51, 234, 0.5)",
            })}
            style={{
              top: `${20 + i * 15}%`,
              left: i % 2 === 0 ? "-20px" : "auto",
              right: i % 2 === 1 ? "-20px" : "auto",
            }}
          />
        ))}

        {/* Photo container */}
        <motion.div
          whileHover={{
            scale: 1.05,
            rotateY: 5,
            rotateX: -5,
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className={css({
            width: { base: "160px", md: "200px" },
            height: { base: "160px", md: "200px" },
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 25px 60px -15px rgba(147, 51, 234, 0.4)",
            border: "4px solid white",
            cursor: "pointer",
            position: "relative",
          })}
          style={{
            transformStyle: "preserve-3d",
            perspective: 1000,
          }}
        >
          <Image
            src="/IMG_7116.JPG"
            alt="이슬기 프로필 사진"
            fill
            priority
            className={css({
              objectFit: "cover",
              objectPosition: "center top",
            })}
          />

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className={css({
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(192, 132, 252, 0.2))",
              pointerEvents: "none",
            })}
          />
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
          className={css({
            position: "absolute",
            bottom: "10px",
            right: "10px",
            width: { base: "36px", md: "44px" },
            height: { base: "36px", md: "44px" },
            borderRadius: "50%",
            background: "linear-gradient(135deg, #9333ea, #7c3aed)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 15px rgba(147, 51, 234, 0.4)",
            border: "3px solid white",
          })}
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={css({
              fontSize: { base: "14px", md: "18px" },
            })}
          >
            ✨
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Name with stagger animation */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={css({
          fontSize: { base: "36px", md: "56px", lg: "68px" },
          fontWeight: "bold",
          color: "text",
          marginBottom: { base: "16px", md: "20px" },
          lineHeight: "1.1",
          position: "relative",
          zIndex: 1,
        })}
      >
        안녕하세요,{" "}
        <span
          className={css({
            background: "linear-gradient(135deg, #9333ea 0%, #c084fc 50%, #e879f9 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          })}
        >
          이슬기
        </span>
        입니다
      </motion.h1>

      {/* Typing effect role */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className={css({
          fontSize: { base: "20px", md: "28px" },
          color: "text.muted",
          marginBottom: { base: "24px", md: "32px" },
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        })}
      >
        <span className={css({ color: "accent" })}>&lt;</span>
        <span className={css({ marginX: "8px", fontFamily: "monospace" })}>
          {displayText}
        </span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className={css({ color: "accent" })}
        >
          |
        </motion.span>
        <span className={css({ color: "accent" })}>/&gt;</span>
      </motion.div>

      {/* Description with fade in */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={css({
          fontSize: { base: "15px", md: "18px" },
          color: "text.muted",
          maxWidth: "700px",
          lineHeight: "1.8",
          position: "relative",
          zIndex: 1,
        })}
      >
        Kubernetes, CI/CD, 클라우드(AWS/NCP/Azure) 인프라 구축부터
        <br />
        Node.js/Python 백엔드 개발까지. End-to-End 제품 개발 경험.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className={css({
          display: "flex",
          gap: "16px",
          marginTop: { base: "40px", md: "56px" },
          flexWrap: "wrap",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        })}
      >
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={css({
            padding: { base: "14px 28px", md: "16px 36px" },
            background: "linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)",
            color: "white",
            borderRadius: "12px",
            fontWeight: "600",
            fontSize: { base: "15px", md: "17px" },
            textDecoration: "none",
            boxShadow: "0 10px 40px -10px rgba(147, 51, 234, 0.5)",
            position: "relative",
            overflow: "hidden",
          })}
        >
          <span className={css({ position: "relative", zIndex: 1 })}>연락하기</span>
        </motion.a>

        <motion.a
          href="#experience"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={css({
            padding: { base: "14px 28px", md: "16px 36px" },
            background: "rgba(147, 51, 234, 0.1)",
            color: "accent",
            borderRadius: "12px",
            fontWeight: "600",
            fontSize: { base: "15px", md: "17px" },
            textDecoration: "none",
            border: "2px solid",
            borderColor: "primary.300",
            backdropFilter: "blur(10px)",
          })}
        >
          경력 보기
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
        className={css({
          position: "absolute",
          bottom: { base: "30px", md: "50px" },
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "text.subtle",
          fontSize: "12px",
        })}
      >
        <span>Scroll</span>
        <div
          className={css({
            width: "24px",
            height: "40px",
            border: "2px solid",
            borderColor: "gray.300",
            borderRadius: "12px",
            position: "relative",
          })}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={css({
              width: "4px",
              height: "8px",
              background: "accent",
              borderRadius: "2px",
              position: "absolute",
              top: "6px",
              left: "50%",
              transform: "translateX(-50%)",
            })}
          />
        </div>
      </motion.div>
    </section>
  );
}
