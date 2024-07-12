export async function fetchData() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      // console.log("Fetched data:", data);
    return data;
    } catch (error) {
      console.log(error);
    }
  }