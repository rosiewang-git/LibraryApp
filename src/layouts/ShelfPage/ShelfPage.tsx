import { Loans } from "./components/Loans";

export const ShelfPage = () => {
    return (
        <div className="container">
            <div className="mt-3">
                <nav className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                        className="nav-link active"
                        id="nav-loans-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-loans"
                        type="button"
                        role="tab"
                        aria-controls="nav-loans"
                    >
                        Loans
                    </button>
                    <button
                        className="nav-link"
                        id="nav-history-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-history"
                        type="button"
                        role="tab"
                        aria-controls="nav-history"
                        aria-selected="false"
                    >
                        Your History
                    </button>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="nav-loans"
                        role="tabpanel"
                        aria-labelledby="nav-loans-tab"
                    >
                        <Loans />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-history"
                        role="tabpanel"
                        aria-labelledby="nav-history-tab"
                    >
                        <p>Checkout History</p>
                    </div>
                </div>
            </div>
        </div>
    );
};