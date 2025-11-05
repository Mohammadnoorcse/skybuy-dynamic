const baseUrl = process.env.NEXT_PUBLIC_API_URL;

// In-memory cache
let cachedData = null;
let lastFetched = 0;
const CACHE_DURATION = 60 * 1000; // 1 minute
const cachedProductData = {}; // product cache by ID
const lastFetchedProduct = {}; // timestamps per product

// Helper to safely parse JSON
const parseJSON = (str, fallback = []) => {
  try {
    return JSON.parse(str || "[]");
  } catch {
    return fallback;
  }
};

// Fetch all products, sections, discounts, categories with caching
export async function getAllProductsAndSections() {
  const now = Date.now();
  if (cachedData && now - lastFetched < CACHE_DURATION) return cachedData;

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

    const [productData, sectionData, discountData, categoryData] = await Promise.all([
      productRes.json(),
      sectionRes.json(),
      discountRes.json(),
      categoryRes.json(),
    ]);

    const products = productData.data || productData;
    const allSections = sectionData.data || sectionData;
    const allDiscount = discountData.data || discountData;
    const categories = categoryData.data || categoryData;

    // Map section id → section name (active only)
    const sectionMap = {};
    allSections.forEach(s => { if (s.status === 1) sectionMap[s.id] = s.name; });

    // Group products by section_id
    const groupedSections = {};
    products.forEach(p => {
      const sectionIds = parseJSON(p.section_id);
      sectionIds.filter(id => sectionMap[id]).forEach(sid => {
        if (!groupedSections[sid]) groupedSections[sid] = [];
        groupedSections[sid].push(p);
      });
    });

    cachedData = { products, groupedSections, sectionMap, allDiscount, categories, allSections };
    lastFetched = now;

    return cachedData;
  } catch (err) {
    console.error("API fetch error:", err);
    return { products: [], groupedSections: {}, sectionMap: {}, allDiscount: [], categories: [], allSections: [] };
  }
}

// Fetch single product details with categories/colors and caching
export async function getProductDetails(id) {
  const now = Date.now();
  if (cachedProductData[id] && now - (lastFetchedProduct[id] || 0) < CACHE_DURATION) {
    return cachedProductData[id];
  }

  try {
    const [productRes, categoryRes, colorRes,sizeRes] = await Promise.all([
      fetch(`${baseUrl}/api/products/${id}`),
      fetch(`${baseUrl}/api/category`),
      fetch(`${baseUrl}/api/color`),
      fetch(`${baseUrl}/api/size`),
    ]);

    if (!productRes.ok || !categoryRes.ok || !colorRes.ok|| !sizeRes.ok) throw new Error("Failed to fetch data from API");

    const [productData, categoryData, colorData,sizeData] = await Promise.all([
      productRes.json(),
      categoryRes.json(),
      colorRes.json(),
      sizeRes.json(),
    ]);

    const product = productData.data || productData;
    const categories = categoryData.data || categoryData;
    const colors = colorData.data || colorData;
    const sizes = sizeData.data || sizeData;

    const categoryIds = parseJSON(product.categories_id);
    const colorIds = parseJSON(product.color_id);
    const sizeIds = parseJSON(product.size_id);

    const matchedCategories = categories.filter(c => categoryIds.includes(c.id));
    const matchedColors = colors.filter(c => colorIds.includes(c.id));
    const matchedSizes = sizes.filter(c => sizeIds.includes(c.id));

    const result = { product, categories: matchedCategories, colors: matchedColors,sizes:matchedSizes };

    cachedProductData[id] = result;
    lastFetchedProduct[id] = now;

    return result;
  } catch (err) {
    console.error("API fetch error:", err);
    return { product: null, categories: [], colors: [] ,size:[]};
  }
}

// Example usage in getStaticProps with ISR
export async function getStaticProps() {
  const data = await getAllProductsAndSections();
  return { props: data, revalidate: 60 };
}
