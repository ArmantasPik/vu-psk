import React, { useEffect, useState } from "react";
import { Header } from "../components/header/Header";
import "./FlowersPage.scss";
import { ItemCard } from "../components/cards/Card";
import { useFlowersApiClient } from "../clients/FlowersApiProvider";
import { Item } from "../clients/FlowersApiClient";
import { Footer } from "../components/footer/Footer";

export const FlowersPage = () => {
    const flowersApiClient = useFlowersApiClient();
    const [items, setItems] = useState<Item[]>([]);
    useEffect(() => {
        flowersApiClient?.getAllItems().then(response => setItems(response.data.data));
    }, [flowersApiClient]);

    return (
        <div className="flowers-page">
            <Header />
            <div className="flowers-page-body">
                <div className="flowers-page-body-text">
                    Flowers
                </div>
                <div className="flowers-page-cards">
                    {items.map(item => {
                        return <ItemCard {...item} />;
                    })}
                </div>
            </div>
            <Footer />
        </div>

    );
};