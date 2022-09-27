import gql from "graphql-tag";

// export const FIND_MOVIE = gql`
//   query FindMovie($query: MovieQueryInput!) {
//     movie(query: $query) {
//       _id
//       title
//       year
//       runtime
//       rated
//       poster
//     }
//   }
// `;

export const FIND_MOVIE = gql`
  query FindMovie {
    movie: searchOneMovie(input: {
      title: "ocean",
      plot: "oceans not safe",
      cast: ["Kirk Douglas"]
    }) {
      _id
      title
      year
      runtime
      rated
      poster
    }
  }
`;

export const UPDATE_MOVIE = gql`
  mutation UpdateMovie($query: MovieQueryInput!, $set: MovieUpdateInput!) {
    updateOneMovie(query: $query, set: $set) {
      _id
      title
    }
  }
`;
