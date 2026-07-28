import { SITE_URL, SITE_AUTHOR, SITE_ORGANIZATION, SITE_LOGO } from "../constants";

export function buildOrganizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_ORGANIZATION.name,
    url: SITE_URL,
    logo: `${SITE_URL}${SITE_LOGO}`,
    founder: {
      "@type": "Person",
      name: SITE_AUTHOR,
    },
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_ORGANIZATION.name,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

// Site-wide Organization + WebSite graph — belongs once on the homepage,
// not on every page (that would just repeat the same nodes needlessly).
export function buildSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [buildOrganizationJsonLd(), buildWebsiteJsonLd()],
  };
}
