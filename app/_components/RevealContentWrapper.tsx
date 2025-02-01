"use client";

import React from "react";
import { useScrollReveal } from "../_utils/ScrollReveal";

function RevealContentWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  useScrollReveal();
  return <div className={`scroll-reveal ${className}`}>{children}</div>;
}

export default RevealContentWrapper;
