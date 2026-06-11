"use client";

import Swal from "sweetalert2";

const useSweetAlert = () => {
	const creteAlert = (type, message) => {
		const Toast = Swal.mixin({
			toast: true,
			position: "bottom-start",
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: toast => {
				toast.onmouseenter = Swal.stopTimer;
				toast.onmouseleave = Swal.resumeTimer;
			},
		});
		Toast.fire({
			customClass: "z-xxxl",
			icon: type,
			title: message,
		});
	};
	return creteAlert;
};

export default useSweetAlert;
