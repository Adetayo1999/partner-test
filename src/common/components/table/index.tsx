import { useTable } from 'react-table';
import scrollbar from "../../assets/css/scrollbar.module.css";

type TableProps = {
	columns: any;
	data: any[];
	loading?: boolean;
};

export function Table({
	columns,
	data,
	loading,
}: TableProps) {
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({
			columns,
			data,
		});

	if (loading && !data.length) {
		return (
			<div className="min-h-[20rem] max-h-full flex justify-center items-center ">
				
			</div>
		);
	}

	return (
		<div className="">
			<div className={`overflow-x-auto ${scrollbar.no_scrollbar}`}>
				<table {...getTableProps()} className="w-full  border-separate border-spacing-y-4 text-center">
					<thead className="text-left">
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th
										{...column.getHeaderProps()}
										className="pr-[2rem] pb-[1rem] whitespace-nowrap text-[#6F6F6F] text-sm font-bold"
									>
										{column.render('Header')}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{rows.map((row) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps()} className={``}>
									{row.cells.map((cell) => {
										return (
											<td
												{...cell.getCellProps()}
												className="pt-4 pb-3 first:pl-5 first:rounded-tl-2xl first:rounded-bl-2xl first:border-l last:pr-9 last:rounded-tr-2xl last:rounded-br-2xl last:border-r px-1   border-y border-[#EBE8FF] text-left whitespace-nowrap    pr-[2rem] text-sm text-[#6F6F6F] font-bold"
											>
                                                {cell.render('Cell')}
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			{!loading && data.length === 0 && (
				<div className="text-center min-h-[10rem]  flex justify-center items-center ">
					<p className="text-[#8D8F9A]">No Data 😒</p>
				</div>
			)}
		</div>
	);
}
