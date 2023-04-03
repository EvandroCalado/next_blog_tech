import { gql } from 'graphql-request';

export const GRAPHQL_FRAGMENTS = gql`
  fragment menuLink on ComponentMenuMenuLink {
    id
    link
    text
    newTab
  }

  fragment setting on Setting {
    blogName
    blogDescription
    logo {
      data {
        id
        attributes {
          alternativeText
          url
        }
      }
    }
    menuLink {
      ...menuLink
    }
    footer
  }

  fragment authorPost on Post {
    author {
      data {
        attributes {
          displayName
          slug
        }
      }
    }
  }

  fragment tagsPost on Post {
    tags {
      data {
        attributes {
          displayName
          slug
        }
      }
    }
  }

  fragment categoriesPost on Post {
    categories {
      data {
        attributes {
          displayName
          slug
        }
      }
    }
  }

  fragment post on Post {
    ...authorPost
    title
    slug
    excerpt
    content
    allowComments
    createdAt
    cover {
      data {
        attributes {
          alternativeText
          url
        }
      }
    }
    ...tagsPost
    ...categoriesPost
  }
`;
