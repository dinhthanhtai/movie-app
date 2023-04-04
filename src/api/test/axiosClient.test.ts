import Instance from "../axiosClient";

let apiSpy;
describe("get Videos", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("Axios instance standart test", async () => {
		apiSpy = jest.spyOn(Instance, "post");
		apiSpy.mockResolvedValue({});
		expect(Instance).toBeCalledTimes(1);
	});
});
