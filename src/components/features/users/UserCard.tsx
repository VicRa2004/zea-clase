import type { User } from "@/features/users/user.types";
import { Trash2, Edit2 } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

interface UserProps {
	user: User;
}

export const UserCard = ({ user }: UserProps) => {
	const navigate = useNavigate();

	const editUser = (id: number) => {
		navigate({
			to: "/users/$userId",
			params: {
				userId: id,
			},
		});
	};

	return (
		<section className="shadow-md p-4 flex items-center justify-between rounded-xl">
			<div>
				<h3 className="text-xl">{user.nombre}</h3>
				<h3 className="font-semibold mt-2">
					Username: <span className="font-normal">{user.username}</span>
				</h3>
			</div>
			<div className="flex gap-2">
				<button
					onClick={() => editUser(user.id)}
					className="bg-indigo-400 hover:bg-indigo-500 transition-colors p-2 rounded-lg text-white"
					type="button"
				>
					<Edit2 />
				</button>
				<button
					className="bg-red-400 hover:bg-red-500 transition-colors p-2 rounded-lg text-white"
					type="button"
				>
					<Trash2 />
				</button>
			</div>
		</section>
	);
};
