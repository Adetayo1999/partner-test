import { usePagination } from '../../hooks/usePagination';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

interface PaginationType {
	totalItems: number;
	currentPage: number;
	setPage(pageNumber: number): void;
	loading?: boolean;
	dataCount?: number;
	// tableRef: React.MutableRefObject<HTMLDivElement | null>;
}

function Pagination({
	totalItems,
	currentPage,
	setPage,
	loading,
  dataCount = 20
	// tableRef,
}: PaginationType) {
	const paginationRange = usePagination({
		totalCount: totalItems,
		currentPage,
		pageSize: dataCount!,
	});

	if (currentPage === 0 || !paginationRange || paginationRange?.length < 2) {
		return null;
	}

	const lastPage = paginationRange[paginationRange.length - 1];

	const handlePageChange = (pageNumber: number) => {
		setPage(pageNumber);
		// tableRef.current!.scrollIntoView({
			// behavior: 'smooth',
			// block: 'end',
		// });
	};

	return (
		<div className="">
			<ul className="flex  border border-[#D0D5DD] h-[2.5rem] items-center text-[#1D2939] font-medium rounded-md">
				<li className="px-3 py-1 border-r  border-[#D0D5DD] h-full flex items-center ">
					<button
						className={`flex items-center  gap-x-2 ${
							(currentPage === 1 || loading) && 'cursor-not-allowed'
						}`}
						disabled={currentPage === 1 || loading}
						onClick={() => handlePageChange(currentPage - 1)}
					>
						<span>
							<BsArrowLeft fontWeight={500} />
						</span>
						<span>Previous</span>
					</button>
				</li>
				{paginationRange.map((pageNumber) => {
					if (pageNumber === '...') {
						return (
							<li
								key={pageNumber}
								className="px-2 py-1 border-r border-[#D0D5DD] h-full min-w-[2.5rem] justify-center flex items-center"
							>
								&#8230;
							</li>
						);
					}
					return (
						<li
							key={pageNumber}
							className={`px-2 py-1 border-r border-[#D0D5DD] h-full min-w-[2.5rem] flex items-center justify-center ${
								currentPage === pageNumber && 'bg-[#F9FAFB]'
							} `}
						>
							<button
								className="h-full w-full"
								onClick={() => handlePageChange(+pageNumber)}
								disabled={loading}
							>
								{pageNumber}
							</button>
						</li>
					);
				})}
				<li className="px-3 py-1">
					<button
						className={`flex items-center gap-x-2 ${
							(currentPage === lastPage || loading) && 'cursor-not-allowed'
						}`}
						disabled={currentPage === lastPage || loading}
						onClick={() => handlePageChange(currentPage + 1)}
					>
						<span>Next</span>
						<span>
							<BsArrowRight />
						</span>
					</button>
				</li>
			</ul>
		</div>
	);
}


export default Pagination;