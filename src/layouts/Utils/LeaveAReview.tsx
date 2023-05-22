import { useState, useEffect } from "react";
import { StarsReview } from "./StarsReview";

export const LeaveAReview: React.FC<{ submitReview: any }> = (props) => {
    const [starInput, setStarInput] = useState(0);
    const [displayInput, setDisplayInput] = useState(false);
    const [reviewDiscription, setReviewDiscription] = useState("");

    function handleStarView(value: number) {
        setStarInput(value);
        setDisplayInput(true);
    }

    let starValueArray = Array.from(Array(11), (_, index) => index * 0.5);

    return (
        <div className="dropdown" style={{ cursor: "pointer" }}>
            <h5
                className="dropdown-toggle"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
            >
                Leave a review?
            </h5>
            <ul
                id="submitReviewRating"
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
            >
                {starValueArray.map((value) => {
                    return (
                        <li key={value}>
                            <button
                                onClick={() => handleStarView(value)}
                                className="dropdown-item"
                            >
                                {value} star
                            </button>
                        </li>
                    );
                })}
            </ul>
            <StarsReview rating={starInput} size={32} />
            {displayInput && (
                <form method="POST" action="#">
                    <hr />
                    <div>
                        <label className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            id="submitReviewDescription"
                            placeholder="Optional"
                            rows={3}
                            onChange={(e) =>
                                setReviewDiscription(e.target.value)
                            }
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="button"
                            onClick={() =>
                                props.submitReview(starInput, reviewDiscription)
                            }
                            className="btn btn-primary mt-3"
                        >
                            Submit Review
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};
