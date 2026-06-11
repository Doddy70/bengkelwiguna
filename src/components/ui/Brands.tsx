import Image from "next/image";
import brands from "@/data/brands.json";

type BrandsLayout = "grid" | "flex";

interface BrandsProps {
    layout?: BrandsLayout;
}

const Brands = ({ layout = "grid" }: BrandsProps) => {
    const displayedBrands = layout === "flex" ? brands.slice(0, 6) : brands;

    return (
        <>
            {layout === "grid" ? (
                // ---------------- GRID LAYOUT ----------------
                <>
                    {displayedBrands.map((brand) => (
                        <div
                            key={brand.id}
                            className="w-1/2 md:w-1/2 lg:w-1/6 text-center"
                            data-aos="fade-up"
                            data-aos-duration="400"
                            data-aos-delay={brand.delay}
                        >
                            {/* Light logo */}
                            <Image
                                src={brand.light}
                                alt={brand.alt}
                                width={brand.width}
                                height={brand.height}
                                className="mx-auto mb-3 dark:hidden"
                                loading="lazy"
                            />
                            {/* Dark logo */}
                            <Image
                                src={brand.dark}
                                alt={brand.alt}
                                width={brand.width}
                                height={brand.height}
                                className="mx-auto mb-3 hidden dark:flex"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </>
            ) : (
                // ---------------- FLEX WRAP LAYOUT ----------------
                <div className="flex flex-wrap justify-center">
                    {displayedBrands.map((brand) => (
                        <div
                            key={brand.id}
                            className="w-1/2 md:w-1/3 lg:w-1/6 text-center mb-3 mt-3"
                            data-aos="zoom-in"
                            data-aos-duration="400"
                            data-aos-delay={brand.delay}
                        >
                            {/* Light logo */}
                            <Image
                                src={brand.light}
                                alt={brand.alt}
                                width={brand.width}
                                height={brand.height}
                                className="mx-auto dark:hidden"
                                loading="lazy"
                            />
                            {/* Dark logo */}
                            <Image
                                src={brand.dark}
                                alt={brand.alt}
                                width={brand.width}
                                height={brand.height}
                                className="mx-auto hidden dark:flex"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Brands;
