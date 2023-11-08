import { marshall } from "@aws-sdk/util-dynamodb";
import { MovieReview } from "./types";

export const generateMovieItem = (moviereview: MovieReview) => {
  return {
    PutRequest: {
      Item: marshall(moviereview),
    },
  };
};

export const generateBatch = (data: MovieReview[]) => {
  return data.map((e) => {
    return generateMovieItem(e);
  });
};