import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function GetFrontMatter(props: {
  preview?: boolean | undefined;
  children?:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  frontmatter?: any;
}) {
  let frontmatter = {};
  if (props.frontmatter !== undefined) {
    frontmatter = props.frontmatter;
  }
  return frontmatter;
}

function DefaultLayout(props: {
  preview?: boolean;
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  frontmatter?: any;
}) {
  let frontmatter = GetFrontMatter(props);
  let preview = false;
  if (props.preview != undefined) {
    preview = props.preview;
  }
  return (
    <>
      <div className="bg-gray-200 h-full">
        <Header frontmatter={frontmatter} />
        <main className="-mt-32">
          <div className="max-w-7xl mx-auto pb-0 px-0 md:px-6 lg:px-8">
            <div className="bg-gray-50 md:rounded-lg md:shadow p-6 min-h-screen">
              {props.children}
            </div>
          </div>
        </main>
        {!preview ? <Footer /> : <div className="pt-16"></div>}
      </div>
    </>
  );
}

function LandingPage(props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  frontmatter?: any;
}) {
  let frontmatter = GetFrontMatter(props);
  return (
    <>
      <div className="bg-gray-50 h-full">
        <Header frontmatter={frontmatter} compact={true} />
        <main>
          <div className="py-0">{props.children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export { DefaultLayout, LandingPage };
