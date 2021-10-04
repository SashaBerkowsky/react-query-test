import { useEffect, useState } from "react";
import {
	useQuery,
	useMutation,
	useQueryClient,
	QueryClient,
	QueryClientProvider,
} from "react-query";
import { getAllStudents } from "./api";

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<MyStudents />
		</QueryClientProvider>
	);
};

const MyStudents = () => {
	const { status, data, error } = useQuery("getStudents", getAllStudents);
	const [myStudents, setMyStudents] = useState([]);

	function handleClick(data) {
		setMyStudents(data);
	}

	return (
		<div>
			<button onClick={() => handleClick(data)}>Get Students</button>
			<button style={{ marginLeft: "10px" }} onClick={() => handleClick([])}>
				Reset Students
			</button>
			<pre>{JSON.stringify(myStudents)}</pre>
			<table>
				<tr>
					<th style={{ paddingLeft: 20 }}>id</th>
					<th style={{ paddingLeft: 20 }}>nombre</th>
					<th style={{ paddingLeft: 20 }}>ciudad</th>
					<th style={{ paddingLeft: 20 }}>genero musical</th>
				</tr>

				{!error &&
					myStudents.map((student, idx) => (
						<tr style={{ textAlign: "center" }}>
							<td style={{ paddingLeft: 20 }}>{student.id}</td>
							<td style={{ paddingLeft: 20 }}>{student.name}</td>
							<td style={{ paddingLeft: 20 }}>{student.city}</td>
							<td style={{ paddingLeft: 20 }}>{student.music}</td>
						</tr>
					))}
			</table>
		</div>
	);
};

export default App;
