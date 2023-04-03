'use client';

import Image from "next/image";
import { useSearchParams,  } from "next/navigation";


const CompanyImage = ({imgUrl}:{imgUrl:string}) => {

  
  console.log(imgUrl)

  return (
    <div className="group flex relative justify-center items-center">
      <div className="  group">
        <Image
          className=" h-80 w-80 "
          src={imgUrl}
          alt=""
          width={300} height={100}
          style={{ width: 300, height: 100 }}
        />
      </div>
      <ul className="rounded absolute hidden group-hover:block">
        <a className="px-2text-center hover:bg-gray-400" href="">
          home
        </a>
        <a className="text-center hover:bg-gray-400" href="">
          recruite
        </a>
        <a className="px-2 text-center hover:bg-gray-400" href="">
          youtube
        </a>
      </ul>
    </div>
  );
}

export default CompanyImage