"use client";

import { AnimatePresence } from "framer-motion";
import React from "react";

const AnimatePresenceProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return <AnimatePresence mode="sync">{children}</AnimatePresence>;
};

export default AnimatePresenceProvider;
