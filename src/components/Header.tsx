"use client";
import {
  BookOpen,
  ChevronLeft,
  CircleQuestionMark,
  HatGlasses,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="z-50 w-full bg-background flex justify-between items-center p-2 min-h-12 fixed top-0 border-b-1 border-gray-50">
      {pathname === "/" ? <LanguageToggler /> : <Back />}

      <div className="flex items-center gap-2">
        <p className="text-lg font-bold">Impostor AI </p>
        <HatGlasses />
      </div>

      {pathname === "/" && <HowItWorks />}
    </div>
  );
};

const LanguageToggler = () => {
  return (
    <div className="hover:bg-gray-100/25 transition-all duration-200 p-2 rounded-full">
      <BookOpen className="text-primary" width={24} />
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div className="hover:bg-gray-100/25 transition-all duration-200 p-2 rounded-full">
      <CircleQuestionMark className="text-primary" width={24} />
    </div>
  );
};

const Back = () => {
  return (
    <Link href={"/"} className="hover:bg-gray-100/25 transition-all duration-200 p-2 rounded-[8px] flex items-center gap-1">
      <ChevronLeft className="text-primary" width={24} />
      <p className="text-primary font-bold">Back</p>
    </Link>
  );
};

export default Header;
