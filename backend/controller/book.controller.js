import BOOK from "../modal/book.modal.js";

export const getBook = async (req, res) => {
  try {
    const book = await BOOK.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Error", error);
    res.status(500).json(error);
  }
};
