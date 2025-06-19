import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../context/RecipeContext";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
	const navigate = useNavigate();
	const { register, handleSubmit, reset } = useForm();
	const { data, setdata } = useContext(recipeContext);
	const submitHandler = (recipe) => {
		recipe.id = nanoid();
		setdata([...data, recipe]);
		toast.success("new Recipe created!")
		reset();
		navigate("/recipes");
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
				{...register("desc")}
				type="text"
				placeholder="//Start from here"
			/>
			<textarea
				className="p-2 block border-b outline-0"
				{...register("ingr")}
				type="text"
				placeholder="//Ingredients Seperated by comma"
			/>
			<textarea
				className="p-2 block border-b outline-0"
				{...register("inst")}
				type="text"
				placeholder="//Instructions"
			/>
			<select
				className="p-2 block border-b outline-0 bg-gray-800"
				{...register("category")}
				type="text"
			>
				<option value="breakfast">Breakfast</option>
				<option value="lunch">Lunch</option>
				<option value="supper">Supper</option>
				<option value="dinner">Dinner</option>
			</select>
			<button type="submit" className="mt-5 block px-4 py-2 bg-gray-900">submit</button>
		</form>
	);
};

export default Create;
