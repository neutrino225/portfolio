"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import Home from "../pages/Home";
import Navbar from "../Navbar";

type PageType = "home";

interface PageContextType {
	currentPage: PageType;
	navigateTo: (page: PageType) => void;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

const usePageContext = () => {
	const context = useContext(PageContext);
	if (!context) {
		throw new Error("usePageContext must be used within PageManager");
	}
	return context;
};

const PageManager: React.FC = () => {
	const [currentPage, setCurrentPage] = useState<PageType>("home");

	const navigateTo = (page: PageType) => {
		setCurrentPage(page);
	};

	return (
		<PageContext.Provider value={{ currentPage, navigateTo }}>
			<div className="min-h-screen w-screen overflow-hidden bg-[#0b0b0b]">
				<Navbar />
				<Home />
			</div>
		</PageContext.Provider>
	);
};

export default PageManager;
export { usePageContext };
