import type { User } from "@/features/users/user.types";
import { useNavigate } from "@tanstack/react-router";
import { DeleteButton } from "@/components/ui/DeleteButton";
import { EditButton } from "@/components/ui/EditButton";

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
				<h3 className="text-xl font-semibold">{user.nombre}</h3>
				<h3 className="font-semibold mt-2">
					Username: <span className="font-normal">{user.username}</span>
				</h3>
			</div>
			<div className="flex gap-2">
				<EditButton handleClick={() => editUser(user.id)} />
				<DeleteButton />
			</div>
		</section>
	);
};
