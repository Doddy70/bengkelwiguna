import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const ErrorPrimary = () => {
	return (
		<section className="tj-error-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="tj-error-wrap text-center">
							<div className="tj-error-content">
								<div className="error-img">
									<Image
										src="/images/404/error.webp"
										alt=""
										width={800}
										height={303}
										style={{ height: "auto" }}
									/>
								</div>
								<h2 className="error-title title-anim">
									Oooop! Page not found
								</h2>
								<div className="error-desc">
									You are here because you entered the address of a page that no
									longer exists or has been moved to a different address
								</div>
								<ButtonPrimary
									text={"Go to Home Page"}
									url={"/"}
									className={"error-btn"}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ErrorPrimary;
