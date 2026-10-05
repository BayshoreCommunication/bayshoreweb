"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/bayshoreSolutions/Navbar";

import { Footer } from "@/components/bayshoreSolutions/Footer";

export default function BayshoreSolutionsPage() {


    return (
        <div
            className="min-h-screen w-full max-w-full overflow-x-hidden transition-colors duration-300 font-inter"
        >
            {/* Bayshore Solutions Navbar Component */}
            <Navbar

            />

            <h2>HEllo</h2>

            {/* Bayshore Solutions Footer Component */}
            <Footer />
        </div>
    );
}


