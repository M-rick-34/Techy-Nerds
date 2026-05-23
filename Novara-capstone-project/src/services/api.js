export async function fetchPlanets() {
  try {
    const response = await fetch(
      "https://anurella.github.io/json/planets.json",
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error fetching planets:", error);

    return [];
  }
}
