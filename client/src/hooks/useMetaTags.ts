import { useEffect } from "react";
import { BASE_URL } from "@/const";

interface MetaTagsConfig {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
}

const DEFAULT: MetaTagsConfig = {
  title: "Actionabl | Business Orchestration Platform for the Autonomous Enterprise",
  description:
    "Actionabl is a business orchestration platform that coordinates AI, automations, people, and systems across end-to-end enterprise processes with built-in control, resilience, and human oversight.",
  ogTitle: "Actionabl | Business Orchestration Platform for the Autonomous Enterprise",
  ogDescription:
    "Actionabl is a business orchestration platform that enables the autonomous enterprise by coordinating AI, automations, people, and systems across processes, with built-in control, resilience, and human oversight.",
  
  // ✅ Dynamic
  ogImage: `${BASE_URL}/og-home.png`,
  ogUrl: `${BASE_URL}/`,
  canonical: `${BASE_URL}/`,
};

function setMetaContent(selector: string, value: string) {
  document.querySelector(selector)?.setAttribute("content", value);
}

function setLinkHref(rel: string, value: string) {
  document.querySelector(`link[rel="${rel}"]`)?.setAttribute("href", value);
}

function getMetaContent(selector: string) {
  return document.querySelector(selector)?.getAttribute("content") ?? "";
}

function getLinkHref(rel: string) {
  return document.querySelector(`link[rel="${rel}"]`)?.getAttribute("href") ?? "";
}

export function useMetaTags(config: MetaTagsConfig) {
  useEffect(() => {
    // ── Snapshot current values ──
    const prev = {
      title:       document.title,
      desc:        getMetaContent('meta[name="description"]'),
      ogTitle:     getMetaContent('meta[property="og:title"]'),
      ogDesc:      getMetaContent('meta[property="og:description"]'),
      ogImage:     getMetaContent('meta[property="og:image"]'),
      ogUrl:       getMetaContent('meta[property="og:url"]'),
      twTitle:     getMetaContent('meta[name="twitter:title"]'),
      twDesc:      getMetaContent('meta[name="twitter:description"]'),
      twImage:     getMetaContent('meta[name="twitter:image"]'),
      canonical:   getLinkHref("canonical"),
    };

    // ── Apply new values ──
    const og    = config.ogTitle       ?? config.title;
    const ogD   = config.ogDescription ?? config.description;
    const twT   = config.twitterTitle       ?? og;
    const twD   = config.twitterDescription ?? ogD;
    const img   = config.ogImage   ?? DEFAULT.ogImage!;
    const twImg = config.twitterImage ?? img;

    document.title = config.title;
    setMetaContent('meta[name="description"]',            config.description);
    setMetaContent('meta[property="og:title"]',           og);
    setMetaContent('meta[property="og:description"]',     ogD);
    setMetaContent('meta[property="og:image"]',           img);
    setMetaContent('meta[property="og:url"]',             config.ogUrl ?? prev.ogUrl);
    setMetaContent('meta[name="twitter:title"]',          twT);
    setMetaContent('meta[name="twitter:description"]',    twD);
    setMetaContent('meta[name="twitter:image"]',          twImg);
    if (config.canonical) setLinkHref("canonical",        config.canonical);

    // ── Restore defaults on unmount ──
    return () => {
      document.title = DEFAULT.title;
      setMetaContent('meta[name="description"]',          DEFAULT.description);
      setMetaContent('meta[property="og:title"]',         DEFAULT.ogTitle!);
      setMetaContent('meta[property="og:description"]',   DEFAULT.ogDescription!);
      setMetaContent('meta[property="og:image"]',         DEFAULT.ogImage!);
      setMetaContent('meta[property="og:url"]',           DEFAULT.ogUrl!);
      setMetaContent('meta[name="twitter:title"]',        DEFAULT.ogTitle!);
      setMetaContent('meta[name="twitter:description"]',  DEFAULT.ogDescription!);
      setMetaContent('meta[name="twitter:image"]',        DEFAULT.ogImage!);
      setLinkHref("canonical",                            DEFAULT.canonical!);
    };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}