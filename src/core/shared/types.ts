export interface PaginationFilters {
	page: number;
	limit: number;
}

export interface GetAll<T> {
	data: T[];
	meta: {
		page: number;
		totalPages: number;
		totalItems: number;
		limit: number;
	};
}
