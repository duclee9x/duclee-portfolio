"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "vi" | "ja"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    experience: "Experience",
    skills: "Skills",
    project: "Project",
    contact: "Contact",
    certificates: "Certificates",

    // Hero
    name: "Duc Lee",
    title: "DevOps Engineer",
    description:
      "Passionate about building scalable infrastructure, automating deployments, and bridging the gap between development and operations with cutting-edge cloud technologies.",
    getInTouch: "Get In Touch",
    getMyCV: "Get My CV",

    // Experience
    experienceTitle: "Experience Timeline",
    seniorDevOps: "Senior DevOps Engineer",
    techCorp: "TechCorp Solutions",
    present: "Present",
    armyDesc: "Spearheaded the development and maintenance of digital battle mapping systems and map printing,",
    experienceDesc:
      "Managed critical IT infrastructure, object to cloud migration projects, focusing on scalability and reliability.",
    devOpsEngineer: "DevOps Engineer",
    dataItern: "Data Scientist Intern",
    iternDesc: "Designed and implemented RESTful APIs using FastAPI for ML model deployment.",
    cloudTech: "CloudTech Innovations",
    devOpsDesc: "Led monitoring and optimization of microservices for major Oil & Gas industry clients",
    dataItern: "Data Scientist Intern",
    dataFlow: "DataFlow Systems",
    iternDesc: "Designed and implemented RESTful APIs using FastAPI for ML model deployment",

    // Tech Stack
    technologyStack: "Technology Stack",

    // Project
    featuredProject: "Featured Project",
    projectOverview: "Project Overview",
    projectDesc:
      "A fully containerized e-commerce platform built with microservices architecture, deployed on AWS EKS with comprehensive monitoring, logging, and automated CI/CD pipelines.",
    keyFeatures: "Key Features",
    liveDemo: "Live Demo",
    viewCode: "View Code",

    // Contact
    contactTitle: "Get In Touch",
    letsConnect: "Let's Connect",
    contactDesc:
      "I'm always interested in discussing new opportunities, innovative projects, and collaborations in the DevOps and cloud infrastructure space.",
    email: "Email",
    yourName: "Your Name",
    yourEmail: "your.email@example.com",
    subject: "Subject",
    projectDiscussion: "Project Discussion",
    message: "Message",
    messagePlaceholder: "Tell me about your project or opportunity...",
    sendMessage: "Send Message",

    // Certificates
    certificatesTitle: "Certifications & Achievements",
    awsCert: "AWS Solutions Architect",
    associateLevel: "Associate Level",
    valid: "Valid",
    jlptCert: "Japanese Language Proficiency",
    toeicCert: "English Proficiency Test",
    score: "Score: 635",
    passed: "Passed",
    commitment: "Committed to continuous learning and professional development",
    // Footer
    // Timeline Achievements
    achievement1: "Architected and implemented training management systems for 1000+ personnel,",
    achievement2: "Managed critical IT infrastructure supporting command operations",
    achievement3: "Developed automation scripts for routine tasks",
    achievement4: "Led successful migration of on-premise healthcare applications to Azure cloud platform",
    achievement5: "Provided technical guidance and support to development and QA teams",
    achievement6: "Monitored automated alerting systems and responded to incidents, ensuring timely resolution and system stability",
    achievement7: "Implemented comprehensive monitoring solutions on NewRelic Platform",
    achievement8: "Developed and maintained pipelines using Jenkins",
    achievement9: "Orchestrated container deployments using Kubernetes",
    achievement10: "Established private containerization artifact repositories using Sonatype Nexus",
    achievement11: "Containerized development and production environments using Docker",
    achievement12: "Contributed to machine learning model development and data analysis initiatives",
    allRightsReserved: "All rights reserved.",
    builtWith: "Built with passion for DevOps excellence",
  },
  vi: {
    // Navigation
    home: "Trang chủ",
    experience: "Kinh nghiệm",
    skills: "Kỹ năng",
    project: "Dự án",
    contact: "Liên hệ",
    certificates: "Chứng nhận",
    getMyCV: "Tải CV",

    // Hero
    name: "Lê Đăng Đức",
    title: "Kỹ sư DevOps",
    description:
      "Đam mê xây dựng hạ tầng có thể mở rộng, tự động hóa triển khai và kết nối phát triển với vận hành bằng công nghệ cloud tiên tiến.",
    getInTouch: "Liên hệ",
    viewProject: "Xem dự án",

    // Experience
    experienceTitle: "Kinh nghiệm",
    seniorDevOps: "Kỹ sư DevOps",
    armyDesc: "Hỗ trợ chỉ huy Trung đoàn và các đơn vị quân sự trong việc thiết kế kế hoạch huấn luyện, in ấn bản đồ tác chiến, và triển khai hệ thống thông tin quân sự.",
    techCorp: "Công ty cổ phần Ominext",
    present: "Hiện tại",
    experienceDesc:
      "Quản lý hạ tầng Azure, thiết kế, triển khai giải pháp cloud phục vụ cho các dự án của khách hàng thị trường healthcare Nhật bản.",
    devOpsEngineer: "Kỹ sư DevOps",
    dataItern: "Thực tập sinh Khoa học Dữ liệu",
    iternDesc: "Thiết kế và triển khai RESTful API bằng FastAPI để triển khai mô hình học máy.",
    cloudTech: "CloudTech Innovations",
    devOpsDesc: "Thiết kế và triển khai ứng dụng container hóa và nền tảng điều phối sử dụng Kubernetes.",
    systemAdmin: "Quản trị hệ thống",
    dataFlow: "DataFlow Systems",
    adminDesc:
      "Quản lý máy chủ Linux và triển khai chiến lược sao lưu, đảm bảo tính toàn vẹn dữ liệu trên các hệ thống.",

    // Tech Stack
    technologyStack: "Công nghệ sử dụng",

    // Project
    featuredProject: "Dự án nổi bật",
    projectOverview: "Tổng quan dự án",
    projectDesc:
      "Nền tảng thương mại điện tử được container hóa hoàn toàn được xây dựng với kiến trúc microservices, GitOps và triển khai trên Kubernetes với giám sát toàn diện và pipeline CI/CD tự động.",
    keyFeatures: "Tính năng chính",
    liveDemo: "Demo trực tiếp",
    viewCode: "Xem mã nguồn",

    // Contact
    contactTitle: "Liên hệ",
    letsConnect: "Hãy kết nối",
    contactDesc:
      "Tôi luôn quan tâm đến việc thảo luận về các cơ hội mới, dự án sáng tạo và hợp tác trong lĩnh vực DevOps và hạ tầng cloud.",
    email: "Email",
    yourName: "Tên của bạn",
    yourEmail: "your.email@example.com",
    subject: "Chủ đề",
    projectDiscussion: "Thảo luận dự án",
    message: "Tin nhắn",
    messagePlaceholder: "Hãy cho tôi biết về dự án hoặc cơ hội tuyển dụng từ bạn...",
    sendMessage: "Gửi tin nhắn",

    // Certificates
    certificatesTitle: "Chứng chỉ & Thành tựu",
    awsCert: "AWS Solutions Architect",
    associateLevel: "Cấp độ Associate",
    valid: "Có hiệu lực",
    jlptCert: "Năng lực tiếng Nhật",
    toeicCert: "Kiểm tra năng lực tiếng Anh",
    score: "Điểm: 635",
    passed: "Có hiệu lực",
    commitment:  "Luôn nỗ lực phát triển bản thân với các mục tiêu tự đặt ra",

    // Footer
    allRightsReserved: "Tất cả quyền được bảo lưu.",
    // Timeline Achievements
    achievement1: "Thiết kế và triển khai hệ thống quản lý huấn luyện cho hơn 1000 quân nhân,",
    achievement2: "Quản lý hạ tầng CNTT quan trọng hỗ trợ hoạt động chỉ huy",
    achievement3: "Phát triển các script tự động hóa cho các tác vụ thường xuyên",
    achievement4: "Dẫn dắt chuyển đổi thành công các ứng dụng y tế từ on-premise lên nền tảng Azure cloud",
    achievement5: "Hỗ trợ kỹ thuật và tư vấn cho các đội phát triển và kiểm thử",
    achievement6: "Giám sát hệ thống cảnh báo tự động và xử lý sự cố, đảm bảo vận hành ổn định",
    achievement7: "Triển khai giải pháp giám sát toàn diện trên nền tảng NewRelic",
    achievement8: "Phát triển và duy trì pipeline tự động với Jenkins",
    achievement9: "Điều phối triển khai container với Kubernetes",
    achievement10: "Thiết lập kho lưu trữ private cho container bằng Sonatype Nexus",
    achievement11: "Container hóa môi trường phát triển và sản xuất bằng Docker",
    achievement12: "Tham gia phát triển mô hình machine learning và phân tích dữ liệu",
    builtWith: "Được xây dựng với đam mê về văn hóa DevOps",
  },

  ja: {
    // Navigation
    home: "ホーム",
    experience: "経験",
    skills: "スキル",
    project: "プロジェクト",
    contact: "お問い合わせ",
    certificates: "資格",
    getMyCV: "履歴書をダウンロード",

    // Hero
    name: "Duc Lee",
    title: "DevOpsエンジニア",
    description:
      "スケーラブルなインフラストラクチャの構築、デプロイメントの自動化、そして最先端のクラウド技術で開発と運用の橋渡しに情熱を注いでいます。",
    getInTouch: "お問い合わせ",
    viewProject: "プロジェクトを見る",

    // Experience
    experienceTitle: "経験タイムライン",
    seniorDevOps: "シニアDevOpsエンジニア",
    techCorp: "TechCorp Solutions",
    present: "現在",
    experienceDesc:
      "インフラ自動化イニシアチブとクラウド移行プロジェクトを主導し、スケーラビリティと信頼性に焦点を当てる。",
    devOpsEngineer: "DevOpsエンジニア",
    dataItern: "データサイエンティストインターン",
    iternDesc: "FastAPIを用いた機械学習モデルデプロイ用のRESTful APIを設計・実装。",
    cloudTech: "CloudTech Innovations",
    devOpsDesc:
      "Kubernetesを使用してコンテナ化されたアプリケーションとオーケストレーションプラットフォームを設計・実装。",
    systemAdmin: "システム管理者",
    dataFlow: "DataFlow Systems",
    adminDesc: "Linuxサーバーを管理し、バックアップ戦略を実装してシステム全体のデータ整合性を確保。",

    // Tech Stack
    technologyStack: "技術スタック",

    // Project
    featuredProject: "注目プロジェクト",
    projectOverview: "プロジェクト概要",
    projectDesc:
      "マイクロサービスアーキテクチャで構築された完全にコンテナ化されたEコマースプラットフォーム。包括的な監視、ログ記録、自動化されたCI/CDパイプラインを備えたAWS EKSにデプロイ。",
    keyFeatures: "主要機能",
    liveDemo: "ライブデモ",
    viewCode: "コードを見る",

    // Contact
    contactTitle: "お問い合わせ",
    letsConnect: "つながりましょう",
    contactDesc:
      "DevOpsとクラウドインフラストラクチャ分野での新しい機会、革新的なプロジェクト、コラボレーションについて話し合うことに常に興味があります。",
    email: "メール",
    yourName: "お名前",
    yourEmail: "your.email@example.com",
    subject: "件名",
    projectDiscussion: "プロジェクトについて",
    message: "メッセージ",
    messagePlaceholder: "プロジェクトや機会について教えてください...",
    sendMessage: "メッセージを送信",

    // Certificates
    certificatesTitle: "資格・認定",
    awsCert: "AWS ソリューションアーキテクト",
    associateLevel: "アソシエイトレベル",
    valid: "有効期限",
    jlptCert: "日本語能力試験",
    toeicCert: "英語能力試験",
    score: "スコア: 635",
    passed: "合格",
    commitment: "常に自己啓発と専門性の向上に努めています。",
    // Footer
    allRightsReserved: "全著作権所有。",
    // Timeline Achievements
    achievement1: "1000人以上の要員向けトレーニング管理システムを設計・実装",
    achievement2: "指揮運用を支える重要なITインフラを管理",
    achievement3: "定型業務の自動化スクリプトを開発",
    achievement4: "オンプレミスの医療アプリケーションをAzureクラウドへ成功裏に移行",
    achievement5: "開発・QAチームへの技術サポートと指導を実施",
    achievement6: "自動アラート監視システムの運用とインシデント対応で安定稼働を実現",
    achievement7: "NewRelicプラットフォームで包括的な監視ソリューションを導入",
    achievement8: "Jenkinsによるパイプラインの開発・保守",
    achievement9: "Kubernetesでコンテナデプロイをオーケストレーション",
    achievement10: "Sonatype Nexusでプライベートなコンテナリポジトリを構築",
    achievement11: "Dockerで開発・本番環境をコンテナ化",
    achievement12: "機械学習モデル開発とデータ分析に貢献",
    builtWith: "DevOpsの卓越性への情熱で構築",
  },

}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
