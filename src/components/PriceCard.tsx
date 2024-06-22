import { Button } from "@/components/ui/button";
import {
  FcBusinessman,
  FcAddDatabase,
  FcClearFilters,
  FcServices,
  FcPortraitMode,
  FcOk,
  FcCollect,
  FcBinoculars,
  FcApproval,
} from "react-icons/fc";

export default function PriceCard() {
  return (
    <div className="mt-20 flex gap-7">
      <div className="flex h-[550px] w-[350px] max-w-[350px] flex-col rounded-lg bg-white px-[40px] py-[40px]">
        <span className="max-w-[170px] rounded-lg bg-orange-400 py-1 text-center text-sm text-white">
          Minimal Showcase Site
        </span>
        <span className="mt-5 rounded-lg text-3xl font-bold text-black">
          1000-1500€
        </span>
        <h3 className="text-gray-400">Simple and Elegant</h3>
        <div className="mt-5 h-[1.5px] w-auto rounded bg-orange-600"></div>
        <div className="mt-7 flex items-center space-x-2">
          <FcBusinessman size={40} />
          <p className="text-sm">
            Perfect for showcasing your products or services
          </p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <FcClearFilters size={38} />
          <p className="text-sm">Clean and modern design</p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <FcAddDatabase size={40} />
          <p className="text-sm">Easy to update content</p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <FcApproval size={40} />
          <p className="text-sm">On-page SEO</p>
        </div>
        <Button className="mt-20 rounded-lg bg-[#E6700C] px-8 py-3 text-[15px] text-white">
          Get Started
        </Button>
        <p className="mt-3 text-center text-sm text-gray-400">
          Ideal for small businesses
        </p>
      </div>
      <div className="flex h-[550px] w-[350px] max-w-[350px] flex-col rounded-lg bg-white px-[40px] py-[40px]">
        <span className="max-w-[150px] rounded-lg bg-gray-400 py-1 text-center text-sm text-black">
          Heavy Showcase Site
        </span>
        <span className="mt-5 rounded-lg text-3xl font-bold text-black">
          1600-2000€
        </span>
        <h3 className="text-gray-400">Rich and Detailed</h3>
        <div className="mt-4 h-[1.5px] w-auto rounded bg-gray-300"></div>
        <div className="mt-7 flex items-center space-x-2">
          <FcServices size={40} />
          <p className="text-sm">Extensive customization options</p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <FcBusinessman size={40} />
          <p className="text-sm">Engaging and interactive elements</p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <FcClearFilters size={38} />
          <p className="text-sm">High-quality visuals and animations</p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <FcApproval size={40} />
          <p className="text-sm">On-page SEO</p>
        </div>
        <Button className="mt-20 rounded-lg bg-gray-400 px-8 py-3 text-[15px] text-white">
          Get Started
        </Button>
        <p className="mt-3 text-center text-sm text-gray-400">
          Ideal for showcasing large portfolios
        </p>
      </div>
      <div className="flex h-[550px] w-[350px] max-w-[350px] flex-col rounded-lg bg-white px-[40px] py-[40px]">
        <span className="flex max-w-[150px] items-center justify-center rounded-lg bg-gray-800 py-1 text-center text-sm text-white">
          E-commerce Site
          <p> 🌟</p>
        </span>
        <span className="mt-5 rounded-lg text-3xl font-bold text-black">
          2500-5000€
        </span>
        <h3 className="text-gray-400">Complete Online Store</h3>
        <div className="mt-4 h-[1.5px] w-auto rounded bg-gray-800"></div>
        <div className="mt-5 flex items-center space-x-2">
          <p className="text-sm text-gray-400">
            + All the essential features...
          </p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <FcBinoculars size={30} />
          <p className="text-sm">Product management and catalog</p>
        </div>
        <div className="mt-4 flex items-center space-x-3">
          <FcCollect size={30} />
          <p className="text-sm">Secure payment gateways</p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <FcOk size={30} />
          <p className="text-sm">Customer reviews and ratings</p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <FcPortraitMode size={30} />
          <p className="text-sm">Analytics and reporting</p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <FcApproval size={40} />
          <p className="text-sm">On-page SEO</p>
        </div>
        <Button className="mt-7 rounded-lg bg-gray-800 px-8 py-3 text-[15px] text-white">
          Get Started
        </Button>
        <p className="mt-3 text-center text-sm text-gray-400">
          Comprehensive solutions for online stores
        </p>
      </div>
    </div>
  );
}
