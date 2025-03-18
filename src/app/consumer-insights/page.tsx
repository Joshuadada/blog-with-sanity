"use client";

import React, { useEffect, useState } from "react";
import MainLayout from "../main/layout";
import { Card } from "@/components/Card";
import { getConsumerBlogs } from "@/sanity/sanity-utils";
import { BlogResponse, BlogPost } from "../types/blog.type";
import Pagination from "@/components/Pagination";

export default function ConsumerInsights() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [totalBlogs, setTotalBlogs] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const blogsPerPage = 24;

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true)
      try {
        console.log("Loading", isLoading)
        const blogResponse: BlogResponse = await getConsumerBlogs(currentPage, blogsPerPage);
        setIsLoading(false)
        setBlogs(blogResponse.blogs);
        setTotalBlogs(blogResponse.total);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchBlogs();
  }, [currentPage]);
  

  return (
    <MainLayout>
      <div className="max-w-[1600px] mx-auto py-10 px-8 sm:px-12">
        <h4 className="text-center text-lg uppercase">Consumer Insights</h4>

        {isLoading && <p className="text-center text-sm mt-5">Fetching data...</p>}

        {!isLoading && blogs.length === 0 && (
          <p className="text-center text-sm mt-4">No insights available.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {blogs.map((card) => (
            <Card
              key={card._id}
              slug={card.slug}
              img={card.image || ""}
              imageAlt={card.title}
              title={card.title}
              description={card.description}
              category={card.category?.tagName}
            />
          ))}
        </div>

        {/* Pagination Component */}
        {totalBlogs > blogsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(totalBlogs / blogsPerPage)}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </MainLayout>
  );
}
