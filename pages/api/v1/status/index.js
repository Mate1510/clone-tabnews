function status(request, response) {
  response.status(200).json({ teste: "Hello World!" });
}

export default status;
