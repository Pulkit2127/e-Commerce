import React, { useEffect } from "react";
import Appbar from "../components/Appbar";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Deals from "../components/Deals";
import Brands from "../components/Brands";
import Footer from "../components/Footer";

const Dashboard = () => {
  // useEffect(() => {
  //   // Function to handle smooth scrolling
  //   const handleSmoothScroll = (e) => {
  //     e.preventDefault();
  //     const targetElement = document.querySelector(
  //       e.currentTarget.getAttribute("href")
  //     );
  //     if (targetElement) {
  //       targetElement.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };

  //   // Select all anchor elements where the href starts with "#"
  //   const anchors = document.querySelectorAll('a[href^="#"]');

  //   // Add the event listener to each anchor
  //   anchors.forEach((anchor) => {
  //     anchor.addEventListener("click", handleSmoothScroll);
  //   });

  //   // Cleanup function to remove the event listeners
  //   return () => {
  //     anchors.forEach((anchor) => {
  //       anchor.removeEventListener("click", handleSmoothScroll);
  //     });
  //   };
  // }, []);

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href");

      if (targetId === "#" || targetId === "") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="scroll-smooth">
      <Appbar></Appbar>
      <Banner></Banner>
      <div className="max-w-screen-xl w-full mx-auto gap-10 flex flex-col">
        <Categories></Categories>
        <Deals></Deals>
        <Brands></Brands>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Dashboard;
