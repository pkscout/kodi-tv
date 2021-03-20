import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
const config = require("/gatsby-site-config");

function SEO({ description, lang, meta, keywords, frontmatter }) {
  let breadcrumbs = config.siteMetadata.title;
  if (frontmatter.breadcrumbs != undefined) {
    breadcrumbs = breadcrumbs + " | " + frontmatter.breadcrumbs;
  }
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={breadcrumbs}
      meta={[
        {
          name: "description",
          content: config.siteMetadata.description,
        },
        {
          property: "og:title",
          content: config.siteMetadata.title,
        },
        {
          property: "og:description",
          content: config.siteMetadata.description,
        },
        {
          property: "og:type",
          content: "website",
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: "keywords",
                content: keywords.join(", "),
              }
            : []
        )
        .concat(meta)}
    >
      <link rel="icon" type="image/svg" href="/images/kodi-logo.svg" />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  frontmatter: PropTypes.object.isRequired,
};

export default SEO;