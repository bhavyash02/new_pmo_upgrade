import { fetchRecords } from "../components/apiServices";

export const fetchPortfolioData = async (apiUrl, dropdown = [], setEngagementDirector, setDeliveryDirector, setDeliveryManager, setBuHead, setProtfolioStatus) => {

    try {
        const promises = dropdown.map(async (name) => {

            const url = `${apiUrl}/dropdown/portfolio_status/${name}`;

            const response = await fetchRecords(url, false, false, false);
            console.log(response, "RES")

            return { name, response: response !== null ? response : "" };
        });

        const results = await Promise.all(promises);

        // Process each result and set the corresponding state
        results.forEach(({ name, response }) => {

            if (name === "engagement_director") {
                response && setEngagementDirector(response);
            } else if (name === "delivery_director") {
                response && setDeliveryDirector(response);
            } else if (name === "delivery_manager") {
                response && setDeliveryManager(response);
            } else if (name === "bu_head") {
                response && setBuHead(response);
            } else if (name === "portfolio_status") {
                response && setProtfolioStatus(response);
            }
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};