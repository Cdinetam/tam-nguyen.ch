export type Lang = "de" | "en" | "fr";

export type HomeCopy = {
  htmlLang: string;
  title: string;
  description: string;
  contact: string;
  impressum: string;
  languagesLabel: string;
  h2: string;
  intro: [string, string, string];
  engagementBefore: string;
  engagementAfter: string;
  experience: string;
  tavyroDates: string;
  tavyroOrg: string;
  tavyroRole: string;
  tavyroServices: string;
  tavyroHomeUrl: string;
  tavyroServicesUrl: string;
  tavyroMentionUrl: string;
  tavyroAdvice: string;
  tavyroProductBefore: string;
  tavyroProductMiddle: string;
  tavyroProductAfter: string;
  tavyroMandate: string;
  swizzDates: string;
  swizzOrg: string;
  swizzRole: string;
  swizzBody: string;
  chroTitle: string;
  roles: { dates: string; org: string; role: string; body: string }[];
  earlier: string;
  education: string;
  degrees: string[];
  languages: string;
};

export const homeCopy: Record<Lang, HomeCopy> = {
  de: {
    htmlLang: "de-CH",
    title: "Tam Nguyen, Zürich – Fractional CHRO & Executive Advisor",
    description:
      "Tam Nguyen ist ein in Zürich ansässiger Fractional Chief Human Resources Officer (CHRO) und Executive Advisor. Begleitung von Geschäftsleitungen und Verwaltungsräten in People-, Organisations- und Transformationsfragen.",
    contact: "Kontakt",
    impressum: "Impressum",
    languagesLabel: "Sprachen",
    h2: "Fractional CHRO & Executive Advisor",
    intro: [
      "Tam Nguyen ist ein in Zürich ansässiger Fractional Chief Human Resources Officer und Executive Advisor. Er begleitet Geschäftsleitungen, Verwaltungsräte und Eigentümer in strategischen People- und Organisationsfragen, insbesondere in Phasen von Wachstum, Transformation und struktureller Neuausrichtung.",
      "Mit über 20 Jahren Erfahrung im Human Resources Management und mehrjähriger Verantwortung auf C-Level verbindet er strategische Klarheit mit operativer Umsetzungskompetenz. Als CHRO war er Mitglied der Geschäftsleitung in international tätigen Organisationen mit Standorten in Europa und Asien, einschliesslich Board-Exposure in China und Südkorea. Seine Verantwortung umfasste Organisationsdesign, HR-Governance, Leadership-Entwicklung sowie komplexe arbeitsrechtliche und compliance-relevante Fragestellungen.",
      "Er kombiniert klassische CHRO-Erfahrung mit datenbasierter Analyse und dem verantwortungsvollen Einsatz digitaler und KI-gestützter Instrumente. Innerhalb kurzer Zeit schafft er Transparenz über Reifegrad, Risiken und Prioritäten einer HR-Organisation und verdichtet diese zu belastbaren Entscheidungsgrundlagen für Geschäftsleitungen und Verwaltungsräte. Im Zentrum stehen wirksame People-Strategie, klare Entscheidungsarchitektur und nachhaltige Organisationsentwicklung.",
    ],
    engagementBefore: "Engagements erfolgen je nach Bedarf mandatbasiert über TaVyro GmbH (",
    engagementAfter:
      ") oder in Festanstellung. Tam Nguyen arbeitet sich gezielt und strukturiert in Unternehmen ein, integriert sich schnell in Kultur und Führungsstrukturen und übernimmt Verantwortung in Analyse, Entscheidungsfindung und Umsetzung. Er verbindet strategische People Führung mit operativer Steuerung, schafft Alignment im Top Team und liefert messbare Resultate in Governance, Organisationsdesign, Führung und HR Transformation.",
    experience: "Berufserfahrung",
    tavyroDates: "01.2026 – heute",
    tavyroOrg: "TaVyro GmbH",
    tavyroRole: "Founder & Managing Partner, Fractional CHRO",
    tavyroServices: "Externe HR-Leitung für KMU",
    tavyroHomeUrl: "https://www.tavyro.ch/de",
    tavyroServicesUrl: "https://tavyro.ch/de/externe-hr-leitung-kmu#leistungen",
    tavyroMentionUrl: "https://www.tavyro.ch",
    tavyroAdvice:
      "Beratung von CEOs und Geschäftsleitungen zu People-Strategie, Organisationsdesign, Transformation, HR-Technologie und KI.",
    tavyroProductBefore: "Tam Nguyen entwickelte ",
    tavyroProductMiddle:
      ", ein KI-gestütztes Multi-Agent-System zur bereichsübergreifenden Organisationsdiagnostik. Es verdichtet Signale zu einer fundierten Einschätzung und priorisierten Handlungsfeldern. Ergänzend entwickelte er den ",
    tavyroProductAfter:
      ", einen geschützten digitalen Reflexionsraum für sensible Führungs- und Organisationsfragen.",
    tavyroMandate:
      "Mandate in Technologie und digitalen Finanzdienstleistungen, Sozialversicherung und sozialen Institutionen sowie Gastronomie und Start-ups.",
    swizzDates: "11.2024 – 12.2025",
    swizzOrg: "Swizzbrand GmbH, Zürich & Shenzhen",
    swizzRole: "Founder & Managing Partner",
    swizzBody:
      "Aufbau und Führung eines China-Go-to-Market und digitalen Vertriebs für Schweizer KMU, einschliesslich WeChat als Kommunikations- und zahlungsfähiger Vertriebskanal.",
    chroTitle: "CHRO und Head of HR",
    roles: [
      {
        dates: "08.2018 – 10.2024",
        org: "WinGD",
        role: "CHRO, Mitglied der Geschäftsleitung",
        body: "Gesamtverantwortung für globales HR, Quality Management, EQHS und Facility Management. Sparringpartner des CEO über Europa, die VAE und Asien, mit Board-Mandaten bei WinGD China und WinGD Korea. Einführung von HRIS, globaler Job Architecture und Vergütungssystemen, Kulturtransformation sowie HR-Governance gegenüber Verwaltungsrat und internationalem Eigentümer.",
      },
      {
        dates: "06.2015 – 07.2018",
        org: "Universität Zürich",
        role: "Head of Human Resources, Philosophische Fakultät",
        body: "HR-Führung für rund 1'800 Mitarbeitende in einer dezentralen Fakultät. Beratung der Fakultäts- und Institutsleitung sowie Verantwortung für arbeitsrechtliche Verfahren und HR-Policies.",
      },
      {
        dates: "08.2011 – 03.2014",
        org: "Kuoni Global Travel Services",
        role: "Head of Human Resources Europe",
        body: "People-Strategie für Wachstum, Servicequalität und saisonale Steuerung über mehrere Länder. Führung der regionalen HR-Teams in Rekrutierung, Employee Relations, Leadership Development und Restrukturierung.",
      },
    ],
    earlier:
      "Davor Senior-HR-Verantwortung in Industrie, Energie und Finanzdienstleistung, unter anderem bei Angst+Pfister, der Aduno-Gruppe (Viseca) und EGL (Axpo), sowie HR-Projektverantwortung bei der Direktion für Entwicklung und Zusammenarbeit. Berufliche Grundlage in der Finanzführung, unter anderem bei Thomson Reuters und der Berner Versicherung.",
    education: "Ausbildungen und Sprachen",
    degrees: [
      "lic. phil. Arbeits- & Organisationspsychologie, Universität Bern",
      "CAS Digitalisierung und KI im HRM (2025/2026)",
      "CAS Executive Management (2018)",
      "Coach Zertifizierung (2026)",
    ],
    languages:
      "Deutsch (Muttersprache, Berndeutsch), Englisch (verhandlungssicher), Französisch (sehr gut), Vietnamesisch (Konversationsstufe)",
  },
  en: {
    htmlLang: "en",
    title: "Tam Nguyen, Zurich – Fractional CHRO & Executive Advisor",
    description:
      "Tam Nguyen is a Zurich-based Fractional Chief Human Resources Officer (CHRO) and Executive Advisor. He supports executive management and boards on people, organisation and transformation.",
    contact: "Contact",
    impressum: "Imprint",
    languagesLabel: "Languages",
    h2: "Fractional CHRO & Executive Advisor",
    intro: [
      "Tam Nguyen is a Zurich-based Fractional Chief Human Resources Officer and Executive Advisor. He supports executive management, boards of directors and owners on strategic people and organisation matters, particularly in phases of growth, transformation and structural realignment.",
      "With more than 20 years of experience in human resources management and several years of responsibility at C-level, he combines strategic clarity with the ability to implement. As CHRO he was a member of the executive management of internationally active organisations with sites in Europe and Asia, including board exposure in China and South Korea. His responsibility covered organisational design, HR governance, leadership development and complex employment-law and compliance matters.",
      "He combines classic CHRO experience with data-based analysis and the responsible use of digital and AI-enabled instruments. Within a short time he creates transparency on the maturity, risks and priorities of an HR organisation and condenses this into a sound basis for decisions by executive management and boards. The focus is an effective people strategy, a clear decision architecture and sustainable organisational development.",
    ],
    engagementBefore: "Engagements are, as needed, mandate-based through TaVyro GmbH (",
    engagementAfter:
      ") or in permanent employment. Tam Nguyen works his way into a company in a focused and structured manner, integrates quickly into its culture and leadership structures and takes responsibility for analysis, decision-making and implementation. He combines strategic people leadership with operational steering, creates alignment in the top team and delivers measurable results in governance, organisational design, leadership and HR transformation.",
    experience: "Professional experience",
    tavyroDates: "01.2026 – present",
    tavyroOrg: "TaVyro GmbH",
    tavyroRole: "Founder & Managing Partner, Fractional CHRO",
    tavyroServices: "External HR leadership for SMEs",
    tavyroHomeUrl: "https://www.tavyro.ch/en",
    tavyroServicesUrl: "https://www.tavyro.ch/en",
    tavyroMentionUrl: "https://www.tavyro.ch/en",
    tavyroAdvice:
      "Advice to CEOs and leadership teams on people strategy, organisational design, transformation, HR technology and AI.",
    tavyroProductBefore: "Tam Nguyen developed ",
    tavyroProductMiddle:
      ", an AI-enabled multi-agent system for cross-functional organisational diagnostics. It condenses signals into a substantiated assessment and prioritised fields of action. In addition, he developed ",
    tavyroProductAfter:
      ", a protected digital space for reflection on sensitive leadership and organisational questions.",
    tavyroMandate:
      "Mandates in technology and digital financial services, social insurance and social institutions, as well as gastronomy and start-ups.",
    swizzDates: "11.2024 – 12.2025",
    swizzOrg: "Swizzbrand GmbH, Zurich & Shenzhen",
    swizzRole: "Founder & Managing Partner",
    swizzBody:
      "Build-up and management of a China go-to-market and digital commerce setup for Swiss SMEs, including WeChat as a communication and payment-enabled sales channel.",
    chroTitle: "CHRO and Head of HR",
    roles: [
      {
        dates: "08.2018 – 10.2024",
        org: "WinGD",
        role: "CHRO, Member of the Executive Management",
        body: "Overall responsibility for global HR, quality management, EQHS and facility management. Sparring partner to the CEO across Europe, the UAE and Asia, with board mandates at WinGD China and WinGD Korea. Introduction of an HRIS, a global job architecture and compensation systems, cultural transformation, and HR governance towards the board of directors and the international owner.",
      },
      {
        dates: "06.2015 – 07.2018",
        org: "University of Zurich",
        role: "Head of Human Resources, Faculty of Arts and Social Sciences",
        body: "HR leadership for around 1,800 employees in a decentralised faculty. Advice to faculty and institute leadership, and responsibility for employment-law proceedings and HR policies.",
      },
      {
        dates: "08.2011 – 03.2014",
        org: "Kuoni Global Travel Services",
        role: "Head of Human Resources Europe",
        body: "People strategy for growth, service quality and seasonal steering across several countries. Leadership of the regional HR teams in recruitment, employee relations, leadership development and restructuring.",
      },
    ],
    earlier:
      "Before that, senior HR responsibility in industry, energy and financial services, including at Angst+Pfister, the Aduno Group (Viseca) and EGL (Axpo), as well as HR project responsibility at the Swiss Agency for Development and Cooperation. A professional foundation in finance management, including at Thomson Reuters and Berner Versicherung.",
    education: "Education and languages",
    degrees: [
      "lic. phil. in Work and Organisational Psychology, University of Bern",
      "CAS Digitalisation and AI in HRM (2025/2026)",
      "CAS Executive Management (2018)",
      "Coach certification (2026)",
    ],
    languages:
      "German (native, Bernese German), English (fluent for negotiations), French (very good), Vietnamese (conversational)",
  },
  fr: {
    htmlLang: "fr",
    title: "Tam Nguyen, Zurich – Fractional CHRO & Executive Advisor",
    description:
      "Tam Nguyen est un Fractional Chief Human Resources Officer (CHRO) et Executive Advisor établi à Zurich. Il accompagne les directions et les conseils d'administration sur les questions people, d'organisation et de transformation.",
    contact: "Contact",
    impressum: "Mentions légales",
    languagesLabel: "Langues",
    h2: "Fractional CHRO & Executive Advisor",
    intro: [
      "Tam Nguyen est un Fractional Chief Human Resources Officer et Executive Advisor établi à Zurich. Il accompagne les directions générales, les conseils d'administration et les propriétaires dans les questions stratégiques liées aux personnes et à l'organisation, en particulier dans les phases de croissance, de transformation et de réorientation structurelle.",
      "Fort de plus de 20 ans d'expérience en gestion des ressources humaines et de plusieurs années de responsabilité au niveau C-level, il allie clarté stratégique et compétence de mise en œuvre. En tant que CHRO, il a été membre de la direction générale d'organisations actives à l'international, avec des sites en Europe et en Asie, y compris une exposition au conseil en Chine et en Corée du Sud. Sa responsabilité couvrait le design organisationnel, la gouvernance RH, le développement du leadership ainsi que des questions complexes de droit du travail et de conformité.",
      "Il associe une expérience classique de CHRO à l'analyse fondée sur les données et à l'usage responsable d'instruments numériques et appuyés par l'IA. En peu de temps, il crée de la transparence sur le degré de maturité, les risques et les priorités d'une organisation RH et les condense en bases de décision solides pour les directions et les conseils d'administration. Au centre se trouvent une people strategy efficace, une architecture de décision claire et un développement organisationnel durable.",
    ],
    engagementBefore: "Les mandats se font, selon le besoin, via TaVyro GmbH (",
    engagementAfter:
      ") ou en emploi fixe. Tam Nguyen entre dans l'entreprise de manière ciblée et structurée, s'intègre rapidement à la culture et aux structures de direction et assume la responsabilité de l'analyse, de la décision et de la mise en œuvre. Il relie le people leadership stratégique au pilotage opérationnel, crée l'alignement au sein du top team et livre des résultats mesurables en gouvernance, en design organisationnel, en leadership et en transformation RH.",
    experience: "Expérience professionnelle",
    tavyroDates: "01.2026 – aujourd'hui",
    tavyroOrg: "TaVyro GmbH",
    tavyroRole: "Founder & Managing Partner, Fractional CHRO",
    tavyroServices: "Direction RH externe pour PME",
    tavyroHomeUrl: "https://www.tavyro.ch/en",
    tavyroServicesUrl: "https://www.tavyro.ch/en",
    tavyroMentionUrl: "https://www.tavyro.ch/en",
    tavyroAdvice:
      "Conseil aux CEO et aux directions sur la stratégie People, le design organisationnel, la transformation, la technologie RH et l'IA.",
    tavyroProductBefore: "Tam Nguyen a développé ",
    tavyroProductMiddle:
      ", un système multi-agents assisté par l'IA pour un diagnostic organisationnel transversal. Il condense les signaux en une appréciation fondée et en champs d'action priorisés. En complément, il a développé ",
    tavyroProductAfter:
      ", un espace numérique protégé de réflexion pour les questions sensibles de direction et d'organisation.",
    tavyroMandate:
      "Mandats dans la technologie et les services financiers numériques, l'assurance sociale et les institutions sociales ainsi que la gastronomie et les start-up.",
    swizzDates: "11.2024 – 12.2025",
    swizzOrg: "Swizzbrand GmbH, Zurich & Shenzhen",
    swizzRole: "Founder & Managing Partner",
    swizzBody:
      "Mise en place et direction d'une entrée sur le marché chinois et d'un dispositif de commerce digital pour des PME suisses, y compris WeChat comme canal de vente permettant la communication et le paiement.",
    chroTitle: "CHRO et Head of HR",
    roles: [
      {
        dates: "08.2018 – 10.2024",
        org: "WinGD",
        role: "CHRO, membre de la direction générale",
        body: "Responsabilité globale des RH, du quality management, de l'EQHS et du facility management. Sparring partner du CEO pour l'Europe, les Émirats arabes unis et l'Asie, avec des mandats au board de WinGD China et de WinGD Korea. Introduction d'un HRIS, d'une job architecture globale et de systèmes de rémunération, transformation culturelle ainsi que gouvernance RH vis-à-vis du conseil d'administration et du propriétaire international.",
      },
      {
        dates: "06.2015 – 07.2018",
        org: "Université de Zurich",
        role: "Head of Human Resources, Faculté des lettres et des sciences sociales",
        body: "Direction RH pour environ 1'800 collaborateurs dans une faculté décentralisée. Conseil à la direction de la faculté et des instituts, et responsabilité des procédures de droit du travail et des politiques RH.",
      },
      {
        dates: "08.2011 – 03.2014",
        org: "Kuoni Global Travel Services",
        role: "Head of Human Resources Europe",
        body: "People strategy pour la croissance, la qualité de service et le pilotage saisonnier dans plusieurs pays. Direction des équipes RH régionales en recrutement, employee relations, leadership development et restructuration.",
      },
    ],
    earlier:
      "Auparavant, responsabilité RH senior dans l'industrie, l'énergie et les services financiers, notamment chez Angst+Pfister, le groupe Aduno (Viseca) et EGL (Axpo), ainsi qu'une responsabilité de projet RH à la Direction du développement et de la coopération. Base professionnelle dans la direction financière, notamment chez Thomson Reuters et Berner Versicherung.",
    education: "Formations et langues",
    degrees: [
      "lic. phil. en psychologie du travail et des organisations, Université de Berne",
      "CAS Numérisation et IA en GRH (2025/2026)",
      "CAS Executive Management (2018)",
      "Certification de coach (2026)",
    ],
    languages:
      "Allemand (langue maternelle, bernois), anglais (courant en négociation), français (très bon), vietnamien (niveau de conversation)",
  },
};

export const langOrder: { id: Lang; code: string; staticHref: string; route: string }[] = [
  { id: "de", code: "D", staticHref: "index.html", route: "/" },
  { id: "en", code: "EN", staticHref: "en.html", route: "/en" },
  { id: "fr", code: "F", staticHref: "fr.html", route: "/fr" },
];
