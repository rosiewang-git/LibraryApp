import { useOktaAuth } from "@okta/okta-react";
import { useState } from "react";
export const ManageLibraryPage = () => {
    const { authState } = useOktaAuth();
    const [changeQuantityOfBooksClick, setChangeQuantityOfBooksClick] =
        useState(false);
    const [messageClick, setMessageClick] = useState(false);

    function addBookClickFunction() {
        setChangeQuantityOfBooksClick(false);
        setMessageClick(false);
    }

    function changeQuantityOfBooksClickFunction() {
        setMessageClick(false);
        setChangeQuantityOfBooksClick(true);
    }

    function messagesClickFunction() {
        setMessageClick(true);
        setChangeQuantityOfBooksClick(false);
    }

    return (
        <div className="container">
            <div className="mt-5">
                <h3> Manage Library</h3>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                            className="nav-link active"
                            id="nav-add-book-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-add-book"
                            type="button"
                            role="tab"
                            aria-control="nav-add-book"
                            aria-selected="false"
                            onClick={addBookClickFunction}
                        >
                            Add new book
                        </button>
                        <button
                            className="nav-link"
                            id="nav-quantity-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-quantity"
                            type="button"
                            role="tab"
                            aria-control="nav-quantity"
                            aria-selected="true"
                            onClick={changeQuantityOfBooksClickFunction}
                        >
                            Quantity
                        </button>
                        <button
                            className="nav-link"
                            id="nav-messages-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-messages"
                            type="button"
                            role="tab"
                            aria-control="nav-messages"
                            aria-selected="false"
                            onClick={messagesClickFunction}
                        >
                            Messages
                        </button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="nav-add-book"
                        role="tabpanel"
                        aria-labelledby="nav-add-book-tab"
                    >
                        Add new book
                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-quantity"
                        role="tabpanel"
                        aria-labelledby="nav-quantity-tab"
                    >
                        {changeQuantityOfBooksClick ? (
                            <>Change quantity</>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-messages"
                        role="tabpanel"
                        aria-labelledby="nav-messages-tab"
                    >
                        {messageClick ? <>Admin messages</> : <></>}
                    </div>
                </div>
            </div>
        </div>
    );
};
