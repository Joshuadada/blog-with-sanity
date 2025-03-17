"use client";

import React, { useEffect, useState } from "react";
import MainLayout from "../main/layout";
import { Card } from "@/components/Card";
import { getEconomicBlogs } from "@/sanity/sanity-utils";
import { BlogResponse, BlogPost } from "../types/blog.type";
import Pagination from "@/components/Pagination";

export default function EconomicInsights() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [totalBlogs, setTotalBlogs] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const blogsPerPage = 2;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogResponse: BlogResponse = await getEconomicBlogs(currentPage, blogsPerPage);
        setBlogs(blogResponse.blogs);
        setTotalBlogs(blogResponse.total);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [currentPage]);

  return (
    <MainLayout>
      <div className="max-w-[1600px] mx-auto py-10 px-8 sm:px-12">
        <h4 className="text-center text-lg uppercase">Economic Insights</h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {blogs.map((card) => (
            <Card
              key={card._id}
              slug={card.slug}
              img={card.image || ""}
              imageAlt={card.title}
              title={card.title}
              description={card.description}
              category={card.category.tagName}
            />
          ))}
        </div>

        {/* Pagination Component */}
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(totalBlogs / blogsPerPage)}
          onPageChange={setCurrentPage}
        />
      </div>
    </MainLayout>
  );
}
