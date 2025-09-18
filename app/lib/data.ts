import { type Recipe, Recipes } from "./types";

export const fetchMealById = async (id: string) => {
	try {
		const res = await fetch(`https://dummyjson.com/recipes/${id}`);

		const recipe: Recipe = await res.json();

		return recipe;
	} catch (error) {
		console.error("fetch failed", error);
		throw new Error("fetch failed");
	}
};

export const fetchRandomMeal = async () => {
	try {
		const today = new Date().toISOString().split("T")[0];
		const seed = [...today].reduce((acc, c) => acc + c.charCodeAt(0), 0);
		const randomId = (seed % 50) + 1; //this make sures that all users get the same recipe as the recipe of the day

		const res = await fetch(`https://dummyjson.com/recipes/${randomId}`, {
			cache: "force-cache",
		});

		const recipe: Recipe = await res.json();

		return recipe;
	} catch (error) {
		console.error("random fetch failed", error);
		throw new Error("random fetch failed");
	}
};

export const fetchAllMeals = async (page: number, query?: string) => {
	try {
		const limit = 10;
		const skip = (limit * (page - 1)).toString();
		const search = query || "";

		const res = await fetch(
			`https://dummyjson.com/recipes/search?q=${search}&limit=${limit}&skip=${skip}`
		);

		const recipes: Recipes = await res.json();

		return recipes;
	} catch (error) {
		console.error("fetch all failed", error);
		throw new Error("fetch all failed");
	}
};

export const fetchTagedMeals = async (tag: string, page: number) => {
	try {
		const limit = 10;
		const skip = limit * (page - 1);

		const res = await fetch("https://dummyjson.com/recipes?limit=50");

		const allRecipes: Recipes = await res.json();
		const filtered = allRecipes.recipes.filter((recipe) =>
			recipe.tags.includes(tag)
		);

		const result: Recipes = {
			recipes: filtered.slice(skip + 1, skip + 1 + limit),
			total: filtered.length,
			skip,
			limit,
		};

		return result;
	} catch (error) {
		console.error("fetch Taged Meals failed", error);
		throw new Error("fetch Taged Meals failed");
	}
};

export const fetchFilteredMeals = async (
	page: number,
	timeFilter: number = Infinity,
	caloriesFilter: number = Infinity
) => {
	try {
		const limit = 10;
		const skip = limit * (page - 1);

		const res = await fetch("https://dummyjson.com/recipes?limit=50");

		const allRecipes: Recipes = await res.json();
		const filtered = allRecipes.recipes.filter(
			(recipe) =>
				recipe.prepTimeMinutes <= timeFilter &&
				recipe.caloriesPerServing <= caloriesFilter
		);

		const result: Recipes = {
			recipes: filtered.slice(skip + 1, skip + 1 + limit),
			total: filtered.length,
			skip,
			limit,
		};

		return result;
	} catch (error) {
		console.error("fetch Filtered Meals failed", error);
		throw new Error("fetch Filtered Meals failed");
	}
};

export const fetchAllMealTypes = async () => {
	try {
		const res = await fetch("https://dummyjson.com/recipes?limit=50");

		const allRecipes: Recipes = await res.json();

		const mealTypes = new Set<string>([]);
		allRecipes.recipes.forEach((recipe) => {
			recipe.mealType.forEach((type) => {
				mealTypes.add(type === "Snacks" ? "Snack" : type); //there is the problem in the server and we have Snack an Snacks both in the MealTypes.
			});
		});

		return [...mealTypes].sort((a, b) => a.localeCompare(b));
	} catch (error) {
		console.error("fetch all MealTypes failed", error);
		throw new Error("fetch all MealTypes failed");
	}
};

export const fetchAllCuisines = async () => {
	try {
		const res = await fetch("https://dummyjson.com/recipes?limit=50");

		const allRecipes: Recipes = await res.json();

		const cuisines = new Set<string>([]);

		allRecipes.recipes.forEach((recipe) => {
			cuisines.add(recipe.cuisine);
		});

		return [...cuisines].sort((a, b) => a.localeCompare(b));
	} catch (error) {
		console.error("fetch all Cuisines failed", error);
		throw new Error("fetch all Cuisines failed");
	}
};
