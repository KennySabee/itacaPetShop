import Link from "next/link";
import Image from "next/image";

const ProductosItems = ({ img, title, useWith, url }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full rounded-xl p-4 group hover:bg-gradient-to-r from-gray-300 to-gray-500 hover:opacity-80 ">
      <Image
        className="rounded-xl group-hover:opacity-10 w-full "
        src={img}
        width={600}
        height={600}
        alt="productos"
        style={{ objectFit: "cover" }}
      />
      
      <div className="  group-hover:block absolute">
        <Link href={url}>
          <p className="text-center text-lg px-5  tracking-widest py-3 rounded-lg bg-gray-100 text-gray-700 font-bold hover:bg-slate-100  hover:scale-105 ease-in duration-300">
            {title}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProductosItems;
