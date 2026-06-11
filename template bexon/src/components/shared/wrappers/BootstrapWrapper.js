"use client";

import { useEffect } from "react";

const BootstrapWrapper = ({ children }) => {
	useEffect(() => {
		import("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);
	return children;
};

export default BootstrapWrapper;
