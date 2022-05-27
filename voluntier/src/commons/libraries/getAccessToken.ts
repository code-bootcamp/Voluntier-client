import { GraphQLClient, gql } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken
  }
`;

export async function getAccessToken() {
  try {
    const graphQLClient = new GraphQLClient(
        "https://backendapi.voluntier.site/graphql",
      { credentials: "include" }
    );
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    console.log(result)
    const newAccessToken = result.restoreAccessToken
    return newAccessToken;
  } catch (error:any) {
    console.log(error.message);
  }
}
