const apiConfig = {
	baseUrl: "https://api.themoviedb.org/3/",
	apiKey: "b4a8973d2a4ec23dd261939e46e52a07",
	originalImage: (imgPath: string) =>
		`https://image.tmdb.org/t/p/original/${imgPath}`,
	w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500${imgPath}`
};

export default apiConfig;
