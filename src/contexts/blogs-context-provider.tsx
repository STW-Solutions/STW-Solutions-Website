import { useState, createContext, useContext, useEffect } from "react";
import { Blog, BlogCategory } from "../models";

interface Props {
  children: any;
}

interface BlogsContextType {
  categories: BlogCategory[] | null;
  currentCategory: BlogCategory;
  blogDetailId: string | null;
  recentBlogs: Blog[] | null;
  language: string;
  setCategories: (categories: BlogCategory[] | null) => void;
  setCurrentCategory: (category: BlogCategory) => void;
  setBlogDetailId: (blogDetailId: string) => void;
  setRecentBlogs: (recentBlogs: Blog[] | null) => void;
  setLanguage: (language: string) => void;
}

export const BlogsContext = createContext<BlogsContextType | null>(null);

export const BlogsContextProvider = ({ children }: Props) => {
  const [currentCategory, setCurrentCategory] = useState<BlogCategory>({
    id: 0,
    name: "all",
    taxonomy: "",
  });
  const [categories, setCategories] = useState<BlogCategory[] | null>(() => {
    const savedCategories = localStorage.getItem("blogCategories");
    return savedCategories ? JSON.parse(savedCategories) : [];
  });
  const [blogDetailId, setBlogDetailId] = useState<string | null>(
    localStorage.getItem("blogDetailsId")
  );
  const [recentBlogs, setRecentBlogs] = useState<Blog[] | null>(() => {
    const savedRecentBlogs = localStorage.getItem("recentBlogs");
    return savedRecentBlogs ? JSON.parse(savedRecentBlogs) : [];
  });
  const [language, setLanguage] = useState<string>(
    localStorage.getItem("language") || "en"
  );

  const contextValue = {
    categories,
    currentCategory,
    blogDetailId,
    recentBlogs,
    language,
    setBlogDetailId,
    setCurrentCategory,
    setCategories,
    setRecentBlogs,
    setLanguage,
  };

  useEffect(() => {
    if (blogDetailId) {
      localStorage.setItem("blogDetailsId", blogDetailId);
    } else {
      localStorage.removeItem("blogDetailsId");
    }
    if (categories) {
      localStorage.setItem("blogCategories", JSON.stringify(categories));
    } else {
      localStorage.removeItem("blogCategories");
    }
    if (recentBlogs) {
      localStorage.setItem("recentBlogs", JSON.stringify(recentBlogs));
    } else {
      localStorage.removeItem("recentBlogs");
    }
  }, [blogDetailId, categories]);

  return (
    <BlogsContext.Provider value={contextValue}>
      {children}
    </BlogsContext.Provider>
  );
};

export const useBlogsContext = () => {
  const context = useContext(BlogsContext);
  if (!context) {
    throw new Error("useBlogsContext must be used within a BlogsProvider");
  }
  return context;
};
