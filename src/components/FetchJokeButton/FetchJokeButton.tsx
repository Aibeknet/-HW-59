import React from "react";
import { FetchJokeButtonProps } from "../../type.ts";

const FetchJokeButton: React.FC<FetchJokeButtonProps> = React.memo(
  ({ onFetch, disabled }) => {
    return (
      <button
        className="btn btn-secondary"
        onClick={onFetch}
        disabled={disabled}
      >
        Get a new joke
      </button>
    );
  },
);

export default FetchJokeButton;
