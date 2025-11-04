// const baseUrl = process.env.NEXT_PUBLIC_API_URL;

// export async function getStaticProps() {
//   const [productRes, sectionRes] = await Promise.all([
//     fetch(`${baseUrl}/api/products`),
//     fetch(`${baseUrl}/api/sections`),
//   ]);

//   const products = await productRes.json();
//   const sections = await sectionRes.json();

//   return {
//     props: {
//       products: products.data || products,
//       sections: sections.data || sections,
//     },
//     revalidate: 60, 
//   };
// }


// export async function getAllProductsAndSections() {
//   try {
//     const [productRes, sectionRes,discountRes,categoriesRes] = await Promise.all([
//       fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`),
//       fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sections`),
//       fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/discounts`),
//       fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/category`),
//     ]);

//     if (!productRes.ok || !sectionRes.ok || !discountRes.ok ) throw new Error("Failed to fetch data");

//     const productData = await productRes.json();
//     const sectionData = await sectionRes.json();
//     const discountData = await discountRes.json();
//     const categoryData = await categoriesRes.json();

//     const products = productData.data || productData;
//     const allSections = sectionData.data || sectionData;
//     const allDiscount = discountData.data || discountData;
//     const categories = categoryData.data || categoryData;

//     // Map section id → section name (only active)
//     const sectionMap = {};
//     allSections.forEach((s) => {
//       if (s.status === 1) sectionMap[s.id] = s.name;
//     });

//     // Group products by section_id
//     const groupedSections = {};
//     products.forEach((p) => {
//       let sectionIds = [];
//       try {
//         sectionIds = JSON.parse(p.section_id || "[]");
//       } catch {
//         sectionIds = [];
//       }

//       const activeSectionIds = sectionIds.filter((id) => sectionMap[id]);
//       if (activeSectionIds.length === 0) return;

//       activeSectionIds.forEach((sid) => {
//         if (!groupedSections[sid]) groupedSections[sid] = [];
//         groupedSections[sid].push(p);
//       });
//     });

    

//     return { products, groupedSections, sectionMap,allDiscount,categories,allSections };
//   } catch (error) {
//     console.error("API fetch error:", error);
//     return { products: [], groupedSections: {}, sectionMap: {} };
//   }
// }



// lib/api.js
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

// Simple in-memory cache
let cachedData = null;
let lastFetched = 0;
const CACHE_DURATION = 60 * 1000; // 60 seconds

/**
 * Fetch all products, sections, discounts, and categories with caching
 */
export async function getAllProductsAndSections() {
  const now = Date.now();
  if (cachedData && now - lastFetched < CACHE_DURATION) {
    // Return cached data if within cache duration
    return cachedData;
  }

  try {
    const [productRes, sectionRes, discountRes, categoryRes] = await Promise.all([
      fetch(`${baseUrl}/api/products`),
      fetch(`${baseUrl}/api/sections`),
      fetch(`${baseUrl}/api/discounts`),
      fetch(`${baseUrl}/api/category`),
    ]);

    if (!productRes.ok || !sectionRes.ok || !discountRes.ok || !categoryRes.ok) {
      throw new Error("Failed to fetch data from API");
    }

    const productData = await productRes.json();
    const sectionData = await sectionRes.json();
    const discountData = await discountRes.json();
    const categoryData = await categoryRes.json();

    const products = productData.data || productData;
    const allSections = sectionData.data || sectionData;
    const allDiscount = discountData.data || discountData;
    const categories = categoryData.data || categoryData;

    // Map section id → section name (only active)
    const sectionMap = {};
    allSections.forEach((s) => {
      if (s.status === 1) sectionMap[s.id] = s.name;
    });

    // Group products by section_id
    const groupedSections = {};
    products.forEach((p) => {
      let sectionIds = [];
      try {
        sectionIds = JSON.parse(p.section_id || "[]");
      } catch {
        sectionIds = [];
      }

      const activeSectionIds = sectionIds.filter((id) => sectionMap[id]);
      if (activeSectionIds.length === 0) return;

      activeSectionIds.forEach((sid) => {
        if (!groupedSections[sid]) groupedSections[sid] = [];
        groupedSections[sid].push(p);
      });
    });

    // Cache the result
    cachedData = { products, groupedSections, sectionMap, allDiscount, categories, allSections };
    lastFetched = Date.now();

    return cachedData;
  } catch (error) {
    console.error("API fetch error:", error);
    return { products: [], groupedSections: {}, sectionMap: {}, allDiscount: [], categories: [], allSections: [] };
  }
}

/**
 * Example of using this function in getStaticProps with ISR
 */
export async function getStaticProps() {
  const data = await getAllProductsAndSections();

  return {
    props: data,
    revalidate: 60, // regenerate page every 60 seconds
  };
}

