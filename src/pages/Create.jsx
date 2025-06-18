import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../context/RecipeContext";
import { nanoid } from "nanoid";

const Create = () => {
	const { register, handleSubmit, reset } = useForm();
	const { data, setdata } = useContext(recipeContext);
	const submitHandler = (recipe) => {
		recipe.id = nanoid();
		setdata([...data, recipe]);
		reset();
	};
	return (
		<form onSubmit={handleSubmit(submitHandler)}>
			<input
				className="p-2 block border-b outline-0"
				{...register("image")}
				type="url"
				placeholder="Image Url"
			/>
			<small className="text-red-400">Error message</small>
			<input
				className="p-2 block border-b outline-0"
				{...register("title")}
				type="text"
				placeholder="Recipe Title"
			/>
			<input
				className="p-2 block border-b outline-0"
				{...register("chef")}
				type="text"
				placeholder="Chef name"
			/>
			<textarea
				className="p-2 block border-b outline-0"
				{...register("description")}
				type="text"
				placeholder="//Start from here"
			/>
			<textarea
				className="p-2 block border-b outline-0"
				{...register("ingredients")}
				type="text"
				placeholder="//Ingredients Seperated by comma"
			/>
			<textarea
				className="p-2 block border-b outline-0"
				{...register("instructions")}
				type="text"
				placeholder="//Instructions"
			/>
			<select
				className="p-2 block border-b outline-0 bg-gray-800"
				{...register("category")}
				type="text"
			>
				<option value="cat-1">Category 1</option>
				<option value="cat-2">Category 2</option>
				<option value="cat-3">Category 3</option>
			</select>
			<button type="submit" className="mt-5 block px-4 py-2 bg-gray-900">submit</button>
		</form>
	);
};

export default Create;
