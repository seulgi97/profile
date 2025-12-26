"use client";

import { useRef, useState } from "react";
import { css } from "../../styled-system/css";
import { motion } from "framer-motion";

const resumeData = {
  name: "이슬기",
  nameEn: "Seulgi Lee",
  email: "lsg970@naver.com",
  github: "github.com/seulgi97",
  portfolio: "https://profile-delta-blond.vercel.app",
  intro:
    "DevOps/백엔드 엔지니어로서 Node.js(TypeScript), Python 기반 서비스 개발과 Kubernetes·CI/CD·클라우드(AWS/NCP/Azure) 운영을 함께 수행해 왔습니다. 게임/엔터테인먼트/B2C·SaaS·음원 AI 서비스뿐 아니라, 창업으로 원스톱 폐업 서비스 '마침'을 단독 개발·배포하며 제품을 end-to-end로 만들어 본 경험이 있습니다.",
  skills: {
    languages: ["JavaScript", "TypeScript", "Python"],
    backend: ["NestJS", "ExpressJS", "Django", "Node.js"],
    database: ["MySQL", "PostgreSQL", "MongoDB", "ElasticSearch"],
    infra: ["Kubernetes", "Docker", "GitHub Actions", "Docker Compose"],
    cloud: ["AWS (ECS/EC2/ELB)", "Azure (AKS)", "NCP"],
    tools: ["GitHub", "Notion", "Azure DevOps"],
  },
  experiences: [
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
    },
    {
      company: "엔에프이엑스",
      position: "개발팀 대리",
      period: "2022.07 - 2022.11",
      description: [
        "카자흐스탄 거래소 개발",
        "AWS 기반 거래소 인프라 구축 및 운영",
      ],
    },
    {
      company: "에아이스톤",
      position: "분산스토리지 솔루션 본부 주임",
      period: "2021.12 - 2022.06",
      description: [
        "파일코인(Filecoin) 채굴 솔루션 개발",
        "채굴 장비 운영 및 실시간 모니터링 체계 구축",
      ],
    },
    {
      company: "아임에버",
      position: "국내광통신망 사원",
      period: "2020.01 - 2021.12",
      description: [
        "삼성 사내망 장비 운영 및 인프라 유지보수",
        "모니터링 기반 사전 대응 및 야간 점검",
      ],
    },
  ],
  education: [
    {
      school: "한양사이버대학교",
      major: "해킹보안학과",
      status: "졸업예정",
      period: "2020.03 ~ 현재",
    },
    {
      school: "수원과학대학교",
      major: "정보통신학과",
      status: "졸업",
      period: "2018.03 ~ 2020.02",
    },
    {
      school: "대진여자고등학교",
      major: null,
      status: "졸업",
      period: "2013.08 ~ 2016.02",
    },
    {
      school: "양주고등학교",
      major: null,
      status: "전학",
      period: "2013.03 ~ 2013.08",
    },
  ],
};

interface ResumeDownloadProps {
  variant?: "primary" | "secondary";
  className?: string;
}

export default function ResumeDownload({ variant = "secondary", className }: ResumeDownloadProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    if (isGenerating) return;
    setIsGenerating(true);

    try {
      const html2canvas = (await import("html2canvas-pro")).default;
      const { jsPDF } = await import("jspdf");

      if (!resumeRef.current) return;

      // Make the hidden resume visible temporarily
      resumeRef.current.style.display = "block";
      resumeRef.current.style.position = "absolute";
      resumeRef.current.style.left = "-9999px";

      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });

      resumeRef.current.style.display = "none";

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;

      // Calculate how many pages we need
      const scaledHeight = imgHeight * ratio;
      const pageCount = Math.ceil(scaledHeight / pdfHeight);

      for (let i = 0; i < pageCount; i++) {
        if (i > 0) {
          pdf.addPage();
        }
        pdf.addImage(
          imgData,
          "PNG",
          imgX,
          -(i * pdfHeight),
          imgWidth * ratio,
          imgHeight * ratio
        );
      }

      pdf.save("이슬기_이력서.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("PDF 생성에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsGenerating(false);
    }
  };

  const buttonStyles = variant === "primary" ? {
    padding: { base: "14px 28px", md: "16px 36px" },
    background: "linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)",
    color: "white",
    borderRadius: "12px",
    fontWeight: "600",
    fontSize: { base: "15px", md: "17px" },
    boxShadow: "0 10px 40px -10px rgba(147, 51, 234, 0.5)",
    cursor: "pointer",
    border: "none",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  } : {
    padding: { base: "14px 28px", md: "16px 36px" },
    background: "rgba(147, 51, 234, 0.1)",
    color: "accent",
    borderRadius: "12px",
    fontWeight: "600",
    fontSize: { base: "15px", md: "17px" },
    border: "2px solid",
    borderColor: "primary.300",
    backdropFilter: "blur(10px)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  return (
    <>
      <motion.button
        onClick={generatePDF}
        disabled={isGenerating}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`${css(buttonStyles)} ${className || ""}`}
      >
        {isGenerating ? (
          <>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              ⏳
            </motion.span>
            생성 중...
          </>
        ) : (
          <>
            <span>📄</span>
            이력서 PDF
          </>
        )}
      </motion.button>

      {/* Hidden resume content for PDF generation */}
      <div
        ref={resumeRef}
        style={{
          display: "none",
          width: "210mm",
          minHeight: "297mm",
          padding: "15mm 20mm",
          backgroundColor: "#ffffff",
          fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif",
          color: "#1a1a1a",
          fontSize: "11px",
          lineHeight: "1.6",
        }}
      >
        {/* Header */}
        <div style={{ borderBottom: "3px solid #9333ea", paddingBottom: "15px", marginBottom: "20px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: "800", margin: "0 0 5px 0", color: "#1a1a1a" }}>
            {resumeData.name} <span style={{ fontSize: "16px", color: "#666", fontWeight: "500" }}>({resumeData.nameEn})</span>
          </h1>
          <p style={{ fontSize: "14px", color: "#9333ea", fontWeight: "600", margin: "0 0 10px 0" }}>
            DevOps Engineer / Backend Developer
          </p>
          <div style={{ display: "flex", gap: "20px", fontSize: "11px", color: "#555" }}>
            <span>📧 {resumeData.email}</span>
            <span>💻 {resumeData.github}</span>
            <span>🌐 {resumeData.portfolio}</span>
          </div>
        </div>

        {/* Intro */}
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "14px", fontWeight: "700", color: "#9333ea", marginBottom: "8px", borderLeft: "3px solid #9333ea", paddingLeft: "10px" }}>
            About
          </h2>
          <p style={{ fontSize: "11px", color: "#333", lineHeight: "1.7" }}>{resumeData.intro}</p>
        </div>

        {/* Skills */}
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "14px", fontWeight: "700", color: "#9333ea", marginBottom: "10px", borderLeft: "3px solid #9333ea", paddingLeft: "10px" }}>
            Skills
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", fontSize: "10px" }}>
            <div><strong>Languages:</strong> {resumeData.skills.languages.join(", ")}</div>
            <div><strong>Backend:</strong> {resumeData.skills.backend.join(", ")}</div>
            <div><strong>Database:</strong> {resumeData.skills.database.join(", ")}</div>
            <div><strong>Infra:</strong> {resumeData.skills.infra.join(", ")}</div>
            <div><strong>Cloud:</strong> {resumeData.skills.cloud.join(", ")}</div>
            <div><strong>Tools:</strong> {resumeData.skills.tools.join(", ")}</div>
          </div>
        </div>

        {/* Experience */}
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "14px", fontWeight: "700", color: "#9333ea", marginBottom: "10px", borderLeft: "3px solid #9333ea", paddingLeft: "10px" }}>
            Experience
          </h2>
          {resumeData.experiences.map((exp, idx) => (
            <div key={idx} style={{ marginBottom: "12px", paddingLeft: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "3px" }}>
                <div>
                  <strong style={{ fontSize: "12px" }}>{exp.company}</strong>
                  <span style={{ color: "#666", marginLeft: "8px", fontSize: "10px" }}>{exp.position}</span>
                  {exp.highlight && (
                    <span style={{
                      marginLeft: "8px",
                      fontSize: "9px",
                      background: "#f3e8ff",
                      color: "#9333ea",
                      padding: "2px 6px",
                      borderRadius: "10px",
                      fontWeight: "600"
                    }}>
                      ✨ {exp.highlight}
                    </span>
                  )}
                </div>
                <span style={{ fontSize: "10px", color: "#888" }}>{exp.period}</span>
              </div>
              <ul style={{ margin: "5px 0 0 15px", padding: 0 }}>
                {exp.description.map((desc, i) => (
                  <li key={i} style={{ fontSize: "10px", color: "#444", marginBottom: "2px" }}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ fontSize: "14px", fontWeight: "700", color: "#9333ea", marginBottom: "10px", borderLeft: "3px solid #9333ea", paddingLeft: "10px" }}>
            Education
          </h2>
          {resumeData.education.map((edu, idx) => (
            <div key={idx} style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px", paddingLeft: "10px" }}>
              <div>
                <strong style={{ fontSize: "11px" }}>{edu.school}</strong>
                {edu.major && <span style={{ color: "#666", marginLeft: "8px", fontSize: "10px" }}>{edu.major}</span>}
                <span style={{
                  marginLeft: "8px",
                  fontSize: "9px",
                  background: "#f3e8ff",
                  color: "#9333ea",
                  padding: "2px 6px",
                  borderRadius: "10px"
                }}>
                  {edu.status}
                </span>
              </div>
              <span style={{ fontSize: "10px", color: "#888" }}>{edu.period}</span>
            </div>
          ))}
        </div>

        {/* Footer with portfolio URL */}
        <div style={{
          position: "absolute",
          bottom: "15mm",
          left: "20mm",
          right: "20mm",
          borderTop: "1px solid #e5e5e5",
          paddingTop: "10px",
          textAlign: "center",
          fontSize: "10px",
          color: "#9333ea"
        }}>
          <strong>Portfolio:</strong> {resumeData.portfolio}
        </div>
      </div>
    </>
  );
}
