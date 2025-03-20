"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const observer = useRef<IntersectionObserver | null>(null);

  // Function to update the active section
  const updateActiveSection = (id: string) => {
    setActiveSection(`#${id}`);
  };

  // Set up Intersection Observer to detect visible sections
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    // Create an Intersection Observer
    observer.current = new IntersectionObserver(
      (entries) => {
        let mostVisibleEntry: IntersectionObserverEntry | null | any = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Prioritize the section with the highest intersection ratio
            if (
              !mostVisibleEntry ||
              entry.intersectionRatio > mostVisibleEntry.intersectionRatio
            ) {
              mostVisibleEntry = entry;
            }
          }
        });

        if (mostVisibleEntry) {
          updateActiveSection(mostVisibleEntry.target.id);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.5, // Adjust this value to control when the section is considered "visible"
      }
    );

    // Observe each section
    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    // Cleanup the observer
    return () => {
      sections.forEach((section) => {
        observer.current?.unobserve(section);
      });
    };
  }, []);

  // Define the links and their corresponding IDs
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 px-4 py-2">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo or Brand Name (Optional) */}
        <div className="text-lg font-bold text-red-200">My Bio</div>

        {/* Hamburger Menu for Mobile */}
        <button
          style={{color:'black'}}
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Navbar */}
        <ul className="hidden lg:flex space-x-8">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${link.id}`)?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setIsMenuOpen(false); // Close mobile menu after clicking a link
                }}
                className={`text-lg font-medium relative ${
                  activeSection === `#${link.id}`
                    ? "text-blue-500 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300" // Active link style
                    : "text-gray-800 hover:text-blue-500" // Inactive link style
                } transition-all duration-300`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg mt-2">
          <ul className="flex flex-col space-y-4 p-4">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${link.id}`)?.scrollIntoView({
                      behavior: "smooth",
                    });
                    setIsMenuOpen(false); // Close mobile menu after clicking a link
                  }}
                  className={`text-lg font-medium relative ${
                    activeSection === `#${link.id}`
                      ? "text-blue-500 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300" // Active link style
                      : "text-gray-800 hover:text-blue-500" // Inactive link style
                  } transition-all duration-300`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}