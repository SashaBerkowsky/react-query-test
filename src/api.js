import axios from "axios";

const baseUrl = "https://615b40f34a360f0017a81567.mockapi.io/students";

export function getAllStudents() {
	return axios.get(baseUrl).then((res) => {
		return res.data;
	});
}
