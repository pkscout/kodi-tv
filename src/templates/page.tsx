import React from "react";
import ReactMarkdown from "react-markdown";
import { graphql } from "gatsby";
import { DefaultLayout } from "../components/Layout";
import { DownloadList } from "../components/DownloadList";
import {
  AboutDisclaimer,
  AboutGallery,
  AboutContactNote,
  AboutOfficialRemotes,
  CtaButtonExternal,
  CtaButtonInternal,
  DownloadNotice,
  SpreadTheWord,
} from "../components/SectionWidgets";

function DynamicSection(props) {
  let sections = {
    aboutdisclaimer: <AboutDisclaimer />,
    aboutgallery: <AboutGallery />,
    contactnote: <AboutContactNote />,
    downloadnotice: <DownloadNotice />,
    downloadlist: <DownloadList />,
    officialremotes: <AboutOfficialRemotes />,
    otherwaystohelp: (
      <CtaButtonInternal url="/contribute" buttontext="Other Ways to Help" />
    ),
    jointheteam: (
      <CtaButtonInternal url="/contribute/developers" buttontext="Join the Team" />
    ),
    visitforum: (
      <CtaButtonExternal url="https://forum.kodi.tv" buttontext="Visit the Forums" />
    ),
    visitqa: (
      <CtaButtonExternal
        url="https://kodi.wiki/index.php?title=HOW-TO:Help_with_quality_assurance_testing"
        buttontext="Help with QA"
      />
    ),
    visitcoding: (
      <CtaButtonInternal
        url="/contribute/developers"
        buttontext="Help with Coding"
      />
    ),
    spreadtheword: <SpreadTheWord />,
    visittranslate: (
      <CtaButtonExternal
        url="https://kodi.wiki/index.php?title=Translation_System"
        buttontext="Help with Translations"
      />
    ),
    visitaddondev: (
      <CtaButtonExternal
        url="https://kodi.wiki/view/Add-on_development"
        buttontext="Build Your First Add-on"
      />
    ),
    visitdonate: <CtaButtonInternal url="/donate" buttontext="Donate to Kodi" />,
    visitstore: <CtaButtonInternal url="/store" buttontext="Purchase Kodi Merch" />,
    visitsponsoring: (
      <CtaButtonInternal
        url="about/sponsors"
        buttontext="Learn More About Sponsoring Kodi"
      />
    ),
  };
  let section = sections[props.section];
  if (section == undefined) {
    section = "";
  }
  return section;
}

export default function Page({ data, pageContext, location }) {
  const { onePage } = data; // data.page holds the page data
  let content = onePage.rawMarkdownBody.split("x-section-x");
  return (
    <DefaultLayout frontmatter={onePage.frontmatter}>
      {content.map((section: string, index: any) => {
        return section.trim().split(" ").length > 1 ? (
          <ReactMarkdown
            key={section.trim().toLowerCase()}
            className="pb-6 prose prose-blue max-w-none"
          >
            {section}
          </ReactMarkdown>
        ) : (
          <DynamicSection
            key={section.trim().toLowerCase()}
            section={section.trim().toLowerCase()}
          />
        );
      })}
    </DefaultLayout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    onePage: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        breadcrumbs
      }
      rawMarkdownBody
    }
  }
`;