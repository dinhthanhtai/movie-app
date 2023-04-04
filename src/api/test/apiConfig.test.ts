import apiConfig from "@/api/apiConfig";

describe("Should Test API Config", () => {
	let baseUrl: string, imagePath: string, imgPathW500Image: string;
	beforeEach(() => {
		baseUrl = "https://api.themoviedb.org/3/";
		imagePath = "originalImage";
		imgPathW500Image = "/imgPathW500Image";
	});

	test("Should have base Url", () => {
		expect(apiConfig.baseUrl).toEqual(baseUrl);
	});

	test("should return path from originalImage", () => {
		const result = apiConfig.originalImage(imagePath);

		expect(result).toBe("https://image.tmdb.org/t/p/original/originalImage");
	});

	test("Should return path from w500Image", () => {
		const result = apiConfig.w500Image(imgPathW500Image);

		expect(result).toBe("https://image.tmdb.org/t/p/w500/imgPathW500Image");
	});
});
