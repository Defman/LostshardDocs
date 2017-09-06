import React from 'react';
import Helmet from 'react-helmet';

class Template extends React.Component {
  render() {
      const doc = this.props.data.markdownRemark;
      return (
        <div className="docs-container">
          <Helmet title={`Lostshard - ${doc.frontmatter.title}`} />
          <div className="documentation">
            <h1>{doc.frontmatter.title}</h1>
            <div className="documentation-content" dangerouslySetInnerHTML={{ __html: doc.html }} />
          </div>
        </div>
      );
  }
}

export default Template;

export const pageQuery = graphql`
  query DocumentationByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
;
