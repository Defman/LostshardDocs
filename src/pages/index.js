import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

// import '../css/index.css'; // add some style if you want!

export default function Index({
  data
}) {
  const { edges: docs } = data.allMarkdownRemark;
  return (
    <div className="documentations">
      {docs
        .filter(doc => doc.node.frontmatter.title.length > 0)
        .map(({ node: doc }) => {
          return (
            <div className="documentation-preview" key={doc.id}>
              <h1>
                <Link to={doc.frontmatter.path}>{doc.frontmatter.title}</Link>
              </h1>
              <h2>{doc.frontmatter.date}</h2>
              <p>{doc.excerpt}</p>
            </div>
          );
        })}
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
